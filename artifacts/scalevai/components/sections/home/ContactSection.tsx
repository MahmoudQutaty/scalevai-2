"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { contactSection, interestOptions as homeInterestOptions, partnerInterest } from "@/data/home-sections";
import {
  contactFeedback,
  contactFieldNames,
  contactLimits,
  type ContactField,
  type ContactFieldErrors,
  type ContactInterest,
} from "@/data/contact-form";
import { PartnerBanner } from "./PartnerBanner";
import styles from "./ContactSection.module.css";

interface ContactFormCopy {
  readonly heading: string;
  readonly name: string;
  readonly company: string;
  readonly email: string;
  readonly phone: string;
  readonly interestPlaceholder: string;
  readonly message: string;
  readonly submit: string;
  readonly success?: string;
}

interface ContactSectionCopy {
  readonly heading: string;
  readonly text: string;
  readonly bigText: string;
  readonly form: ContactFormCopy;
}

interface ContactSectionProps {
  readonly content?: ContactSectionCopy;
  readonly sectionId?: string;
  readonly fieldIdPrefix?: string;
  readonly interestOptions?: readonly ContactInterest[];
  readonly variant?: "home" | "service";
  readonly includePartnerBanner?: boolean;
}

const isInterest = (value: string, options: readonly ContactInterest[]): value is ContactInterest | "" =>
  value === "" || options.some((option) => option === value);
const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === "object" && value !== null;

