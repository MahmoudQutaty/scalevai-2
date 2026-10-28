"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";
import styles from "./WorkforceSections.module.css";

const steps = copy.process.steps;

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setTimeout(() => {
      setActiveStep((activeStep + 1) % steps.length);
    }, 3500);
    return () => window.clearTimeout(timer);
  }, [activeStep, reducedMotion]);

  return (
    <div className={styles.timeline} role="group" aria-label={copy.process.heading}>
      {steps.map((step, index) => (
        <button
          aria-pressed={activeStep === index}
          className={`${styles.step} ${activeStep === index ? styles.activeStep : ""}`}
          key={step.number}
          onClick={() => setActiveStep(index)}
          onFocus={() => setActiveStep(index)}
          onMouseEnter={() => setActiveStep(index)}
          type="button"
        >
          <small>{step.number}</small>
          <span className={styles.stepTitle} role="heading" aria-level={3}>
            {step.title}
          </span>
          <span className={styles.stepDescription}>{step.description}</span>
        </button>
      ))}
    </div>
  );
}
