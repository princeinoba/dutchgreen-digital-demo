import Link from "next/link";
import { Menu } from "lucide-react";

import { Brand } from "./brand";

const nav = [
  ["/services", "Services"],
  ["/projects", "Projects"],
  ["/process", "Our process"],
  ["/about", "About"],
  ["/faq", "FAQ"],
] as const;

export function MarketingShell({ children, active = "" }: { children: React.ReactNode; active?: string }) {
  return (
    <div className="site-shell">
      <aside className="demo-banner" aria-label="Demo disclosure">
        Independent portfolio demonstration <span>• not affiliated with DutchGreen</span>
      </aside>
      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary">
          {nav.map(([href, label]) => (
            <Link className={active === label ? "active" : ""} key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <a className="phone-link" href="tel:+16132207353">613 220 7353</a>
        <Link className="button primary header-cta" href="/estimate">Request an estimate</Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
          <nav aria-label="Mobile primary">
            {nav.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/contact">Contact</Link>
            <Link href="/sign-in">Portfolio demo sign-in</Link>
          </nav>
        </details>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <strong>DutchGreen concept experience</strong>
        <nav aria-label="Legal">
          <span>Ottawa, Ontario</span>
          <Link href="/privacy">Privacy</Link>
          <Link href="/accessibility">Accessibility</Link>
        </nav>
        <Link className="portfolio-link" href="/sign-in">Portfolio demo</Link>
      </footer>
    </div>
  );
}