import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";
import ShowroomTabs from "./ShowroomTabs";
import styles from "./ImmersiveShowroom.module.css";

export default function ShowroomOverviewSection() {
  return (
    <section className={styles.overviewSection}>
      <Reveal>
        <div className={`${styles.container} ${styles.centered}`}>
          <SectionHeading className={styles.overviewHeading} text={copy.overview.heading} />
          <p className={styles.overviewLead}>{copy.overview.description}</p>
        </div>
      </Reveal>
      <div className={styles.container}>
        <Reveal>
          <ShowroomTabs />
        </Reveal>
      </div>
    </section>
  );
}
