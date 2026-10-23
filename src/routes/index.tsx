import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout";
import { BUSINESS, SERVICES } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Mirabellinks — Prints and design that speak" },
      { name: "description", content: "Printing, customized products, branding, and digital work from Marikina City." },
    ],
  }),
});

function Home() {
  return (
    <Shell>
      <section className="relative flex min-h-[80vh] items-end overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster="/hero-still.jpg">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/25" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-28">
          <p className="text-xs tracking-[0.32em] text-cyan">{BUSINESS.legal}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-none sm:text-6xl">{BUSINESS.tagline}</h1>
          <p className="mt-5 max-w-xl text-ink/90">
            {BUSINESS.bio} Printing, customized products, branding, advertising, and websites from Barangka, Marikina City.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-night">Request a quote</Link>
            <Link to="/catalogue" className="rounded-full border border-ink/40 px-6 py-3 text-sm">Read the catalogue</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => (
          <Link key={s.href} to={s.href} className="rounded-card border border-line bg-night-2 p-5 hover:border-gold/60">
            <h2 className="font-display text-xl">{s.title}</h2>
            <p className="mt-2 text-sm text-mute">{s.blurb}</p>
          </Link>
        ))}
      </section>
    </Shell>
  );
}
