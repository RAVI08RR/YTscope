import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  // Protected routes
  const protectedRoutes = ["/dashboard", "/onboarding", "/channels", "/videos", "/rankings", "/subscription", "/settings"];
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  // Auth routes
  const isAuthRoute = pathname.startsWith("/login") || pathname.startsWith("/register");

  // If user is not authenticated and trying to access protected route
  if (!token && isProtectedRoute) {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  // If user is authenticated and trying to access auth routes
  if (token && isAuthRoute) {
    // Check onboarding status
    if (!token.onboardingCompleted) {
      return NextResponse.redirect(new URL("/onboarding", request.url));
    }
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If user is authenticated but hasn't completed onboarding
  if (token && !token.onboardingCompleted && pathname !== "/onboarding" && isProtectedRoute) {
    return NextResponse.redirect(new URL("/onboarding", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/onboarding/:path*",
    "/channels/:path*",
    "/videos/:path*",
    "/rankings/:path*",
    "/subscription/:path*",
    "/settings/:path*",
    "/login",
    "/register",
  ],
};
