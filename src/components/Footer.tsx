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
    <footer className="bg-bg-secondary border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-gold font-bold text-lg mb-4">
              London Birthday Club
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              The ultimate guide to celebrating your birthday at London&apos;s
              most exclusive nightclubs. Free planning, expert advice, VIP
              access.
            </p>
          </div>

          {/* Club Pages */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
              Birthday Venues
            </h4>
            <ul className="space-y-2">
              {openClubs.slice(0, 7).map((club) => (
                <li key={club.slug}>
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="text-text-secondary hover:text-gold text-sm transition-colors"
                  >
                    {club.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
              More Venues
            </h4>
            <ul className="space-y-2">
              {openClubs.slice(7).map((club) => (
                <li key={club.slug}>
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="text-text-secondary hover:text-gold text-sm transition-colors"
                  >
                    {club.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides col 1 */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
              Birthday Guides
            </h4>
            <ul className="space-y-2">
              {guideLinks.slice(0, 9).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides col 2 */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
              More Guides
            </h4>
            <ul className="space-y-2">
              {guideLinks.slice(9).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} London Birthday Club. All rights
            reserved. Helping you celebrate at London&apos;s finest nightclubs.
          </p>
        </div>
      </div>
    </footer>
  );
}
