import type { CSSProperties } from "react";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";
import styles from "./ImmersiveShowroom.module.css";

type CaseStudyStyle = CSSProperties & { "--case-gradient": string };

export default function ShowroomCaseStudySection() {
  const caseStyle: CaseStudyStyle = {
    "--case-gradient": `linear-gradient(120deg, ${copy.caseStudy.colors.join(", ")})`,
  };

  return (
    <section aria-labelledby="showroom-case-study-heading" className={styles.caseSection} id="showroom-case-study">
      <div className={styles.container}>
        <Reveal>
          <div className={styles.caseCard} style={caseStyle}>
            <div className={styles.caseCopy}>
              <small>{copy.caseStudy.label}</small>
              <SectionHeading
                as="h2"
                className={styles.caseTitle}
                id="showroom-case-study-heading"
                text={copy.caseStudy.heading}
              />
              <p>{copy.caseStudy.description}</p>
              <Button className={styles.caseButton} href="/contact" variant="white">
                {copy.caseStudy.bookCall}
              </Button>
            </div>
            <div className={styles.caseFacts}>
              {copy.caseStudy.steps.map((step) => (
                <div key={step.title}>
                  <b>{step.title}</b>
                  {step.description}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
