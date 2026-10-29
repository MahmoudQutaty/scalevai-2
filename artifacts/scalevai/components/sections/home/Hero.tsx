"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { hero } from "@/data/hero";
import { heroPartners } from "@/data/partners";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import styles from "./Hero.module.css";

const SCENES = [styles.s0, styles.s1, styles.s2, styles.s3, styles.s4, styles.s5];
const COUNT = heroPartners.length;

interface TipState {
  index: number;
  left?: number;
  tx: number;
  bottom?: number;
  visible: boolean;
}

export default function Hero() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number>(0);
  const [tip, setTip] = useState<TipState>({ index: 0, tx: 0, visible: false });
  const [videoFailed, setVideoFailed] = useState<boolean>(false);

  const heroRef = useRef<HTMLElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeRef = useRef<number>(0);
  const hoveredRef = useRef<boolean>(false);
  const reducedRef = useRef<boolean>(reduced);
  const cycleTimer = useRef<number | undefined>(undefined);
  const tipTimer = useRef<number | undefined>(undefined);

  const position = useCallback((i: number) => {
    const h = heroRef.current?.getBoundingClientRect();
    const r = cardRefs.current[i]?.getBoundingClientRect();
    const w = tipRef.current?.offsetWidth ?? 232;
    if (!h || !r) return;
    const cx = r.left + r.width / 2 - h.left;
    const l = Math.max(10, Math.min(cx - w / 2, h.width - w - 10));
    setTip({ index: i, left: l, tx: cx - l, bottom: h.height - (r.top - h.top) + 16, visible: true });
  }, []);

  const show = useCallback((i: number) => {
    activeRef.current = i;
    setActive(i);
    setTip((t) => ({ ...t, visible: false }));
    window.clearTimeout(tipTimer.current);
    tipTimer.current = window.setTimeout(() => position(i), hero.tipDelayMs);
  }, [position]);

  const play = useCallback((d: number) => {
    window.clearTimeout(cycleTimer.current);
    if (reducedRef.current) return;
    const next = () => {
      show((activeRef.current + 1) % COUNT);
      cycleTimer.current = window.setTimeout(next, hero.cycleMs);
    };
    cycleTimer.current = window.setTimeout(next, d);
  }, [show]);

  // Initial show + cycle; restart when reduced-motion preference changes.
  useEffect(() => {
    reducedRef.current = reduced;
    show(activeRef.current);
    if (!hoveredRef.current) play(hero.cycleMs);
    return () => {
      window.clearTimeout(cycleTimer.current);
      window.clearTimeout(tipTimer.current);
    };
  }, [reduced, show, play]);

  // Reposition on resize, load, font load and geometry changes.
  useEffect(() => {
    let alive = true;
    const re = () => show(activeRef.current);
    window.addEventListener("resize", re);
    window.addEventListener("load", re);
    document.fonts?.ready.then(() => { if (alive) re(); });
    const el = heroRef.current;
    let ro: ResizeObserver | undefined;
    if (el && typeof ResizeObserver !== "undefined") {
      let first = true;
      ro = new ResizeObserver(() => {
        if (first) { first = false; return; }
        re();
      });
      ro.observe(el);
    }
    return () => {
      alive = false;
      window.removeEventListener("resize", re);
      window.removeEventListener("load", re);
      ro?.disconnect();
    };
  }, [show]);

  // Video: autoplay unless reduced motion; remove on failure.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || videoFailed) return;
    if (reduced) {
      v.pause();
      return;
    }
    v.muted = true;
    const p = v.play();
    p?.catch((e: unknown) => {
      if (e instanceof DOMException && e.name === "AbortError") return;
      setVideoFailed(true);
    });
  }, [reduced, videoFailed]);

  const onEnter = (i: number) => {
    hoveredRef.current = true;
    window.clearTimeout(cycleTimer.current);
    show(i);
  };
  const onLeave = () => {
    hoveredRef.current = false;
    play(hero.resumeMs);
  };
  const onSelect = (i: number) => {
    show(i);
    if (!hoveredRef.current) play(hero.cycleMs);
  };

  const d = heroPartners[tip.index];
  const tipStyle = { left: tip.left, bottom: tip.bottom, opacity: tip.visible ? 1 : 0, "--tx": `${tip.tx}px` } as CSSProperties;

  return (
    <header className={styles.hero} id="top" ref={heroRef}>
      <div className={styles.media}>
        {SCENES.map((s, i) => (
          <div key={s} className={`${styles.scene} ${s}${i === active ? ` ${styles.on}` : ""}`} aria-hidden="true" />
        ))}
        {videoFailed ? null : (
          <video
            ref={videoRef}
            autoPlay={!reduced}
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
            onError={() => setVideoFailed(true)}
          >
            <source src={hero.video} type="video/mp4" onError={() => setVideoFailed(true)} />
          </video>
        )}
        <div className={styles.shade} />
      </div>
      <div className={styles.tip} ref={tipRef} style={tipStyle} aria-hidden="true">
        <p>{d.description}</p>
        <div><b>{d.keyWord}</b><span>{d.phrase}</span></div>
      </div>
      <div className={styles.body}>
        <h1>{hero.title}</h1>
        <div className={styles.chk}>{hero.checks.map((c) => <span key={c}>{c}</span>)}</div>
        <p className={styles.sub}>{hero.sub}</p>
        <div className={styles.btns}>
          <Button href={hero.primary.href} variant="pill" icon={hero.primary.icon} className={styles.pill}>{hero.primary.label}</Button>
          <Button href={hero.secondary.href} variant="pillAlt" icon={hero.secondary.icon} className={styles.pill}>{hero.secondary.label}</Button>
        </div>
      </div>
      <div className={styles.trust}>
        <p>{hero.trust}</p>
        <div className={styles.logos} role="group" aria-label={hero.trust}>
          {heroPartners.map((p, i) => (
            <button
              key={p.name}
              type="button"
              ref={(el) => { cardRefs.current[i] = el; }}
              className={i === active ? styles.on : undefined}
              aria-pressed={i === active}
              aria-label={`${p.name}: ${p.description} ${p.keyWord} ${p.phrase}`}
              onMouseEnter={() => onEnter(i)}
              onMouseLeave={onLeave}
              onFocus={() => onEnter(i)}
              onBlur={onLeave}
              onClick={() => onSelect(i)}
            >
              <Image
                alt=""
                className={styles.partnerLogo}
                height={32}
                src={p.logo}
                width={32}
              />
              <span className={styles.partnerName}>{p.name}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
