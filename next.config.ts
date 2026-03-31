import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  async rewrites() {
    return [
      {
        source: "/gallery/images/:path*",
        destination:
          "https://hgsgysaxiraaezeneshr.supabase.co/storage/v1/object/public/gallery/:path*",
      },
    ];
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
