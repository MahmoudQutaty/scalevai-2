import WorkforceHero from "./WorkforceHero";
import HowItWorksSection from "./HowItWorksSection";
import ProblemSection from "./ProblemSection";
import CapabilitiesSection from "./CapabilitiesSection";
import CaseStudySection from "./CaseStudySection";

export default function WorkforceIntelligencePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <WorkforceHero />
      <ProblemSection />
      <HowItWorksSection />
      <CapabilitiesSection />
      <CaseStudySection />
    </main>
  );
}
