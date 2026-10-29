"use client";

import { useCallback, useEffect, useRef, type CSSProperties, type MouseEvent } from "react";
import type { SliderApi } from "@/components/ui/Slider";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { solutions, solutionCopy } from "@/data/solutions";
import styles from "./IndustryCarousel.module.css";

export default function SolutionSelector({ index, go }: SliderApi) {
  const rowRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startScrollLeft: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const reducedMotion = useReducedMotion();

  const revealActiveOption = useCallback(() => {
    const row = rowRef.current;
    const active = row?.querySelector<HTMLButtonElement>('[aria-pressed="true"]');
    if (!row || !active) return;
    const rowBounds = row.getBoundingClientRect();
    const activeBounds = active.getBoundingClientRect();
    if (activeBounds.left >= rowBounds.left && activeBounds.right <= rowBounds.right) return;
    row.scrollTo({
      left: row.scrollLeft + activeBounds.left - rowBounds.left - (row.clientWidth - activeBounds.width) / 2,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }, [reducedMotion]);

  useEffect(() => {
    if (!dragRef.current) revealActiveOption();
  }, [index, revealActiveOption]);

  const startDrag = (event: MouseEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    suppressClick.current = false;
    dragRef.current = {
      startX: event.clientX,
      startScrollLeft: event.currentTarget.scrollLeft,
      moved: false,
    };
  };

  const moveDrag = (event: MouseEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const distance = drag.startX - event.clientX;
    if (Math.abs(distance) > 4) drag.moved = true;
    if (!drag.moved) return;
    event.preventDefault();
    event.currentTarget.scrollLeft = drag.startScrollLeft + distance;
    const hovered = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>("[data-tab-index]"))
      .find((button) => {
        const bounds = button.getBoundingClientRect();
        return event.clientX >= bounds.left && event.clientX <= bounds.right
          && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
      });
    if (!hovered) return;
    const nextIndex = Number(hovered.dataset.tabIndex);
    if (Number.isInteger(nextIndex) && nextIndex !== index) go(nextIndex);
  };

  const finishDrag = () => {
    const drag = dragRef.current;
    if (!drag) return;
    suppressClick.current = drag.moved;
    dragRef.current = null;
    revealActiveOption();
  };

  return (
    <div
      ref={rowRef}
      className={styles.tabs}
      role="group"
      aria-label={solutionCopy.heading.replace("\n", " ")}
      onMouseDown={startDrag}
      onMouseMove={moveDrag}
      onMouseUp={finishDrag}
      onMouseLeave={finishDrag}
      onClickCapture={(event) => {
        if (!suppressClick.current) return;
        suppressClick.current = false;
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      {solutions.map((solution, i) => (
        <button
          key={solution.slug}
          type="button"
          aria-pressed={i === index}
          className={i === index ? styles.on : undefined}
          style={{ "--c": solution.colors[0] } as CSSProperties}
          onClick={() => go(i)}
          draggable={false}
          data-tab-index={i}
        >
          {solution.name}<small>{solution.deployment}</small>
        </button>
      ))}
    </div>
  );
}
