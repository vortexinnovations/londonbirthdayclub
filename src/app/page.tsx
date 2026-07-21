import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { openClubs, getGeneralWhatsAppMessage } from "@/lib/clubs";
import ClubCard from "@/components/ClubCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import TrustSignals from "@/components/TrustSignals";
import ClubComparisonModule from "@/components/ClubComparisonModule";
import VenueTicker from "@/components/VenueTicker";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title:
    "London Birthday Club — VIP Birthday Tables at London's Best Nightclubs",
  description:
    "Free birthday planning at London's top nightclubs. VIP tables from £1,000 with sparklers, cake, and bottle service at Cirque Le Soir, Tape, Funky Buddha & more. Book instantly via WhatsApp.",
  alternates: { canonical: "https://londonbirthdayclub.com" },
};

const faqs = [
  {
    question: "How does London Birthday Club work?",
    answer:
      "We're a free birthday planning service. You tell us your birthday details via WhatsApp — date, group size, budget, and preferences — and we'll recommend the perfect club, handle the booking, and make sure your night is sorted. There's no charge for our service.",
  },
  {
    question: "Is there a fee for using London Birthday Club?",
    answer:
      "No. Our service is completely free. You only pay the minimum spend at the club you choose, which covers your bottles and table for the night.",
  },
  {
    question: "What is the minimum spend for a birthday table in London?",
    answer:
      "Minimum spends start from around £1,000 at most Mayfair clubs and can go higher on peak nights (Fridays and Saturdays) or for premium table positions. This covers bottles for your group — it's not an additional fee on top of drinks.",
  },
  {
    question: "Do clubs provide birthday extras like cake and sparklers?",
    answer:
      "Yes, most London clubs offer birthday packages including sparkler-adorned bottle deliveries, birthday cake arrangements, personalised DJ shoutouts, and decorated tables. Availability varies by venue and night — we'll confirm exactly what's included when you book.",
  },
  {
    question: "How far in advance should I book a birthday table?",
    answer:
      "We recommend booking at least 1-2 weeks in advance, especially for Friday and Saturday nights. Popular clubs like Tape London and Cirque Le Soir fill up quickly. For milestone birthdays (21st, 30th, etc.) with large groups, 3-4 weeks ahead is ideal.",
  },
];

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative min-h-[88vh] img-editorial flex items-end sm:items-center overflow-hidden">
        <Image
          src={images.hero.homepage}
          alt="VIP birthday celebration at a London nightclub"
          fill
          className="object-cover kenburns"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 [background:var(--grad-hero)]" />
        <div className="grade" />
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 sm:pb-24">
          <div className="max-w-3xl">
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
              <span className="block h-px w-10 bg-champagne/60" />
              Mayfair · Est. London
            </p>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
              Celebrate Your Birthday at London&apos;s{" "}
              <em className="italic text-champagne font-normal">
                Most Exclusive
              </em>{" "}
              Nightclubs
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl mb-10">
              VIP tables, bottle service, sparklers, birthday cakes, and
              unforgettable nights at Mayfair&apos;s finest venues. We plan
              everything — you just celebrate.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <WhatsAppCTA
                message={getGeneralWhatsAppMessage()}
                label="Plan My Birthday"
                size="large"
                microcopy="Free service · Replies in minutes"
              />
              <Link
                href="/best-birthday-clubs-london"
                className="inline-flex items-center justify-center gap-2 border border-hairline-strong hover:border-champagne text-champagne hover:text-champagne-bright font-sans text-[0.8125rem] font-bold uppercase tracking-[0.16em] px-9 py-[15px] rounded-[2px] transition-colors duration-300 sm:mb-7"
              >
                Explore Clubs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <VenueTicker />

      {/* How It Works */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Service
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              How It <em className="italic text-champagne font-normal">Works</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">
              Planning a birthday at a London club should be exciting, not
              stressful. We handle everything for free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
            {[
              {
                step: "01",
                title: "Choose Your Club",
                description:
                  "Browse our venue guide or tell us your vibe — group size, music taste, budget — and we'll recommend the perfect club for your birthday.",
              },
              {
                step: "02",
                title: "Message Us on WhatsApp",
                description:
                  "Send us your birthday details via WhatsApp. We'll confirm availability, arrange birthday extras, and handle all the booking details.",
              },
              {
                step: "03",
                title: "Celebrate",
                description:
                  "Turn up on the night and enjoy VIP treatment — your table, bottles, sparklers, and birthday extras are all sorted. You just have a great time.",
              },
            ].map((item, i) => (
              <div key={item.step} data-reveal data-reveal-delay={i * 90}>
                <div className="font-display italic font-medium text-6xl sm:text-7xl text-champagne/40 leading-none mb-5">
                  {item.step}
                </div>
                <h3 className="font-display font-medium text-xl text-ink mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-base leading-[1.8] text-ink-soft">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Club Grid */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Venues
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Birthday <em className="italic text-champagne font-normal">Venues</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">
              Every club we work with has been personally vetted for birthday
              celebrations. From intimate Mayfair lounges to iconic superclubs.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
            data-reveal
          >
            {openClubs.map((club) => (
              <ClubCard key={club.slug} club={club} />
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      <TrustSignals />

      {/* Why Choose Us */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Why Us
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Why Plan Your Birthday{" "}
              <em className="italic text-champagne font-normal">With Us</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-12">
            {[
              {
                title: "Completely Free Service",
                description:
                  "We don't charge you a penny. You only pay the club's minimum spend — the same price you'd pay booking directly, but with expert guidance and support.",
              },
              {
                title: "Birthday Specialists",
                description:
                  "We don't do corporate events or hen parties. Birthdays are all we do, and we know exactly what makes a birthday celebration work at every venue.",
              },
              {
                title: "Genuine Insider Knowledge",
                description:
                  "We know which club suits which kind of birthday. A 25th birthday crew wants something different from a 30th — we'll match you perfectly.",
              },
              {
                title: "WhatsApp, Not Forms",
                description:
                  "No lengthy booking forms or waiting for email replies. Message us on WhatsApp, get an instant conversation, and have your night sorted in minutes.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="group border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500"
                data-reveal
                data-reveal-delay={(i % 2) * 90}
              >
                <h3 className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300 mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-base leading-[1.8] text-ink-soft">
                  {item.description}
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
            title="Find Your Perfect Birthday Club"
            categories={[
              { label: "Best for 6-10 Guests", description: "Intimate celebrations", clubs: ["tape-london", "tabu-london", "dear-darling", "scotch-of-st-james"] },
              { label: "Best for 15+ Guests", description: "Large group energy", clubs: ["reign-london", "beat-london", "cuckoo-club", "luna-club-london"] },
              { label: "Best for Entertainment", description: "Performers and spectacle", clubs: ["cirque-le-soir", "the-box-london", "reign-london"] },
              { label: "Best for Hip-Hop & RnB", description: "The right soundtrack", clubs: ["funky-buddha", "tabu-london", "cuckoo-club"] },
              { label: "Best for Dinner + Club", description: "Complete evening", clubs: ["maddox-club", "dear-darling"] },
              { label: "Best on a Budget", description: "Midweek value", clubs: ["cuckoo-club", "cirque-le-soir", "funky-buddha"] },
            ]}
          />
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Quick Links */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2" data-reveal>
            {[
              {
                href: "/birthday-clubs-london",
                label: "Birthday Clubs London",
                sub: "All 13 venues compared",
              },
              {
                href: "/birthday-table-booking-london",
                label: "Table Booking Guide",
                sub: "Pricing & packages",
              },
              {
                href: "/best-birthday-clubs-london",
                label: "Best Birthday Clubs",
                sub: "Ranked guide",
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
              {
                href: "/birthday-by-night",
                label: "By Night of Week",
                sub: "Which night suits you",
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

      {/* FAQ Section */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Good to Know
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink">
              Frequently Asked{" "}
              <em className="italic text-champagne font-normal">Questions</em>
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

      <div className="divider-gilt" />

      {/* Bottom CTA */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-noir-deep">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
            The Guest List Awaits
          </p>
          <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink mb-5">
            Ready to Plan Your{" "}
            <em className="italic text-champagne font-normal">Birthday?</em>
          </h2>
          <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft mb-10 max-w-xl mx-auto">
            Tell us your date, group size, and vibe — we&apos;ll handle
            everything else. It takes two minutes on WhatsApp.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Start Planning on WhatsApp"
            size="large"
            microcopy="Free service · Replies in minutes"
          />
        </div>
      </section>
    </>
  );
}
