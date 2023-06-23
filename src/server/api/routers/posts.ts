import { clerkClient } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/dist/types/server";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const getFullName = (arr: Array<string | null>) => {
  return arr
    .reduce((acc: Array<string>, name: string | null) => {
      if (name) {
        acc.push(name);
      }
      return acc;
    }, [])
    .join(" ");
};

const filterUserForClient = (user: User) => ({
  id: user.id,
  username: user.username,
  fullName: getFullName([user.firstName, user.lastName]),
  profileImageUrl: user.profileImageUrl,
});

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
    });

    const users = (
      await clerkClient.users.getUserList({
        userId: posts.map((post) => post.authorId),
        limit: 100,
      })
    ).map(filterUserForClient);

    return posts.map((post) => {
      const author = users.find((user) => user.id === post.authorId);

      if (!author)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Author for post not found",
        });

      return {
        post,
        author: {
          ...author,
          username: author.username || author.fullName,
        },
      };
    });
  }),
});
