import { Link } from "@tanstack/react-router";
import { PageHero, Shell } from "@/components/layout";

export function ServicePage({
  kicker,
  title,
  lede,
  points,
}: {
  kicker: string;
  title: string;
  lede: string;
  points: string[];
}) {
  return (
    <Shell>
      <PageHero kicker={kicker} title={title} lede={lede} />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <ul className="grid gap-3">
          {points.map((p) => (
            <li key={p} className="rounded-card border border-line bg-night-2 px-5 py-4">{p}</li>
          ))}
        </ul>
        <Link to="/contact" className="mt-8 inline-block rounded-full bg-gold px-6 py-3 text-sm font-medium text-night">
          Request a quote
        </Link>
      </section>
    </Shell>
  );
}
