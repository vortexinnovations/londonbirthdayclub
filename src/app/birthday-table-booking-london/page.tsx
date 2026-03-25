import type { Metadata } from "next";
import Link from "next/link";
import { openClubs, getGeneralWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title:
    "Birthday Table Booking London | VIP Tables & Bottle Service for Birthdays",
  description:
    "Book a birthday VIP table at London's best nightclubs. From £1,000 minimum spend — includes premium bottles, sparklers, cake, and dedicated service. Free booking via WhatsApp.",
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
      <section className="relative py-20 sm:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Birthday Table Booking{" "}
            <span className="text-gold">London</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-4">
            VIP birthday tables at London&apos;s most exclusive nightclubs.
            Premium bottles, sparklers, birthday cake, dedicated service —
            everything arranged for you, completely free.
          </p>
          <p className="text-text-muted text-sm mb-8">
            13 venues &middot; Tables from £1,000 &middot; Book in 2 minutes
            via WhatsApp
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Book a Birthday Table"
            size="large"
          />
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            What&apos;s Included in a Birthday Table
          </h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto mb-12">
            Every birthday table booking at a London club comes with the
            following as standard. No hidden extras.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                className="bg-bg-card border border-border rounded-xl p-5"
              >
                <h3 className="font-semibold text-gold mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Birthday Extras */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Birthday Extras You Can Add
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
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
            ].map((item) => (
              <div
                key={item.title}
                className="bg-bg-card border border-border rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  {item.included && (
                    <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded">
                      Usually included
                    </span>
                  )}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Birthday Table Pricing
          </h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto mb-10">
            The minimum spend IS your drinks budget — not a fee on top. Here&apos;s
            how it breaks down per person at a £1,000 minimum.
          </p>

          <div className="bg-bg-card border border-border rounded-xl overflow-hidden mb-8">
            {[
              { guests: "6 guests", perPerson: "~£167", note: "Intimate birthday, high per-person value" },
              { guests: "8 guests", perPerson: "~£125", note: "Great balance of group size and value" },
              { guests: "10 guests", perPerson: "~£100", note: "Most popular group size" },
              { guests: "12 guests", perPerson: "~£83", note: "Excellent value per person" },
              { guests: "15 guests", perPerson: "~£67", note: "Large group, great value" },
              { guests: "20 guests", perPerson: "~£50", note: "Best per-person value — less than a night of bar drinks" },
            ].map((row, i) => (
              <div
                key={row.guests}
                className={`flex flex-col sm:flex-row sm:items-center px-6 py-4 gap-2 ${
                  i % 2 === 0 ? "bg-bg-card" : "bg-bg-primary"
                }`}
              >
                <div className="font-semibold sm:w-32">{row.guests}</div>
                <div className="text-gold font-bold sm:w-28">
                  {row.perPerson}
                </div>
                <div className="text-text-muted text-sm flex-1">
                  {row.note}
                </div>
              </div>
            ))}
          </div>

          <p className="text-text-muted text-sm text-center">
            Based on £1,000 minimum spend (excluding birthday person). Tape
            London starts from £1,500. Weekend nights may have higher minimums.
          </p>
        </div>
      </section>

      {/* Which Club */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Which Club for Your Birthday Table?
          </h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto mb-10">
            Quick recommendations based on what matters most to your group.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                className="block bg-bg-card border border-border hover:border-gold/30 rounded-xl p-5 transition-all group"
              >
                <div className="font-semibold text-sm mb-2 group-hover:text-gold transition-colors">
                  {item.q}
                </div>
                <div className="text-text-secondary text-sm">{item.a}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Book in 3 Steps with Detailed CTA */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Book Your Birthday Table
          </h2>
          <p className="text-text-secondary text-center text-lg mb-10">
            Three details are all we need to get your birthday sorted. Have
            them ready, tap the button, and we&apos;ll take care of everything.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Book My Birthday Table"
            size="large"
            variant="detailed"
          />
        </div>
      </section>

      {/* All Venues Quick List */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            All Birthday Table Venues
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {openClubs.map((club) => (
              <Link
                key={club.slug}
                href={`/clubs/${club.slug}`}
                className="flex items-center justify-between bg-bg-card border border-border hover:border-gold/30 rounded-lg px-4 py-3 transition-all group"
              >
                <div>
                  <span className="font-medium group-hover:text-gold transition-colors text-sm">
                    {club.name}
                  </span>
                  <span className="text-text-muted text-xs ml-2">
                    {club.area}
                  </span>
                </div>
                <span className="text-gold text-xs font-medium">
                  {club.minSpend}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/birthday-clubs-london"
              className="text-gold hover:underline text-sm"
            >
              View full club directory &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Birthday Table Booking FAQ
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

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Your Birthday Table Is Two Minutes Away
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Message us on WhatsApp with your date, group size, and budget.
            We&apos;ll have your birthday table confirmed within minutes.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Book on WhatsApp Now"
            size="large"
          />
        </div>
      </section>
    </>
  );
}
