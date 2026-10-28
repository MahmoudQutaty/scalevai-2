import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";
import styles from "./WorkforceFinalSections.module.css";

export default function FinalCtaSection() {
  return (
    <section className={`${styles.section} ${styles.ctaSection}`} id="workforce-cta">
      <div className={styles.container}>
        <Reveal className={styles.ctaBanner}>
          <div>
            <h2>{copy.finalCta.heading}</h2>
            <p>{copy.finalCta.description}</p>
            <Button href="#talk" variant="ghost" icon="›">
              {copy.finalCta.bookCall}
            </Button>
          </div>
          <div className={styles.orb} aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
