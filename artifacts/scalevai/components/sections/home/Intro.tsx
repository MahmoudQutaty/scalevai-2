"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { introHeading, introParagraph, introPhrases, introTiles } from "@/data/intro";
import { stats } from "@/data/stats";
import styles from "./Intro.module.css";

const PHRASES = [...introPhrases, introPhrases[0]];
const LAST = introPhrases.length;

export function Intro() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const rafRef = useRef(0);

  useEffect(() => {
    if (reduced) {
      rafRef.current = requestAnimationFrame(() => setIndex(0));
      return () => cancelAnimationFrame(rafRef.current);
    }
    const id = window.setInterval(() => {
      setAnimate(true);
      setIndex((i) => (i >= LAST ? i : i + 1));
    }, 2200);
    return () => {
      window.clearInterval(id);
      cancelAnimationFrame(rafRef.current);
    };
  }, [reduced]);

  const onEnd = useCallback((e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
    if (index !== LAST) return;
    setAnimate(false);
    setIndex(0);
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => setAnimate(true));
    });
  }, [index]);

  const shown = reduced ? 0 : index;
  const group = (PHRASES[shown] ?? introPhrases[0]).group;

  return (
    <section className={styles.intro} id="about">
      <div className={styles.w}>
        <div className={styles.ig}>
          <Reveal>
            <h3>{introHeading}</h3>
            <p className={styles.srOnly}>{introPhrases.map((p) => p.text).join(", ")}</p>
            <div className={styles.rot} aria-hidden="true">
              <div
                className={styles.stack}
                style={{
                  transform: `translateY(${-shown * 1.2}em)`,
                  transition: animate && !reduced ? undefined : "none",
                }}
                onTransitionEnd={onEnd}
              >
                {PHRASES.map((p, i) => (
                  <span key={i}>{p.text}</span>
                ))}
              </div>
            </div>
            <p>{introParagraph}</p>
            <div className={styles.wide}>
              {introTiles.map((t, i) => (
                <div key={t.title} className={i === group ? styles.on : undefined}>
                  <b>{t.title}</b>
                  {t.text}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className={styles.tall}>
            <div className={styles.bars} aria-hidden="true">
              <i /><i /><i /><i /><i /><i /><i />
            </div>
          </Reveal>
        </div>
        <div className={styles.stats} id="stats">
          {stats.map((s) => (
            <Reveal key={s.label} className={styles.stat}>
              <CountUp value={s.value} suffix={s.suffix} />
              {s.label}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
