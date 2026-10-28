"use client";

import { useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  foundationPartners,
  foundations,
  foundationsHeading,
  foundationsIncludedHeading,
  foundationsPartnersHeading,
  foundationTabNote,
  foundationTitleSuffix,
} from "@/data/foundations";
import styles from "./Foundations.module.css";

export function Foundations() {
  const [cur, setCur] = useState(0);
  const sideRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const f = foundations[cur];

  const next = () => {
    const n = (cur + 1) % foundations.length;
    setCur(n);
    const side = sideRef.current;
    const btn = side?.children[n];
    if (side && btn instanceof HTMLElement) {
      const tab = btn.getBoundingClientRect();
      const viewport = side.getBoundingClientRect();
      side.scrollTo({
        left: side.scrollLeft + tab.left - viewport.left - (side.clientWidth - tab.width) / 2,
        behavior: reduced ? "auto" : "smooth",
      });
    }
  };

  return (
    <div className={styles.w} id="foundations">
      <Reveal><SectionHeading text={foundationsHeading} /></Reveal>
      <Reveal className={styles.pan}>
        <div className={styles.sidew}>
          <div className={styles.side} ref={sideRef}>
            {foundations.map((x, i) => (
              <button key={x.name} type="button" aria-pressed={i === cur} className={i === cur ? styles.on : undefined} onMouseEnter={() => setCur(i)} onClick={() => setCur(i)}>
                {x.name}<small>{foundationTabNote}</small>
              </button>
            ))}
          </div>
          <button type="button" className={styles.sn} aria-label="Next" onClick={next}>→</button>
        </div>
        <div className={styles.big} aria-live="polite">
          <h3>{f.name}{foundationTitleSuffix}</h3>
          <p style={{ maxWidth: 560 }}>{f.description}</p>
          <h5>{foundationsIncludedHeading}</h5>
          <div className={styles.tl}>
            {f.included.map((x, k) => <div key={`${cur}-${x}`} style={{ animationDelay: `${k * 0.08}s` }}>{x}</div>)}
          </div>
          <h5>{foundationsPartnersHeading}</h5>
          <div className={styles.pr}>
            {foundationPartners.map((p) => <div key={p}>{p}<i aria-hidden="true">→</i></div>)}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
