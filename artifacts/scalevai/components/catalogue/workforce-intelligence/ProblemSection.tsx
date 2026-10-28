import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";
import styles from "./WorkforceSections.module.css";

export default function ProblemSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${styles.problemGrid}`}>
        <Reveal>
          <div className={styles.problemCopy}>
            <p className={styles.kicker}>{copy.problem.label}</p>
            <SectionHeading text={copy.problem.heading} />
            {copy.problem.paragraphs.map((paragraph) => (
              <p className={styles.problemParagraph} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div>
            <div className={styles.challengeGrid}>
              {copy.problem.challenges.map((challenge) => (
                <article className={styles.challenge} key={challenge.title}>
                  <i className={styles.challengeIcon} aria-hidden="true">
                    {challenge.icon}
                  </i>
                  <b>{challenge.title}</b>
                  <span>{challenge.description}</span>
                </article>
              ))}
            </div>
            <div className={styles.truth}>
              <b>{copy.problem.truthLead}</b>
              {copy.problem.truthRest}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
