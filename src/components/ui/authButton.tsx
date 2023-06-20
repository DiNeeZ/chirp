import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";

const AuthButton = () => {
  const user = useUser();

  if (!user.isSignedIn) {
    return (
      <SignInButton mode="modal">
        <button className="mb-2 mr-2 rounded-lg bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800">
          Sign In
        </button>
      </SignInButton>
    );
  } else {
    return (
      <SignOutButton>
        <button className="mb-2 mr-2 rounded-lg bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800">
          Sign Out
        </button>
      </SignOutButton>
    );
  }
};

export default AuthButton;
