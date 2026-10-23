import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
export const Route = createFileRoute("/marketing")({
  component: Page,
  head: () => ({ meta: [{ title: "Digital marketing — Mirabellinks" }] }),
});
function Page() {
  return (
    <ServicePage
      kicker="ADVERTISING"
      title="Digital marketing and advertising materials."
      lede="Creative for campaigns and announcements. This site does not run ads or report performance. Ask for the work you need."
      points={["Social and promo layouts.", "Advertising collateral that matches your print.", "Scheduling and media buying are quoted separately if requested."]}
    />
  );
}
