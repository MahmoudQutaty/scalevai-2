"use client";

import { useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tabs } from "@/components/ui/Tabs";
import { faq } from "@/data/home-sections";
import styles from "./Faq.module.css";

export function Faq() {
  const [cat, setCat] = useState(0);
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.w}>
        <Reveal><SectionHeading text={faq.heading} /></Reveal>
        <div className={styles.fg}>
          <Tabs
            idBase="faq"
            label={faq.tabsLabel}
            items={faq.categories}
            selected={cat}
            onSelect={setCat}
            listClassName={styles.ft}
            tabClassName={styles.tab}
            activeTabClassName={styles.on}
            panelClassName={styles.panel}
            renderPanel={(_, i) => {
              const c = faq.categories[i];
              return (
                <Accordion
                  key={c.id}
                  idBase={`faq-${c.id}`}
                  defaultOpen={0}
                  icon={faq.arrow}
                  items={c.items.map((q, k) => ({ id: String(k), title: q.q, content: <p className={styles.a}>{q.a}</p> }))}
                  classNames={{ item: styles.q, itemOpen: styles.qOn, heading: styles.h, trigger: styles.trigger, icon: styles.icon, panel: styles.pn }}
                />
              );
            }}
          />
        </div>
      </div>
    </section>
  );
}
