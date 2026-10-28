"use client";

import { useState, type CSSProperties, type KeyboardEvent } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";
import styles from "./ImmersiveShowroom.module.css";

type IndustryStyle = CSSProperties & { "--g": string };

export default function ShowroomIndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>, index: number) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveIndex(index);
    }
  };

  return (
    <section aria-labelledby="showroom-industries-heading" className={styles.industrySection} id="showroom-industries">
      <div className={`${styles.container} ${styles.centered}`}>
        <Reveal>
          <SectionHeading
            className={styles.industryHeading}
            id="showroom-industries-heading"
            text={copy.industries.heading}
          />
        </Reveal>
        <Reveal>
          <p className={`${styles.sectionLead} ${styles.industryLead}`}>{copy.industries.description}</p>
        </Reveal>
      </div>

      <div className={styles.container}>
        <div aria-label="Industries served" className={styles.industryCards} role="group">
          {copy.industries.items.map((industry, index) => {
            const active = activeIndex === index;
            const cardStyle: IndustryStyle = {
              "--g": `linear-gradient(160deg, ${industry.colors[0]}, ${industry.colors[1]})`,
            };

            return (
              <article
                className={`${styles.industryCard} ${active ? styles.industryCardActive : ""}`}
                key={industry.name}
                onMouseEnter={() => setActiveIndex(index)}
                style={cardStyle}
              >
                <button
                  aria-label={industry.name}
                  aria-pressed={active}
                  className={styles.industrySelect}
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleCardKeyDown(event, index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  type="button"
                />
                <h3 className={styles.industryTitle}>{industry.name}</h3>
                <Link
                  aria-label={`${copy.industries.bookCallAriaLabel} ${industry.name}`}
                  className={styles.industryLink}
                  href="/contact"
                  tabIndex={active ? 0 : -1}
                >
                  ↗
                </Link>
                <div className={styles.industryDetails}>
                  <p>{industry.description}</p>
                  <u>{industry.details}</u>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
