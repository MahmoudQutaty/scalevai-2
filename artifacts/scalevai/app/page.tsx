import styles from "./page.module.css";
import Hero from "@/components/sections/home/Hero";
import { Intro } from "@/components/sections/home/Intro";
import { IndustryCarousel } from "@/components/sections/home/IndustryCarousel";
import { Foundations } from "@/components/sections/home/Foundations";
import { WaysToWork } from "@/components/sections/home/WaysToWork";
import { BlueZone } from "@/components/ui/BlueZone";
import { ServicesExpand } from "@/components/sections/home/ServicesExpand";
import { OutcomeBanner } from "@/components/sections/home/OutcomeBanner";
import { Challenges } from "@/components/sections/home/Challenges";
import { IndustryTiles } from "@/components/sections/home/IndustryTiles";
import { WhyScaleVAI } from "@/components/sections/home/WhyScaleVAI";
import { Faq } from "@/components/sections/home/Faq";
import { ContactSection } from "@/components/sections/home/ContactSection";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} aria-label="ScaleVAI" className={styles.shell}>
      <Hero />
      <Intro>
        <IndustryCarousel />
      </Intro>
      <BlueZone id="svc">
        <Foundations />
        <ServicesExpand />
        <OutcomeBanner />
        <Challenges />
        <WaysToWork />
        <IndustryTiles />
        <WhyScaleVAI />
      </BlueZone>
      <Faq />
      <ContactSection />
    </main>
  );
}
