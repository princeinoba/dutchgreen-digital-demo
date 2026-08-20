import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const response = new NextResponse(null, {
    status: 303,
    headers: { Location: "/directors-ai-workspace" },
  });
  response.cookies.set("dg-showcase", "read-only", {
    httpOnly: true,
    sameSite: "lax",
    secure: request.nextUrl.protocol === "https:",
    maxAge: 60 * 60 * 4,
    path: "/",
  });
  return response;
}