import Head from "next/head";
import type { NextPage } from "next";
import PageLayout from "~/components/page-layout";

const SinglePostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <PageLayout>
        <main className="flex flex-col items-center justify-center">
          Single Post
        </main>
      </PageLayout>
    </>
  );
};

export default SinglePostPage;
