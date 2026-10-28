"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Slider, type SliderMetrics } from "@/components/ui/Slider";
import { waysToWork, waysToWorkHeading } from "@/data/ways-to-work";
import styles from "./WaysToWork.module.css";

const cardWidth = (m: SliderMetrics): number => (m.windowWidth <= 1000 ? m.windowWidth * 0.78 : (m.contentWidth - 44) / 3);

export function WaysToWork() {
  return (
    <section id="ways-to-work">
      <div className={styles.w}>
        <Reveal><SectionHeading text={waysToWorkHeading} /></Reveal>
      </div>
      <Slider
        label={waysToWorkHeading}
        count={waysToWork.length}
        align="start"
        gap={22}
        itemWidth={cardWidth}
        controlsMargin="26px 0 90px"
        renderItem={(i) => {
          const k = waysToWork[i];
          return (
            <div className={styles.c}>
              <div><h4>{k.title}</h4><p>{k.description}</p></div>
              <em>— {k.footer}</em>
            </div>
          );
        }}
      />
    </section>
  );
}
