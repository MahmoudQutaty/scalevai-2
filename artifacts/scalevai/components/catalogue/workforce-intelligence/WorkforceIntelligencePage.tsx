import WorkforceHero from "./WorkforceHero";
import HowItWorksSection from "./HowItWorksSection";
import ProblemSection from "./ProblemSection";

export default function WorkforceIntelligencePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <WorkforceHero />
      <ProblemSection />
      <HowItWorksSection />
    </main>
  );
}
