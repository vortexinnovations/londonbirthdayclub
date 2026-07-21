"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getWhatsAppLink, getGeneralWhatsAppMessage } from "@/lib/clubs";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/birthday-clubs-london", label: "Birthday Clubs" },
    { href: "/birthday-table-booking-london", label: "Table Booking" },
    { href: "/best-birthday-clubs-london", label: "Best Clubs" },
    { href: "/plan-birthday-london-club", label: "Planning Guide" },
    { href: "/blog", label: "Blog" },
    { href: "/book-birthday", label: "Book Now" },
  ];

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-noir/85 backdrop-blur-md border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem]">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display font-medium text-[1.05rem] tracking-[0.22em] uppercase text-ink whitespace-nowrap">
              London{" "}
              <em className="italic text-champagne normal-case tracking-normal text-[1.15rem]">
                Birthday
              </em>{" "}
              Club
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ink-soft hover:text-champagne-bright transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={getWhatsAppLink(getGeneralWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-deep text-whatsapp-ink font-sans text-[0.6875rem] font-bold uppercase tracking-[0.14em] px-5 py-2 rounded-[2px] transition-colors duration-300"
            >
              WhatsApp Us
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-ink-soft hover:text-champagne p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav — an editorial contents page */}
      {mobileOpen && (
        <div className="lg:hidden bg-noir-deep/98 backdrop-blur-md border-t border-hairline">
          <nav className="px-6 py-8 flex flex-col">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-baseline gap-4 border-b border-hairline py-4 last:border-b-0"
              >
                <span className="font-sans text-[0.625rem] font-semibold tracking-[0.2em] text-champagne/70 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display italic text-2xl text-ink group-hover:text-champagne-bright transition-colors duration-200">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
