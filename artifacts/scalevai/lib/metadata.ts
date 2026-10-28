import type { Metadata } from "next";

// No guessed canonical/production URL. Add metadataBase when the published URL is known.
export function pageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: { title, description, type: "website", siteName: "ScaleVAI", locale: "en_GB" },
    twitter: { card: "summary", title, description },
  };
}
