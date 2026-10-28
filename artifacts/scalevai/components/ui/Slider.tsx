"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { sliderOffset, sliderPositionCount, wrapSliderIndex } from "@/lib/slider";
import styles from "./Slider.module.css";

export interface SliderMetrics {
  readonly viewportWidth: number;
  readonly contentLeft: number;
  readonly contentWidth: number;
  readonly windowWidth: number;
}

export interface SliderApi {
  readonly index: number;
  readonly go: (i: number) => void;
}

interface SliderProps {
  readonly className?: string;
  readonly count: number;
  readonly align: "center" | "start";
  readonly gap: number;
  readonly renderItem: (i: number, active: boolean) => ReactNode;
  readonly frameClassName?: string;
  /** Start mode: card width from measured metrics (sets --cw on track). */
  readonly itemWidth?: (m: SliderMetrics) => number;
  readonly autoplayMs?: number;
  readonly controlsMargin?: string;
  readonly indicatorCount?: number;
  readonly beforeControls?: (api: SliderApi) => ReactNode;
  readonly label: string;
  readonly style?: CSSProperties;
}

interface Measured extends SliderMetrics {
  readonly cardWidth: number;
}

export function Slider({
  className,
  count,
  align,
  gap,
  renderItem,
  frameClassName,
  itemWidth,
  autoplayMs,
  controlsMargin,
  indicatorCount,
  beforeControls,
  label,
  style,
}: SliderProps) {
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemWidthRef = useRef(itemWidth);
  useEffect(() => {
    itemWidthRef.current = itemWidth;
  }, [itemWidth]);
  const [index, setIndex] = useState(0);
  const [nonce, setNonce] = useState(0);
  const [m, setM] = useState<Measured | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const anchor = anchorRef.current;
    const track = trackRef.current;
    if (!root || !anchor || !track) return;
    let initial = true;
    let readyFrame = 0;
    const measure = () => {
      const rootBox = root.getBoundingClientRect();
      const anchorBox = anchor.getBoundingClientRect();
      const base: SliderMetrics = {
        viewportWidth: root.clientWidth,
        contentLeft: anchorBox.left - rootBox.left,
        contentWidth: anchorBox.width,
        windowWidth: window.innerWidth,
      };
      const fn = itemWidthRef.current;
      const first = track.firstElementChild?.firstElementChild;
      const cardWidth = fn ? fn(base) : first instanceof HTMLElement ? first.getBoundingClientRect().width : 0;
      setM({ ...base, cardWidth });
      const available = sliderPositionCount(count, align, base.viewportWidth, base.contentLeft, cardWidth, gap);
      setIndex((i) => Math.min(i, Math.max(0, available - 1)));
      if (initial) {
        initial = false;
        readyFrame = requestAnimationFrame(() => {
          readyFrame = requestAnimationFrame(() => setReady(true));
        });
      }
    };
    const ro = new ResizeObserver(measure);
    ro.observe(root);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(readyFrame);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, [count, align, gap]);

  const positions = m ? sliderPositionCount(count, align, m.viewportWidth, m.contentLeft, m.cardWidth, gap) : count;
  const maxPos = Math.max(0, positions - 1);
  const current = Math.min(index, maxPos);
  const indicators = indicatorCount ?? positions;

  const go = useCallback((i: number) => setIndex(wrapSliderIndex(i, positions)), [positions]);

  useEffect(() => {
    if (!autoplayMs || reduced) return;
    const t = window.setTimeout(() => setIndex((i) => wrapSliderIndex(Math.min(i, positions - 1) + 1, positions)), autoplayMs);
    return () => window.clearTimeout(t);
  }, [autoplayMs, reduced, current, nonce, positions]);

  let x = 0;
  if (m) x = sliderOffset(align, m.viewportWidth, m.cardWidth, gap, current);

  const trackStyle: CSSProperties & Record<"--cw", string> = {
    gap: `${gap}px`,
    transform: `translateX(${x}px)`,
    transition: ready ? undefined : "none",
    "--cw": m && itemWidth ? `${m.cardWidth}px` : "380px",
    paddingLeft: align === "start" && m ? `${m.contentLeft}px` : undefined,
  };

  return (
    <div className={className} ref={rootRef} onClickCapture={() => setNonce((n) => n + 1)} role="region" aria-roledescription="carousel" aria-label={label} style={style}>
      <div className={styles.w} aria-hidden="true"><i ref={anchorRef} className={styles.anchor} /></div>
      <div className={[styles.fb, frameClassName].filter(Boolean).join(" ")}>
        <div ref={trackRef} className={styles.track} style={trackStyle}>
          {Array.from({ length: count }, (_, i) => {
            const active = align === "center" ? i === current : i >= current;
            return <div key={i} style={{ display: "contents" }} inert={align === "center" && !active} aria-hidden={align === "center" && !active ? true : undefined}>{renderItem(i, active)}</div>;
          })}
        </div>
      </div>
      <div className={styles.w}>
        {beforeControls ? beforeControls({ index: current, go }) : null}
        <div className={styles.arr} style={controlsMargin ? { margin: controlsMargin } : undefined}>
          <div aria-label={`Position ${current + 1} of ${indicators}`} role="img">
            {Array.from({ length: indicators }, (_, i) => <i key={i} className={i === current ? styles.on : undefined} />)}
          </div>
          <span>
            <button type="button" aria-label="Previous" onClick={() => go(current - 1)}>←</button>
            <button type="button" aria-label="Next" onClick={() => go(current + 1)}>→</button>
          </span>
        </div>
      </div>
    </div>
  );
}
