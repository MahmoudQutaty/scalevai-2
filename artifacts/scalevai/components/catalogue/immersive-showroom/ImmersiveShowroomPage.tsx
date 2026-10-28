import ShowroomHero from "./ShowroomHero";
import ShowroomOverviewSection from "./ShowroomOverviewSection";

export default function ImmersiveShowroomPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <ShowroomHero />
      <ShowroomOverviewSection />
    </main>
  );
}
