"use client";

import { useRef, type KeyboardEvent, type ReactNode } from "react";

export interface TabItem {
  readonly id: string;
  readonly label: string;
  readonly prefix?: string;
}

interface TabsProps {
  readonly idBase: string;
  readonly label: string;
  readonly items: readonly TabItem[];
  readonly selected: number;
  readonly onSelect: (index: number) => void;
  readonly renderPanel: (item: TabItem, index: number) => ReactNode;
  readonly orientation?: "horizontal" | "vertical";
  readonly selectOnHover?: boolean;
  readonly prefixClassName?: string;
  readonly listClassName?: string;
  readonly tabClassName?: string;
  readonly activeTabClassName?: string;
  readonly panelClassName?: string;
}

export function Tabs({
  idBase, label, items, selected, onSelect, renderPanel, orientation = "vertical", selectOnHover = false,
  prefixClassName, listClassName, tabClassName, activeTabClassName, panelClassName,
}: TabsProps) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabId = (i: number) => `${idBase}-tab-${items[i]?.id ?? i}`;
  const panelId = (i: number) => `${idBase}-panel-${items[i]?.id ?? i}`;

  const go = (i: number) => {
    onSelect(i);
    refs.current[i]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = items.length;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % n;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    if (next !== null) {
      e.preventDefault();
      go(next);
    }
  };

  return (
    <>
      <div role="tablist" aria-label={label} aria-orientation={orientation} className={listClassName}>
        {items.map((t, i) => {
          const on = i === selected;
          const cls = [tabClassName, on ? activeTabClassName : undefined].filter(Boolean).join(" ");
          return (
            <button
              key={t.id}
              ref={(el) => { refs.current[i] = el; }}
              type="button"
              role="tab"
              id={tabId(i)}
              aria-selected={on}
              aria-controls={panelId(i)}
              tabIndex={on ? 0 : -1}
              className={cls || undefined}
              onClick={() => onSelect(i)}
              onMouseEnter={selectOnHover ? () => onSelect(i) : undefined}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {t.prefix ? <span className={prefixClassName}>{t.prefix}</span> : null}
              {t.label}
            </button>
          );
        })}
      </div>
      {items.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={panelId(i)}
          aria-labelledby={tabId(i)}
          hidden={i !== selected}
          tabIndex={0}
          className={panelClassName}
        >
          {i === selected ? renderPanel(t, i) : null}
        </div>
      ))}
    </>
  );
}
