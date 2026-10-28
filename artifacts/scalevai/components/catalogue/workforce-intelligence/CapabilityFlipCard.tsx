"use client";

import { Fragment, useState, type CSSProperties, type ReactNode } from "react";
import { workforceIntelligencePage } from "@/data/workforce-intelligence-page";
import styles from "./WorkforceShowcase.module.css";

type Capability = (typeof workforceIntelligencePage.capabilities.cards)[number];

interface CapabilityFlipCardProps {
  readonly capability: Capability;
  readonly iconIndex: number;
}

const icons: readonly ReactNode[] = [
  <path d="M4 8l8-4 8 4-8 4zM4 12l8 4 8-4M4 16l8 4 8-4" key="coverage" />,
  <path d="M6 17V11a6 6 0 0112 0v6l2 2H4zM10 21a2 2 0 004 0" key="alerts" />,
  <Fragment key="integration">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 10h18M7 15h4" />
  </Fragment>,
  <Fragment key="privacy">
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </Fragment>,
  <Fragment key="cameras">
    <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
    <circle cx="12" cy="13" r="3.5" />
  </Fragment>,
  <path d="M5 20V10M12 20V4M19 20v-7" key="reporting" />,
];

export default function CapabilityFlipCard({
  capability,
  iconIndex,
}: CapabilityFlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const cardStyle = {
    "--accent-a": capability.colors[0],
    "--accent-b": capability.colors[1],
  } as CSSProperties;

  function toggleTouchCard() {
    if (window.matchMedia("(hover:none)").matches) {
      setFlipped((current) => !current);
    }
  }

  return (
    <button
      aria-label={`${capability.title}. ${capability.description}`}
      aria-expanded={flipped}
      className={`${styles.flipCard} ${flipped ? styles.flipped : ""}`}
      onClick={toggleTouchCard}
      style={cardStyle}
      type="button"
    >
      <span className={styles.flipInner}>
        <span className={styles.cardFront} aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            {icons[iconIndex]}
          </svg>
          <span className={styles.cardTitle} role="heading" aria-level={3}>
            {capability.title}
          </span>
        </span>
        <span className={styles.cardBack} aria-hidden="true">
          <span>{capability.description}</span>
        </span>
      </span>
    </button>
  );
}
