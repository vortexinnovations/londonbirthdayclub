import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { openClubs, getGeneralWhatsAppMessage } from "@/lib/clubs";
import ClubCard from "@/components/ClubCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import TrustSignals from "@/components/TrustSignals";
import ClubComparisonModule from "@/components/ClubComparisonModule";
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
      <section className="relative min-h-[70vh] flex items-center justify-center px-4">
        <Image src={images.hero.homepage} alt="VIP birthday celebration at a London nightclub" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Celebrate Your Birthday at London&apos;s{" "}
            <span className="text-gold">Most Exclusive Nightclubs</span>
          </h1>
          <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto mb-8 leading-relaxed [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            VIP tables, bottle service, sparklers, birthday cakes, and
            unforgettable nights at Mayfair&apos;s finest venues. We plan
            everything — you just celebrate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppCTA
              message={getGeneralWhatsAppMessage()}
              label="Plan My Birthday"
              size="large"
              className="min-w-[220px] justify-center"
            />
            <Link
              href="/best-birthday-clubs-london"
              className="inline-flex items-center justify-center min-w-[220px] px-8 py-3.5 text-base font-medium text-gold border border-gold/30 hover:bg-gold/10 rounded-full transition-all duration-200"
            >
              Explore Clubs
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto mb-14">
            Planning a birthday at a London club should be exciting, not
            stressful. We handle everything for free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-gold text-5xl font-bold mb-4 opacity-60">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Birthday Venues
          </h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto mb-14">
            Every club we work with has been personally vetted for birthday
            celebrations. From intimate Mayfair lounges to iconic superclubs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openClubs.map((club) => (
              <ClubCard key={club.slug} club={club} />
            ))}
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
            Why Plan Your Birthday With Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
            ].map((item) => (
              <div
                key={item.title}
                className="bg-bg-card border border-border rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gold mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
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

      {/* Quick Links */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-14">
            Explore Birthday Guides
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                className="block bg-bg-card hover:bg-bg-card-hover border border-border hover:border-gold/30 rounded-xl p-6 transition-all group"
              >
                <div className="text-lg font-semibold group-hover:text-gold transition-colors">
                  {link.label}
                </div>
                <div className="text-text-secondary text-sm mt-1">
                  {link.sub}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
            Frequently Asked Questions
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

      {/* Bottom CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Plan Your Birthday?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Tell us your date, group size, and vibe — we&apos;ll handle
            everything else. It takes two minutes on WhatsApp.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Start Planning on WhatsApp"
            size="large"
          />
        </div>
      </section>
    </>
  );
}
