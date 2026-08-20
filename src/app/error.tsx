"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="state-page"><span className="eyebrow">Something shifted</span><h1>We could not load this view.</h1><p>Your information has not been submitted. Try the page again.</p><button className="button primary" onClick={reset}>Try again</button></main>;
}
