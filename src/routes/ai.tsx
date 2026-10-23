import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
export const Route = createFileRoute("/ai")({
  component: Page,
  head: () => ({ meta: [{ title: "AI creative services — Mirabellinks" }] }),
});
function Page() {
  return (
    <ServicePage
      kicker="AI CREATIVE"
      title="Concepts, reviewed by a designer."
      lede="AI can speed up exploration. Finished print and brand work still needs a person to check type, color, and whether the result may be used."
      points={["Mood and layout exploration.", "You approve what goes to press.", "This page does not generate images by itself."]}
    />
  );
}
