import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: [
    "*.replit.dev",
    "*.repl.co",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
