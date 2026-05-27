import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    localPatterns: [
      { pathname: '/logo-**', search: '' },
    ],
  },
};

export default nextConfig;
