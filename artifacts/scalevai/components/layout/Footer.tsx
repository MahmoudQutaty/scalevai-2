import Link from "next/link";
import Button from "@/components/ui/Button";
import { companyLinks, contact, copy, routes } from "@/data/nav";
import { industries, industryHref } from "@/data/industries";
import { solutionHref, solutions } from "@/data/solutions";
import Logo from "./Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="site-footer" className={styles.footer}>
      <div className={styles.w}>
        <div className={styles.fc}>
          <div>
            <Logo withMark={false} style={{ fontSize: 26, opacity: 1 }} />
            <p className={styles.tag}>{copy.footerTagline}</p>
            <Button href={routes.contact} variant="footerContact">{copy.footerCta}</Button>
          </div>
          <div>
            <h2>{copy.footerServices}</h2>
            {solutions.map((s) => <Link key={s.slug} href={solutionHref(s.slug)}>{s.name}</Link>)}
          </div>
          <div>
            <h2>{copy.footerIndustries}</h2>
            {industries.map((s) => <Link key={s.slug} href={industryHref(s.slug)}>{s.name}</Link>)}
          </div>
          <div>
            <h2>{copy.footerCompany}</h2>
            {companyLinks.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          </div>
          <div>
            <h2>{copy.footerTouch}</h2>
            <a href={contact.phoneHref}>{contact.phoneLabel}</a>
            <a href={contact.emailHref}>{contact.emailLabel}</a>
            <a>{contact.address}</a>
          </div>
        </div>
        <div className={styles.cp}>{copy.copyright}</div>
      </div>
    </footer>
  );
}
