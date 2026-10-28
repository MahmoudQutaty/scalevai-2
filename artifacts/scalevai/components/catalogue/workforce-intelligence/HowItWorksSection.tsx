import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";
import ProcessTimeline from "./ProcessTimeline";
import styles from "./WorkforceSections.module.css";

export default function HowItWorksSection() {
  return (
    <section className={`${styles.section} ${styles.howSection}`} id="how">
      <div className={`${styles.container} ${styles.processGrid}`}>
        <Reveal className={styles.stickyContent}>
          <p className={styles.kicker}>{copy.process.label}</p>
          <SectionHeading text={copy.process.heading} />
          <p className={styles.processDescription}>{copy.process.description}</p>
          <div className={styles.cta}>
            <h3>{copy.process.ctaHeading}</h3>
            <p>{copy.process.ctaDescription}</p>
            <Button href="/#talk" variant="white" icon="›">
              {copy.process.ctaLabel}
            </Button>
          </div>
        </Reveal>

        <Reveal>
          <ProcessTimeline />
        </Reveal>
      </div>
    </section>
  );
}
