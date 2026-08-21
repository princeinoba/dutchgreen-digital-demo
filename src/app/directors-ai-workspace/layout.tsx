import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { PortalShell } from "@/components/portal-shell";

export const dynamic = "force-dynamic";

export default async function DirectorsWorkspaceLayout({ children }: { children: ReactNode }) {
  const store = await cookies();
  if (store.get("dg-showcase")?.value !== "read-only") redirect("/sign-in");
  return <PortalShell>{children}</PortalShell>;
}