"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  Boxes,
  BriefcaseBusiness,
  CalendarDays,
  CircleDollarSign,
  ContactRound,
  FileUser,
  Home,
  LogOut,
  Menu,
  Search,
  Settings,
  UsersRound,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { closeShowcase } from "@/app/actions";
import { portalNav } from "@/lib/demo-data";

import { Brand } from "./brand";

const workspaceRoot = "/directors-ai-workspace";

const icons: Record<string, LucideIcon> = {
  home: Home,
  leads: FileUser,
  calendar: CalendarDays,
  jobs: BriefcaseBusiness,
  customers: ContactRound,
  crew: UsersRound,
  services: Wrench,
  materials: Boxes,
  invoices: CircleDollarSign,
  ai: Bot,
  settings: Settings,
};

const titles: Record<string, string> = {
  [workspaceRoot]: "Good morning, Prince",
  [`${workspaceRoot}/leads`]: "Estimate leads",
  [`${workspaceRoot}/schedule`]: "Schedule",
  [`${workspaceRoot}/jobs`]: "Jobs",
  [`${workspaceRoot}/customers`]: "Customers",
  [`${workspaceRoot}/crew`]: "Crew",
  [`${workspaceRoot}/services`]: "Service catalog",
  [`${workspaceRoot}/materials`]: "Materials",
  [`${workspaceRoot}/invoices`]: "Invoices",
  [`${workspaceRoot}/ai`]: "AI workspace",
  [`${workspaceRoot}/settings`]: "Settings",
};

function canonicalizePathname(pathname: string) {
  return pathname === "/app" || pathname.startsWith("/app/")
    ? pathname.replace(/^\/app/, workspaceRoot)
    : pathname;
}

export function PortalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const canonicalPathname = canonicalizePathname(pathname);
  const section =
    Object.keys(titles)
      .filter((key) => canonicalPathname === key || canonicalPathname.startsWith(`${key}/`))
      .sort((a, b) => b.length - a.length)[0] ?? workspaceRoot;
  const title = titles[section];

  return (
    <div className="portal-shell">
      <aside className="portal-demo-banner" aria-label="Demo disclosure">Independent portfolio demo</aside>
      <aside className="portal-sidebar">
        <Brand portal />
        <nav aria-label="Directors AI workspace">
          {portalNav.map((item) => {
            const Icon = icons[item.icon];
            const active =
              item.href === workspaceRoot
                ? canonicalPathname === workspaceRoot
                : canonicalPathname.startsWith(item.href);
            return (
              <Link key={item.href} className={active ? "active" : ""} href={item.href}>
                <Icon aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <form action={closeShowcase} className="portal-profile">
          <span className="avatar">PI</span>
          <span><strong>Prince Inoba</strong><small>Director demo</small></span>
          <button type="submit" aria-label="Leave showcase"><LogOut /></button>
        </form>
      </aside>
      <header className="portal-topbar">
        <div className="portal-mobile-brand"><span className="brand-mark">DG</span><strong>{section === workspaceRoot ? "Overview" : title}</strong></div>
        <div className="portal-desktop-title"><h1>{title}</h1><span>Directors AI workspace</span></div>
        <label className="portal-search">
          <Search aria-hidden="true" />
          <span className="sr-only">Search records</span>
          <input placeholder="Search records…" />
        </label>
        <span className="avatar">PI</span>
        <details className="portal-mobile-menu">
          <summary aria-label="Open operations menu"><Menu /></summary>
          <nav>{portalNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
        </details>
      </header>
      <main id="main-content" className="portal-main">
        {canonicalPathname === workspaceRoot ? (
          <header className="mobile-workspace-greeting"><h1>Good morning, Prince</h1><p>Here is today&apos;s field picture.</p></header>
        ) : null}
        {children}
        <small className="portal-disclaimer">Independent portfolio demonstration • Synthetic data</small>
      </main>
      <nav className="portal-bottom-nav" aria-label="Mobile operations">
        {portalNav.slice(0, 4).map((item) => {
          const Icon = icons[item.icon];
          const active =
            item.href === workspaceRoot
              ? canonicalPathname === workspaceRoot
              : canonicalPathname.startsWith(item.href);
          return (
            <Link key={item.href} className={active ? "active" : ""} href={item.href}>
              <Icon aria-hidden="true" />
              <span>{item.label === "Overview" ? "Home" : item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}