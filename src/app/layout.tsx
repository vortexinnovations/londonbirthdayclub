import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppSticky from "@/components/WhatsAppSticky";
import Reveal from "@/components/Reveal";
import { WHATSAPP_TEL } from "@/lib/clubs";

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
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://londonbirthdayclub.com/#organization",
    name: "London Birthday Club",
    description:
      "Birthday party planning service for London's most exclusive nightclubs. Free VIP table booking and birthday packages at Mayfair's finest venues.",
    url: "https://londonbirthdayclub.com",
    telephone: WHATSAPP_TEL,
    image: "https://londonbirthdayclub.com/gallery/images/TapeSaturdayNYE311222-130.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mayfair",
      addressLocality: "London",
      addressRegion: "Greater London",
      postalCode: "W1",
      addressCountry: "GB",
    },
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
    <html
      lang="en"
      className={`${bodoni.variable} ${hanken.variable} antialiased`}
    >
      <body className="grain min-h-screen flex flex-col pb-24 xl:pb-0">
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
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppSticky />
        <Reveal />
      </body>
    </html>
  );
}
