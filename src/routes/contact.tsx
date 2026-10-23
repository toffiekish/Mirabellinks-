import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Shell } from "@/components/layout";
import { QuoteForm } from "@/components/quote-form";
import { BUSINESS } from "@/data/site";
import { loadInquiries, loadOrders } from "@/lib/local-orders";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Page,
  head: () => ({ meta: [{ title: "Contact and quote — Mirabellinks" }] }),
});

function Page() {
  const [inq, setInq] = useState(0);
  const [orders, setOrders] = useState(0);
  useEffect(() => {
    setInq(loadInquiries().length);
    setOrders(loadOrders().length);
  }, []);
  return (
    <Shell>
      <PageHero
        kicker="CONTACT"
        title="Request a quote."
        lede={`${BUSINESS.address}. Email ${BUSINESS.email}. Quotes are discussed in PHP.`}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <QuoteForm />
        </div>
        <aside className="rounded-card border border-line bg-night-2 p-5 text-sm text-mute lg:col-span-2">
          <h2 className="font-display text-xl text-ink">What is connected</h2>
          <ul className="mt-3 grid gap-2">
            <li>Quote form: validation works. A copy stays in this browser ({inq} saved).</li>
            <li>Email send: use the button after saving. There is no mail server.</li>
            <li>Orders on this device: {orders}. A placed order still needs an email before the studio sees it.</li>
            <li>Payments, shipping labels, and a staff content editor are not configured.</li>
          </ul>
        </aside>
      </section>
    </Shell>
  );
}
