import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppSticky from "@/components/WhatsAppSticky";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://londonbirthdayclub.com/#organization",
    name: "London Birthday Club",
    description:
      "Birthday party planning service for London's most exclusive nightclubs. Free VIP table booking and birthday packages at Mayfair's finest venues.",
    url: "https://londonbirthdayclub.com",
    telephone: "+447880662708",
    areaServed: {
      "@type": "City",
      name: "London",
    },
    priceRange: "££££",
    serviceType: "Birthday Party Planning & VIP Nightclub Table Booking",
    knowsAbout: [
      "Birthday party planning",
      "VIP nightclub table booking",
      "London nightlife",
      "Mayfair nightclubs",
      "Birthday bottle service",
      "Hen party nightlife",
      "Milestone birthday celebrations",
      "Group nightclub bookings",
    ],
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
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html{scroll-behavior:smooth}
              body{background-color:#0a0a0a;color:#f5f5f5;font-family:"Inter",system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0}
              ::selection{background-color:#c9a84c;color:#000}
              .min-h-screen{min-height:100vh}.flex{display:flex}.flex-col{flex-direction:column}.flex-1{flex:1 1 0%}.pt-16{padding-top:4rem}
              header{position:fixed;top:0;left:0;right:0;z-index:50;background:rgba(10,10,10,.9);backdrop-filter:blur(12px);border-bottom:1px solid #222}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <WhatsAppSticky />
      </body>
    </html>
  );
}
