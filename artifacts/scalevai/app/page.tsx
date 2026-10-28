import styles from "./page.module.css";
import Hero from "@/components/sections/home/Hero";
import { Intro } from "@/components/sections/home/Intro";

export default function Home() {
  return (
    <main aria-label="ScaleVAI" className={styles.shell}>
      <Hero />
      <Intro />
    </main>
  );
}
