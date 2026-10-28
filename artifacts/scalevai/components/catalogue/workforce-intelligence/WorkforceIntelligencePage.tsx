import WorkforceHero from "./WorkforceHero";
import HowItWorksSection from "./HowItWorksSection";
import ProblemSection from "./ProblemSection";
import CapabilitiesSection from "./CapabilitiesSection";
import CaseStudySection from "./CaseStudySection";
import FaqSection from "./FaqSection";
import RelatedSolutionsSection from "./RelatedSolutionsSection";
import FinalCtaSection from "./FinalCtaSection";
import WorkforceContactSection from "./WorkforceContactSection";

export default function WorkforceIntelligencePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <WorkforceHero />
      <ProblemSection />
      <HowItWorksSection />
      <CapabilitiesSection />
      <CaseStudySection />
      <FaqSection />
      <RelatedSolutionsSection />
      <FinalCtaSection />
      <WorkforceContactSection />
    </main>
  );
}
