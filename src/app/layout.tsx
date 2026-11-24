import { safeJsonLd } from "@/lib/safe-output";
import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadRefTracker from "@/components/LeadRefTracker";
import WhatsAppSticky from "@/components/WhatsAppSticky";
import Reveal from "@/components/Reveal";
import { siteOrganization } from "@/lib/organization";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-bodoni",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://londonbirthdayclub.com"),
  title: {
    default:
      "London Birthday Club | Birthday Parties at London's Best Nightclubs",
    template: "%s | London Birthday Club",
  },
  description:
    "Plan the ultimate birthday night out at London's most exclusive nightclubs. VIP tables, bottle service, and birthday packages at Mayfair's finest venues. Free planning service via WhatsApp.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://londonbirthdayclub.com",
    siteName: "London Birthday Club",
    title: "London Birthday Club | Birthday Parties at London's Best Nightclubs",
    description:
      "Plan the ultimate birthday night out at London's most exclusive nightclubs. VIP tables, bottle service, and birthday packages at Mayfair's finest venues.",
  },
  twitter: {
    card: "summary_large_image",
    title: "London Birthday Club",
    description:
      "Plan the ultimate birthday night out at London's most exclusive nightclubs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    ...siteOrganization(),
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://londonbirthdayclub.com/#website",
    name: "London Birthday Club",
    url: "https://londonbirthdayclub.com",
    description:
      "The ultimate guide to celebrating birthdays at London's most exclusive nightclubs. Free VIP table planning and booking service.",
    publisher: {
      "@id": "https://londonbirthdayclub.com/#organization",
    },
    inLanguage: "en-GB",
  };

  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${hanken.variable} antialiased`}
    >
      <body className="grain min-h-screen flex flex-col pb-24 xl:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd(webSiteSchema),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LeadRefTracker />
        <WhatsAppSticky />
        <Reveal />
      </body>
    </html>
  );
}
