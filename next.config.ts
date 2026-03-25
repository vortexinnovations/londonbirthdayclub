import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  async redirects() {
    return [
      {
        source: "/best-clubs-for-birthdays-london",
        destination: "/best-birthday-clubs-london",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
