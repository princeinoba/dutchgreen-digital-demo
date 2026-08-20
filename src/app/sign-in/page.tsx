import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LockKeyhole, Mail, PanelsTopLeft } from "lucide-react";

import { AuthShell } from "@/components/auth-shell";

export const metadata: Metadata = { title: "Director workspace sign in" };

function ShowcaseButton({
  provider,
  children,
  className,
}: {
  provider: string;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <form action="/api/showcase" method="post">
      <input type="hidden" name="provider" value={provider} />
      <button className={className} type="submit">
        {children}
      </button>
    </form>
  );
}

export default function SignInPage() {
  return (
    <AuthShell>
      <span className="eyebrow pill">Directors AI workspace</span>
      <h1>Welcome back.</h1>
      <p>Choose a secure sign-in path to manage leads, jobs, customers and field operations.</p>

      <section className="authentication-design" aria-labelledby="authentication-title">
        <div className="authentication-heading">
          <div>
            <span className="auth-kicker">Portfolio access</span>
            <h2 id="authentication-title">Authentication design</h2>
          </div>
          <span className="demo-mode-badge">Demo mode</span>
        </div>

        <ShowcaseButton provider="portfolio" className="button primary portfolio-demo-button">
          Open portfolio demo <ArrowRight aria-hidden="true" />
        </ShowcaseButton>

        <div className="auth-divider"><span>or choose a sign-in platform</span></div>
        <div className="auth-platforms">
          <ShowcaseButton provider="microsoft" className="auth-platform-button">
            <PanelsTopLeft aria-hidden="true" /> Microsoft
          </ShowcaseButton>
          <ShowcaseButton provider="google" className="auth-platform-button">
            <span className="provider-letter" aria-hidden="true">G</span> Google
          </ShowcaseButton>
        </div>

        <form action="/api/showcase" method="post" className="signin-form">
          <input type="hidden" name="provider" value="password" />
          <label>
            Email
            <span className="auth-input"><Mail aria-hidden="true" /><input type="email" name="email" defaultValue="name@dutchgreen.ca" autoComplete="username" /></span>
          </label>
          <label>
            Password
            <span className="auth-input"><LockKeyhole aria-hidden="true" /><input type="password" name="password" defaultValue="demonstration" autoComplete="current-password" /></span>
          </label>
          <div className="signin-options">
            <label><input type="checkbox" /> Remember this device</label>
            <Link className="text-link" href="/forgot-password">Forgot password?</Link>
          </div>
          <button className="button secondary signin-submit" type="submit">Continue with email</button>
        </form>
      </section>

      <p className="provider-note">Provider-ready authentication design • MFA recommended</p>
      <div className="demo-note">
        <strong>No credentials needed.</strong>
        <span>This local portfolio route stores no email or password. Production requires a connected identity provider and server-side role checks.</span>
      </div>
    </AuthShell>
  );
}