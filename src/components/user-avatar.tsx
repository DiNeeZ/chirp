import React from "react";
import type { UserResource } from "@clerk/types";
import Image from "next/image";
import userIconUrl from "~/assets/user.png";

type User = {
  user: UserResource;
};

const UserAvatar = (props: User) => {
  const { user } = props;

  if (!user) return null;

  if (user?.profileImageUrl) {
    return (
      <div>
        <Image
          width={64}
          height={64}
          src={user.profileImageUrl}
          alt="profile image"
          className="rounded-full"
        />
      </div>
    );
  } else {
    return (
      <div>
        <Image
          width={64}
          height={64}
          src={userIconUrl}
          alt="profile image not exist"
          className="rounded-full"
        />
      </div>
    );
  }
};

export default UserAvatar;
