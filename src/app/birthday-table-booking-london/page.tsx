import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { openClubs, getGeneralWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title:
    "Birthday Table Booking London — What's Included & How It Works (2026)",
  description:
    "Everything you need to know about booking a birthday table in London. What's included in the minimum spend, birthday extras, per-person costs, and how to book for free via WhatsApp.",
  alternates: {
    canonical: "https://londonbirthdayclub.com/birthday-table-booking-london",
  },
  openGraph: {
    title: "Birthday Table Booking London | VIP Birthday Packages",
    description:
      "VIP birthday tables at London's best clubs. Bottles, sparklers, cake, and personal service from £1,000. Book free via WhatsApp.",
    url: "https://londonbirthdayclub.com/birthday-table-booking-london",
  },
};

const faqs = [
  {
    question: "How do I book a birthday table in London?",
    answer:
      "Message us on WhatsApp with your birthday date, group size, budget, and club preference (or ask for a recommendation). We'll confirm availability, arrange birthday extras, and handle the booking — all free of charge. No forms, no deposits, just a simple WhatsApp conversation.",
  },
  {
    question: "What is included in a birthday table booking?",
    answer:
      "A birthday table booking includes a reserved VIP table and seating area, your choice of premium bottles (vodka, gin, tequila, whisky, or champagne), all mixers and ice, a dedicated table host for the night, and priority entry for your group. Birthday extras like sparklers, cake, and DJ shoutouts can be arranged on top.",
  },
  {
    question: "How much is a birthday VIP table in London?",
    answer:
      "Minimum table spends start from £1,000 at most London clubs, with Tape London starting from £1,500. This is not a charge on top of drinks — it IS your drinks budget. For a group of 10, that's around £100 per person including premium bottles and VIP service.",
  },
  {
    question: "Do I need to pay a deposit for a birthday table?",
    answer:
      "Deposit requirements vary by venue and night. Some clubs require a small deposit to secure the booking, while others don't. We'll confirm the exact deposit requirement (if any) when we arrange your booking. Most deposits are deducted from your minimum spend on the night.",
  },
  {
    question: "Can I arrange a birthday cake at a London club?",
    answer:
      "Yes. Most London clubs can arrange birthday cakes for an additional cost of approximately £50-150. We handle the cake arrangement as part of your booking. Just tell us on WhatsApp and we'll coordinate delivery, timing, and presentation with sparklers.",
  },
  {
    question:
      "What happens if my group is smaller or larger than expected?",
    answer:
      "Group sizes often change closer to the date — we understand. Let us know as soon as possible if your numbers change and we'll adjust the booking. Smaller groups may still need to meet the minimum spend. Larger groups may need a higher minimum or additional tables, which we can arrange.",
  },
];

