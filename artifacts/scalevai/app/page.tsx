import styles from "./page.module.css";
import Hero from "@/components/sections/home/Hero";
import { Intro } from "@/components/sections/home/Intro";
import { IndustryCarousel } from "@/components/sections/home/IndustryCarousel";
import { Foundations } from "@/components/sections/home/Foundations";
import { WaysToWork } from "@/components/sections/home/WaysToWork";
import { BlueZone } from "@/components/ui/BlueZone";

export default function Home() {
  return (
    <main aria-label="ScaleVAI" className={styles.shell}>
      <Hero />
      <Intro>
        <IndustryCarousel />
      </Intro>
      <BlueZone id="svc">
        <Foundations />
        <WaysToWork />
      </BlueZone>
    </main>
  );
}
