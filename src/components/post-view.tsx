import Image from "next/image";
import React from "react";
import type { RouterOutputs } from "~/utils/api";

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div
      className="border-slate flex items-center gap-8 border-b px-6 py-4"
      key={post.id}
    >
      <Image
        width={48}
        height={48}
        src={author.profileImageUrl}
        alt={author.username}
        className=" rounded-full"
      />
      <div>
        <div className="flex items-center gap-2 font-semibold text-slate-400">
          <span>{author.fullName}</span>
          <span className=" text-2xl">&middot;</span>
          <span className="">1 hour ago</span>
        </div>
        <span>{post.content}</span>
      </div>
    </div>
  );
};

export default PostView;
