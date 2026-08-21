"use client";

import { FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, ImagePlus, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import { services } from "@/lib/demo-data";

type FormState = {
  service: string; timeline: string; postalCode: string; description: string;
  budget: string; name: string; email: string; phone: string; contact: string; consent: boolean;
};

const initial: FormState = {
  service: "patios", timeline: "This season", postalCode: "", description: "",
  budget: "$10k–$25k", name: "", email: "", phone: "", contact: "Email", consent: false,
};

export function EstimateForm({ initialService }: { initialService?: string }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>({ ...initial, service: services.some((item) => item.slug === initialService) ? initialService! : initial.service });
  const [photoName, setPhotoName] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const service = useMemo(() => services.find((item) => item.slug === form.service) ?? services[0], [form.service]);
  const update = (key: keyof FormState, value: string | boolean) => setForm((current) => ({ ...current, [key]: value }));

  function next() {
    setError("");
    if (step === 1 && (!form.postalCode.trim() || form.description.trim().length < 12)) {
      setError("Add a valid postal code and at least a short project description.");
      return;
    }
    if (step === 2 && (!form.name.trim() || !form.email.trim() || !form.phone.trim())) {
      setError("Name, email and phone are required so staff can review the request.");
      return;
    }
    setStep((current) => Math.min(3, current + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!form.consent) {
      setError("Please confirm the privacy and communication consent.");
      return;
    }
    setPending(true);
    setError("");
    const response = await fetch("/api/estimate", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Idempotency-Key": crypto.randomUUID() },
      body: JSON.stringify({ ...form, postalCode: form.postalCode.toUpperCase() }),
    });
    const payload = await response.json();
    if (!response.ok) {
      setError(payload.error ?? "The request could not be submitted.");
      setPending(false);
      return;
    }
    router.push(`/estimate/success?reference=${encodeURIComponent(payload.reference)}`);
  }

  return (
    <form className="estimate-layout" onSubmit={submit} noValidate>
      <div className="estimate-main panel">
        <header className="estimate-card-header">
          <div><span className="step-badge">Step {step} of 3</span><h2>{step === 1 ? "Project basics" : step === 2 ? "Photos & contact" : "Review your request"}</h2></div>
          <div className="estimate-thumb"><Image src={service.image} alt="" fill sizes="90px" /></div>
        </header>
        {step === 1 && <div className="form-grid">
          <label>Service<select value={form.service} onChange={(event) => update("service", event.target.value)}>{services.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></label>
          <label>Desired timeline<select value={form.timeline} onChange={(event) => update("timeline", event.target.value)}><option>This season</option><option>Next season</option><option>Planning ahead</option><option>Not sure</option></select></label>
          <label>Project address or Ottawa-area postal code<input autoComplete="postal-code" value={form.postalCode} onChange={(event) => update("postalCode", event.target.value)} placeholder="K2J 4Z8" /></label>
          <label>Project description<textarea rows={4} value={form.description} onChange={(event) => update("description", event.target.value)} placeholder="Describe the space, priorities and current conditions…" /></label>
          <fieldset><legend>Estimated budget range <span>Optional</span></legend><div className="choice-chips">{["Under $10k", "$10k–$25k", "$25k–$50k", "$50k+"].map((value) => <label key={value}><input type="radio" name="budget" checked={form.budget === value} onChange={() => update("budget", value)} /><span>{value}</span></label>)}</div></fieldset>
        </div>}
        {step === 2 && <div className="form-grid">
          <label className="upload-zone"><ImagePlus /><strong>Add site photos <span>Optional</span></strong><small>JPG or PNG concept UI. Private upload integration is not connected in this local demo.</small><input type="file" accept="image/jpeg,image/png" onChange={(event) => setPhotoName(event.target.files?.[0]?.name ?? "")} />{photoName && <em>{photoName} selected locally</em>}</label>
          <label>Full name<input autoComplete="name" value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Alex Morgan" /></label>
          <div className="two-col"><label>Email<input type="email" autoComplete="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="alex@example.ca" /></label><label>Phone<input type="tel" autoComplete="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="613 555 0142" /></label></div>
          <fieldset><legend>Best way to reach you</legend><div className="choice-chips">{["Email", "Phone"].map((value) => <label key={value}><input type="radio" name="contact" checked={form.contact === value} onChange={() => update("contact", value)} /><span>{value}</span></label>)}</div></fieldset>
        </div>}
        {step === 3 && <div className="review-stack">
          <section><span className="eyebrow">Project</span><h3>{service.name} · {form.timeline}</h3><p>{form.description}</p><dl><div><dt>Location</dt><dd>{form.postalCode}</dd></div><div><dt>Budget</dt><dd>{form.budget || "Not provided"}</dd></div></dl><button type="button" className="text-link" onClick={() => setStep(1)}>Edit project details</button></section>
          <section><span className="eyebrow">Contact</span><h3>{form.name}</h3><p>{form.email} · {form.phone} · Prefer {form.contact.toLowerCase()}</p><button type="button" className="text-link" onClick={() => setStep(2)}>Edit contact details</button></section>
          <label className="consent-row"><input type="checkbox" checked={form.consent} onChange={(event) => update("consent", event.target.checked)} /><span><strong>I agree to the privacy and communication notice.</strong><small>This request is not a binding estimate, contract or booked appointment.</small></span></label>
        </div>}
        {error && <p className="form-error" role="alert">{error}</p>}
        <div className="form-actions">{step > 1 && <button className="button secondary" type="button" onClick={() => setStep((current) => current - 1)}><ArrowLeft /> Back</button>}{step < 3 ? <button className="button primary" type="button" onClick={next}>Continue <ArrowRight /></button> : <button className="button primary" type="submit" disabled={pending}>{pending ? "Submitting…" : "Submit request"} <Check /></button>}</div>
      </div>
      <aside className="estimate-aside">
        <section className="panel helpful-card"><span className="icon-disc"><LockKeyhole /></span><div><h2>What happens next?</h2><ol><li>Staff review the details.</li><li>A person confirms missing information.</li><li>You choose whether to continue.</li></ol></div></section>
        <section className="panel project-preview"><span className="eyebrow">Project preview</span><div className="preview-photo"><Image src={service.image} alt="" fill sizes="220px" /></div><h2>{service.name}</h2><p>{form.timeline} · {form.budget || "Budget open"}</p></section>
        <p className="privacy-note">Only project information needed for review should be submitted. This demo does not store the form or selected photo.</p>
      </aside>
    </form>
  );
}
