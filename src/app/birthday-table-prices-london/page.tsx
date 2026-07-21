import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { openClubs, getPricingWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "Birthday Table Prices London 2026 — Per-Person Costs at Every Club",
  description: "Complete guide to birthday table prices at London nightclubs. Venue-by-venue minimums, per-person costs by group size, weekday vs weekend pricing, and what's included. Updated for 2026.",
  alternates: { canonical: "https://londonbirthdayclub.com/birthday-table-prices-london" },
  openGraph: { url: "https://londonbirthdayclub.com/birthday-table-prices-london" },
};

const faqs = [
  { question: "How much is a birthday table in London?", answer: "Birthday table minimum spends start from £1,000 at most London clubs, with Tape London starting from £1,500. This is not a fee on top of drinks — it IS your drinks budget, covering premium bottles, mixers, a reserved area, and dedicated service. Prices are higher on Fridays and Saturdays, and for premium table positions." },
  { question: "What's included in the minimum spend?", answer: "Your minimum spend covers: your choice of premium bottles (vodka, gin, tequila, whisky, or champagne), all mixers and ice, a reserved VIP table and seating area, a dedicated table host, and priority entry. Birthday extras like sparklers and DJ shoutouts are usually included; cake is an additional £50-150." },
  { question: "Are London club tables cheaper on weeknights?", answer: "Yes. Thursday minimum spends are typically 20-40% lower than Saturday. Wednesday nights (at venues like Cirque Le Soir and Funky Buddha) can offer even better value. The atmosphere on weeknights is still genuinely good — and some argue the more intimate crowd makes for a better birthday." },
  { question: "Is there a hidden charge on top of the minimum spend?", answer: "No hidden charges. The minimum spend is your drinks cost. Optional additions: birthday cake (£50-150), gratuity for your table host (10-15% is customary for good service), and any drinks ordered above your minimum. There are no entry fees, booking fees, or service charges on top." },
  { question: "How much should each person pay?", answer: "Most birthday groups exclude the birthday person from payment. For a £1,000 minimum with 10 guests (minus the birthday person = 9 paying), each person pays approximately £111. We recommend collecting 10-15% above the minimum to cover cake and tip, so roughly £125 per person in this example." },
];

