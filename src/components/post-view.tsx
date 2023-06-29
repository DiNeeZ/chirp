import Image from "next/image";
import React from "react";
import type { RouterOutputs } from "~/utils/api";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { useRouter } from "next/router";

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

dayjs.extend(relativeTime);

const PostView = (props: PostWithUser) => {
  const router = useRouter();
  const { post, author } = props;
  const userId = author.id.replace("user_", "");

  console.log(router);

  return (
    <div
      className="border-slate flex w-full items-center gap-8 border-b px-6 py-4"
      key={post.id}
    >
      <Link href={`/profile/${userId}`}>
        <Image
          width={48}
          height={48}
          src={author.profileImageUrl}
          alt={author.username}
          className="rounded-full"
        />
      </Link>
      <div>
        <div className="flex items-center gap-2 font-semibold text-slate-400">
          <Link
            href={`/profile/${userId}`}
            className="text-sm font-semibold text-violet-400 duration-150 hover:text-violet-500"
          >
            {author.fullName}
          </Link>{" "}
          <span className="text-2xl">&middot;</span>
          <Link href={`/post/${post.id}`}>
            <span className="text-sm font-normal text-blue-400 duration-150 hover:text-blue-500">
              {dayjs(post.createdAt).fromNow()}
            </span>
          </Link>
        </div>
        <span className="text-2xl">{post.content}</span>
      </div>
    </div>
  );
};

export default PostView;
