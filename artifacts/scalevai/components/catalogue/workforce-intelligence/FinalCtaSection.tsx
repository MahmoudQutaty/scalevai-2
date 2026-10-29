import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";
import styles from "./WorkforceFinalSections.module.css";

interface FinalCtaContent {
  readonly heading: string;
  readonly description: string;
  readonly bookCall: string;
}

interface FinalCtaSectionProps {
  readonly sectionId?: string;
  readonly content?: FinalCtaContent;
}

export default function FinalCtaSection({
  sectionId = "workforce-cta",
  content = copy.finalCta,
}: FinalCtaSectionProps = {}) {
  return (
    <section className={`${styles.section} ${styles.ctaSection}`} id={sectionId}>
      <div className={styles.container}>
        <Reveal className={styles.ctaBanner}>
          <div>
            <h2>{content.heading}</h2>
            <p>{content.description}</p>
            <Button href="#talk" variant="ghost" icon="›">
              {content.bookCall}
            </Button>
          </div>
          <div className={styles.orb} aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
