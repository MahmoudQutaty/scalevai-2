"use client";

import Link from "next/link";

export default function SkipLink() {
  return (
    <Link
      className="skip-link"
      href="#main-content"
      onClick={() => {
        requestAnimationFrame(() => document.getElementById("main-content")?.focus({ preventScroll: true }));
      }}
    >
      Skip to content
    </Link>
  );
}
