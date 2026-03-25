import Link from "next/link";
import { clubs } from "@/lib/clubs";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
              {clubs.slice(0, 7).map((club) => (
                <li key={club.slug}>
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="text-text-secondary hover:text-gold text-sm transition-colors"
                  >
                    {club.name} Birthday
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
              {clubs.slice(7).map((club) => (
                <li key={club.slug}>
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="text-text-secondary hover:text-gold text-sm transition-colors"
                  >
                    {club.name} Birthday
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
              Birthday Guides
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/best-birthday-clubs-london"
                  className="text-text-secondary hover:text-gold text-sm transition-colors"
                >
                  Best Birthday Clubs
                </Link>
              </li>
              <li>
                <Link
                  href="/birthday-by-age"
                  className="text-text-secondary hover:text-gold text-sm transition-colors"
                >
                  Birthday by Age
                </Link>
              </li>
              <li>
                <Link
                  href="/plan-birthday-london-club"
                  className="text-text-secondary hover:text-gold text-sm transition-colors"
                >
                  Planning Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/birthday-by-night"
                  className="text-text-secondary hover:text-gold text-sm transition-colors"
                >
                  Birthday by Night
                </Link>
              </li>
              <li>
                <Link
                  href="/book-birthday"
                  className="text-text-secondary hover:text-gold text-sm transition-colors"
                >
                  Book Your Birthday
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-text-secondary hover:text-gold text-sm transition-colors"
                >
                  Birthday Blog
                </Link>
              </li>
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
