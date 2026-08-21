"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { ArrowRight, Bot, ShieldCheck } from "lucide-react";

const assistants = [
  ["Estimate concierge", "Public · active", "/images/patio.jpg"],
  ["Lead summarizer", "Staff · active", "/images/team.jpg"],
  ["Reply drafting", "Staff · approval", "/images/walkway.jpg"],
  ["Job brief generator", "Staff · approval", "/images/driveway.jpg"],
];

export function AiWorkspace() {
  const [answer, setAnswer] = useState("DG-1048 is a patio inquiry in Nepean. Budget: $10k–$25k. Drainage is mentioned. Missing dimensions and access constraints.");
  const [query, setQuery] = useState("");
  function submit(event: FormEvent) {
    event.preventDefault();
    setAnswer(query.trim() ? "This local showcase can only demonstrate approved synthetic lead DG-1048. Connect Vercel AI Gateway and the authorized knowledge store to answer other requests." : answer);
  }
  return <div className="ai-layout"><aside className="panel assistant-list"><h2>Approved assistants</h2>{assistants.map(([title, note, image], index) => <button className={index === 1 ? "active" : ""} key={title}><Image src={image} alt="" width={48} height={48} /><span><strong>{title}</strong><small>{note}</small></span></button>)}<div className="safety-boundary"><span className="eyebrow">Safety boundary</span><ul><li>No binding quotes</li><li>No autonomous scheduling</li><li>No unsupervised email</li><li>No production claims</li></ul></div></aside><section className="panel ai-chat"><header><h2>Lead summarizer</h2><span className="status status-draft">Human review</span></header><div className="chat-user"><Image src="/images/patio.jpg" alt="" width={84} height={78} /><div><span>User · lead DG-1048</span><p>Summarize this patio inquiry and identify the next best action.</p></div></div><div className="chat-assistant"><Bot /><div><span>Green Ops assistant · simulated</span><p>{answer}</p><strong>Suggested next action</strong><p>Call to qualify before booking a site visit.</p><small><ShieldCheck /> Uses approved synthetic lead data</small></div><Image src="/images/patio.jpg" alt="" width={150} height={112} /></div><form onSubmit={submit}><label><span className="sr-only">Ask about a synthetic record</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ask about a lead, job or approved service…" /></label><button type="submit" aria-label="Send question"><ArrowRight /></button></form><p className="ai-disclosure">AI outputs are drafts. This local response is deterministic; no model is called until Gateway credentials and persistence are configured.</p></section></div>;
}
