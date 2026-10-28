import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";
import CapabilityFlipCard from "./CapabilityFlipCard";
import styles from "./WorkforceShowcase.module.css";

export default function CapabilitiesSection() {
  return (
    <section className={`${styles.section} ${styles.capabilitiesSection}`} id="capabilities">
      <div className={styles.container}>
        <Reveal>
          <p className={styles.kicker}>{copy.capabilities.label}</p>
        </Reveal>
        <Reveal>
          <SectionHeading text={copy.capabilities.heading} />
        </Reveal>
        <Reveal>
          <div className={styles.capabilityGrid}>
            {copy.capabilities.cards.map((capability, index) => (
              <CapabilityFlipCard
                capability={capability}
                iconIndex={index}
                key={capability.title}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