export function ContactSection({
  content = contactSection,
  sectionId = "talk",
  fieldIdPrefix = "cf",
  interestOptions = homeInterestOptions,
  variant = "home",
  includePartnerBanner = true,
}: ContactSectionProps) {
  const f = content.form;
  const reduced = useReducedMotion();
  const formRef = useRef<HTMLFormElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const [interest, setInterest] = useState<ContactInterest | "">("");
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const inFlight = useRef(false);
  const requestRef = useRef<AbortController | null>(null);
  const focusErrorRef = useRef<ContactField | null>(null);

  useEffect(() => () => requestRef.current?.abort(), []);
  useEffect(() => {
    if (pending || focusErrorRef.current === null) return;
    const control = formRef.current?.elements.namedItem(focusErrorRef.current);
    focusErrorRef.current = null;
    if (control instanceof HTMLElement) control.focus();
  }, [pending, fieldErrors]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inFlight.current) return;
    focusErrorRef.current = null;
    const form = e.currentTarget;
    const values = new FormData(form);
    const payload = Object.fromEntries(contactFieldNames.map((name) => [name, String(values.get(name) ?? "")]));
    inFlight.current = true;
    setPending(true);
    setStatus("");
    setError("");
    setFieldErrors({});
    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 15_000);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const body: unknown = await response.json();
      if (response.ok && isRecord(body) && body.ok === true && body.delivered === false) {
        setStatus(f.success ?? contactSection.form.success);
      } else {
        const errors: ContactFieldErrors = {};
        if (isRecord(body) && isRecord(body.fieldErrors)) {
          for (const name of contactFieldNames) {
            const message = body.fieldErrors[name];
            if (typeof message === "string") errors[name] = message;
          }
        }
        setFieldErrors(errors);
        focusErrorRef.current = contactFieldNames.find((name) => errors[name]) ?? null;
        setError(isRecord(body) && typeof body.error === "string" ? body.error : contactFeedback.unavailable);
      }
    } catch {
      setError(contactFeedback.unavailable);
    } finally {
      window.clearTimeout(timeout);
      inFlight.current = false;
      requestRef.current = null;
      setPending(false);
    }
  };

  const becomePartner = () => {
    if (inFlight.current) return;
    setInterest(partnerInterest);
    setStatus("");
    setError("");
    setFieldErrors((previous) => ({ ...previous, interest: undefined }));
    formRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    selectRef.current?.focus({ preventScroll: true });
  };

  const onChange = (e: ChangeEvent<HTMLFormElement>) => {
    setStatus("");
    setError("");
    const name = e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement ? e.target.name : "";
    if (contactFieldNames.some((field) => field === name)) {
      setFieldErrors((previous) => ({ ...previous, [name]: undefined }));
    }
  };
  const errorProps = (name: ContactField) => ({
    "aria-invalid": Boolean(fieldErrors[name]),
    "aria-describedby": fieldErrors[name] ? `${fieldIdPrefix}-${name}-error` : undefined,
  });
  const fieldError = (name: ContactField) => fieldErrors[name]
    ? <p id={`${fieldIdPrefix}-${name}-error`} className={styles.fieldError}>{fieldErrors[name]}</p> : null;
  const fieldId = (name: ContactField) => `${fieldIdPrefix}-${name}`;
  const sectionClassName = variant === "service" ? `${styles.talk} ${styles.serviceTalk}` : styles.talk;

  return (
    <section className={sectionClassName} id={sectionId}>
      <div className={styles.w}>
        <div className={styles.tg}>
          <Reveal>
            <SectionHeading className={styles.h2} text={content.heading} />
            <p className={styles.lead}>{content.text}</p>
            <div className={styles.lt}>{content.bigText}</div>
          </Reveal>
          <Reveal>
            <form ref={formRef} className={styles.form} onSubmit={onSubmit} onChange={onChange} noValidate aria-busy={pending} aria-labelledby={`${fieldIdPrefix}-form-h`}>
              <h3 id={`${fieldIdPrefix}-form-h`} className={styles.fh}>{f.heading}</h3>
              <fieldset className={styles.fields} disabled={pending}>
              <label htmlFor={fieldId("name")} className={styles.sr}>{f.name}</label>
              <input id={fieldId("name")} name="name" autoComplete="name" placeholder={f.name} required maxLength={contactLimits.name} {...errorProps("name")} />
              {fieldError("name")}
              <label htmlFor={fieldId("company")} className={styles.sr}>{f.company}</label>
              <input id={fieldId("company")} name="company" autoComplete="organization" placeholder={f.company} maxLength={contactLimits.company} {...errorProps("company")} />
              {fieldError("company")}
              <label htmlFor={fieldId("email")} className={styles.sr}>{f.email}</label>
              <input id={fieldId("email")} name="email" type="email" autoComplete="email" placeholder={f.email} required maxLength={contactLimits.email} {...errorProps("email")} />
              {fieldError("email")}
              <label htmlFor={fieldId("phone")} className={styles.sr}>{f.phone}</label>
              <input id={fieldId("phone")} name="phone" type="tel" autoComplete="tel" placeholder={f.phone} maxLength={contactLimits.phone} {...errorProps("phone")} />
              {fieldError("phone")}
              <label htmlFor={fieldId("interest")} className={styles.sr}>{f.interestPlaceholder}</label>
              <select
                id={fieldId("interest")}
                name="interest"
                ref={selectRef}
                value={interest}
                required
                {...errorProps("interest")}
                onChange={(e) => { if (isInterest(e.target.value, interestOptions)) setInterest(e.target.value); }}
              >
                <option value="">{f.interestPlaceholder}</option>
                {interestOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
              {fieldError("interest")}
              <label htmlFor={fieldId("message")} className={styles.sr}>{f.message}</label>
              <textarea id={fieldId("message")} name="message" rows={2} placeholder={f.message} required maxLength={contactLimits.message} {...errorProps("message")} />
              {fieldError("message")}
              <div className={styles.send}>
                <Button type="submit" disabled={pending}>{pending ? contactFeedback.pending : f.submit}</Button>
              </div>
              </fieldset>
              {error ? <p role="alert" className={styles.fieldError}>{error}</p> : null}
              <p role="status" className={styles.status}>{status}</p>
            </form>
          </Reveal>
        </div>
        <div className={styles.off}>
          {contactSection.offices.map((o) => (
            <div key={o.label} className={styles.card}><b>{o.label}</b>{o.value}</div>
          ))}
        </div>
        {includePartnerBanner ? <PartnerBanner onBecomePartner={becomePartner} disabled={pending} /> : null}
      </div>
    </section>
  );
}
