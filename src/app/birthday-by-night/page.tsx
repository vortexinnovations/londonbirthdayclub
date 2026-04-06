import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { getGeneralWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title:
    "Best Night of the Week for a Birthday in London — Weekday vs Weekend",
  description:
    "Which night of the week is best for your birthday? A guide to Tuesday–Saturday birthday celebrations at London clubs — atmosphere, pricing, and which venues are open each night.",
  alternates: {
    canonical: "https://londonbirthdayclub.com/birthday-by-night",
  },
  openGraph: { url: "https://londonbirthdayclub.com/birthday-by-night" },
};

const faqs = [
  {
    question: "Is Saturday the best night for a birthday at a London club?",
    answer:
      "Saturday has the biggest atmosphere and the fullest rooms, but it also has the highest minimum spends and the most competition for table positions. If a packed, high-energy room is your priority, Saturday is ideal. But Thursday and Friday can offer better value and more attentive service with only slightly less energy.",
  },
  {
    question: "Can I celebrate my birthday at a London club on a weeknight?",
    answer:
      "Absolutely. Many London clubs are open Tuesday through Saturday. Weeknight birthdays (Tuesday-Thursday) often come with lower minimum spends, more attentive service, and easier bookings. The atmosphere is slightly more intimate but still genuinely fun — and for some birthday groups, that's actually preferable.",
  },
  {
    question: "Which London clubs are open on a Thursday?",
    answer:
      "Thursday is a popular night in Mayfair with several top clubs open: Tape London, TABU, Maddox Club, Scotch of St James, Cuckoo Club, Dear Darling, and The Box London all operate on Thursday nights. It's an excellent night for birthdays with strong atmosphere and lower minimum spends than weekends.",
  },
];

const nights = [
  {
    day: "Tuesday",
    slug: "tuesday",
    energy: "Relaxed but fun",
    minSpendNote: "Lowest minimums available",
    venuesOpen: ["Cuckoo Club"],
    description:
      "Tuesday is the most intimate night for a birthday celebration in London. Only a handful of venues operate, which means smaller crowds and genuine personal attention. Cuckoo Club runs a popular Tuesday night that attracts a loyal crowd — it's a more relaxed atmosphere than the weekend, but the two-floor layout still delivers a proper night out.",
    bestFor:
      "Birthday groups who want an intimate, laid-back celebration without the weekend crowds. Great for smaller groups of 6–10 who prefer conversation alongside their cocktails.",
    considerations:
      "Limited venue choice means less flexibility. But if Cuckoo suits your group's style, a Tuesday birthday is the best value option in London with the most personal service you'll get at any Mayfair club.",
  },
  {
    day: "Wednesday",
    slug: "wednesday",
    energy: "Building momentum",
    minSpendNote: "Lower than weekend, great value",
    venuesOpen: ["Cirque Le Soir", "Funky Buddha"],
    description:
      "Wednesday is an underrated birthday night. Cirque Le Soir's Wednesday offering is particularly noteworthy — you still get the full circus experience with live performers, but the atmosphere is slightly more intimate than Friday. Funky Buddha also runs a legendary Wednesday night with its signature hip-hop energy and iconic atmosphere.",
    bestFor:
      "Birthday groups who want the big-venue experience without the peak-weekend price tag. A Wednesday Cirque birthday gives you the performers and spectacle at a more accessible minimum spend.",
    considerations:
      "The atmosphere is still strong but won't match a peak Saturday. For many birthday groups, that's actually an advantage — more space, more attention, same performers.",
  },
  {
    day: "Thursday",
    slug: "thursday",
    energy: "Strong and social",
    minSpendNote: "Moderate — strong value for the atmosphere",
    venuesOpen: [
      "Tape London",
      "TABU London",
      "Maddox Club",
      "Scotch of St James",
      "Cuckoo Club",
      "Dear Darling",
      "The Box London",
    ],
    description:
      "Thursday is the sweet spot for London birthday celebrations. Nearly every major Mayfair venue is open, the atmosphere is genuinely lively, and minimum spends are lower than weekends. The crowd on a Thursday tends to be slightly more industry-connected and fashion-forward — people who know the scene.",
    bestFor:
      "Birthday groups who want a proper Mayfair night out with the widest venue choice and best value. Thursday delivers 80% of the weekend atmosphere at 60-70% of the cost.",
    considerations:
      "The only potential downside is that some of your guests might have work the next morning. But for most people, a Thursday birthday is well worth the slightly rough Friday at the office.",
  },
  {
    day: "Friday",
    slug: "friday",
    energy: "High energy, weekend vibes",
    minSpendNote: "Full weekend pricing",
    venuesOpen: [
      "Tape London",
      "Cirque Le Soir",
      "Reign London",
      "TABU London",
      "Funky Buddha",
      "Maddox Club",
      "Scotch of St James",
      "Cuckoo Club",
      "Dear Darling",
      "BEAT London",
      "The Box London",
      "Luna Club London",
      "Selene London",
    ],
    description:
      "Friday is when London nightlife hits its stride. Every venue is open, the energy is high, and the crowd is ready to celebrate. For birthdays, Friday offers the biggest choice of venues and consistently strong atmospheres across the board. Cirque Le Soir often has its best performance lineup on Fridays.",
    bestFor:
      "Birthday groups who want the full weekend atmosphere with maximum venue choice. Friday is the go-to night if you want a big, energetic celebration and your group can commit to a proper night out.",
    considerations:
      "Higher minimum spends than midweek, and some venues may feel very busy. Book your preferred table position early — the best spots go first on Fridays.",
  },
  {
    day: "Saturday",
    slug: "saturday",
    energy: "Peak energy, the biggest night",
    minSpendNote: "Highest minimums, peak pricing",
    venuesOpen: [
      "Tape London",
      "Cirque Le Soir",
      "Reign London",
      "TABU London",
      "Funky Buddha",
      "Maddox Club",
      "Scotch of St James",
      "Cuckoo Club",
      "Dear Darling",
      "BEAT London",
      "The Box London",
      "Luna Club London",
      "Selene London",
    ],
    description:
      "Saturday is the biggest night in London nightlife. Every venue operates at full capacity, the atmosphere peaks, and the energy is at its absolute maximum. For birthdays, a Saturday night means your celebration happens when the room is at its most electric. The downside is the highest minimum spends and the most competition for premium table positions.",
    bestFor:
      "Birthday groups who want the biggest, most energetic celebration possible and are willing to pay premium pricing for a peak-night experience. Saturday is the night if atmosphere is your top priority.",
    considerations:
      "Book as early as possible — Saturday tables are the first to sell out. Minimum spends are at their highest, and premium table positions go quickly. If budget is a concern, Thursday or Friday delivers nearly as much atmosphere at a better price.",
  },
];

