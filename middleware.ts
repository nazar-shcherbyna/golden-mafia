import NextAuth from "next-auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export function middleware(req: NextRequest) {
  console.log("req", req);
  return NextResponse;
}

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "./game/:path*",
  ],
};
