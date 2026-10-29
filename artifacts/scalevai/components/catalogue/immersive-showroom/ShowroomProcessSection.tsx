import ProcessStepsSection from "@/components/catalogue/shared/ProcessStepsSection";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";

export default function ShowroomProcessSection() {
  return (
    <ProcessStepsSection
      cta={{
        heading: copy.requestDemo.form.heading,
        description: copy.requestDemo.text,
        label: copy.requestDemo.form.submit,
        href: "#book",
        variant: "white",
        icon: "›",
      }}
      description={copy.process.description}
      heading={copy.process.heading}
      id="how-it-works"
      label={copy.process.label}
      steps={copy.process.steps}
      variant="timeline"
    />
  );
}
