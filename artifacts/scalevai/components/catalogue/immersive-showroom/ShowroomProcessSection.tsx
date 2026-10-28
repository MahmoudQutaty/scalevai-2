import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";
import styles from "./ImmersiveShowroom.module.css";

export default function ShowroomProcessSection() {
  return (
    <section className={styles.processSection} id="how-it-works">
      <div className={`${styles.container} ${styles.centered}`}>
        <Reveal>
          <SectionHeading className={styles.phaseHeading} text={copy.process.heading} />
        </Reveal>
        <Reveal>
          <p className={styles.sectionLead}>{copy.process.description}</p>
        </Reveal>
      </div>
      <div className={styles.container}>
        <div className={styles.stepsGrid}>
          {copy.process.steps.map((step) => (
            <Reveal className={styles.stepReveal} key={step.number}>
              <article className={styles.stepCard}>
                <i aria-hidden="true">{step.number}</i>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
