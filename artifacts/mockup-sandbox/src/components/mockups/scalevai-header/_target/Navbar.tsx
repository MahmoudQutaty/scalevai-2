"use client";

import Link from "@/lib/Link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { FocusEvent, KeyboardEvent } from "react";
import Button from "../_shared/Button";
import { copy, routes } from "@/data/nav";
import Logo from "../_shared/Logo";
import MegaMenu from "./MegaMenu";
import type { MegaKind, MegaPosition } from "./MegaMenu";
import MobileDrawer from "../_shared/MobileDrawer";
import styles from "./Navbar.module.css";

const DRAWER_ID = "mobile-drawer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menu, setMenu] = useState<MegaKind | null>(null);
  const [drawer, setDrawer] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<MegaPosition>({ "--mx": "2vw", "--mw": "900px", "--ax": "60px" });
  const closeTimer = useRef<number | undefined>(undefined);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const navContentRef = useRef<HTMLDivElement>(null);
  const triggers = useRef<Record<MegaKind, HTMLAnchorElement | null>>({ services: null, industries: null });
  const wasOpen = useRef<boolean>(false);
  const drawerOpenRef = useRef(false);

  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 30);
    onS();
    window.addEventListener("scroll", onS, { passive: true });
    return () => window.removeEventListener("scroll", onS);
  }, []);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const toggleDrawer = useCallback((o: boolean) => {
    drawerOpenRef.current = o;
    setDrawer(o);
    document.body.style.overflow = o ? "hidden" : "";
  }, []);

  useEffect(() => {
    if (wasOpen.current && !drawer) burgerRef.current?.focus({ preventScroll: true });
    wasOpen.current = drawer;
  }, [drawer]);

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (!drawerOpenRef.current) return;
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        toggleDrawer(false);
        burgerRef.current?.focus({ preventScroll: true });
        return;
      }
      if (e.key === "Tab") {
        const links = document.getElementById(DRAWER_ID)?.querySelectorAll<HTMLAnchorElement>("a[href]");
        const focusable: HTMLElement[] = [
          ...(burgerRef.current ? [burgerRef.current] : []),
          ...Array.from(links ?? []),
        ];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [toggleDrawer]);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 1000px)");
    const onChange = () => {
      if (!mobile.matches) toggleDrawer(false);
    };
    mobile.addEventListener("change", onChange);
    return () => mobile.removeEventListener("change", onChange);
  }, [toggleDrawer]);

  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  const openMenu = (k: MegaKind, trigger: HTMLDivElement) => {
    window.clearTimeout(closeTimer.current);
    const navContent = navContentRef.current;
    if (navContent) {
      const triggerRect = trigger.getBoundingClientRect();
      const navRect = navContent.getBoundingClientRect();
      const navStyle = window.getComputedStyle(navContent);
      const leftEdge = navRect.left + Number.parseFloat(navStyle.paddingLeft);
      const rightEdge = navRect.right - Number.parseFloat(navStyle.paddingRight);
      const width = Math.min(900, rightEdge - leftEdge);
      const center = triggerRect.left + triggerRect.width / 2;
      const left = Math.max(leftEdge, Math.min(center - width / 2, rightEdge - width));
      setMenuPosition({ "--mx": `${left}px`, "--mw": `${width}px`, "--ax": `${center - left}px` });
    }
    setMenu(k);
  };
  const leaveMenu = (k: MegaKind) => {
    closeTimer.current = window.setTimeout(() => setMenu((m) => (m === k ? null : m)), 200);
  };
  const closeNow = () => {
    window.clearTimeout(closeTimer.current);
    setMenu(null);
  };
  const onBlur = (k: MegaKind) => (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setMenu((m) => (m === k ? null : m));
  };
  const onKey = (k: MegaKind) => (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape" && menu === k) {
      triggers.current[k]?.focus();
      closeNow();
    }
  };

  const dd = (k: MegaKind, label: string, href: string) => (
    <div
      className={menu === k ? `${styles.dd} ${styles.open}` : styles.dd}
      onMouseEnter={(event) => openMenu(k, event.currentTarget)}
      onMouseLeave={() => leaveMenu(k)}
      onFocus={(event) => openMenu(k, event.currentTarget)}
      onBlur={onBlur(k)}
      onKeyDown={onKey(k)}
    >
      <Link
        ref={(el) => { triggers.current[k] = el; }}
        className={styles.trigger}
        href={href}
        aria-expanded={menu === k}
        aria-controls={`mega-${k}`}
        onClick={closeNow}
      >
        {label}
      </Link>
      <MegaMenu kind={k} id={`mega-${k}`} open={menu === k} onNavigate={closeNow} position={menuPosition} />
    </div>
  );

  return (
    <>
      <nav className={scrolled ? `${styles.nav} ${styles.scrolled}` : styles.nav} aria-label="Main" data-scrolled={scrolled}>
        <div className={styles.w} ref={navContentRef}>
          <Logo />
          <div className={styles.links}>
            <Button href={routes.services} variant="ai">{copy.ai}</Button>
            {dd("services", copy.services, routes.services)}
            {dd("industries", copy.industries, routes.industries)}
            <Link className={styles.navLink} href={routes.about}>{copy.about}</Link>
            <Link className={styles.navLink} href={routes.partners}>{copy.partners}</Link>
            <Button href={routes.contact} variant="white">{copy.letsTalk}</Button>
            <Button href={routes.contact} variant="outline">{copy.book}</Button>
          </div>
          <div className={styles.mob}>
            <Button href={routes.contact} variant="outlineCompact" onClick={() => toggleDrawer(false)}>{copy.contactUs}</Button>
            <button
              ref={burgerRef}
              type="button"
              className={drawer ? `${styles.burger} ${styles.x}` : styles.burger}
              aria-label="Menu"
              aria-expanded={drawer}
              aria-controls={DRAWER_ID}
              onClick={() => toggleDrawer(!drawerOpenRef.current)}
            >
              <i></i><i></i><i></i>
            </button>
          </div>
        </div>
      </nav>
      <MobileDrawer id={DRAWER_ID} open={drawer} onClose={() => toggleDrawer(false)} />
    </>
  );
}
