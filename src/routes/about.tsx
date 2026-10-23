import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Shell } from "@/components/layout";
import { BUSINESS } from "@/data/site";

export const Route = createFileRoute("/about")({
  component: Page,
  head: () => ({ meta: [{ title: "About — Mirabellinks" }, { name: "description", content: BUSINESS.bio }] }),
});

function Page() {
  return (
    <Shell>
      <PageHero kicker="ABOUT" title={BUSINESS.legal} lede={BUSINESS.bio} />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2">
        <div className="space-y-3 text-mute">
          <p>{BUSINESS.tagline}</p>
          <p>The studio is in Barangka, Marikina City. Work covers printing, customized products, branding, advertising materials, and websites.</p>
          <p>This site does not list awards, testimonials, or client names. Those are added only when you supply them.</p>
        </div>
        <address className="rounded-card border border-line bg-night-2 p-6 not-italic">
          <p>{BUSINESS.address}</p>
          <a className="mt-3 block text-cyan" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
          <a className="mt-2 block" href={BUSINESS.instagram}>Instagram @mirabellinks</a>
          <a className="mt-2 block" href={BUSINESS.facebook}>Facebook</a>
        </address>
      </section>
    </Shell>
  );
}
