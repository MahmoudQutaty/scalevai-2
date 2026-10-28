"use client";

import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Slider } from "@/components/ui/Slider";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";
import styles from "./ImmersiveShowroom.module.css";

type WhyCardStyle = CSSProperties & { "--g": string };
type WhySliderStyle = CSSProperties & {
  "--slider-arrow-hover": string;
  "--slider-indicator-active": string;
  "--slider-indicator-color": string;
};

export default function ShowroomWhySection() {
  const sliderStyle: WhySliderStyle = {
    "--slider-arrow-hover": "#1a5cff",
    "--slider-indicator-active": "#0f62e8",
    "--slider-indicator-color": "rgba(11, 26, 58, .25)",
  };

  return (
    <section aria-labelledby="showroom-why-heading" className={styles.whySection} id="showroom-why">
      <div className={`${styles.container} ${styles.centered}`}>
        <Reveal>
          <SectionHeading
            className={styles.whyHeading}
            id="showroom-why-heading"
            text={copy.why.heading}
          />
        </Reveal>
        <Reveal>
          <p className={styles.sectionLead}>{copy.why.description}</p>
        </Reveal>
      </div>

      <Slider
        align="start"
        className={styles.whySlider}
        controlsMargin="26px 0 0"
        count={copy.why.items.length}
        frameClassName={styles.whyFrame}
        gap={18}
        indicatorCount={copy.why.items.length}
        label={copy.why.heading}
        renderItem={(index) => {
          const item = copy.why.items[index];
          if (!item) return null;

          const cardStyle: WhyCardStyle = {
            "--g": `linear-gradient(160deg, ${item.colors[0]}, ${item.colors[1]})`,
          };

          return (
            <article className={styles.whyCard} key={item.title} style={cardStyle}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          );
        }}
        style={sliderStyle}
      />
    </section>
  );
}
