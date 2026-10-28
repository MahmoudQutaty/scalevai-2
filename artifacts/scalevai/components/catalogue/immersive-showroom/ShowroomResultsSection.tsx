import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";
import styles from "./ImmersiveShowroom.module.css";

export default function ShowroomResultsSection() {
  return (
    <section className={styles.resultsSection} id="results">
      <div className={`${styles.container} ${styles.centered}`}>
        <Reveal>
          <SectionHeading className={styles.phaseHeading} text={copy.results.heading} />
        </Reveal>
        <Reveal>
          <p className={styles.sectionLead}>{copy.results.description}</p>
        </Reveal>
      </div>

      <div className={styles.container}>
        <Reveal>
          <div className={styles.statsGrid}>
            {copy.results.metrics.map((metric) => (
              <article className={styles.statCard} key={metric.value}>
                <b>{metric.value}</b>
                {metric.label}
              </article>
            ))}
          </div>
        </Reveal>
        <p className={styles.metricNote}>{copy.results.note}</p>
      </div>
    </section>
  );
}
