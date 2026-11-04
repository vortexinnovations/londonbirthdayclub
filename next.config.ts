import type { NextConfig } from "next";

// Enforced: these cannot block a page's own scripts, images or forms.
const CSP = "frame-ancestors 'self'; base-uri 'self'; object-src 'none'";
// Watch only, nothing is blocked: browsers log what a full policy would stop.
const CSP_REPORT_ONLY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://challenges.cloudflare.com",
  "frame-src https://challenges.cloudflare.com https://www.google.com https://maps.google.com",
  "media-src 'self' https:",
  "form-action 'self'",
].join("; ");

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
          { key: "Content-Security-Policy", value: CSP },
          { key: "Content-Security-Policy-Report-Only", value: CSP_REPORT_ONLY },
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
      // Renamed venues: the old club pages live on under the new names.
      {
        source: "/clubs/cuckoo-club",
        destination: "/clubs/99-regent-street",
        permanent: true,
      },
      {
        source: "/clubs/tabu-london",
        destination: "/clubs/rumour-london",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
