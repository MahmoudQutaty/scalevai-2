import type { ReactElement } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { why, type WhyIcon } from "@/data/home-sections";
import styles from "./WhyScaleVAI.module.css";

const B = "#1b5fd6";
const icons: Record<WhyIcon, ReactElement> = {
  people: <svg viewBox="0 0 32 32" fill={B}><circle cx="16" cy="10" r="4.500" /><circle cx="6.500" cy="14" r="3.200" /><circle cx="25.500" cy="14" r="3.200" /><path d="M8 27c0-5.500 3.600-8.500 8-8.500s8 3 8 8.500z" /></svg>,
  target: <svg viewBox="0 0 32 32" fill={B}><circle cx="16" cy="16" r="12" fill="none" stroke={B} strokeWidth="3" /><circle cx="16" cy="16" r="6" fill="none" stroke={B} strokeWidth="3" /><circle cx="16" cy="16" r="2.200" /></svg>,
  shield: <svg viewBox="0 0 32 32" fill={B}><path d="M16 3l10 4v8c0 7-4.500 11-10 14C10.500 26 6 22 6 15V7z" /><path d="M11 15l4 4 7-8" stroke="#fff" strokeWidth="3" fill="none" /></svg>,
  bolt: <svg viewBox="0 0 32 32" fill={B}><path d="M18 2L6 18h8l-2 12 14-18h-9z" /></svg>,
  heart: <svg viewBox="0 0 32 32" fill={B}><path d="M16 28S4 20 4 12a6 6 0 0112-2 6 6 0 0112 2c0 8-12 16-12 16z" /></svg>,
};

export function WhyScaleVAI() {
  return (
    <div className={styles.w} id="why-scalevai">
      <Reveal><SectionHeading text={why.heading} /></Reveal>
      <div className={styles.why}>
        {why.items.map((w, i) => (
          <Reveal key={w.title} className={styles.wc} style={{ transitionDelay: `${i * .08}s` }}>
            <div className={styles.wi} aria-hidden="true">{icons[w.icon]}</div>
            <h3 className={styles.h}>{w.title}</h3>
            <p className={styles.p}>{w.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
