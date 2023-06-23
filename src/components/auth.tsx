import { useUser, SignInButton, SignOutButton, SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Title, { TitleVariant } from "./ui/title";
import userIconUrl from "~/assets/user.png";

const CreatePostWizard = () => {
  const { user } = useUser();

  if (!user) return null;

  console.log(user);

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

const Auth = () => {
  const user = useUser();

  return (
    <div className=" flex w-full items-center justify-between  px-6 py-4">
      <div className="hidden">
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>

      {!user.isSignedIn ? (
        <>
          <Title variant={TitleVariant.h2}>Hello, Stranger!</Title>
          <SignInButton mode="modal">
            <button
              className="inline-block rounded bg-violet-600 px-6
            pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(124,58,237,0.75)] transition duration-150 
            ease-in-out hover:bg-violet-700 hover:shadow-[0_8px_9px_-4px_rgba(124,58,237,0.3),0_4px_18px_0_rgba(124,58,237,0.2)] focus:bg-violet-600 
            focus:shadow-[0_8px_9px_-4px_rgba(124,58,237,0.3),0_4px_18px_0_rgba(124,58,237,0.2)] 
            focus:outline-none 
            focus:ring-0 active:bg-violet-700 
            active:shadow-[0_8px_9px_-4px_rgba(124,58,237,0.3),0_4px_18px_0_rgba(124,58,237,0.2)]"
            >
              Sign In
            </button>
          </SignInButton>
        </>
      ) : (
        <>
          <div className="flex items-center gap-4">
            <CreatePostWizard />
            <Title variant={TitleVariant.h2}>
              Hello, {user.user.fullName}!
            </Title>
          </div>
          <SignOutButton>
            <button
              className="inline-block rounded bg-violet-600 px-6
                pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(124,58,237,0.75)] transition duration-150 
                ease-in-out hover:bg-violet-700 hover:shadow-[0_8px_9px_-4px_rgba(124,58,237,0.3),0_4px_18px_0_rgba(124,58,237,0.2)] focus:bg-violet-600 
                focus:shadow-[0_8px_9px_-4px_rgba(124,58,237,0.3),0_4px_18px_0_rgba(124,58,237,0.2)] 
                focus:outline-none 
                focus:ring-0 active:bg-violet-700 
                active:shadow-[0_8px_9px_-4px_rgba(124,58,237,0.3),0_4px_18px_0_rgba(124,58,237,0.2)]"
            >
              Sign Out
            </button>
          </SignOutButton>
        </>
      )}
    </div>
  );
};

export default Auth;
