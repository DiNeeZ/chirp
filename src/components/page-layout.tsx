import type { PropsWithChildren } from "react";

const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex flex-col items-center justify-center">
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
