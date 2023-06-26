import { api } from "~/utils/api";
import PostView from "~/components/post-view";
import { LoadingPage } from "~/components/ui/loading";

const Feed = () => {
  const { data, isLoading: postLoading } = api.posts.getAll.useQuery();

  if (postLoading) return <LoadingPage />;

  if (!data) return <div>Something went wrong!</div>;
  return (
    <div className="flex w-full flex-col">
      {[...data]?.map((fullPost) => (
        <PostView {...fullPost} key={fullPost.post.id} />
      ))}
    </div>
  );
};

export default Feed;
