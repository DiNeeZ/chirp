import Link from "next/link";
import type { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import GoTop from "./ui/go-top";
import { IoHomeSharp } from "react-icons/io5";

const PageLayout = (props: PropsWithChildren) => {
  const { pathname } = useRouter();

  return (
    <main className="relative flex flex-col items-center justify-center">
      {pathname !== "/" && (
        <Link
          href={"/"}
          className="absolute left-4 top-4 text-violet-600 duration-150 hover:text-violet-500"
        >
          <IoHomeSharp className="h-7 w-7" />
        </Link>
      )}

      <div
        className="flex h-full min-h-screen w-full flex-col items-center
			border-x border-slate-400 md:max-w-4xl"
      >
        {props.children}
      </div>
      <GoTop />
    </main>
  );
};

export default PageLayout;
