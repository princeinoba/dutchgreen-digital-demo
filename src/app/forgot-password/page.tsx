import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MailWarning, ShieldCheck } from "lucide-react";

import { AuthShell } from "@/components/auth-shell";

export const metadata: Metadata = { title: "Password recovery" };

export default function ForgotPasswordPage() {
  return (
    <AuthShell>
      <span className="eyebrow pill">Account recovery</span>
      <h1>Reset your password.</h1>
      <p>Recovery stays transparent in this independent portfolio demonstration.</p>

      <section className="recovery-card">
        <span className="recovery-icon"><MailWarning aria-hidden="true" /></span>
        <div>
          <span className="auth-kicker">Honest unavailable state</span>
          <h2>No recovery email is sent in demo mode.</h2>
          <p>A production identity provider and verified email service are not connected, so this experience will never pretend a reset link was delivered.</p>
        </div>
        <div className="recovery-safeguard"><ShieldCheck aria-hidden="true" /><span><strong>Your information stays private</strong><small>Do not enter a real password or private customer information.</small></span></div>
        <div className="recovery-actions">
          <Link className="button secondary" href="/sign-in"><ArrowLeft aria-hidden="true" /> Return to sign in</Link>
          <form action="/api/showcase" method="post"><button className="button primary" type="submit">Open portfolio demo</button></form>
        </div>
      </section>
    </AuthShell>
  );
}