"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { contactFeedback, contactFieldNames, contactLimits, type ContactField, type ContactFieldErrors } from "@/data/contact-form";
import { contactSection, type Interest } from "@/data/home-sections";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";
import styles from "./WorkforceFinalSections.module.css";

type ServiceInterest = (typeof copy.contact.interestOptions)[number]["value"];

const apiInterest: Record<ServiceInterest, Exclude<Interest, "">> = {
  workforce: "A service",
  another: "A service",
  partnering: "Partnering",
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isServiceInterest = (value: string): value is ServiceInterest =>
  copy.contact.interestOptions.some((option) => option.value === value);

export default function WorkforceContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const inFlight = useRef(false);
  const requestRef = useRef<AbortController | null>(null);
  const focusErrorRef = useRef<ContactField | null>(null);
  const [interest, setInterest] = useState<ServiceInterest>("workforce");
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});

  useEffect(() => () => requestRef.current?.abort(), []);

  useEffect(() => {
    if (pending || focusErrorRef.current === null) return;
    const control = formRef.current?.elements.namedItem(focusErrorRef.current);
    focusErrorRef.current = null;
    if (control instanceof HTMLElement) control.focus();
  }, [pending, fieldErrors]);

  const errorProps = (name: ContactField) => ({
    "aria-invalid": Boolean(fieldErrors[name]),
    "aria-describedby": fieldErrors[name] ? `wi-${name}-error` : undefined,
  });

  const fieldError = (name: ContactField) =>
    fieldErrors[name] ? (
      <p className={styles.fieldError} id={`wi-${name}-error`}>
        {fieldErrors[name]}
      </p>
    ) : null;

  const onChange = (event: ChangeEvent<HTMLFormElement>) => {
    setStatus("");
    setError("");
    const target = event.target;
    const name =
      target instanceof HTMLInputElement ||
      target instanceof HTMLSelectElement ||
      target instanceof HTMLTextAreaElement
        ? target.name
        : "";
    const field = contactFieldNames.find((fieldName) => fieldName === name);
    if (field) {
      setFieldErrors((previous) => ({ ...previous, [field]: undefined }));
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inFlight.current) return;
    focusErrorRef.current = null;
    const form = event.currentTarget;
    const values = new FormData(form);
    const payload: Record<ContactField, string> = {
      name: String(values.get("name") ?? ""),
      company: String(values.get("company") ?? ""),
      email: String(values.get("email") ?? ""),
      phone: String(values.get("phone") ?? ""),
      interest: apiInterest[interest],
      message: String(values.get("message") ?? ""),
    };

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
        setStatus(contactSection.form.success);
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
        setError(
          isRecord(body) && typeof body.error === "string"
            ? body.error
            : contactFeedback.unavailable,
        );
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

  return (
    <Reveal>
      <form
        aria-busy={pending}
        aria-labelledby="wi-form-heading"
        className={styles.contactForm}
        noValidate
        onChange={onChange}
        onSubmit={onSubmit}
        ref={formRef}
      >
        <h3 className={styles.formHeading} id="wi-form-heading">
          {copy.contact.formHeading}
        </h3>
        <fieldset className={styles.fields} disabled={pending}>
          <label className={styles.sr} htmlFor="wi-name">{copy.contact.name}</label>
          <input
            autoComplete="name"
            id="wi-name"
            maxLength={contactLimits.name}
            name="name"
            placeholder={copy.contact.name}
            required
            {...errorProps("name")}
          />
          {fieldError("name")}

          <label className={styles.sr} htmlFor="wi-company">{copy.contact.company}</label>
          <input
            autoComplete="organization"
            id="wi-company"
            maxLength={contactLimits.company}
            name="company"
            placeholder={copy.contact.company}
            {...errorProps("company")}
          />
          {fieldError("company")}

          <label className={styles.sr} htmlFor="wi-email">{copy.contact.email}</label>
          <input
            autoComplete="email"
            id="wi-email"
            maxLength={contactLimits.email}
            name="email"
            placeholder={copy.contact.email}
            required
            type="email"
            {...errorProps("email")}
          />
          {fieldError("email")}

          <label className={styles.sr} htmlFor="wi-phone">{copy.contact.phone}</label>
          <input
            autoComplete="tel"
            id="wi-phone"
            maxLength={contactLimits.phone}
            name="phone"
            placeholder={copy.contact.phone}
            type="tel"
            {...errorProps("phone")}
          />
          {fieldError("phone")}

          <label className={styles.sr} htmlFor="wi-interest">Interest</label>
          <select
            id="wi-interest"
            name="interest"
            onChange={(event) => {
              const value = event.currentTarget.value;
              if (isServiceInterest(value)) setInterest(value);
            }}
            required
            value={interest}
            {...errorProps("interest")}
          >
            {copy.contact.interestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {fieldError("interest")}

          <label className={styles.sr} htmlFor="wi-message">{copy.contact.message}</label>
          <textarea
            id="wi-message"
            maxLength={contactLimits.message}
            name="message"
            placeholder={copy.contact.message}
            required
            rows={2}
            {...errorProps("message")}
          />
          {fieldError("message")}

          <div className={styles.send}>
            <Button disabled={pending} type="submit">
              {pending ? contactFeedback.pending : copy.contact.submit}
            </Button>
          </div>
        </fieldset>
        {error ? <p className={styles.fieldError} role="alert">{error}</p> : null}
        <p className={styles.status} role="status">{status}</p>
      </form>
    </Reveal>
  );
}
