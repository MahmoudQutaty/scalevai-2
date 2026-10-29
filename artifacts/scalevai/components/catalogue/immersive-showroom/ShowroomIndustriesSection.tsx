"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import expandStyles from "@/components/sections/home/ServicesExpand.module.css";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";
import styles from "./ImmersiveShowroom.module.css";

type IndustryStyle = CSSProperties & { "--g": string };

export default function ShowroomIndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section aria-labelledby="showroom-industries-heading" className={styles.industrySection} id="showroom-industries">
      <div className={expandStyles.w}>
        <Reveal>
          <SectionHeading id="showroom-industries-heading" text={copy.industries.heading} />
        </Reveal>
        <Reveal>
          <p className={`${styles.sectionLead} ${styles.industryLead}`}>{copy.industries.description}</p>
        </Reveal>
        <div aria-label="Industries served" role="group">
          <Reveal className={expandStyles.exp}>
            {copy.industries.items.map((industry, index) => {
              const active = activeIndex === index;
              const cardStyle: IndustryStyle = {
                "--g": `linear-gradient(160deg, ${industry.colors[0]}, ${industry.colors[1]})`,
              };
              const arrowClassName = active
                ? `${expandStyles.arrow} ${styles.industryLink}`
                : expandStyles.arrow;
              const panelId = `showroom-industry-${index}`;

              return (
                <div
                  className={active ? `${expandStyles.ex} ${expandStyles.on}` : expandStyles.ex}
                  key={industry.name}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  style={cardStyle}
                >
                  <h3 className={expandStyles.title}>
                    <button
                      aria-controls={panelId}
                      aria-expanded={active}
                      className={expandStyles.trigger}
                      onFocus={() => setActiveIndex(index)}
                      type="button"
                    >
                      {industry.name}
                    </button>
                  </h3>
                  <Link
                    aria-label={`${copy.industries.bookCallAriaLabel} ${industry.name}`}
                    className={arrowClassName}
                    href="/contact"
                    tabIndex={active ? 0 : -1}
                  >
                    ↗
                  </Link>
                  <div aria-hidden={!active} className={expandStyles.body} id={panelId}>
                    {industry.description}
                    <span className={expandStyles.list}>{industry.details}</span>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
