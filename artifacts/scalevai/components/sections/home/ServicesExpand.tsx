"use client";

import { useState, type CSSProperties } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { deliveryServices } from "@/data/services";
import { servicesExpand } from "@/data/home-sections";
import styles from "./ServicesExpand.module.css";

export function ServicesExpand() {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.w} id="services-expand">
      <Reveal><SectionHeading text={servicesExpand.heading} /></Reveal>
      <Reveal className={styles.exp}>
        {deliveryServices.map((s, i) => {
          const on = i === active;
          const style = { "--g": `linear-gradient(160deg,${s.colors[0]},${s.colors[1]})` } as CSSProperties;
          return (
            <div
              key={s.slug}
              className={on ? `${styles.ex} ${styles.on}` : styles.ex}
              style={style}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <h3 className={styles.title}>
                <button type="button" aria-expanded={on} aria-controls={`svc-exp-${s.slug}`} onFocus={() => setActive(i)} className={styles.trigger}>
                  {s.name}
                </button>
              </h3>
              <span className={styles.arrow} aria-hidden="true">{servicesExpand.arrow}</span>
              <div id={`svc-exp-${s.slug}`} className={styles.body} aria-hidden={!on}>
                {s.summary}
                <span className={styles.list}>{s.deliverables.join(servicesExpand.listSeparator)}</span>
              </div>
            </div>
          );
        })}
      </Reveal>
    </div>
  );
}
