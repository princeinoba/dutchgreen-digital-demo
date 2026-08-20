import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Brand } from "./brand";

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="signin-page">
      <aside className="demo-banner" aria-label="Demo disclosure">
        Independent portfolio demonstration <span>• not affiliated with DutchGreen</span>
      </aside>
      <header className="signin-header">
        <Brand />
        <nav aria-label="Public navigation">
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/process">Our process</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <a href="tel:+16132207353">613 220 7353</a>
        <Link className="button primary" href="/estimate">
          Request an estimate
        </Link>
      </header>
      <main id="main-content" className="signin-layout">
        <section className="signin-visual">
          <div>
            <Image
              src="/images/team.jpg"
              alt="Synthetic concept of a landscape team reviewing a site plan"
              fill
              priority
              sizes="(max-width: 780px) 100vw, 50vw"
            />
          </div>
          <aside>
            <h1>
              One connected view
              <br />
              from inquiry to invoice.
            </h1>
            <p>Secure access for directors, office, estimators and crew roles.</p>
          </aside>
        </section>
        <section className="signin-form-wrap">
          <div className="mobile-ops-brand">
            <span className="brand-mark">DG</span>
            <strong>DutchGreen Ops</strong>
            <small>Directors AI workspace</small>
          </div>
          {children}
        </section>
      </main>
    </div>
  );
}