import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/custom")({
  component: Page,
  head: () => ({ meta: [{ title: "Customized products — Mirabellinks" }] }),
});

function Page() {
  return (
    <ServicePage
      kicker="CUSTOM"
      title="Products finished with your artwork."
      lede="Cards, stickers, apparel, and other customized pieces. Variants and instructions are collected with the quote. These are made to order, not stocked inventory."
      points={[
        "Share size, color, and where the print sits.",
        "Upload artwork on a sample shop item, or attach it when you email the quote.",
        "Quantities are confirmed before anything is produced.",
      ]}
    />
  );
}
