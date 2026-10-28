"use client";

import type { CSSProperties } from "react";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Slider } from "@/components/ui/Slider";
import { industries, industryCarousel } from "@/data/industries";
import styles from "./IndustryCarousel.module.css";

const BARS = [0, 1, 2, 3, 4, 5];

function Device({ name }: { readonly name: string }) {
  return (
    <div className={styles.dev} aria-hidden="true">
      <i />
      <svg viewBox="0 0 300 190">
        <path d="M0 150 C40 90 70 160 110 100 S180 40 220 90 280 40 300 20" fill="none" stroke="#e11d48" strokeWidth="3" />
        <path d="M0 170 C50 120 90 170 140 130 S220 110 300 60" fill="none" stroke="#16a34a" strokeWidth="3" />
        <g fill="#dde4f2">
          {BARS.map((k) => <rect key={k} x={k * 50} y={180 - k * 5} width="30" height={k * 5 + 10} rx="3" />)}
        </g>
      </svg>
      <b>{name}</b>
    </div>
  );
}

export function IndustryCarousel() {
  return (
    <section id="challenges">
      <div className={styles.w}>
        <Reveal className={styles.top}><SectionHeading text={industryCarousel.heading} /></Reveal>
      </div>
      <Slider
        label={industryCarousel.heading.replace("\n", " ")}
        count={industries.length}
        align="center"
        gap={26}
        autoplayMs={6000}
        controlsMargin="8px 0 20px"
        renderItem={(i, active) => {
          const x = industries[i];
          return (
            <div className={active ? `${styles.card} ${styles.on}` : styles.card} style={{ background: `linear-gradient(135deg,${x.colors[0]},${x.colors[1]})` }}>
              <div>
                <h3>{x.showcase}</h3>
                <p>{x.summary}</p>
                <div className={styles.kp}>{x.capabilities.map((k) => <div key={k}><b>✓ {k}</b></div>)}</div>
                <div className={styles.q}><b>{industryCarousel.partnersLabel}</b> {x.partners}</div>
                <Button variant="demo" href={industryCarousel.demoHref}>{industryCarousel.demoLabel}</Button>
              </div>
              <Device name={x.name} />
            </div>
          );
        }}
        beforeControls={({ index, go }) => (
          <div className={styles.tabs}>
            {industries.map((x, i) => (
              <button
                key={x.slug}
                type="button"
                aria-pressed={i === index}
                className={i === index ? styles.on : undefined}
                style={{ "--c": x.colors[0] } as CSSProperties}
                onClick={() => go(i)}
              >
                {x.name}<small>{x.showcase}</small>
              </button>
            ))}
          </div>
        )}
      />
    </section>
  );
}
