import type { CSSProperties } from "react";
import Button from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutionCopy, solutionSourceHref, type Solution } from "@/data/solutions";
import { industryCopy, type Industry } from "@/data/industries";
import styles from "./CatalogueDetail.module.css";

type SolutionDetailProps = Readonly<{
  kind: "solution";
  item: Solution;
}>;

type IndustryDetailProps = Readonly<{
  kind: "industry";
  item: Industry;
}>;

export default function CatalogueDetail({ kind, item }: SolutionDetailProps | IndustryDetailProps) {
  const isSolution = kind === "solution";
  const accentStyle = {
    "--accent": item.colors[0],
    "--accent-end": item.colors[1],
  } as CSSProperties;

  return (
    <main id="main-content" tabIndex={-1} className={styles.main} style={accentStyle}>
      <div className={styles.content}>
        <p className={styles.crumb}>
          <span>{isSolution ? "Services" : "Industries"}</span> / <span>{item.name}</span>
        </p>
        <header className={styles.hero}>
          <SectionHeading as="h1" text={item.name} className={styles.title} />
          <p className={styles.summary}>{item.summary}</p>
          {isSolution ? (
            <dl className={styles.facts}>
              <div className={styles.fact}>
                <dt>Deployment</dt>
                <dd>{item.deployment}</dd>
              </div>
              <div className={styles.fact}>
                <dt>Region</dt>
                <dd>{solutionCopy.region}</dd>
              </div>
            </dl>
          ) : null}
        </header>

        <section className={styles.section}>
          <SectionHeading
            as="h2"
            text={isSolution ? solutionCopy.capabilities : industryCopy.systems}
            className={styles.sectionHeading}
          />
          <ul className={styles.items}>
            {isSolution
              ? item.capabilities.map((capability) => (
                  <li className={styles.item} key={capability.name}>
                    <h3>{capability.name}</h3>
                    <p>{capability.description}</p>
                  </li>
                ))
              : item.systems.map((system) => (
                  <li className={styles.item} key={system.name}>
                    <h3>{system.name}</h3>
                    <p>{system.description}</p>
                  </li>
                ))}
          </ul>
        </section>

        {!isSolution ? (
          <section className={styles.section}>
            <SectionHeading as="h2" text="Metrics" className={styles.sectionHeading} />
            <dl className={styles.metrics}>
              {item.metrics.map((metric) => (
                <div className={styles.metric} key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        <div className={styles.actions}>
          <Button href={isSolution ? "/services" : "/industries"} variant="pill" icon="→">
            {isSolution ? "All solutions" : "All industries"}
          </Button>
          {isSolution ? (
            <a
              className={styles.source}
              href={solutionSourceHref(item.slug)}
              target="_blank"
              rel="noopener noreferrer"
            >
              View original solution page
            </a>
          ) : null}
        </div>
      </div>
    </main>
  );
}
