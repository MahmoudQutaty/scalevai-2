import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";
import PresenceDashboard from "./PresenceDashboard";
import styles from "./WorkforceShowcase.module.css";

export default function CaseStudySection() {
  return (
    <section className={styles.section} id="case-study">
      <div className={styles.container}>
        <Reveal>
          <p className={styles.kicker}>{copy.caseStudy.label}</p>
        </Reveal>
        <Reveal className={styles.caseStudy}>
          <div>
            <span className={styles.live}>{copy.caseStudy.deployment}</span>
            <h3 className={styles.caseTitle}>{copy.caseStudy.heading}</h3>
            <p className={styles.caseDescription}>{copy.caseStudy.description}</p>
            <div className={styles.caseMetrics}>
              {copy.caseStudy.metrics.map((metric) => (
                <div className={styles.caseMetric} key={metric.label}>
                  <CountUp
                    className={styles.caseMetricValue}
                    suffix={metric.suffix}
                    value={metric.value}
                  />
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
          <Reveal className={styles.dashboardReveal}>
            <PresenceDashboard />
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
