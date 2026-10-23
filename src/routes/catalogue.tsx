import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/layout";
import { BUSINESS } from "@/data/site";

export const Route = createFileRoute("/catalogue")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Catalogue — Mirabellinks" },
      { name: "description", content: "Flip through the Mirabellinks catalogue." },
    ],
  }),
});

function Page() {
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs tracking-[0.28em] text-gold">EBOOK</p>
            <h1 className="mt-2 font-display text-4xl">Catalogue</h1>
          </div>
          <a
            href={BUSINESS.catalogue}
            className="rounded-full border border-gold px-4 py-2 text-sm text-gold"
            target="_blank"
            rel="noreferrer"
          >
            Open full screen
          </a>
        </div>
        <iframe
          title="Mirabellinks catalogue"
          src={BUSINESS.catalogue}
          className="mt-6 h-[75vh] w-full rounded-card border border-line bg-night-2"
        />
      </section>
    </Shell>
  );
}
