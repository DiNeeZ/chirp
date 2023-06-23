import { authMiddleware } from "@clerk/nextjs";

const withClerkMiddleware = () => {
  authMiddleware();
};

export default withClerkMiddleware;

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
