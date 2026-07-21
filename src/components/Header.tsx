"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getWhatsAppLink, getGeneralWhatsAppMessage } from "@/lib/clubs";

const whatsAppGlyph = (
  <svg
    className="w-[13px] h-[13px] flex-shrink-0 text-whatsapp"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/birthday-clubs-london", label: "Birthday Clubs" },
  { href: "/birthday-table-booking-london", label: "Table Booking" },
  { href: "/best-birthday-clubs-london", label: "Best Clubs" },
  { href: "/plan-birthday-london-club", label: "Planning Guide" },
  { href: "/blog", label: "Blog" },
  { href: "/book-birthday", label: "Book Now" },
];

// Masthead split: three links either side of the centered wordmark;
// "Book Now" becomes the outlined action at the right edge.
const leftLinks = navLinks.slice(0, 3);
const rightLinks = navLinks.slice(3, 6);
const bookNow = navLinks[6];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const solid = scrolled || mobileOpen;

  const wordmark = (
    <Link href="/" className="flex items-baseline gap-[0.4em] group whitespace-nowrap">
      <span className="font-display font-medium text-[1rem] tracking-[0.24em] uppercase text-ink transition-colors duration-300 group-hover:text-champagne-bright">
        London
      </span>
      <em className="font-display italic text-[1.3rem] leading-none text-champagne">
        Birthday
      </em>
      <span className="font-display font-medium text-[1rem] tracking-[0.24em] uppercase text-ink transition-colors duration-300 group-hover:text-champagne-bright">
        Club
      </span>
    </Link>
  );

  const mastheadLink = (link: { href: string; label: string }) => {
    const active = isActive(link.href);
    return (
      <Link
        key={link.href}
        href={link.href}
        aria-current={active ? "page" : undefined}
        className={`group/nav relative py-1 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.15em] whitespace-nowrap transition-colors duration-200 ${
          active ? "text-champagne" : "text-ink hover:text-champagne-bright"
        }`}
      >
        {link.label}
        <span
          className={`absolute bottom-0 left-0 h-px w-full origin-left transition-transform duration-300 ease-[var(--ease-lux)] ${
            active
              ? "scale-x-100 bg-champagne/80"
              : "scale-x-0 group-hover/nav:scale-x-100 bg-champagne"
          }`}
          aria-hidden
        />
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Legibility scrim — floats over hero imagery at page top,
          crossfades into a solid blurred bar once scrolled. */}
      <div
        className={`absolute inset-x-0 top-0 h-[150%] pointer-events-none transition-opacity duration-500 bg-gradient-to-b from-noir-deep/90 via-noir-deep/45 to-transparent ${
          solid ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`absolute inset-0 transition-opacity duration-500 bg-noir/85 backdrop-blur-md border-b border-hairline ${
          solid ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Masthead service strip (xl+) — collapses away on scroll */}
      <div
        className={`relative hidden xl:block overflow-hidden transition-all duration-500 ease-[var(--ease-lux)] ${
          solid ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 border-b border-hairline">
            <p className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.28em] text-ink-faint">
              Mayfair · Est. London
            </p>
            <div className="flex items-center gap-6">
              <p className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.28em] text-ink-faint">
                Free concierge · Replies in minutes
              </p>
              <a
                href={getWhatsAppLink(getGeneralWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-[0.625rem] font-bold uppercase tracking-[0.28em] text-champagne hover:text-champagne-bright transition-colors duration-200"
              >
                {whatsAppGlyph}
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact row (below xl) */}
        <div className="flex xl:hidden items-center justify-between h-[4.5rem]">
          {wordmark}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-ink hover:text-champagne p-2"
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

        {/* Masthead row (xl+): split nav flanking the centered wordmark */}
        <div className="hidden xl:grid grid-cols-[1fr_auto_1fr] items-center h-[4.5rem] gap-8">
          <nav className="flex items-center justify-start gap-7">
            {leftLinks.map(mastheadLink)}
          </nav>
          <div className="justify-self-center">{wordmark}</div>
          <nav className="flex items-center justify-end gap-7">
            {rightLinks.map(mastheadLink)}
            <Link
              href={bookNow.href}
              aria-current={isActive(bookNow.href) ? "page" : undefined}
              className={`inline-flex items-center gap-2 border rounded-[2px] px-4 py-[0.5rem] font-sans text-[0.6875rem] font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-colors duration-300 ${
                isActive(bookNow.href)
                  ? "border-champagne text-champagne-bright"
                  : "border-champagne/50 hover:border-champagne text-champagne hover:text-champagne-bright"
              }`}
            >
              {bookNow.label}
            </Link>
          </nav>
        </div>
      </div>

      {/* Reading-progress hairline along the header's bottom edge */}
      <div
        className="absolute bottom-0 inset-x-0 h-px pointer-events-none origin-left bg-gradient-to-r from-champagne/30 via-champagne/70 to-champagne"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />

      {/* Mobile nav — an editorial contents page */}
      {mobileOpen && (
        <div className="relative xl:hidden bg-noir-deep/98 backdrop-blur-md border-t border-hairline">
          <nav className="px-6 py-8 flex flex-col">
            {navLinks.map((link, i) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className="group flex items-baseline gap-4 border-b border-hairline py-4 last:border-b-0"
                >
                  <span className="font-sans text-[0.625rem] font-semibold tracking-[0.2em] text-champagne/70 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display italic text-2xl transition-colors duration-200 ${
                      active
                        ? "text-champagne"
                        : "text-ink group-hover:text-champagne-bright"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
