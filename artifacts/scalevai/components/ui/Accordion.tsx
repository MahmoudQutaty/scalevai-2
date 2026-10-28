"use client";

import { useState, type ReactNode } from "react";

export interface AccordionItem {
  readonly id: string;
  readonly title: ReactNode;
  readonly content: ReactNode;
}

export interface AccordionClassNames {
  readonly root?: string;
  readonly item?: string;
  readonly itemOpen?: string;
  readonly heading?: string;
  readonly trigger?: string;
  readonly icon?: string;
  readonly panel?: string;
}

interface AccordionProps {
  readonly idBase: string;
  readonly items: readonly AccordionItem[];
  readonly defaultOpen?: number | null;
  readonly icon?: ReactNode;
  readonly headingLevel?: 3 | 4;
  readonly classNames?: AccordionClassNames;
}

/** Only one item open at a time. Remount (via key) to reset to defaultOpen. */
export function Accordion({ idBase, items, defaultOpen = 0, icon, headingLevel = 3, classNames = {} }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const H = headingLevel === 4 ? "h4" : "h3";

  return (
    <div className={classNames.root}>
      {items.map((it, i) => {
        const on = open === i;
        const btnId = `${idBase}-btn-${it.id}`;
        const panelId = `${idBase}-panel-${it.id}`;
        const cls = [classNames.item, on ? classNames.itemOpen : undefined].filter(Boolean).join(" ");
        return (
          // Whole card is clickable as in the reference; the button is the accessible control and its clicks bubble here.
          <div key={it.id} className={cls || undefined} onClick={() => setOpen(on ? null : i)}>
            <H className={classNames.heading}>
              <button type="button" id={btnId} aria-expanded={on} aria-controls={panelId} className={classNames.trigger}>
                {it.title}
                {icon ? <span aria-hidden="true" className={classNames.icon}>{icon}</span> : null}
              </button>
            </H>
            <div id={panelId} role="region" aria-labelledby={btnId} aria-hidden={!on} inert={!on} className={classNames.panel}>
              {it.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
