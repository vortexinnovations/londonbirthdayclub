import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
