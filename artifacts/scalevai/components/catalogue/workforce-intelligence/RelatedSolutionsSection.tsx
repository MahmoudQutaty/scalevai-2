import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";
import { solutionHref } from "@/data/solutions";
import styles from "./WorkforceFinalSections.module.css";

interface RelatedSolutionCard {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
}

interface RelatedSolutionsSectionProps {
  readonly sectionId?: string;
  readonly label?: string;
  readonly heading?: string;
  readonly cards?: readonly RelatedSolutionCard[];
}

export default function RelatedSolutionsSection({
  sectionId = "related-solutions",
  label = copy.related.label,
  heading = copy.related.heading,
  cards = copy.related.cards,
}: RelatedSolutionsSectionProps = {}) {
  return (
    <section className={styles.section} id={sectionId}>
      <div className={styles.container}>
        <Reveal>
          <p className={styles.kicker}>{label}</p>
        </Reveal>
        <Reveal>
          <h2 className={styles.sectionHeading}>{heading}</h2>
        </Reveal>
        <Reveal>
          <div className={styles.relatedGrid}>
            {cards.map((solution) => (
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
