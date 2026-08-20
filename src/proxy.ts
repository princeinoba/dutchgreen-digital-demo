import { NextResponse, type NextRequest } from "next/server";

const protectedRoots = ["/app", "/directors-ai-workspace"] as const;

function isProtectedPath(pathname: string) {
  return protectedRoots.some(
    (root) => pathname === root || pathname.startsWith(`${root}/`),
  );
}

function applySecurityHeaders(response: NextResponse) {
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  return response;
}

export function proxy(request: NextRequest) {
  const hasShowcaseSession = request.cookies.get("dg-showcase")?.value === "read-only";

  if (isProtectedPath(request.nextUrl.pathname) && !hasShowcaseSession) {
    const signIn = new URL("/sign-in", request.url);
    signIn.searchParams.set("returnTo", request.nextUrl.pathname);
    return applySecurityHeaders(NextResponse.redirect(signIn));
  }

  return applySecurityHeaders(NextResponse.next());
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};