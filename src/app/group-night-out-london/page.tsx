import type { Metadata } from "next";
import Link from "next/link";
import { openClubs, getGroupWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Group Night Out London — VIP Tables for Birthdays, Hen Parties & Celebrations",
  description: "Planning a group night out in London? Birthday parties, hen nights, work dos — we'll sort VIP tables and bottle service at the best clubs. Groups of 5 to 30+. Free booking via WhatsApp.",
  alternates: { canonical: "https://londonbirthdayclub.com/group-night-out-london" },
};

const faqs = [
  { question: "How many people do you need for a group booking at a London club?", answer: "Most London clubs accommodate group bookings from 5 guests upwards. Tables typically seat 8-15 comfortably, with larger groups of 20-30+ accommodated across multiple tables. There's no maximum — we've arranged group nights for 50+ guests across venues like Reign London and BEAT London." },
  { question: "How much does a group night out cost per person in London?", answer: "With a £1,000 minimum table spend, the per-person cost depends on your group size: roughly £200 for 5 people, £100 for 10, £67 for 15, or £50 for 20. This covers premium bottles, mixers, a reserved VIP area, and dedicated table service. Larger groups get better per-person value." },
  { question: "What types of group celebrations can you book?", answer: "We handle all group celebrations: birthday parties (our specialty), hen and stag nights, work celebrations and leaving parties, promotions, engagements, reunions, graduation nights, and any occasion worth celebrating with a group at a premium London venue." },
  { question: "Can you book multiple tables for a large group?", answer: "Yes. For groups of 15+, we regularly arrange multiple tables positioned together so your group stays connected. Venues like Reign London, BEAT London, and Cuckoo Club are particularly good at accommodating multi-table group bookings." },
];

export default function GroupNightOutPage() {
  const largeVenues = openClubs.filter(c => ["reign-london", "beat-london", "cuckoo-club", "the-box-london", "luna-club-london"].includes(c.slug));
  const intimateVenues = openClubs.filter(c => ["tape-london", "tabu-london", "dear-darling", "scotch-of-st-james"].includes(c.slug));

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Group Night Out London", href: "/group-night-out-london" }]} />

      <section className="relative py-20 sm:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Group Night Out in <span className="text-gold">London</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
            Whether it&apos;s a birthday, hen night, work celebration, or any excuse to get your group together — we&apos;ll sort VIP tables, bottle service, and everything else at London&apos;s best clubs. Free booking, zero hassle.
          </p>
          <WhatsAppCTA message={getGroupWhatsAppMessage()} label="Plan Our Group Night" size="large" />
        </div>
      </section>

      {/* What types of group celebrations */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Every Kind of Group Celebration</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Birthday Parties", desc: "Our bread and butter. From intimate 21st birthdays to massive 30th celebrations with 30+ guests.", link: "/birthday-clubs-london" },
              { title: "Hen & Stag Nights", desc: "VIP tables with bottle service, sparklers, and a dedicated host. The premium way to celebrate before the big day." },
              { title: "Work Celebrations", desc: "Promotions, leaving parties, team milestones. Impress your colleagues at a venue they'd never book themselves." },
              { title: "Engagement Parties", desc: "Toast the happy couple surrounded by champagne, sparklers, and the energy of London's best venues." },
              { title: "Graduation Nights", desc: "You earned it. Celebrate the achievement with your closest friends at a Mayfair club." },
              { title: "Reunions & Catch-ups", desc: "Getting the group back together? A VIP table gives you the space and service to make it memorable." },
            ].map(item => (
              <div key={item.title} className="bg-bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-gold mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                {item.link && <Link href={item.link} className="text-gold text-xs hover:underline mt-2 inline-block">Learn more &rarr;</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group size recommendations */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Best Venues by Group Size</h2>
          <div className="space-y-6">
            {[
              { size: "5–10 guests", label: "Intimate Group", venues: intimateVenues, desc: "Smaller groups thrive at intimate venues where your celebration is part of the room's energy. Personal service, concentrated atmosphere." },
              { size: "15–30+ guests", label: "Large Group", venues: largeVenues, desc: "Big groups need space without sacrificing atmosphere. These venues handle multi-table bookings and keep your group connected." },
            ].map(item => (
              <div key={item.size} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-gold font-bold text-lg">{item.size}</span>
                  <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded">{item.label}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.venues.map(v => (
                    <Link key={v.slug} href={`/clubs/${v.slug}`} className="text-xs bg-bg-secondary border border-border hover:border-gold/30 px-3 py-1.5 rounded-lg text-text-secondary hover:text-gold transition-colors">
                      {v.shortName} — {v.minSpend}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/best-clubs-for-large-groups-london" className="text-gold hover:underline text-sm">Large group guide &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Per person costs */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What Does a Group Night Actually Cost?</h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto mb-10">Most venues start at £1,000 minimum spend. The bigger your group, the better the per-person value.</p>
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            {[
              { guests: "6 guests", pp: "~£167/person" },
              { guests: "10 guests", pp: "~£100/person" },
              { guests: "15 guests", pp: "~£67/person" },
              { guests: "20 guests", pp: "~£50/person" },
              { guests: "30 guests", pp: "~£33/person" },
            ].map((row, i) => (
              <div key={row.guests} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-bg-card" : "bg-bg-primary"}`}>
                <span className="font-medium">{row.guests}</span>
                <span className="text-gold font-bold">{row.pp}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/birthday-table-prices-london" className="text-gold text-sm hover:underline">Full pricing breakdown &rarr;</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Plan Your Group Night</h2>
          <p className="text-text-secondary text-center text-lg mb-8">Tell us your group size, date, and what you&apos;re celebrating. We&apos;ll recommend the perfect venue and handle everything.</p>
          <WhatsAppCTA message={getGroupWhatsAppMessage()} label="Start Planning on WhatsApp" size="large" variant="detailed" />
        </div>
      </section>

      {/* Related pages */}
      <section className="py-12 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Explore More Guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/birthday-clubs-london", label: "Birthday Clubs", sub: "All 13 venues" },
              { href: "/best-clubs-for-large-groups-london", label: "Large Groups", sub: "15+ guests" },
              { href: "/birthday-table-prices-london", label: "Table Prices", sub: "Full breakdown" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="block bg-bg-card hover:bg-bg-card-hover border border-border hover:border-gold/30 rounded-xl p-5 transition-all group">
                <div className="font-semibold group-hover:text-gold transition-colors text-sm">{link.label}</div>
                <div className="text-text-muted text-xs mt-1">{link.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Group Night Out FAQ</h2>
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
    </>
  );
}
