import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // GitHub contribution graph used in the GitHub activity section.
      { protocol: "https", hostname: "ghchart.rshah.org" },
    ],
  },
};

export default nextConfig;
