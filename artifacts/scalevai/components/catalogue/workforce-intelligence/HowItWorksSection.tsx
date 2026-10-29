import ProcessStepsSection from "@/components/catalogue/shared/ProcessStepsSection";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";

export default function HowItWorksSection() {
  return (
    <ProcessStepsSection
      cta={{
        heading: copy.process.ctaHeading,
        description: copy.process.ctaDescription,
        label: copy.process.ctaLabel,
        href: "#talk",
        variant: "white",
        icon: "›",
      }}
      description={copy.process.description}
      heading={copy.process.heading}
      id="how"
      label={copy.process.label}
      steps={copy.process.steps}
      variant="timeline"
    />
  );
}
