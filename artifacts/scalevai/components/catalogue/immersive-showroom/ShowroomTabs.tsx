"use client";

import { useState, type CSSProperties } from "react";
import Button from "@/components/ui/Button";
import { Tabs, type TabItem } from "@/components/ui/Tabs";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";
import styles from "./ImmersiveShowroom.module.css";

const items: readonly TabItem[] = copy.overview.tabs.map(({ id, label }, index) => ({
  id,
  label,
  prefix: `0${index + 1}`,
}));

type AccentStyle = CSSProperties & { "--showroom-blue": string };

export default function ShowroomTabs() {
  const [selected, setSelected] = useState(0);
  const accentStyle: AccentStyle = { "--showroom-blue": copy.overview.accent };

  return (
    <div className={styles.tabs} style={accentStyle}>
      <Tabs
        activeTabClassName={styles.activeTab}
        idBase="showroom-overview"
        items={items}
        label="Showroom capabilities"
        listClassName={styles.tabList}
        onSelect={setSelected}
        orientation="vertical"
        panelClassName={styles.tabPanel}
        prefixClassName={styles.tabNumber}
        renderPanel={(_, index) => {
          const tab = copy.overview.tabs[index];
          if (!tab) return null;

          return (
            <>
              <div aria-hidden="true" className={styles.tabIcon}>{tab.icon}</div>
              <h3>{tab.label}</h3>
              <p>{tab.description}</p>
              <Button className={styles.tabButton} href="/contact">
                {copy.overview.bookCall}
              </Button>
            </>
          );
        }}
        selectOnHover
        selected={selected}
        tabClassName={styles.tabButtonItem}
      />
    </div>
  );
}
