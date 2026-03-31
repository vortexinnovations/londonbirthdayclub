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

      <section className="relative min-h-[50vh] flex items-center justify-center px-4">
        <Image src={images.hero.tablePrices} alt="Birthday table with bottle service and sparklers in London" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Birthday Table Prices in <span className="text-gold">London</span></h1>
          <p className="text-lg text-white max-w-2xl [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] mx-auto leading-relaxed mb-4">
            A transparent breakdown of what birthday tables actually cost at London&apos;s best nightclubs. No hidden fees, no guesswork — just honest pricing to help you plan your budget.
          </p>
          <p className="text-white/70 text-sm mb-8 [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">Updated for 2026. All prices are starting minimums — contact us for exact quotes.</p>
        </div>
      </section>

      {/* Venue pricing table */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Minimum Spend by Venue</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-text-muted font-medium">Venue</th>
                  <th className="text-left py-3 px-4 text-text-muted font-medium">Area</th>
                  <th className="text-left py-3 px-4 text-text-muted font-medium">Starting From</th>
                  <th className="text-left py-3 px-4 text-text-muted font-medium">Open Nights</th>
                  <th className="text-left py-3 px-4 text-text-muted font-medium hidden sm:table-cell">Music</th>
                </tr>
              </thead>
              <tbody>
                {openClubs.map((club, i) => (
                  <tr key={club.slug} className={`border-b border-border/50 ${i % 2 === 0 ? "" : "bg-bg-card/50"}`}>
                    <td className="py-3 px-4">
                      <Link href={`/clubs/${club.slug}`} className="font-medium text-text-primary hover:text-gold transition-colors">{club.shortName}</Link>
                    </td>
                    <td className="py-3 px-4 text-text-secondary">{club.area}</td>
                    <td className="py-3 px-4 text-gold font-bold">{club.minSpend}</td>
                    <td className="py-3 px-4 text-text-secondary">{club.openingNights}</td>
                    <td className="py-3 px-4 text-text-muted hidden sm:table-cell">{club.musicPolicy.split(",")[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-text-muted text-xs mt-4 text-center">Prices are starting minimums for standard table positions. Premium positions and peak nights (Friday/Saturday) may have higher minimums. Contact us for exact pricing.</p>
        </div>
      </section>

      {/* Per person breakdown */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Per-Person Cost Breakdown</h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto mb-10">Based on a £1,000 minimum spend. The birthday person typically pays nothing — costs below exclude them.</p>
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            {[
              { total: "5 paying guests", pp: "£200", note: "Intimate group — high per-person but premium experience" },
              { total: "7 paying guests", pp: "£143", note: "Small group — still excellent value for VIP" },
              { total: "9 paying guests", pp: "£111", note: "Most common birthday group size" },
              { total: "12 paying guests", pp: "£83", note: "Great value — cheaper than a night of bar drinks" },
              { total: "15 paying guests", pp: "£67", note: "Large group — outstanding value per head" },
              { total: "20 paying guests", pp: "£50", note: "Best per-person value you'll find" },
            ].map((row, i) => (
              <div key={row.total} className={`flex flex-col sm:flex-row sm:items-center px-6 py-4 gap-1 ${i % 2 === 0 ? "bg-bg-card" : "bg-bg-primary"}`}>
                <span className="font-medium sm:w-40">{row.total}</span>
                <span className="text-gold font-bold sm:w-20">{row.pp}</span>
                <span className="text-text-muted text-sm flex-1">{row.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included vs extra */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What&apos;s Included vs What Costs Extra</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-gold/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gold mb-4">Included in Minimum Spend</h3>
              <ul className="space-y-2">
                {["Premium bottles (your choice of spirit or champagne)", "All mixers, juices, soft drinks, ice", "Reserved VIP table and seating area", "Dedicated table host all night", "Priority entry for your group", "Birthday guestlist arrangement", "Sparkler bottle presentations", "DJ birthday shoutout"].map(item => (
                  <li key={item} className="text-text-secondary text-sm flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Additional Costs</h3>
              <ul className="space-y-2">
                {["Birthday cake: £50-150 (arranged through us)", "Table decorations: £30-100 (varies by venue)", "Gratuity for table host: 10-15% (customary)", "Any drinks above minimum spend", "Premium bottle upgrades (Dom Perignon, etc.)", "Dinner at Maddox: £40-70pp (separate from club)"].map(item => (
                  <li key={item} className="text-text-secondary text-sm flex items-start gap-2">
                    <span className="text-text-muted mt-0.5">+</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Budget tiers */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Birthday Budget Tiers</h2>
          <div className="space-y-4">
            {[
              { tier: "Smart Budget", pp: "£50-80 per person", how: "Large group (15+), midweek booking, standard table position. You still get the full VIP experience — just with a bigger group splitting the cost.", venues: "Cuckoo Club, Funky Buddha (Wed), Cirque Le Soir (Wed)" },
              { tier: "Standard", pp: "£80-120 per person", how: "Group of 10-12, weekend booking, standard table. This is the most popular tier — excellent experience at a reasonable per-person cost.", venues: "Most Mayfair clubs on Fri/Sat" },
              { tier: "Premium", pp: "£120-200 per person", how: "Smaller group (6-8), premium table position, potentially upgraded bottles. A more intimate, higher-quality experience.", venues: "Tape London, Cirque Le Soir, The Box" },
              { tier: "Luxury", pp: "£200+ per person", how: "Small group at the most exclusive venue, best table in the house, champagne packages. For milestone birthdays where budget isn't the primary concern.", venues: "Tape London, Cirque Le Soir — premium positions" },
            ].map(item => (
              <div key={item.tier} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-gold font-bold">{item.tier}</span>
                  <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded">{item.pp}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-2">{item.how}</p>
                <p className="text-text-muted text-xs">Best venues: {item.venues}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Get an Exact Quote</h2>
          <p className="text-text-secondary text-center text-lg mb-8">Prices vary by venue, night, and table position. Tell us your details and we&apos;ll give you an exact quote — no obligation, completely free.</p>
          <WhatsAppCTA message={getPricingWhatsAppMessage()} label="Get a Quote on WhatsApp" size="large" variant="detailed" />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Birthday Table Pricing FAQ</h2>
          <div className="space-y-6">
            {faqs.map(faq => (
              <div key={faq.question} className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          <Link href="/birthday-table-booking-london" className="text-gold text-sm hover:underline">How table booking works &rarr;</Link>
          <Link href="/vip-birthday-tables-london" className="text-gold text-sm hover:underline">VIP table upgrades &rarr;</Link>
          <Link href="/birthday-guestlist-vs-table-booking" className="text-gold text-sm hover:underline">Guestlist vs table &rarr;</Link>
          <Link href="/birthday-clubs-london" className="text-gold text-sm hover:underline">All birthday clubs &rarr;</Link>
        </div>
      </section>
    </>
  );
}
