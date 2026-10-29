import Image from "next/image";
import { contactSection } from "@/data/home-sections";
import styles from "./Footer.module.css";

export default function OfficeDetails() {
  return (
    <div className={styles.officeList}>
      {contactSection.offices.map((office) => (
        <div className={styles.officeItem} key={office.label}>
          <div className={styles.officeCopy}>
            <b>{office.label}</b>
            <span>{office.value}</span>
          </div>
          <Image
            src={office.icon}
            alt=""
            aria-hidden="true"
            width={72}
            height={72}
            className={styles.officeIcon}
          />
        </div>
      ))}
    </div>
  );
}
