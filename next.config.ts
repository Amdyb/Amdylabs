import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    localPatterns: [
      { pathname: '/logo-**', search: '' },
      { pathname: '/hero-**', search: '' },
      { pathname: '/portfolio/**', search: '' },
    ],
  },
};

export default nextConfig;
