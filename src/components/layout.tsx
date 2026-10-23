import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BUSINESS, SERVICES } from "@/data/site";
import { cartCount } from "@/lib/local-orders";

const LINKS = [
  { href: "/printing", label: "Printing" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/custom", label: "Custom" },
  { href: "/shop", label: "Shop" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const sync = () => setCount(cartCount());
    sync();
    window.addEventListener("focus", sync);
    window.addEventListener("mirabellinks-cart", sync);
    return () => {
      window.removeEventListener("focus", sync);
      window.removeEventListener("mirabellinks-cart", sync);
    };
  }, []);
  return (
    <div className="min-h-screen bg-night text-ink">
      <header className="sticky top-0 z-30 border-b border-line/80 bg-night/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="font-display text-sm tracking-[0.22em] text-gold">
            MIRABELLINKS
          </Link>
          <nav className="hidden items-center gap-5 text-sm text-mute lg:flex" aria-label="Primary">
            {LINKS.map((l) => (
              <Link key={l.href} to={l.href} className="hover:text-ink" activeProps={{ className: "text-gold" }}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/cart" className="rounded-full border border-line px-4 py-2 text-xs text-ink">
              Cart{count > 0 ? ` (${count})` : ""}
            </Link>
            <button
              type="button"
              className="rounded-full border border-line px-3 py-2 text-sm lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {open && (
          <nav id="mobile-nav" className="border-t border-line px-4 py-3 lg:hidden" aria-label="Mobile">
            <ul className="grid gap-1">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="block rounded-lg px-2 py-3 text-ink" onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                </li>
              ))}
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="block rounded-lg px-2 py-3 text-mute" onClick={() => setOpen(false)}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="border-t border-line px-4 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
          <div>
            <p className="font-display tracking-[0.18em] text-gold">MIRABELLINKS</p>
            <p className="mt-2 text-sm text-mute">{BUSINESS.tagline}</p>
            <p className="mt-3 text-sm">{BUSINESS.address}</p>
            <a className="mt-1 block text-sm text-cyan" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
          </div>
          <div className="text-sm text-mute sm:text-right">
            <a className="block hover:text-ink" href={BUSINESS.facebook}>Facebook</a>
            <a className="mt-2 block hover:text-ink" href={BUSINESS.instagram}>Instagram</a>
            <p className="mt-4">Marikina City, Philippines. Quotes in PHP.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({ kicker, title, lede }: { kicker: string; title: string; lede: string }) {
  return (
    <header className="border-b border-line bg-night-2">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs tracking-[0.28em] text-gold">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-mute">{lede}</p>
      </div>
    </header>
  );
}