export default function BirthdayTableBookingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          {
            name: "Birthday Table Booking London",
            href: "/birthday-table-booking-london",
          },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image
          src={images.hero.tableBooking}
          alt="VIP birthday table booking at a London club"
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
              The Booking Guide
            </p>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
              Birthday Table Booking{" "}
              <em className="italic text-champagne font-normal">London</em>
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl mb-6">
              VIP birthday tables at London&apos;s most exclusive nightclubs.
              Premium bottles, sparklers, birthday cake, dedicated service —
              everything arranged for you, completely free.
            </p>
            <p className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint mb-10">
              13 venues &middot; Tables from £1,000 &middot; Book in 2 minutes
              via WhatsApp
            </p>
            <WhatsAppCTA
              message={getGeneralWhatsAppMessage()}
              label="Book a Birthday Table"
              size="large"
              microcopy="Free service · Replies in minutes"
            />
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Package
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              What&apos;s Included in a{" "}
              <em className="italic text-champagne font-normal">
                Birthday Table
              </em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">
              Every birthday table booking at a London club comes with the
              following as standard. No hidden extras.
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12"
            data-reveal
          >
            {[
              {
                title: "Premium Bottles",
                desc: "Your choice of vodka, gin, tequila, whisky, or champagne. All premium brands.",
              },
              {
                title: "Mixers & Ice",
                desc: "All juices, soft drinks, tonic, Red Bull, and ice included with your bottles.",
              },
              {
                title: "Reserved VIP Area",
                desc: "Your own table and seating area for the entire night. No sharing, no time limits.",
              },
              {
                title: "Dedicated Table Host",
                desc: "A personal host who manages your service, pours drinks, and handles requests.",
              },
              {
                title: "Priority Entry",
                desc: "Your entire birthday group gets priority entry — straight past the queue to your table.",
              },
              {
                title: "Birthday Guestlist",
                desc: "We arrange guestlist for your group so everyone gets in smoothly. Names at the door.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500"
              >
                <h3 className="font-display font-medium text-xl text-ink mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-base leading-[1.8] text-ink-soft">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Birthday Extras */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Extras
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Birthday{" "}
              <em className="italic text-champagne font-normal">Extras</em> You
              Can Add
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-14 gap-y-12">
            {[
              {
                title: "Sparkler Bottle Presentations",
                desc: "Your bottles arrive with sparklers blazing, LED signs, and a procession that lights up the room. Included at most venues.",
                included: true,
              },
              {
                title: "Birthday Cake",
                desc: "We arrange cake delivery and a sparkler-lit presentation at your table. Typically £50-150 depending on the venue.",
                included: false,
              },
              {
                title: "DJ Shoutout",
                desc: "The DJ announces your birthday to the entire club. A moment everyone in the room celebrates with you.",
                included: true,
              },
              {
                title: "Decorated Table",
                desc: "Balloons, personalised signage, and table decorations arranged before you arrive. Availability varies by venue.",
                included: false,
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500"
                data-reveal
                data-reveal-delay={i * 90}
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-display font-medium text-xl text-ink">
                    {item.title}
                  </h3>
                  {item.included && (
                    <span className="inline-flex items-center gap-1.5 border border-hairline-strong rounded-[2px] px-2.5 py-1 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                      Usually included
                    </span>
                  )}
                </div>
                <p className="font-sans text-base leading-[1.8] text-ink-soft">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Pricing Breakdown */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Budget
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Birthday Table{" "}
              <em className="italic text-champagne font-normal">Pricing</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">
              The minimum spend IS your drinks budget — not a fee on top.
              Here&apos;s how it breaks down per person at a £1,000 minimum.
            </p>
          </div>

          <div
            className="divide-y divide-hairline border-y border-hairline"
            data-reveal
          >
            {[
              { guests: "6 guests", perPerson: "~£167", note: "Intimate birthday, high per-person value" },
              { guests: "8 guests", perPerson: "~£125", note: "Great balance of group size and value" },
              { guests: "10 guests", perPerson: "~£100", note: "Most popular group size" },
              { guests: "12 guests", perPerson: "~£83", note: "Excellent value per person" },
              { guests: "15 guests", perPerson: "~£67", note: "Large group, great value" },
              { guests: "20 guests", perPerson: "~£50", note: "Best per-person value — less than a night of bar drinks" },
            ].map((row) => (
              <div
                key={row.guests}
                className="flex flex-col sm:flex-row sm:items-center px-4 py-5 gap-2 hover:bg-noir-soft/70 transition-colors duration-300"
              >
                <div className="font-display font-medium text-lg text-ink sm:w-36">
                  {row.guests}
                </div>
                <div className="font-display italic text-lg text-champagne whitespace-nowrap sm:w-28">
                  {row.perPerson}
                </div>
                <div className="font-sans text-[0.9375rem] text-ink-soft flex-1">
                  {row.note}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 font-sans text-[0.8125rem] leading-relaxed tracking-[0.02em] text-ink-faint">
            Based on £1,000 minimum spend (excluding birthday person). Tape
            London starts from £1,500. Weekend nights may have higher minimums.
          </p>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Which Club */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Venues
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Which Club for{" "}
              <em className="italic text-champagne font-normal">
                Your Birthday
              </em>{" "}
              Table?
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">
              Quick recommendations based on what matters most to your group.
            </p>
          </div>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10"
            data-reveal
          >
            {[
              {
                q: "Best entertainment?",
                a: "Cirque Le Soir — live performers and pyrotechnic bottle shows",
                slug: "cirque-le-soir",
              },
              {
                q: "Most exclusive?",
                a: "Tape London — intimate members' club, A-list crowd",
                slug: "tape-london",
              },
              {
                q: "Most iconic?",
                a: "Funky Buddha — legendary venue, celebrity history",
                slug: "funky-buddha",
              },
              {
                q: "Most daring?",
                a: "The Box London — provocative theatre meets nightclub",
                slug: "the-box-london",
              },
              {
                q: "Best for dinner + club?",
                a: "Maddox Club — Italian dining then house music dancefloor",
                slug: "maddox-club",
              },
              {
                q: "Best for big groups?",
                a: "Reign London — grand venue, aerial performances",
                slug: "reign-london",
              },
              {
                q: "Most photogenic?",
                a: "TABU — Japanese underground design, every angle looks amazing",
                slug: "tabu-london",
              },
              {
                q: "Most elegant?",
                a: "Dear Darling — chandeliers, velvet booths, exceptional cocktails",
                slug: "dear-darling",
              },
              {
                q: "Best sound system?",
                a: "BEAT London — world-class audio, house and tech house",
                slug: "beat-london",
              },
            ].map((item) => (
              <Link
                key={item.q}
                href={`/clubs/${item.slug}`}
                className="group block border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500"
              >
                <div className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300 mb-3">
                  {item.q}
                </div>
                <div className="font-sans text-[0.9375rem] leading-relaxed text-ink-soft">
                  {item.a}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Book in 3 Steps with Detailed CTA */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Booking
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Book Your{" "}
              <em className="italic text-champagne font-normal">
                Birthday Table
              </em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">
              Three details are all we need to get your birthday sorted. Have
              them ready, tap the button, and we&apos;ll take care of
              everything.
            </p>
          </div>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Book My Birthday Table"
            size="large"
            variant="detailed"
          />
        </div>
      </section>

      <div className="divider-gilt" />

      {/* All Venues Quick List */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Directory
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              All Birthday Table{" "}
              <em className="italic text-champagne font-normal">Venues</em>
            </h2>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2"
            data-reveal
          >
            {openClubs.map((club) => (
              <Link
                key={club.slug}
                href={`/clubs/${club.slug}`}
                className="group flex items-baseline justify-between gap-3 border-t border-hairline hover:border-hairline-strong px-1 pt-4 pb-4 transition-colors duration-300"
              >
                <div className="flex items-baseline gap-3 min-w-0">
                  <span className="font-display font-medium text-lg text-ink group-hover:text-champagne-bright transition-colors duration-300">
                    {club.name}
                  </span>
                  <span className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">
                    {club.area}
                  </span>
                </div>
                <span className="font-display italic text-lg text-champagne whitespace-nowrap">
                  {club.minSpend}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/birthday-clubs-london"
              className="font-sans text-[0.8125rem] tracking-[0.02em] text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200"
            >
              View full club directory &rarr;
            </Link>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* FAQ */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Good to Know
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink">
              Birthday Table Booking{" "}
              <em className="italic text-champagne font-normal">FAQ</em>
            </h2>
          </div>
          <div
            className="divide-y divide-hairline border-y border-hairline"
            data-reveal
          >
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

      {/* Final CTA */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-noir-deep">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
            Your Table Awaits
          </p>
          <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink mb-5">
            Your Birthday Table Is{" "}
            <em className="italic text-champagne font-normal">Two Minutes</em>{" "}
            Away
          </h2>
          <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft mb-10 max-w-xl mx-auto">
            Message us on WhatsApp with your date, group size, and budget.
            We&apos;ll have your birthday table confirmed within minutes.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Book on WhatsApp Now"
            size="large"
            microcopy="Free service · Replies in minutes"
          />
        </div>
      </section>
    </>
  );
}
