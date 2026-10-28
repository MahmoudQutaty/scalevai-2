import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ScaleVAI",
    short_name: "ScaleVAI",
    description: "Business first. Technology second. Results always.",
    start_url: "/",
    display: "standalone",
    background_color: "#030b1c",
    theme_color: "#030b1c",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
