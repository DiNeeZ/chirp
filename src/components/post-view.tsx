import Image from "next/image";
import React from "react";
import type { RouterOutputs } from "~/utils/api";

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

dayjs.extend(relativeTime)

const PostView = (props: PostWithUser) => {
  const { post, author } = props;

  // const getTimeDiff = () => {
  //   const MINUTES_PER_DAY = 1440
  //   const MINUTES_PER_HOUR = 60
  //   const SECONDS_PER_MINUTES = 60
  //   const MILLISECONDS_PER_SECONDS = 1000

  //   const postCteatedTime = new Date(post.createdAt)
  //   const now = new Date()
  //   const seconds = (now.getTime() - postCteatedTime.getTime()) / MILLISECONDS_PER_SECONDS
  //   const minutes = seconds / SECONDS_PER_MINUTES
    
  //   console.log(now.getTime(), postCteatedTime.getTime())

  //   const days = Math.floor(minutes / MINUTES_PER_DAY)
  //   const hours = Math.floor((minutes % MINUTES_PER_DAY) / MINUTES_PER_HOUR)
  //   const remainingMinutes = Math.floor(minutes % MINUTES_PER_HOUR)

  //   if (days === 0) {
  //     return `${hours} hours ${remainingMinutes} minutes`
  //   }

  //   if (days === 0 && hours === 0) {
  //     return `${remainingMinutes} minutes`
  //   }

  //   return `${days} days ${hours} hours ${remainingMinutes} minutes`
  // }


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
        className="rounded-full"
      />
      <div>
        <div className="flex items-center gap-2 font-semibold text-slate-400">
          <span>{author.fullName}</span>
          <span className="text-2xl">&middot;</span>
          <span className="font-normal text-sm">{dayjs(post.createdAt).fromNow()}</span>
        </div>
        <span>{post.content}</span>
      </div>
    </div>
  );
};

export default PostView;
