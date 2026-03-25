import type { Metadata } from "next";
import Link from "next/link";
import { openClubs, getGeneralWhatsAppMessage, getClubWhatsAppMessage } from "@/lib/clubs";
import ClubComparisonModule from "@/components/ClubComparisonModule";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Birthday Clubs London — 13 Venues Compared (Prices, Music & Group Size)",
  description:
    "Compare 13 London birthday clubs side by side — minimum spends, music, group size, and what makes each one great for birthdays. Tables from £1,000. Free booking via WhatsApp.",
  alternates: {
    canonical: "https://londonbirthdayclub.com/birthday-clubs-london",
  },
  openGraph: {
    title: "Birthday Clubs in London | Find Your Perfect Venue",
    description:
      "Compare 13 London nightclubs for birthday celebrations. VIP tables, bottle service, birthday packages. Free booking via WhatsApp.",
    url: "https://londonbirthdayclub.com/birthday-clubs-london",
  },
};

const faqs = [
  {
    question: "What are the best birthday clubs in London?",
    answer:
      "The best birthday clubs in London include Cirque Le Soir (for live entertainment and spectacle), Tape London (for exclusive, intimate celebrations), Funky Buddha (for iconic celebrity energy), The Box (for provocative theatrical performances), and Reign London (for large group spectacles). All offer VIP table packages with birthday extras like sparklers, cake, and DJ shoutouts.",
  },
  {
    question: "How much does a birthday club table cost in London?",
    answer:
      "Birthday table minimum spends at London clubs start from £1,000 at most venues, with Tape London starting from £1,500. This covers premium bottles, mixers, and a reserved table for your group. Split across 10 people, that's around £100 per person — comparable to buying individual drinks all night but with VIP service included.",
  },
  {
    question: "Can you get a birthday guestlist at London clubs?",
    answer:
      "Yes. When you book a birthday table through us, guestlist entry for your group is included. Your guests will have priority entry and go straight to your reserved table. For larger groups where not everyone is on the table, we can arrange additional guestlist spots so everyone gets in smoothly.",
  },
  {
    question: "Do London clubs do anything special for birthdays?",
    answer:
      "Most London clubs offer birthday extras including sparkler-adorned bottle deliveries, birthday cake arrangements, personalised DJ shoutouts, decorated tables, and priority entry. Some venues like Cirque Le Soir and The Box have performers who interact directly with birthday groups. Availability varies by venue and night.",
  },
  {
    question: "How far in advance should I book a birthday club in London?",
    answer:
      "We recommend booking 1-2 weeks ahead for standard weekends, and 3-4 weeks for milestone birthdays or large groups. Popular venues like Tape London and Cirque Le Soir fill up fastest. Weeknight birthdays (Tuesday-Thursday) are easier to secure on shorter notice.",
  },
];