export default function BirthdayTablePricesPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Birthday Table Prices London", href: "/birthday-table-prices-london" }]} />
      <ArticleSchema title="Birthday Table Prices London 2026" description="Complete guide to birthday table prices at London nightclubs." url="https://londonbirthdayclub.com/birthday-table-prices-london" />

      {/* Hero */}
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image src={images.hero.tablePrices} alt="Birthday table with bottle service and sparklers in London" fill className="object-cover kenburns" priority sizes="100vw" />
        <div className="absolute inset-0 [background:var(--grad-hero)]" />
        <div className="grade" />
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
              <span className="block h-px w-10 bg-champagne/60" />
              Pricing Guide
            </p>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
              Birthday Table Prices in{" "}
              <em className="italic text-champagne font-normal">London</em>
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl mb-5">
              A transparent breakdown of what birthday tables actually cost at London&apos;s best nightclubs. No hidden fees, no guesswork — just honest pricing to help you plan your budget.
            </p>
            <p className="font-sans text-[0.8125rem] leading-relaxed tracking-[0.02em] text-ink-faint">Updated for 2026. All prices are starting minimums — contact us for exact quotes.</p>
          </div>
        </div>
      </section>

      {/* Venue pricing table */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Venues
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              <em className="italic text-champagne font-normal">Minimum Spend</em> by Venue
            </h2>
          </div>
          <div className="overflow-x-auto" data-reveal>
            <table className="w-full border-y border-hairline">
              <thead>
                <tr>
                  <th className="text-left font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint py-4 pr-6 border-b border-hairline-strong">Venue</th>
                  <th className="text-left font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint py-4 pr-6 border-b border-hairline-strong">Area</th>
                  <th className="text-left font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint py-4 pr-6 border-b border-hairline-strong">Starting From</th>
                  <th className="text-left font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint py-4 pr-6 border-b border-hairline-strong">Open Nights</th>
                  <th className="text-left font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint py-4 pr-6 border-b border-hairline-strong hidden sm:table-cell">Music</th>
                </tr>
              </thead>
              <tbody>
                {openClubs.map((club) => (
                  <tr key={club.slug} className="border-b border-hairline hover:bg-noir-soft/70 transition-colors duration-300">
                    <td className="py-5 pr-6">
                      <Link href={`/clubs/${club.slug}`} className="font-display font-medium text-lg text-ink hover:text-champagne-bright transition-colors duration-300">{club.shortName}</Link>
                    </td>
                    <td className="py-5 pr-6 font-sans text-[0.9375rem] text-ink-soft">{club.area}</td>
                    <td className="py-5 pr-6 font-display italic text-lg text-champagne whitespace-nowrap">{club.minSpend}</td>
                    <td className="py-5 pr-6 font-sans text-[0.9375rem] text-ink-soft">{club.openingNights}</td>
                    <td className="py-5 pr-6 font-sans text-[0.9375rem] text-ink-faint hidden sm:table-cell">{club.musicPolicy.split(",")[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 font-sans text-[0.8125rem] leading-relaxed tracking-[0.02em] text-ink-faint max-w-2xl">Prices are starting minimums for standard table positions. Premium positions and peak nights (Friday/Saturday) may have higher minimums. Contact us for exact pricing.</p>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Per person breakdown */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Per Person
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Per-Person Cost <em className="italic text-champagne font-normal">Breakdown</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">Based on a £1,000 minimum spend. The birthday person typically pays nothing — costs below exclude them.</p>
          </div>
          <div className="divide-y divide-hairline border-y border-hairline" data-reveal>
            {[
              { total: "5 paying guests", pp: "£200", note: "Intimate group — high per-person but premium experience" },
              { total: "7 paying guests", pp: "£143", note: "Small group — still excellent value for VIP" },
              { total: "9 paying guests", pp: "£111", note: "Most common birthday group size" },
              { total: "12 paying guests", pp: "£83", note: "Great value — cheaper than a night of bar drinks" },
              { total: "15 paying guests", pp: "£67", note: "Large group — outstanding value per head" },
              { total: "20 paying guests", pp: "£50", note: "Best per-person value you'll find" },
            ].map((row) => (
              <div key={row.total} className="flex flex-col sm:flex-row sm:items-baseline py-5 gap-1 sm:gap-6">
                <span className="font-display font-medium text-lg text-ink sm:w-52">{row.total}</span>
                <span className="font-display italic font-medium text-2xl text-champagne whitespace-nowrap sm:w-28">{row.pp}</span>
                <span className="font-sans text-[0.9375rem] leading-relaxed text-ink-soft flex-1">{row.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* What's included vs extra */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Breakdown
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              What&apos;s Included vs What Costs <em className="italic text-champagne font-normal">Extra</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-14 gap-y-12" data-reveal>
            <div className="border-t border-champagne/40 pt-6">
              <h3 className="font-display font-medium text-xl text-ink mb-5">Included in Minimum Spend</h3>
              <ul className="space-y-3">
                {["Premium bottles (your choice of spirit or champagne)", "All mixers, juices, soft drinks, ice", "Reserved VIP table and seating area", "Dedicated table host all night", "Priority entry for your group", "Birthday guestlist arrangement", "Sparkler bottle presentations", "DJ birthday shoutout"].map(item => (
                  <li key={item} className="font-sans text-[0.9375rem] leading-[1.8] text-ink-soft flex items-start gap-3">
                    <span className="text-champagne/70 select-none">&#10003;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-hairline pt-6">
              <h3 className="font-display font-medium text-xl text-ink mb-5">Additional Costs</h3>
              <ul className="space-y-3">
                {["Birthday cake: £50-150 (arranged through us)", "Table decorations: £30-100 (varies by venue)", "Gratuity for table host: 10-15% (customary)", "Any drinks above minimum spend", "Premium bottle upgrades (Dom Perignon, etc.)", "Dinner at Maddox: £40-70pp (separate from club)"].map(item => (
                  <li key={item} className="font-sans text-[0.9375rem] leading-[1.8] text-ink-soft flex items-start gap-3">
                    <span className="text-ink-faint select-none">+</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Budget tiers */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Budget
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Birthday Budget <em className="italic text-champagne font-normal">Tiers</em>
            </h2>
          </div>
          <div className="space-y-10">
            {[
              { tier: "Smart Budget", pp: "£50-80 per person", how: "Large group (15+), midweek booking, standard table position. You still get the full VIP experience — just with a bigger group splitting the cost.", venues: "Cuckoo Club, Funky Buddha (Wed), Cirque Le Soir (Wed)" },
              { tier: "Standard", pp: "£80-120 per person", how: "Group of 10-12, weekend booking, standard table. This is the most popular tier — excellent experience at a reasonable per-person cost.", venues: "Most Mayfair clubs on Fri/Sat" },
              { tier: "Premium", pp: "£120-200 per person", how: "Smaller group (6-8), premium table position, potentially upgraded bottles. A more intimate, higher-quality experience.", venues: "Tape London, Cirque Le Soir, The Box" },
              { tier: "Luxury", pp: "£200+ per person", how: "Small group at the most exclusive venue, best table in the house, champagne packages. For milestone birthdays where budget isn't the primary concern.", venues: "Tape London, Cirque Le Soir — premium positions" },
            ].map((item, i) => (
              <div key={item.tier} className="border-t border-hairline pt-6" data-reveal data-reveal-delay={i * 90}>
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-3">
                  <h3 className="font-display font-medium text-xl text-ink">{item.tier}</h3>
                  <span className="font-display italic font-medium text-xl text-champagne whitespace-nowrap">{item.pp}</span>
                </div>
                <p className="font-sans text-base leading-[1.8] text-ink-soft mb-3 max-w-3xl">{item.how}</p>
                <p className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">Best venues: {item.venues}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Quote CTA */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Your Quote
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Get an Exact <em className="italic text-champagne font-normal">Quote</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">Prices vary by venue, night, and table position. Tell us your details and we&apos;ll give you an exact quote — no obligation, completely free.</p>
          </div>
          <div data-reveal>
            <WhatsAppCTA message={getPricingWhatsAppMessage()} label="Get a Quote on WhatsApp" size="large" variant="detailed" microcopy="Free service · Replies in minutes" />
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
              Birthday Table <em className="italic text-champagne font-normal">Pricing</em> FAQ
            </h2>
          </div>
          <div className="divide-y divide-hairline border-y border-hairline" data-reveal>
            {faqs.map(faq => (
              <div key={faq.question} className="py-7">
                <h3 className="font-display font-medium text-lg sm:text-xl text-ink flex gap-5">
                  <span className="font-display italic text-champagne/70 select-none">Q.</span>
                  {faq.question}
                </h3>
                <p className="mt-3 pl-[2.15rem] font-sans text-base leading-[1.8] text-ink-soft">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Related links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-4" data-reveal>
          <Link href="/birthday-table-booking-london" className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200">How table booking works <span className="transition-transform duration-400 group-hover:translate-x-1.5">&rarr;</span></Link>
          <Link href="/vip-birthday-tables-london" className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200">VIP table upgrades <span className="transition-transform duration-400 group-hover:translate-x-1.5">&rarr;</span></Link>
          <Link href="/birthday-guestlist-vs-table-booking" className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200">Guestlist vs table <span className="transition-transform duration-400 group-hover:translate-x-1.5">&rarr;</span></Link>
          <Link href="/birthday-clubs-london" className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200">All birthday clubs <span className="transition-transform duration-400 group-hover:translate-x-1.5">&rarr;</span></Link>
        </div>
      </section>
    </>
  );
}
