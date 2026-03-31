import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
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
