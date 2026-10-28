import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";
import styles from "./ImmersiveShowroom.module.css";

export default function ShowroomPlatformStrip() {
  return (
    <section aria-label={copy.platform.title} className={styles.platformStrip}>
      <div className={`${styles.container} ${styles.platformContent}`}>
        <h3 className={styles.platformTitle}>
          {copy.platform.title}
          <small>{copy.platform.subtitle}</small>
        </h3>
        <ul className={styles.platformFeatures}>
          {copy.platform.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
