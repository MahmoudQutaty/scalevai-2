"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";
import styles from "./WorkforceShowcase.module.css";

export default function PresenceDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div
      aria-label="Presence dashboard showing full coverage on five floors"
      className={`${styles.dashboard} ${visible ? styles.dashboardVisible : ""}`}
      ref={ref}
      role="img"
    >
      <h3 className={styles.dashboardHeading}>
        <span>{copy.caseStudy.dashboardTitle}</span>
        <em>{copy.caseStudy.dashboardStatus}</em>
      </h3>
      {copy.caseStudy.floors.map((floor) => (
        <div className={styles.floorRow} key={floor}>
          <span>{floor}</span>
          <span className={styles.barTrack} aria-hidden="true">
            <span className={styles.barFill} />
          </span>
          <span>{copy.caseStudy.floorCoverage}</span>
        </div>
      ))}
      <svg
        aria-hidden="true"
        className={styles.chart}
        preserveAspectRatio="none"
        viewBox="0 0 300 70"
      >
        <path
          d="M0 55 C30 20 60 60 100 35 S170 10 210 30 270 10 300 15"
          fill="none"
          stroke="#0f62e8"
          strokeWidth="3"
        />
        <path
          d="M0 62 C40 45 90 65 140 50 S230 40 300 38"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2.5"
        />
      </svg>
      <small className={styles.chartCaption}>{copy.caseStudy.chartCaption}</small>
    </div>
  );
}
