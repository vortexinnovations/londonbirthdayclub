import Link from "next/link";
import { openClubs } from "@/lib/clubs";

const guideLinks = [
  { href: "/birthday-clubs-london", label: "Birthday Clubs London" },
  { href: "/birthday-table-booking-london", label: "Table Booking Guide" },
  { href: "/birthday-table-prices-london", label: "Table Prices" },
  { href: "/vip-birthday-tables-london", label: "VIP Birthday Tables" },
  { href: "/best-birthday-clubs-london", label: "Best Birthday Clubs" },
  { href: "/group-night-out-london", label: "Group Night Out" },
  { href: "/best-clubs-for-large-groups-london", label: "Large Groups" },
  { href: "/birthday-guestlist-vs-table-booking", label: "Guestlist vs Table" },
  { href: "/how-to-plan-a-birthday-night-in-mayfair", label: "Mayfair Guide" },
  { href: "/18th-birthday-clubs-london", label: "18th Birthday" },
  { href: "/21st-birthday-clubs-london", label: "21st Birthday" },
  { href: "/30th-birthday-night-out-london", label: "30th Birthday" },
  { href: "/birthday-by-age", label: "Birthday by Age" },
  { href: "/birthday-by-night", label: "Birthday by Night" },
  { href: "/plan-birthday-london-club", label: "Planning Guide" },
  { href: "/book-birthday", label: "Book Your Birthday" },
  { href: "/blog", label: "Birthday Blog" },
];

export default function Footer() {
  return (
    <footer className="bg-noir-deep mt-auto">
      <div className="divider-gilt" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-display italic text-4xl sm:text-5xl text-ink/90 mb-14">
          London Birthday Club
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              The Service
            </h3>
            <p className="font-sans text-[0.9375rem] text-ink-soft leading-[1.8]">
              The ultimate guide to celebrating your birthday at London&apos;s
              most exclusive nightclubs. Free planning, expert advice, VIP
              access.
            </p>
          </div>

          {/* Club Pages */}
          <div>
            <h4 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              Birthday Venues
            </h4>
            <ul className="space-y-2.5">
              {openClubs.slice(0, 7).map((club) => (
                <li key={club.slug}>
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="font-sans text-[0.9375rem] text-ink-soft hover:text-champagne-bright transition-colors duration-200"
                  >
                    {club.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              More Venues
            </h4>
            <ul className="space-y-2.5">
              {openClubs.slice(7).map((club) => (
                <li key={club.slug}>
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="font-sans text-[0.9375rem] text-ink-soft hover:text-champagne-bright transition-colors duration-200"
                  >
                    {club.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides col 1 */}
          <div>
            <h4 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              Birthday Guides
            </h4>
            <ul className="space-y-2.5">
              {guideLinks.slice(0, 9).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[0.9375rem] text-ink-soft hover:text-champagne-bright transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides col 2 */}
          <div>
            <h4 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              More Guides
            </h4>
            <ul className="space-y-2.5">
              {guideLinks.slice(9).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[0.9375rem] text-ink-soft hover:text-champagne-bright transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-hairline mt-16 pt-8">
          <p className="font-sans text-[0.8125rem] tracking-[0.02em] text-ink-faint">
            &copy; {new Date().getFullYear()} London Birthday Club. All rights
            reserved. Helping you celebrate at London&apos;s finest nightclubs.
          </p>
        </div>
      </div>
    </footer>
  );
}
