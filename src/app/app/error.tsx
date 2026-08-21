"use client";

export default function PortalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="panel portal-error"><span className="eyebrow">Workspace unavailable</span><h2>We could not load these synthetic records.</h2><p>No changes were made. Try the view again.</p><button className="button primary" onClick={reset}>Try again</button></section>;
}
