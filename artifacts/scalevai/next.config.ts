import type { NextConfig } from "next";

const previewOrigins = [
  process.env.REPLIT_DEV_DOMAIN,
  ...(process.env.REPLIT_DOMAINS?.split(",") ?? []),
].filter((origin): origin is string => Boolean(origin?.trim()));

const nextConfig: NextConfig = {
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: [
    "*.replit.dev",
    "*.janeway.replit.dev",
    "*.repl.co",
    "localhost",
    "127.0.0.1",
    ...previewOrigins,
  ],
};

export default nextConfig;
