import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, Shell } from "@/components/layout";
import { PRODUCTS } from "@/data/site";

export const Route = createFileRoute("/shop")({
  component: Page,
  head: () => ({ meta: [{ title: "Print store — Mirabellinks" }, { name: "description", content: "Order printed items from Mirabellinks. Totals are confirmed in PHP before production." }] }),
});

function Page() {
  const [q, setQ] = useState("");
  const shown = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return PRODUCTS;
    return PRODUCTS.filter((p) => p.category !== "Branding").filter((p) => `${p.name} ${p.category} ${p.summary}`.toLowerCase().includes(n));
  }, [q]);

  return (
    <Shell>
      <PageHero
        kicker="STORE"
        title="Printed items."
        lede="Catalogues, flyers, tarps, cards, stickers, and shirts made to order in Marikina. Add a quantity and your notes, then check out. The studio confirms the peso total before anything is printed or paid."
      />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <label className="block text-sm">
          Search
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="mt-1 w-full rounded-xl border border-line bg-night-2 px-3 py-3"
            placeholder="Catalogue, sticker, branding…"
          />
        </label>
        <p className="mt-3 text-sm text-mute">{shown.length} sample {shown.length === 1 ? "item" : "items"}</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {shown.map((p) => (
            <li key={p.slug} className="rounded-card border border-line bg-night-2 p-5">
              <p className="text-xs tracking-widest text-cyan">{p.category}</p>
              <h2 className="mt-2 font-display text-2xl">{p.name}</h2>
              <p className="mt-2 text-sm text-mute">{p.summary}</p>
              <p className="mt-3 text-sm text-gold">Price on quote · PHP</p>
              <Link to="/shop/$slug" params={{ slug: p.slug }} className="mt-4 inline-block text-sm underline">
                View details
              </Link>
            </li>
          ))}
        </ul>
        {shown.length === 0 && <p className="mt-6 text-mute">No sample matches that search.</p>}
      </section>
    </Shell>
  );
}
