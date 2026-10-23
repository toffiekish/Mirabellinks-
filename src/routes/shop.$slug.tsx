import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Shell } from "@/components/layout";
import { findProduct } from "@/data/site";
import { loadCart, saveCart, type CartLine } from "@/lib/local-orders";

export const Route = createFileRoute("/shop/$slug")({
  component: Page,
  head: ({ params }) => ({ meta: [{ title: `${params.slug} — Mirabellinks` }] }),
  notFoundComponent: () => (
    <Shell>
      <PageHero kicker="SHOP" title="Listing not found." lede="That sample is not in the catalogue." />
    </Shell>
  ),
});

function Page() {
  const { slug } = Route.useParams();
  const product = findProduct(slug);
  const [variant, setVariant] = useState(product?.variants[0] ?? "");
  const [qty, setQty] = useState(1);
  const [instructions, setInstructions] = useState("");
  const [artworkName, setArtworkName] = useState("");
  const [fileError, setFileError] = useState("");
  const [msg, setMsg] = useState("");

  if (!product) {
    return (
      <Shell>
        <PageHero kicker="SHOP" title="Listing not found." lede="That sample is not in the catalogue." />
        <div className="px-4 py-8">
          <Link to="/shop" className="text-gold">Back to shop</Link>
        </div>
      </Shell>
    );
  }

  function onFile(file: File | undefined) {
    setFileError("");
    if (!file) return;
    if (file.size > 1_500_000) {
      setFileError("Keep the sample file under 1.5 MB. Email larger artwork with your quote.");
      return;
    }
    setArtworkName(file.name);
  }

  function add() {
    const line: CartLine = {
      id: `${product!.slug}-${Date.now()}`,
      slug: product!.slug,
      name: product!.name,
      variant,
      qty,
      instructions,
      artworkName,
    };
    saveCart([...loadCart(), line]);
    setMsg("Added to your cart.");
  }

  return (
    <Shell>
      <PageHero kicker={`${product.category.toUpperCase()} · SAMPLE`} title={product.name} lede={product.note} />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
        <img src="/smoke-still.jpg" alt="" className="w-full rounded-card border border-line object-cover" />
        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            add();
          }}
        >
          <p className="text-gold">Price on quote · PHP</p>
          <label className="text-sm">
            Variant
            <select className="mt-1 w-full rounded-xl border border-line bg-night px-3 py-3" value={variant} onChange={(e) => setVariant(e.target.value)}>
              {product.variants.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            Quantity
            <input
              className="mt-1 w-full rounded-xl border border-line bg-night px-3 py-3"
              type="number"
              min={1}
              max={9999}
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
            />
          </label>
          <label className="text-sm">
            Customization instructions
            <textarea className="mt-1 w-full rounded-xl border border-line bg-night px-3 py-3" rows={4} value={instructions} onChange={(e) => setInstructions(e.target.value)} />
          </label>
          <label className="text-sm">
            Artwork file name (stored locally, not uploaded to a server)
            <input className="mt-1 block w-full text-sm" type="file" accept="image/*,.pdf" onChange={(e) => onFile(e.target.files?.[0])} />
          </label>
          {artworkName && <p className="text-sm text-mute">Attached name: {artworkName}</p>}
          {fileError && <p className="text-sm text-cyan">{fileError}</p>}
          <div className="flex flex-wrap gap-3">
            <button type="submit" className="rounded-full bg-gold px-5 py-3 text-sm font-medium text-night">Add to cart</button>
            <Link to="/cart" className="rounded-full border border-gold px-5 py-3 text-sm text-gold">View cart</Link>
          </div>
          {msg && <p role="status" className="text-sm">{msg}</p>}
          <p className="text-xs text-mute">Card payment is not connected. Checkout sends the order to the studio to confirm the peso total and delivery.</p>
          <Link to="/shop" className="text-sm text-cyan">All samples</Link>
        </form>
      </section>
    </Shell>
  );
}