export default function BirthdayByNightPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Birthday by Night", href: "/birthday-by-night" }]} />

      <section className="relative min-h-[50vh] flex items-center justify-center px-4">
        <Image src={images.hero.birthdayByNight} alt="London nightclub atmosphere on different nights of the week" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Best Night for a Birthday in{" "}
            <span className="text-gold">London</span>
          </h1>
          <p className="text-lg text-white max-w-2xl [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] leading-relaxed">
            Your birthday doesn&apos;t have to fall on a Saturday to be
            incredible. Here&apos;s how each night of the week compares for
            birthday celebrations — atmosphere, pricing, and which clubs are
            open.
          </p>
        </div>
      </section>

      {/* Quick Jump */}
      <section className="py-6 px-4 bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 justify-center">
          {nights.map((n) => (
            <a
              key={n.slug}
              href={`#${n.slug}`}
              className="text-sm bg-bg-card border border-border hover:border-gold/30 px-4 py-2 rounded-lg text-text-secondary hover:text-gold transition-colors"
            >
              {n.day}
            </a>
          ))}
        </div>
      </section>

      {/* Night Sections */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {nights.map((night) => (
            <div key={night.slug} id={night.slug} className="scroll-mt-24">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h2 className="text-3xl font-bold">{night.day} Birthday</h2>
                <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded">
                  {night.energy}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-text-muted mb-6">
                <span>{night.minSpendNote}</span>
                <span>{night.venuesOpen.length} venues open</span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-6">
                {night.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-bg-card border border-border rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-gold mb-2">
                    Best For
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {night.bestFor}
                  </p>
                </div>
                <div className="bg-bg-card border border-border rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-gold mb-2">
                    Things to Consider
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {night.considerations}
                  </p>
                </div>
              </div>

              <div className="bg-bg-secondary border border-border rounded-xl p-5">
                <h3 className="text-sm font-semibold mb-3">
                  Venues Open on {night.day}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {night.venuesOpen.map((venue) => {
                    const slugMap: Record<string, string> = {
                      "Tape London": "tape-london",
                      "Cirque Le Soir": "cirque-le-soir",
                      "Reign London": "reign-london",
                      "TABU London": "tabu-london",
                      "Funky Buddha": "funky-buddha",
                      "Maddox Club": "maddox-club",
                      "Scotch of St James": "scotch-of-st-james",
                      "Cuckoo Club": "cuckoo-club",
                      "Dear Darling": "dear-darling",
                      "BEAT London": "beat-london",
                      "The Box London": "the-box-london",
                      "Luna Club London": "luna-club-london",
                      "Selene London": "selene-london",
                    };
                    return (
                      <Link
                        key={venue}
                        href={`/clubs/${slugMap[venue] || "#"}`}
                        className="text-sm bg-bg-card border border-border hover:border-gold/30 px-3 py-1.5 rounded-lg text-text-secondary hover:text-gold transition-colors"
                      >
                        {venue}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary comparison */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            At a Glance: Which Night Should You Choose?
          </h2>
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            {nights.map((n, i) => (
              <div
                key={n.day}
                className={`flex flex-col sm:flex-row sm:items-center px-6 py-4 gap-2 sm:gap-6 ${
                  i % 2 === 0 ? "bg-bg-card" : "bg-bg-primary"
                }`}
              >
                <div className="font-semibold sm:w-28">{n.day}</div>
                <div className="text-text-secondary text-sm flex-1">
                  {n.energy}
                </div>
                <div className="text-text-muted text-sm sm:w-48 sm:text-right">
                  {n.venuesOpen.length} venues &middot;{" "}
                  {n.minSpendNote.split(",")[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Birthday Night FAQ
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

      {/* CTA */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Not Sure Which Night? Ask Us
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Tell us your birthday date and preferences — we&apos;ll tell you
            which venues and nights are the best fit.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Get Night Advice on WhatsApp"
            size="large"
          />
        </div>
      </section>
    </>
  );
}
