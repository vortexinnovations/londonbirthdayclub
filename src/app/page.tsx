import type { Metadata } from "next";
import Link from "next/link";
import { openClubs, getGeneralWhatsAppMessage } from "@/lib/clubs";
import ClubCard from "@/components/ClubCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title:
    "London Birthday Club | Celebrate Your Birthday at London's Best Nightclubs",
  description:
    "Plan the perfect birthday night out at London's most exclusive clubs. VIP tables, bottle service, sparklers, birthday cakes and more at Mayfair's finest venues. Free planning, book via WhatsApp.",
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
      <section className="relative py-24 sm:py-32 lg:py-40 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Celebrate Your Birthday at London&apos;s{" "}
            <span className="text-gold">Most Exclusive Nightclubs</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            VIP tables, bottle service, sparklers, birthday cakes, and
            unforgettable nights at Mayfair&apos;s finest venues. We plan
            everything — you just celebrate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCTA
              message={getGeneralWhatsAppMessage()}
              label="Plan My Birthday"
              size="large"
            />
            <Link
              href="/best-birthday-clubs-london"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gold border border-gold/30 hover:bg-gold/10 rounded-lg transition-all"
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
                <div className="text-gold text-5xl font-bold mb-4 opacity-30">
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

      {/* Quick Links */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-14">
            Explore Birthday Guides
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
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
