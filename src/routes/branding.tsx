import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
export const Route = createFileRoute("/branding")({
  component: Page,
  head: () => ({ meta: [{ title: "Branding and graphic design — Mirabellinks" }] }),
});
function Page() {
  return (
    <ServicePage
      kicker="BRANDING"
      title="Graphic design for print and screen."
      lede="Layouts, identity work, and print-ready files. Scope, rounds of revision, and fees are agreed on a quote — not published as packages."
      points={["Logo and brand kit discussions.", "Catalogue and brochure design.", "Files prepared for the press or for web."]}
    />
  );
}
