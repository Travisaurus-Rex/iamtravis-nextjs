import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
    "cdn.sanity.io",
    ] 
  }
};

module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
}

export default nextConfig;
