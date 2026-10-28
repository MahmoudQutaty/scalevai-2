import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";
import { solutionHref } from "@/data/solutions";
import styles from "./WorkforceFinalSections.module.css";

export default function RelatedSolutionsSection() {
  return (
    <section className={styles.section} id="related-solutions">
      <div className={styles.container}>
        <Reveal>
          <p className={styles.kicker}>{copy.related.label}</p>
        </Reveal>
        <Reveal>
          <h2 className={styles.sectionHeading}>{copy.related.heading}</h2>
        </Reveal>
        <Reveal>
          <div className={styles.relatedGrid}>
            {copy.related.cards.map((solution) => (
              <Link
                className={styles.relatedCard}
                href={solutionHref(solution.slug)}
                key={solution.slug}
              >
                <h3>{solution.title}</h3>
                <p>{solution.summary}</p>
                <em>Learn more ›</em>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
