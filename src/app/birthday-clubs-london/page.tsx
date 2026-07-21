import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { openClubs, getGeneralWhatsAppMessage, getClubWhatsAppMessage, getWhatsAppLink } from "@/lib/clubs";
import ClubComparisonModule from "@/components/ClubComparisonModule";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Birthday Clubs London — 13 Venues Compared (2026)",
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
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image
          src={images.hero.birthdayClubs}
          alt="Birthday celebrations at London nightclubs"
          fill
          className="object-cover kenburns"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 [background:var(--grad-hero)]" />
        <div className="grade" />
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
              <span className="block h-px w-10 bg-champagne/60" />
              The Directory
            </p>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
              Birthday Clubs in{" "}
              <em className="italic text-champagne font-normal">London</em>
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl mb-6">
              Thirteen premium London nightclubs that specialise in birthday
              celebrations. VIP tables, bottle service, sparklers, birthday cakes,
              and unforgettable nights — all bookable free via WhatsApp.
            </p>
            <p className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint mb-10">
              Tables from{" "}
              <span className="font-display italic font-medium text-lg normal-case tracking-normal text-champagne">
                £1,000
              </span>{" "}
              &middot; Free booking service &middot; WhatsApp support
            </p>
            <WhatsAppCTA
              message={getGeneralWhatsAppMessage()}
              label="Plan My Birthday"
              size="large"
              microcopy="Free service · Replies in minutes"
            />
          </div>
        </div>
      </section>

      {/* How It Works - Quick */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-hairline">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
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
            ].map((item, i) => (
              <div key={item.step} data-reveal data-reveal-delay={i * 90}>
                <div className="font-display italic font-medium text-5xl text-champagne/40 leading-none mb-4">
                  {item.step}
                </div>
                <h3 className="font-display font-medium text-xl text-ink mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-[0.9375rem] leading-relaxed text-ink-soft">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Directory */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Venues
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              All Birthday{" "}
              <em className="italic text-champagne font-normal">Venues</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">
              Every club listed here has been personally vetted for birthday
              celebrations. Click any venue for the full birthday guide.
            </p>
          </div>

          <div className="border-b border-hairline" data-reveal>
            {openClubs.map((club) => (
              <div
                key={club.slug}
                className="border-t border-hairline hover:border-hairline-strong py-7 transition-colors duration-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2.5">
                      <Link
                        href={`/clubs/${club.slug}`}
                        className="font-display font-semibold text-[1.375rem] leading-snug text-ink hover:text-champagne-bright transition-colors duration-300"
                      >
                        {club.name}
                      </Link>
                      <span className="inline-flex items-center border border-hairline-strong rounded-[2px] px-2.5 py-1 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                        {club.bestFor.length > 50
                          ? club.bestFor.slice(0, 50)
                          : club.bestFor}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint mb-3">
                      <span>{club.area}</span>
                      <span>
                        From{" "}
                        <span className="font-display italic font-medium text-lg normal-case tracking-normal text-champagne">
                          {club.minSpend}
                        </span>
                      </span>
                      <span>{club.musicPolicy.split(",")[0]}</span>
                      <span>{club.openingNights}</span>
                    </div>
                    <p className="font-sans text-[0.9375rem] leading-relaxed text-ink-soft line-clamp-2">
                      {club.description.slice(0, 200)}...
                    </p>
                  </div>
                  <div className="flex flex-row sm:flex-col items-baseline sm:items-end gap-x-6 gap-y-2.5 flex-shrink-0">
                    <Link
                      href={`/clubs/${club.slug}`}
                      className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] whitespace-nowrap transition-colors duration-200"
                    >
                      Full guide{" "}
                      <span className="transition-transform duration-400 group-hover:translate-x-1.5">
                        &rarr;
                      </span>
                    </Link>
                    <a
                      href={getWhatsAppLink(getClubWhatsAppMessage(club.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[0.8125rem] font-medium text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] whitespace-nowrap transition-colors duration-200"
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

      <div className="divider-gilt" />

      {/* Comparison Table */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              At a Glance
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Quick{" "}
              <em className="italic text-champagne font-normal">Comparison</em>
            </h2>
          </div>
          <div className="overflow-x-auto" data-reveal>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint py-4 pr-6 border-b border-hairline-strong">
                    Venue
                  </th>
                  <th className="text-left font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint py-4 pr-6 border-b border-hairline-strong">
                    Area
                  </th>
                  <th className="text-left font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint py-4 pr-6 border-b border-hairline-strong">
                    Min Spend
                  </th>
                  <th className="text-left font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint py-4 pr-6 border-b border-hairline-strong">
                    Music
                  </th>
                  <th className="text-left font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint py-4 pr-6 border-b border-hairline-strong">
                    Capacity
                  </th>
                  <th className="text-left font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint py-4 border-b border-hairline-strong hidden sm:table-cell">
                    Nights
                  </th>
                </tr>
              </thead>
              <tbody>
                {openClubs.map((club) => (
                  <tr
                    key={club.slug}
                    className="border-b border-hairline hover:bg-noir-soft/70 transition-colors duration-300"
                  >
                    <td className="py-5 pr-6 font-display font-medium text-lg text-ink whitespace-nowrap">
                      <Link
                        href={`/clubs/${club.slug}`}
                        className="hover:text-champagne-bright transition-colors duration-300"
                      >
                        {club.shortName}
                      </Link>
                    </td>
                    <td className="py-5 pr-6 font-sans text-[0.9375rem] text-ink-soft">
                      {club.area}
                    </td>
                    <td className="py-5 pr-6 font-display italic text-lg text-champagne whitespace-nowrap">
                      {club.minSpend}
                    </td>
                    <td className="py-5 pr-6 font-sans text-[0.9375rem] text-ink-soft">
                      {club.musicPolicy.split(",")[0]}
                    </td>
                    <td className="py-5 pr-6 font-sans text-[0.9375rem] text-ink-soft">
                      {club.capacity.split("(")[0].trim()}
                    </td>
                    <td className="py-5 font-sans text-[0.9375rem] text-ink-faint hidden sm:table-cell">
                      {club.openingNights}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Group Size Guide */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Group Size
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Which Club Fits{" "}
              <em className="italic text-champagne font-normal">Your Group?</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-14 gap-y-12">
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
            ].map((item, i) => (
              <div
                key={item.size}
                className="border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500"
                data-reveal
                data-reveal-delay={(i % 2) * 90}
              >
                <h3 className="font-display italic font-medium text-2xl text-champagne mb-3">
                  {item.size}
                </h3>
                <p className="font-sans text-base leading-[1.8] text-ink-soft mb-3">
                  {item.desc}
                </p>
                <p className="font-sans text-[0.8125rem] leading-relaxed tracking-[0.02em] text-ink-faint">
                  Best venues: {item.venues}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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

      <div className="divider-gilt" />

      {/* CTA with detailed variant */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Booking
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Ready to Book Your{" "}
              <em className="italic text-champagne font-normal">Birthday?</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">
              Have your details ready and we&apos;ll confirm your birthday
              table within minutes. Completely free.
            </p>
          </div>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Book My Birthday on WhatsApp"
            size="large"
            variant="detailed"
          />
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Explore More */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Guides
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Explore Birthday{" "}
              <em className="italic text-champagne font-normal">Guides</em>
            </h2>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-2"
            data-reveal
          >
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
                className="group block border-t border-hairline hover:border-hairline-strong px-1 pt-5 pb-6 hover:bg-noir-soft/60 transition-colors duration-300"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300">
                    {link.label}
                  </span>
                  <span className="text-champagne transition-transform duration-400 group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </div>
                <div className="font-sans text-[0.8125rem] tracking-[0.02em] text-ink-faint mt-1.5">
                  {link.sub}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* FAQ */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Good to Know
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink">
              Birthday Club London{" "}
              <em className="italic text-champagne font-normal">FAQ</em>
            </h2>
          </div>
          <div className="divide-y divide-hairline border-y border-hairline" data-reveal>
            {faqs.map((faq) => (
              <div key={faq.question} className="py-7">
                <h3 className="font-display font-medium text-lg sm:text-xl text-ink flex gap-5">
                  <span className="font-display italic text-champagne/70 select-none">
                    Q.
                  </span>
                  {faq.question}
                </h3>
                <p className="mt-3 pl-[2.15rem] font-sans text-base leading-[1.8] text-ink-soft">
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
