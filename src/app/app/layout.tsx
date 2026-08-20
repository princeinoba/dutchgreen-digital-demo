import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PortalShell } from "@/components/portal-shell";

export const dynamic = "force-dynamic";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const store = await cookies();
  if (store.get("dg-showcase")?.value !== "read-only") redirect("/sign-in");
  return <PortalShell>{children}</PortalShell>;
}