export default function BirthdayClubsLondonPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Birthday Clubs London", href: "/birthday-clubs-london" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Birthday Clubs in{" "}
            <span className="text-gold">London</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-4">
            Thirteen premium London nightclubs that specialise in birthday
            celebrations. VIP tables, bottle service, sparklers, birthday cakes,
            and unforgettable nights — all bookable free via WhatsApp.
          </p>
          <p className="text-text-muted text-sm mb-8">
            Tables from £1,000 &middot; Free booking service &middot; WhatsApp
            support
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Plan My Birthday"
            size="large"
          />
        </div>
      </section>

      {/* How It Works - Quick */}
      <section className="py-12 px-4 bg-bg-secondary border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                step: "1",
                title: "Pick a Club",
                desc: "Browse the venues below or tell us your vibe and we'll recommend one.",
              },
              {
                step: "2",
                title: "Message on WhatsApp",
                desc: "Send your group size, date, and budget. We confirm availability instantly.",
              },
              {
                step: "3",
                title: "Celebrate",
                desc: "Arrive on the night — your table, bottles, and birthday extras are sorted.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gold/10 text-gold font-bold flex items-center justify-center text-lg mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Directory */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            All Birthday Venues
          </h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto mb-12">
            Every club listed here has been personally vetted for birthday
            celebrations. Click any venue for the full birthday guide.
          </p>

          <div className="space-y-4">
            {openClubs.map((club) => (
              <div
                key={club.slug}
                className="bg-bg-card border border-border hover:border-gold/20 rounded-xl p-5 sm:p-6 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <Link
                        href={`/clubs/${club.slug}`}
                        className="text-xl font-bold hover:text-gold transition-colors"
                      >
                        {club.name}
                      </Link>
                      <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded">
                        {club.bestFor.length > 50
                          ? club.bestFor.slice(0, 50)
                          : club.bestFor}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-text-muted mb-3">
                      <span>{club.area}</span>
                      <span>From {club.minSpend}</span>
                      <span>{club.musicPolicy.split(",")[0]}</span>
                      <span>{club.openingNights}</span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                      {club.description.slice(0, 200)}...
                    </p>
                  </div>
                  <div className="flex flex-row sm:flex-col gap-2 flex-shrink-0">
                    <Link
                      href={`/clubs/${club.slug}`}
                      className="text-sm text-gold font-medium hover:underline whitespace-nowrap"
                    >
                      Full guide &rarr;
                    </Link>
                    <a
                      href={`https://wa.me/447880662708?text=${encodeURIComponent(
                        `Hi, I'd like to book a birthday table at ${club.name}. Here are my details:\n\nBirthday person's name:\nDate:\nGroup size:\nBudget:\nAny requests (cake, decorations, surprises):`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-whatsapp font-medium hover:underline whitespace-nowrap"
                    >
                      Book via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Quick Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-text-muted font-medium">
                    Venue
                  </th>
                  <th className="text-left py-3 px-4 text-text-muted font-medium">
                    Area
                  </th>
                  <th className="text-left py-3 px-4 text-text-muted font-medium">
                    Min Spend
                  </th>
                  <th className="text-left py-3 px-4 text-text-muted font-medium">
                    Music
                  </th>
                  <th className="text-left py-3 px-4 text-text-muted font-medium">
                    Capacity
                  </th>
                  <th className="text-left py-3 px-4 text-text-muted font-medium hidden sm:table-cell">
                    Nights
                  </th>
                </tr>
              </thead>
              <tbody>
                {openClubs.map((club, i) => (
                  <tr
                    key={club.slug}
                    className={`border-b border-border/50 ${
                      i % 2 === 0 ? "" : "bg-bg-card/50"
                    }`}
                  >
                    <td className="py-3 px-4">
                      <Link
                        href={`/clubs/${club.slug}`}
                        className="font-medium text-text-primary hover:text-gold transition-colors"
                      >
                        {club.shortName}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-text-secondary">
                      {club.area}
                    </td>
                    <td className="py-3 px-4 text-gold font-medium">
                      {club.minSpend}
                    </td>
                    <td className="py-3 px-4 text-text-secondary">
                      {club.musicPolicy.split(",")[0]}
                    </td>
                    <td className="py-3 px-4 text-text-secondary">
                      {club.capacity.split("(")[0].trim()}
                    </td>
                    <td className="py-3 px-4 text-text-muted hidden sm:table-cell">
                      {club.openingNights}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Group Size Guide */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Which Club Fits Your Group?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                size: "5–10 guests",
                venues: "Tape London, TABU, Dear Darling, Scotch of St James",
                desc: "Intimate venues where smaller groups feel VIP. Personal service, concentrated energy.",
              },
              {
                size: "10–15 guests",
                venues: "Cirque Le Soir, Funky Buddha, Cuckoo Club, Selene",
                desc: "The sweet spot. Big enough for energy, small enough for cohesion.",
              },
              {
                size: "15–25 guests",
                venues: "Reign London, The Box, Luna Club, Cuckoo Club",
                desc: "Large capacity venues with space for bigger groups without feeling cramped.",
              },
              {
                size: "25+ guests",
                venues: "Reign London, BEAT London",
                desc: "The biggest venues with multi-table configurations for major celebrations.",
              },
            ].map((item) => (
              <div
                key={item.size}
                className="bg-bg-card border border-border rounded-xl p-6"
              >
                <h3 className="text-gold font-bold text-lg mb-2">
                  {item.size}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  {item.desc}
                </p>
                <p className="text-text-muted text-xs">
                  Best venues: {item.venues}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <ClubComparisonModule
            title="Quick Match: Best Club for Your Birthday"
            categories={[
              { label: "Best for 6-10 Guests", description: "Intimate celebrations", clubs: ["tape-london", "tabu-london", "dear-darling", "scotch-of-st-james"] },
              { label: "Best for 15+ Guests", description: "Big group energy", clubs: ["reign-london", "beat-london", "cuckoo-club", "the-box-london"] },
              { label: "Best for Entertainment", description: "Performers & spectacle", clubs: ["cirque-le-soir", "the-box-london", "reign-london"] },
              { label: "Best for Elegance", description: "Refined celebrations", clubs: ["dear-darling", "maddox-club", "selene-london"] },
              { label: "Best for Hip-Hop", description: "The right playlist", clubs: ["funky-buddha", "tabu-london", "cuckoo-club"] },
              { label: "Best for House Music", description: "Groove all night", clubs: ["maddox-club", "beat-london", "selene-london"] },
            ]}
          />
        </div>
      </section>

      {/* CTA with detailed variant */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Ready to Book Your Birthday?
          </h2>
          <p className="text-text-secondary text-center text-lg mb-8">
            Have your details ready and we&apos;ll confirm your birthday
            table within minutes. Completely free.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Book My Birthday on WhatsApp"
            size="large"
            variant="detailed"
          />
        </div>
      </section>

      {/* Explore More */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Explore Birthday Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                href: "/birthday-table-booking-london",
                label: "Table Booking Guide",
                sub: "Pricing & packages",
              },
              {
                href: "/best-birthday-clubs-london",
                label: "Ranked Club Guide",
                sub: "Our top picks",
              },
              {
                href: "/birthday-by-age",
                label: "Birthday by Age",
                sub: "21st to 50th",
              },
              {
                href: "/plan-birthday-london-club",
                label: "Planning Guide",
                sub: "Step by step",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block bg-bg-card hover:bg-bg-card-hover border border-border hover:border-gold/30 rounded-xl p-5 transition-all group"
              >
                <div className="font-semibold group-hover:text-gold transition-colors text-sm">
                  {link.label}
                </div>
                <div className="text-text-muted text-xs mt-1">{link.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Birthday Club London FAQ
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-bg-card border border-border rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
