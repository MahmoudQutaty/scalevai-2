"use client";

import { useRef, useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { contactSection, interestOptions, partnerInterest, type Interest } from "@/data/home-sections";
import { PartnerBanner } from "./PartnerBanner";
import styles from "./ContactSection.module.css";

const isInterest = (v: string): v is Interest => v === "" || (interestOptions as readonly string[]).includes(v);

export function ContactSection() {
  const f = contactSection.form;
  const reduced = useReducedMotion();
  const formRef = useRef<HTMLFormElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const [interest, setInterest] = useState<Interest>("");
  const [status, setStatus] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Demo only: no network call; fields are intentionally kept.
    setStatus(f.success);
  };

  const becomePartner = () => {
    setInterest(partnerInterest);
    formRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    selectRef.current?.focus({ preventScroll: true });
  };

  return (
    <section className={styles.talk} id="talk">
      <div className={styles.w}>
        <div className={styles.tg}>
          <Reveal>
            <SectionHeading className={styles.h2} text={contactSection.heading} />
            <p className={styles.lead}>{contactSection.text}</p>
            <div className={styles.lt}>{contactSection.bigText}</div>
          </Reveal>
          <Reveal>
            <form ref={formRef} className={styles.form} onSubmit={onSubmit} aria-labelledby="contact-form-h">
              <h3 id="contact-form-h" className={styles.fh}>{f.heading}</h3>
              <label htmlFor="cf-name" className={styles.sr}>{f.name}</label>
              <input id="cf-name" name="name" autoComplete="name" placeholder={f.name} required />
              <label htmlFor="cf-company" className={styles.sr}>{f.company}</label>
              <input id="cf-company" name="company" autoComplete="organization" placeholder={f.company} />
              <label htmlFor="cf-email" className={styles.sr}>{f.email}</label>
              <input id="cf-email" name="email" type="email" autoComplete="email" placeholder={f.email} required />
              <label htmlFor="cf-phone" className={styles.sr}>{f.phone}</label>
              <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder={f.phone} />
              <label htmlFor="cf-interest" className={styles.sr}>{f.interestPlaceholder}</label>
              <select
                id="cf-interest"
                name="interest"
                ref={selectRef}
                value={interest}
                onChange={(e) => { if (isInterest(e.target.value)) setInterest(e.target.value); }}
              >
                <option value="">{f.interestPlaceholder}</option>
                {interestOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <label htmlFor="cf-message" className={styles.sr}>{f.message}</label>
              <textarea id="cf-message" name="message" rows={2} placeholder={f.message} />
              <div className={styles.send}>
                <Button type="submit">{f.submit}</Button>
              </div>
              <p role="status" className={styles.status}>{status}</p>
            </form>
          </Reveal>
        </div>
        <div className={styles.off}>
          {contactSection.offices.map((o) => (
            <div key={o.label} className={styles.card}><b>{o.label}</b>{o.value}</div>
          ))}
        </div>
        <PartnerBanner onBecomePartner={becomePartner} />
      </div>
    </section>
  );
}
