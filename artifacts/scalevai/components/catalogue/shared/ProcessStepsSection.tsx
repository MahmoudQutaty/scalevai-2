"use client";

import { useEffect, useRef, useState } from "react";
import Button, { type ButtonVariant } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./ProcessStepsSection.module.css";

export interface ProcessStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly tags?: readonly string[];
}

interface ProcessCta {
  readonly heading: string;
  readonly description: string;
  readonly label: string;
  readonly href: string;
  readonly variant?: ButtonVariant;
  readonly icon?: string;
}

interface TimelineProcessSectionProps {
  readonly variant: "timeline";
  readonly id: string;
  readonly label: string;
  readonly heading: string;
  readonly description: string;
  readonly steps: readonly ProcessStep[];
  readonly cta: ProcessCta;
}

interface CardProcessSectionProps {
  readonly variant: "cards";
  readonly id: string;
  readonly heading: string;
  readonly description: string;
  readonly steps: readonly ProcessStep[];
}

type ProcessStepsSectionProps = TimelineProcessSectionProps | CardProcessSectionProps;

export default function ProcessStepsSection(props: ProcessStepsSectionProps) {
  return props.variant === "timeline"
    ? <TimelineProcessSection {...props} />
    : <CardProcessSection {...props} />;
}

function TimelineProcessSection({
  id,
  label,
  heading,
  description,
  steps,
  cta,
}: TimelineProcessSectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const headingId = `${id}-heading`;

  useEffect(() => {
    let frame: number | null = null;
    const updateActiveStep = () => {
      frame = null;
      const activationLine = window.innerHeight * 0.22;
      let nearestIndex = -1;
      let nearestDistance = Number.POSITIVE_INFINITY;

      stepRefs.current.slice(0, steps.length).forEach((element, index) => {
        if (!element) return;
        const bounds = element.getBoundingClientRect();
        if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;

        const distance =
          activationLine < bounds.top
            ? bounds.top - activationLine
            : activationLine > bounds.bottom
              ? activationLine - bounds.bottom
              : 0;

        if (distance < nearestDistance) {
          nearestIndex = index;
          nearestDistance = distance;
        }
      });

      if (nearestIndex >= 0) {
        setActiveStep((current) => current === nearestIndex ? current : nearestIndex);
      }
    };
    const scheduleUpdate = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(updateActiveStep);
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [steps.length]);

  return (
    <section aria-labelledby={headingId} className={styles.timelineSection} id={id}>
      <div className={`${styles.container} ${styles.timelineLayout}`}>
        <Reveal className={styles.stickyContent}>
          <p className={styles.kicker}>{label}</p>
          <SectionHeading id={headingId} text={heading} />
          <p className={styles.processDescription}>{description}</p>
          <div className={styles.cta}>
            <h3>{cta.heading}</h3>
            <p>{cta.description}</p>
            <Button href={cta.href} variant={cta.variant ?? "white"} icon={cta.icon ?? "›"}>
              {cta.label}
            </Button>
          </div>
        </Reveal>

        <Reveal>
          <div aria-label={heading} className={styles.timeline} role="group">
            {steps.map((step, index) => (
              <button
                aria-pressed={activeStep === index}
                className={`${styles.timelineStep} ${activeStep === index ? styles.activeStep : ""}`}
                key={step.number}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
                onClick={() => setActiveStep(index)}
                onFocus={() => setActiveStep(index)}
                type="button"
              >
                <small>{step.number}</small>
                <span aria-level={3} className={styles.stepTitle} role="heading">
                  {step.title}
                </span>
                <span className={styles.stepDescription}>{step.description}</span>
                {step.tags?.length ? (
                  <span className={styles.stepTags}>
                    {step.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CardProcessSection({
  id,
  heading,
  description,
  steps,
}: CardProcessSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section aria-labelledby={headingId} className={styles.cardSection} id={id}>
      <div className={`${styles.cardContainer} ${styles.centered}`}>
        <Reveal>
          <SectionHeading className={styles.cardHeading} id={headingId} text={heading} />
        </Reveal>
        <Reveal>
          <p className={styles.cardDescription}>{description}</p>
        </Reveal>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardGrid}>
          {steps.map((step) => (
            <Reveal className={styles.cardReveal} key={step.number}>
              <article className={styles.stepCard}>
                <i aria-hidden="true">{step.number}</i>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
