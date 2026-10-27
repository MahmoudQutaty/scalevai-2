import Link from "next/link";
import { contact, routes } from "@/data/nav";
import styles from "./FloatingButtons.module.css";

export default function FloatingButtons() {
  return (
    <>
      <a className={`${styles.fab} ${styles.wa}`} href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">✆</a>
      <Link className={`${styles.fab} ${styles.chat}`} href={routes.contact} aria-label="Chat">💬</Link>
    </>
  );
}
