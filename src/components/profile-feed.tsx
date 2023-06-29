import { api } from "~/utils/api";
import PostView from "./post-view";
import { LoadingPage } from "./ui/loading";

const ProfileFeed = (props: { userId: string }) => {
  const { data, isLoading } = api.posts.getPostsByUserId.useQuery({
    userId: props.userId,
  });

  if (isLoading) return <LoadingPage />;

  if (!data) return <h2 className="mt-8 text-2xl">User has not posted yet.</h2>;

  return (
    <div className="flex w-full flex-col">
      {data.map((fullPost) => (
        <PostView {...fullPost} key={fullPost.post.id} />
      ))}
    </div>
  );
};

export default ProfileFeed;
