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

      {/* Hero */}
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image src={images.hero.birthdayByNight} alt="London nightclub atmosphere on different nights of the week" fill className="object-cover kenburns" priority sizes="100vw" />
        <div className="absolute inset-0 [background:var(--grad-hero)]" />
        <div className="grade" />
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
              <span className="block h-px w-10 bg-champagne/60" />
              Night by Night
            </p>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
              Best Night for a Birthday in{" "}
              <em className="italic text-champagne font-normal">London</em>
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-2xl">
              Your birthday doesn&apos;t have to fall on a Saturday to be
              incredible. Here&apos;s how each night of the week compares for
              birthday celebrations — atmosphere, pricing, and which clubs are
              open.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Jump */}
      <section className="border-b border-hairline px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto py-5 flex flex-wrap gap-x-9 gap-y-3">
          {nights.map((n) => (
            <a
              key={n.slug}
              href={`#${n.slug}`}
              className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink-faint hover:text-champagne-bright transition-colors duration-200"
            >
              {n.day}
            </a>
          ))}
        </div>
      </section>

      {/* Night Sections */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20 sm:space-y-24">
          {nights.map((night) => (
            <div key={night.slug} id={night.slug} className="scroll-mt-24" data-reveal>
              <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
                <span className="hairline-draw block h-px w-10 bg-champagne/60" />
                {night.energy}
              </p>
              <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink">
                {night.day}{" "}
                <em className="italic text-champagne font-normal">Birthday</em>
              </h2>

              <div className="mt-5 flex flex-wrap items-baseline gap-x-9 gap-y-2">
                <span className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">
                  {night.minSpendNote}
                </span>
                <span className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">
                  <span className="font-display italic font-medium text-lg text-champagne mr-1.5">
                    {night.venuesOpen.length}
                  </span>
                  venues open
                </span>
              </div>

              <p className="mt-6 font-sans text-base leading-[1.8] text-ink-soft max-w-3xl">
                {night.description}
              </p>

              <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="border-t border-hairline pt-6">
                  <h3 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-champagne mb-3">
                    Best For
                  </h3>
                  <p className="font-sans text-[0.9375rem] leading-[1.8] text-ink-soft">
                    {night.bestFor}
                  </p>
                </div>
                <div className="border-t border-hairline pt-6">
                  <h3 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-champagne mb-3">
                    Things to Consider
                  </h3>
                  <p className="font-sans text-[0.9375rem] leading-[1.8] text-ink-soft">
                    {night.considerations}
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-hairline pt-6">
                <h3 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint mb-4">
                  Venues Open on {night.day}
                </h3>
                <div className="flex flex-wrap gap-2.5">
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
                        className="inline-flex items-center border border-hairline-strong hover:border-champagne rounded-[2px] px-3 py-1.5 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-champagne hover:text-champagne-bright transition-colors duration-300"
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

      <div className="divider-gilt" />

      {/* Summary comparison */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Verdict
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              At a Glance: Which Night Should You{" "}
              <em className="italic text-champagne font-normal">Choose?</em>
            </h2>
          </div>
          <div className="divide-y divide-hairline border-y border-hairline" data-reveal>
            {nights.map((n) => (
              <div
                key={n.day}
                className="flex flex-col sm:flex-row sm:items-baseline py-5 gap-2 sm:gap-6"
              >
                <div className="font-display font-medium text-lg text-ink sm:w-32">
                  {n.day}
                </div>
                <div className="font-sans text-[0.9375rem] text-ink-soft flex-1">
                  {n.energy}
                </div>
                <div className="font-sans text-[0.8125rem] tracking-[0.02em] text-ink-faint sm:w-64 sm:text-right">
                  <span className="font-display italic text-lg text-champagne">
                    {n.venuesOpen.length}
                  </span>{" "}
                  venues &middot; {n.minSpendNote.split(",")[0]}
                </div>
              </div>
            ))}
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
              Birthday Night{" "}
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

      <div className="divider-gilt" />

      {/* CTA */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-noir-deep">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
            Plan Your Night
          </p>
          <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink mb-5">
            Not Sure Which Night?{" "}
            <em className="italic text-champagne font-normal">Ask Us</em>
          </h2>
          <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft mb-10 max-w-xl mx-auto">
            Tell us your birthday date and preferences — we&apos;ll tell you
            which venues and nights are the best fit.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Get Night Advice on WhatsApp"
            size="large"
            microcopy="Free service · Replies in minutes"
          />
        </div>
      </section>
    </>
  );
}
