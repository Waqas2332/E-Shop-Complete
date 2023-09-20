import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value || "";
  const isPublicPath =
    request.nextUrl.pathname === "/signin" ||
    request.nextUrl.pathname === "/signup";

  if (token && isPublicPath) {
    return;
  }
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/signin", "/signup", "/profile", "/profile/:path*"],
};
