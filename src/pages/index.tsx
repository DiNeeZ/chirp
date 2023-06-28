import { useUser } from "@clerk/nextjs";
import type { NextPage } from "next";
import { api } from "~/utils/api";

import Auth from "~/components/auth";
import Feed from "~/components/feed";
import CreatePost from "~/components/create-post";
import PageLayout from "~/components/page-layout";

const Home: NextPage = () => {
  const { isSignedIn, isLoaded: userLoaded } = useUser();

  //Start fetching asap
  api.posts.getAll.useQuery();

  //Return empty div if user isn't loaded
  if (!userLoaded) return <div />;

  return (
    <PageLayout>
      <div className="w-full border-b border-slate-400">
        <Auth />
        {isSignedIn && <CreatePost />}
      </div>
      <Feed />
    </PageLayout>
  );
};

export default Home;
