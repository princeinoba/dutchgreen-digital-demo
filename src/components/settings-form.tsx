"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const defaults = { demo: true, ai: true, chatbot: true, analytics: false };

export function SettingsForm() {
  const [settings, setSettings] = useState(defaults);
  const [saved, setSaved] = useState(false);
  return <section className="panel settings-panel"><header><div><h2>Business profile</h2><p>Approved information used across the public site, emails and AI assistant.</p></div><Image src="/images/team.jpg" alt="" width={206} height={72} /></header><div className="settings-fields"><label>Business name<input defaultValue="DutchGreen Landscaping & Construction" /></label><label>Primary email<input defaultValue="info@example.ca" /></label><label>Phone<input defaultValue="613 220 7353" /></label><label>Time zone<input defaultValue="America/Toronto" /></label></div><hr /><h2>Workspace controls</h2>{[["demo", "Demo mode", "Keep synthetic data and non-affiliation labels visible."], ["ai", "AI assistance", "Allow approved, human-reviewed AI drafting tools."], ["chatbot", "Public chatbot", "Enable FAQ-only GreenGuide on marketing pages."], ["analytics", "Analytics", "Track page views and estimate completion events."]].map(([key, title, copy]) => <label className="toggle-row" key={key}><span><strong>{title}</strong><small>{copy}</small></span><input type="checkbox" checked={settings[key as keyof typeof settings]} onChange={(event) => { setSaved(false); setSettings((current) => ({ ...current, [key]: event.target.checked })); }} /><span className="toggle" /></label>)}<div className="settings-actions">{saved && <span role="status"><Check /> Settings saved locally</span>}<button className="button primary" type="button" onClick={() => setSaved(true)}>Save settings</button></div></section>;
}
