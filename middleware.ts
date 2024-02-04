import { auth } from "./auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./routes";

export default auth((req) => {
  const isAuthenticated = !!req.auth;

  const isApiRoute = req.nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(req.nextUrl.pathname);

  if (isApiRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isAuthenticated) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.nextUrl));
    }

    return null;
  }

  console.log("req.nextUrl", req.nextUrl);

  if (!isAuthenticated && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", req.nextUrl.origin));
  }

  return null;
});

export const config = {
  matcher: ["/:path*"],
};
