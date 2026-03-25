import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppSticky from "@/components/WhatsAppSticky";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
  };

  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
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
