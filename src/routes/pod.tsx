import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
export const Route = createFileRoute("/pod")({
  component: Page,
  head: () => ({ meta: [{ title: "Print on demand — Mirabellinks" }] }),
});
function Page() {
  return (
    <ServicePage
      kicker="FUTURE MODULE"
      title="Print on demand is not open."
      lede="A later platform could take single-piece orders, art uploads, and shipping labels. None of that is connected. Do not send POD orders through the shop."
      points={["No live SKU sync.", "No courier account.", "No automated payment. Use Request a quote for made-to-order work today."]}
    />
  );
}
