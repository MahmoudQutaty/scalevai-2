import styles from "./page.module.css";
import Hero from "@/components/sections/home/Hero";

export default function Home() {
  return (
    <main aria-label="ScaleVAI" className={styles.shell}>
      <Hero />
    </main>
  );
}
