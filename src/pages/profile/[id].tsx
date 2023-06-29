import Head from "next/head";
import Image from "next/image";
import type { GetStaticProps, NextPage } from "next";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/server/api/helpers/ssgHelper";
import PageLayout from "~/components/page-layout";
import ProfileFeed from "~/components/profile-feed";

import { Permanent_Marker } from "next/font/google";

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});

const ProfilePage: NextPage<{ userId: string }> = ({ userId }) => {
  const { data } = api.profile.getUserById.useQuery({
    userId,
  });

  if (!data)
    return (
      <PageLayout>
        <h1>404. User not Found</h1>
      </PageLayout>
    );

  return (
    <>
      <Head>
        <title>{data.fullName}</title>
      </Head>
      <PageLayout>
        <div className="w-full border-b border-slate-300 pb-8">
          <div
            className="flex h-36 w-full justify-center bg-gradient-to-tr from-slate-700 via-slate-600 to-slate-500
						pt-2 text-center md:items-center md:pt-0"
          >
            <h2
              className={`${permanentMarker.className} text-3xl font-bold tracking-widest text-slate-950 md:text-4xl`}
            >
              {data.fullName}
            </h2>
          </div>
          <div className="relative -mt-16 ml-8 inline-flex flex-col items-center justify-center gap-4">
            <Image
              src={data.profileImageUrl}
              alt={`${data.fullName}'s profile picture`}
              width={128}
              height={128}
              className=" rounded-full border-4 border-slate-950"
            />
            <div className="rounded-md bg-white px-2 font-medium text-slate-950">
              {data.fullName}
            </div>
          </div>
        </div>
        <ProfileFeed userId={userId} />
      </PageLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();
  const id = context.params?.id as string;
  const userId = `user_${id}`;

  await ssg.profile.getUserById.prefetch({ userId });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      userId,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default ProfilePage;
