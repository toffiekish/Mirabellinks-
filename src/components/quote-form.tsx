import { useState } from "react";
import { SERVICES } from "@/data/site";
import { saveInquiry, type Inquiry } from "@/lib/local-orders";

const EMPTY = {
  service: "Printing services",
  details: "",
  deadline: "",
  budget: "",
  name: "",
  email: "",
  phone: "",
};

export function QuoteForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<Inquiry | null>(null);

  function set<K extends keyof typeof EMPTY>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (values.details.trim().length < 12) next.details = "Describe the project in at least a short sentence.";
    if (!values.deadline) next.deadline = "Add a deadline, even if it is flexible.";
    if (!values.budget.trim()) next.budget = "Add a budget range in PHP, or write “to be discussed”.";
    if (values.name.trim().length < 2) next.name = "Add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email.";
    if (values.phone.trim().length < 7) next.phone = "Add a phone number we can reach in the Philippines.";
    return next;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setBusy(true);
    await new Promise((r) => setTimeout(r, 500));
    const row: Inquiry = {
      id: `Q-${Date.now().toString(36).toUpperCase()}`,
      ...values,
      createdAt: new Date().toISOString(),
    };
    saveInquiry(row);
    setBusy(false);
    setDone(row);
  }

  if (done) {
    const mail = `mailto:mirabellinks@gmail.com?subject=${encodeURIComponent(`Quote ${done.id}`)}&body=${encodeURIComponent(
      `${done.name}\n${done.email}\n${done.phone}\n${done.service}\nDeadline: ${done.deadline}\nBudget: ${done.budget}\n\n${done.details}`,
    )}`;
    return (
      <div className="rounded-card border border-gold/50 bg-night p-6" role="status">
        <p className="text-xs tracking-widest text-gold">REQUEST SAVED ON THIS DEVICE</p>
        <h2 className="mt-2 font-display text-3xl">Reference {done.id}</h2>
        <p className="mt-3 text-mute">
          This browser kept a copy so you can review it. It is not on a company server yet, and payment is not taken here.
          Send it by email so Mirabellinks actually receives it.
        </p>
        <a href={mail} className="mt-5 inline-block rounded-full bg-gold px-5 py-3 text-sm font-medium text-night">
          Email this quote request
        </a>
      </div>
    );
  }

  const field = "mt-1 w-full rounded-xl border border-line bg-night px-3 py-3 text-ink outline-none focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <label className="text-sm">
        Service
        <select className={field} value={values.service} onChange={(e) => set("service", e.target.value)}>
          {SERVICES.map((s) => (
            <option key={s.href}>{s.title}</option>
          ))}
        </select>
      </label>
      <label className="text-sm">
        Project details
        <textarea className={field} rows={5} value={values.details} onChange={(e) => set("details", e.target.value)} />
        {errors.details && <span className="mt-1 block text-cyan">{errors.details}</span>}
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          Deadline
          <input className={field} type="date" value={values.deadline} onChange={(e) => set("deadline", e.target.value)} />
          {errors.deadline && <span className="mt-1 block text-cyan">{errors.deadline}</span>}
        </label>
        <label className="text-sm">
          Budget (PHP)
          <input className={field} value={values.budget} onChange={(e) => set("budget", e.target.value)} placeholder="e.g. 5000–8000" />
          {errors.budget && <span className="mt-1 block text-cyan">{errors.budget}</span>}
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="text-sm">
          Name
          <input className={field} value={values.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" />
          {errors.name && <span className="mt-1 block text-cyan">{errors.name}</span>}
        </label>
        <label className="text-sm">
          Email
          <input className={field} type="email" value={values.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
          {errors.email && <span className="mt-1 block text-cyan">{errors.email}</span>}
        </label>
        <label className="text-sm">
          Phone
          <input className={field} value={values.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" />
          {errors.phone && <span className="mt-1 block text-cyan">{errors.phone}</span>}
        </label>
      </div>
      <p className="text-xs text-mute">
        Contact details stay in this browser until you email them. No payment gateway or courier account is connected.
      </p>
      <button type="submit" disabled={busy} className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-night disabled:opacity-60">
        {busy ? "Saving…" : "Save quote request"}
      </button>
    </form>
  );
}
