import type { CSSProperties } from "react";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";
import ShowroomHero from "./ShowroomHero";
import ShowroomOverviewSection from "./ShowroomOverviewSection";
import ShowroomPlatformStrip from "./ShowroomPlatformStrip";
import ShowroomResultsSection from "./ShowroomResultsSection";
import ShowroomProcessSection from "./ShowroomProcessSection";

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
    </main>
  );
}
