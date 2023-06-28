import type { User } from "@clerk/nextjs/dist/types/server";

export const getFullName = (arr: Array<string | null>) => {
  return arr
    .reduce((acc: Array<string>, name: string | null) => {
      if (name) {
        acc.push(name);
      }
      return acc;
    }, [])
    .join(" ");
};

const slugify = (username: string) => {
  username = username.replace(/^\s+|\s+$/g, ""); // trim leading/trailing white space
  username = username.toLowerCase(); // convert string to lowercase
  username = username
    .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
  return username;
};

const filterUserForClient = (user: User) => ({
  id: user.id,
  username: user.username,
  fullName: getFullName([user.firstName, user.lastName]),
  profileImageUrl: user.profileImageUrl,
  slug: slugify(user.username ?? getFullName([user.firstName, user.lastName])),
});

export default filterUserForClient;
