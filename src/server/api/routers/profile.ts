import { clerkClient } from "@clerk/nextjs";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import filterUserForClient from "../helpers/filterUserForClient";

export const profileRouter = createTRPCRouter({
  getUserById: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      const [user] = await clerkClient.users.getUserList({
        userId: [input.userId],
      });

      if (!user) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "User not found",
        });
      }

      return filterUserForClient(user);
    }),
});
