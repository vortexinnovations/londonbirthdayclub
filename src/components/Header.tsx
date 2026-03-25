"use client";

import Link from "next/link";
import { useState } from "react";
import { getWhatsAppLink, getGeneralWhatsAppMessage } from "@/lib/clubs";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/best-birthday-clubs-london", label: "Best Clubs" },
    { href: "/birthday-by-age", label: "By Age" },
    { href: "/plan-birthday-london-club", label: "Planning Guide" },
    { href: "/birthday-by-night", label: "By Night" },
    { href: "/blog", label: "Blog" },
    { href: "/book-birthday", label: "Book Now" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-gold font-bold text-xl tracking-tight">
              London Birthday Club
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={getWhatsAppLink(getGeneralWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-whatsapp-hover text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              WhatsApp Us
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-text-secondary hover:text-gold p-2"
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-bg-secondary border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-text-secondary hover:text-gold transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={getWhatsAppLink(getGeneralWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-whatsapp hover:bg-whatsapp-hover text-white text-center font-semibold px-4 py-3 rounded-lg transition-colors mt-4"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
