import Link from "next/link";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries, industryCopy, industryHref } from "@/data/industries";
import { industryTiles } from "@/data/home-sections";
import styles from "./IndustryTiles.module.css";

export function IndustryTiles() {
  return (
    <div className={styles.w}>
      <Reveal><SectionHeading id="ind" className={styles.anchor} text={industryTiles.heading} /></Reveal>
      <div className={styles.ind}>
        {industries.map((x) => {
          const style = { "--g": `linear-gradient(135deg,${x.colors[0]},${x.colors[1]})` } as CSSProperties;
          return (
            <Reveal key={x.slug}>
              <Link href={industryHref(x.slug)} className={styles.it} aria-label={`${industryCopy.explore}: ${x.name}`}>
                <div className={styles.ph} style={style}><span>{industryCopy.explore}</span></div>
                <div className={styles.bd}>
                  <h3 className={styles.h}>{x.name}</h3>
                  <p className={styles.p}>{x.summary}</p>
                  <h4 className={styles.systemsHeading}>{industryCopy.systems}</h4>
                  <ul>
                    {x.systems.map((system) => <li key={system.name} className={styles.li}><b>{system.name}</b><span>{system.description}</span></li>)}
                  </ul>
                  <dl className={styles.metrics}>
                    {x.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}
                  </dl>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
