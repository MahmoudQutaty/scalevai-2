import type { CSSProperties } from "react";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";
import ShowroomHero from "./ShowroomHero";
import ShowroomOverviewSection from "./ShowroomOverviewSection";
import ShowroomPlatformStrip from "./ShowroomPlatformStrip";
import ShowroomResultsSection from "./ShowroomResultsSection";
import ShowroomProcessSection from "./ShowroomProcessSection";
import ShowroomIndustriesSection from "./ShowroomIndustriesSection";
import ShowroomCaseStudySection from "./ShowroomCaseStudySection";
import ShowroomWhySection from "./ShowroomWhySection";
import ShowroomFaqSection from "./ShowroomFaqSection";
import ShowroomRequestDemoSection from "./ShowroomRequestDemoSection";

type ShowroomStyle = CSSProperties & { "--showroom-blue": string };

export default function ImmersiveShowroomPage() {
  const style: ShowroomStyle = { "--showroom-blue": copy.overview.accent };

  return (
    <main id="main-content" style={style} tabIndex={-1}>
      <ShowroomHero />
      <ShowroomOverviewSection />
      <ShowroomPlatformStrip />
      <ShowroomResultsSection />
      <ShowroomProcessSection />
      <ShowroomIndustriesSection />
      <ShowroomCaseStudySection />
      <ShowroomWhySection />
      <ShowroomFaqSection />
      <ShowroomRequestDemoSection />
    </main>
  );
}
