import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero, Shell } from "@/components/layout";
import { loadCart, saveOrder, type CartLine } from "@/lib/local-orders";

export const Route = createFileRoute("/checkout")({
  component: Page,
  head: () => ({ meta: [{ title: "Checkout — Mirabellinks" }] }),
});

function Page() {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Marikina City");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [orderId, setOrderId] = useState("");

  useEffect(() => setLines(loadCart()), []);

  async function place(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!lines.length) next.cart = "Add a printed item before checkout.";
    if (name.trim().length < 2) next.name = "Add the name for this order.";
    if (phone.trim().length < 7) next.phone = "Add a phone number.";
    if (address.trim().length < 8) next.address = "Add a delivery or pickup address.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setBusy(true);
    await new Promise((r) => setTimeout(r, 400));
    const id = `P-${Date.now().toString(36).toUpperCase()}`;
    saveOrder({
      id,
      status: "Placed",
      lines,
      contact: { name, phone, address, city, notes },
      createdAt: new Date().toISOString(),
    });
    setBusy(false);
    setOrderId(id);
  }

  if (orderId) {
    const body = lines.map((l) => `${l.qty} × ${l.name} (${l.variant}) ${l.instructions}`).join("\n");
    const mail = `mailto:mirabellinks@gmail.com?subject=${encodeURIComponent(`Print order ${orderId}`)}&body=${encodeURIComponent(`${name}\n${phone}\n${address}, ${city}\n${notes}\n\n${body}`)}`;
    return (
      <Shell>
        <PageHero kicker="ORDER" title={`Order ${orderId}`} lede="Saved on this device. Email it so the studio can confirm the peso total. No payment was taken." />
        <div className="px-4 py-8">
          <a href={mail} className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-night">Email this order</a>
        </div>
      </Shell>
    );
  }

  const field = "mt-1 w-full rounded-xl border border-line bg-night px-3 py-3";

  return (
    <Shell>
      <PageHero kicker="CHECKOUT" title="Where should we reach you?" lede="Pickup or delivery in the Philippines. Payment and courier booking are confirmed by Mirabellinks, not charged here." />
      <form onSubmit={place} className="mx-auto grid max-w-xl gap-4 px-4 py-10" noValidate>
        {errors.cart && <p className="text-cyan">{errors.cart} <Link to="/shop" className="underline">Shop</Link></p>}
        <label className="text-sm">Name<input className={field} value={name} onChange={(e) => setName(e.target.value)} /></label>
        {errors.name && <p className="text-sm text-cyan">{errors.name}</p>}
        <label className="text-sm">Phone<input className={field} value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
        {errors.phone && <p className="text-sm text-cyan">{errors.phone}</p>}
        <label className="text-sm">Address<input className={field} value={address} onChange={(e) => setAddress(e.target.value)} /></label>
        {errors.address && <p className="text-sm text-cyan">{errors.address}</p>}
        <label className="text-sm">City<input className={field} value={city} onChange={(e) => setCity(e.target.value)} /></label>
        <label className="text-sm">Notes<textarea className={field} rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} /></label>
        <p className="text-sm text-mute">{lines.reduce((n, l) => n + l.qty, 0)} pieces in this order. List prices are not published; the studio replies with the PHP amount.</p>
        <button disabled={busy} className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-night disabled:opacity-60">
          {busy ? "Placing…" : "Place order request"}
        </button>
      </form>
    </Shell>
  );
}
