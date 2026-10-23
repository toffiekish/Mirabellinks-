import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero, Shell } from "@/components/layout";
import { loadCart, saveCart, type CartLine } from "@/lib/local-orders";

export const Route = createFileRoute("/cart")({
  component: Page,
  head: () => ({ meta: [{ title: "Cart — Mirabellinks" }] }),
});

function Page() {
  const [lines, setLines] = useState<CartLine[]>([]);
  useEffect(() => setLines(loadCart()), []);

  function update(next: CartLine[]) {
    saveCart(next);
    setLines(next);
  }

  return (
    <Shell>
      <PageHero kicker="CART" title="Your print order." lede="Review quantities and notes. Checkout does not charge a card." />
      <section className="mx-auto max-w-3xl px-4 py-10">
        {lines.length === 0 && (
          <p className="text-mute">
            The cart is empty. <Link to="/shop" className="text-gold">Browse printed items</Link>
          </p>
        )}
        <ul className="grid gap-4">
          {lines.map((line) => (
            <li key={line.id} className="rounded-card border border-line bg-night-2 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-xl">{line.name}</h2>
                  <p className="text-sm text-mute">{line.variant}</p>
                  {line.instructions && <p className="mt-2 text-sm">{line.instructions}</p>}
                  {line.artworkName && <p className="text-sm text-cyan">Artwork: {line.artworkName}</p>}
                </div>
                <button type="button" className="text-sm text-mute" onClick={() => update(lines.filter((l) => l.id !== line.id))}>
                  Remove
                </button>
              </div>
              <label className="mt-3 block text-sm">
                Quantity
                <input
                  className="mt-1 w-24 rounded-xl border border-line bg-night px-3 py-2"
                  type="number"
                  min={1}
                  value={line.qty}
                  onChange={(e) =>
                    update(lines.map((l) => (l.id === line.id ? { ...l, qty: Math.max(1, Number(e.target.value) || 1) } : l)))
                  }
                />
              </label>
            </li>
          ))}
        </ul>
        {lines.length > 0 && (
          <Link to="/checkout" className="mt-6 inline-block rounded-full bg-gold px-6 py-3 text-sm font-medium text-night">
            Checkout
          </Link>
        )}
      </section>
    </Shell>
  );
}
