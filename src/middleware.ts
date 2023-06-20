import { authMiddleware } from "@clerk/nextjs";

const withClerkMiddleware = () => {
  console.log("middleware running");
  authMiddleware();
};

export default withClerkMiddleware;

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
