import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/printing")({
  component: Page,
  head: () => ({ meta: [{ title: "Printing services — Mirabellinks" }] }),
});

function Page() {
  return (
    <ServicePage
      kicker="PRINTING"
      title="Catalogue and commercial printing."
      lede="Tell us the size, quantity, paper, and deadline. We quote in Philippine pesos. No prices are listed until a job is specified."
      points={[
        "Catalogues, brochures, flyers, and tarpaulins.",
        "Artwork can be supplied, or requested as a design job.",
        "Proofing is part of the conversation before production.",
      ]}
    />
  );
}
