import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
export const Route = createFileRoute("/web")({
  component: Page,
  head: () => ({ meta: [{ title: "Website development — Mirabellinks" }] }),
});
function Page() {
  return (
    <ServicePage
      kicker="WEB"
      title="Website development."
      lede="A site planned around your services, location, and how customers should reach you. Hosting, domain, and payment tools are configured with your own accounts."
      points={["Pages for services, portfolio, and contact.", "Mobile layouts.", "Forms that can later connect to your email or database."]}
    />
  );
}
