"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function openShowcase() {
  const store = await cookies();
  store.set("dg-showcase", "read-only", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 4,
    path: "/",
  });
  redirect("/directors-ai-workspace");
}

export async function closeShowcase() {
  const store = await cookies();
  store.delete("dg-showcase");
  redirect("/sign-in");
}