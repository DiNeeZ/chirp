import Link from "next/link";
import { useRouter } from "next/router";
import type { PropsWithChildren } from "react";

const PageLayout = (props: PropsWithChildren) => {
  const { pathname } = useRouter();
  const linkClassName =
    pathname !== "/"
      ? "text-blue-600 duration-150 hover:text-blue-500"
      : "pointer-events-none text-blue-300";
  return (
    <main className="relative flex flex-col items-center justify-center">
      <Link href={"/"} className={`absolute left-2 top-2 ${linkClassName}`}>
        home
      </Link>
      <div
        className="flex h-full min-h-screen w-full flex-col items-center
			border-x border-slate-400 md:max-w-4xl"
      >
        {props.children}
      </div>
    </main>
  );
};

export default PageLayout;
