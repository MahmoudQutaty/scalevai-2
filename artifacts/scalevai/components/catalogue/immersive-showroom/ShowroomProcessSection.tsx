import ProcessStepsSection from "@/components/catalogue/shared/ProcessStepsSection";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";

export default function ShowroomProcessSection() {
  return (
    <ProcessStepsSection
      description={copy.process.description}
      heading={copy.process.heading}
      id="how-it-works"
      steps={copy.process.steps}
      variant="cards"
    />
  );
}
