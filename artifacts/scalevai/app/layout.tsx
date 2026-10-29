import type { Viewport } from "next";
import { Outfit } from "next/font/google";
import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import SkipLink from "@/components/layout/SkipLink";
import { pageMetadata } from "@/lib/metadata";
import "@/styles/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  ...pageMetadata(
    "ScaleVAI | Engineering AI-powered digital systems that scale",
    "We help growing businesses put AI, generative AI, AR/VR and data analytics to work, building the systems they run on and keeping them running.",
  ),
  applicationName: "ScaleVAI",
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#030b1c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body suppressHydrationWarning>
        <SkipLink />
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
