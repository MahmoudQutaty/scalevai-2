import Link from "next/link";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/data/industries";
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
              <Link href={industryTiles.href} className={styles.it}>
                <div className={styles.ph} style={style}><span>{industryTiles.explore}</span></div>
                <div className={styles.bd}>
                  <h3 className={styles.h}>{x.name}</h3>
                  <p className={styles.p}>{x.summary}</p>
                  <ul>
                    {x.capabilities.slice(0, industryTiles.itemsShown).map((l) => <li key={l} className={styles.li}>{l}</li>)}
                  </ul>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
