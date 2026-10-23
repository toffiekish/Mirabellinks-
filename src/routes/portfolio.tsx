import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Shell } from "@/components/layout";
import { PORTFOLIO } from "@/data/site";

export const Route = createFileRoute("/portfolio")({
  component: Page,
  head: () => ({ meta: [{ title: "Portfolio — Mirabellinks" }] }),
});

function Page() {
  return (
    <Shell>
      <PageHero
        kicker="PORTFOLIO"
        title="Conceptual samples only."
        lede="These are layout ideas for the kind of work the studio does. They are not client projects, and they are not editable from a public admin yet."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 md:grid-cols-3">
        {PORTFOLIO.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-card border border-line bg-night-2">
            <img src="/city-still.jpg" alt="" className="h-40 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs tracking-widest text-cyan">{item.kind}</p>
              <h2 className="mt-2 font-display text-2xl">{item.title}</h2>
              <p className="mt-2 text-sm text-mute">{item.detail}</p>
            </div>
          </article>
        ))}
      </section>
    </Shell>
  );
}
