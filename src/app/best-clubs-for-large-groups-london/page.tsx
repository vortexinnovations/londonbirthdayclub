import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { openClubs, getGeneralWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ItemListSchema from "@/components/ItemListSchema";

export const metadata: Metadata = {
  title: "Best London Clubs for Large Groups — 15 to 30+ Guest Birthday Venues",
  description: "The best London nightclubs for large group bookings of 15-30+ guests. Multi-table configurations, big birthday celebrations, and venues that handle large parties without cramping the atmosphere.",
  alternates: { canonical: "https://londonbirthdayclub.com/best-clubs-for-large-groups-london" },
};

const faqs = [
  { question: "Which London club is best for 20+ guests?", answer: "Reign London is our top pick for 20+ guests — the grand multi-level venue has the space, spectacle, and multi-table configurations to handle large groups without anyone feeling lost. BEAT London and Cuckoo Club are also excellent for large groups, with BEAT offering the best sound quality and Cuckoo providing two floors of different music." },
  { question: "Can you book multiple tables together at London clubs?", answer: "Yes. For groups of 15+, we regularly arrange multiple tables positioned adjacent to each other so your group stays connected. We coordinate table positions with the venue to ensure your entire party is in the same area. This is standard practice at most London clubs." },
  { question: "How much does a large group booking cost per person?", answer: "Large group bookings offer the best per-person value. A £1,000 minimum spend across 20 people is just £50 each. For 30 people, it's roughly £33 per person. Multiple tables mean multiple minimum spends, but the per-person cost still decreases as the group grows." },
  { question: "How do you handle payments for large groups?", answer: "We recommend collecting money in advance via bank transfer to one organiser. For groups of 20+, nominate 2-3 people to manage collection. Most organisers set the per-person amount 10-15% above the minimum to cover the birthday person's share and tip. Payment apps make this straightforward." },
];

export default function LargeGroupsPage() {
  const largeGroupVenues = [
    { slug: "reign-london", capacity: "500+", tables: "Multi-table, same level", why: "The grand venue handles 20-40+ guests across adjacent tables with aerial performances keeping the entire group entertained. The biggest birthday-friendly venue in central London." },
    { slug: "beat-london", capacity: "400", tables: "Adjacent dancefloor tables", why: "The medium capacity and more relaxed atmosphere mean large groups feel cohesive rather than scattered. The world-class sound system means everyone shares the same musical experience." },
    { slug: "cuckoo-club", capacity: "350", tables: "Split across two floors", why: "Large groups can book tables on both floors, giving your party two different vibes without splitting up. The versatile layout keeps big groups connected while offering variety." },
    { slug: "the-box-london", capacity: "300", tables: "Theatre-style, multiple areas", why: "The multi-level layout gives large groups different perspectives on the performances. Mezzanine tables offer relaxed viewing while ground-level positions put you in the action." },
    { slug: "luna-club-london", capacity: "300", tables: "Flexible configurations", why: "As a newer venue, Luna's modern layout was designed with flexible table configurations in mind. Large birthday groups benefit from considered positioning and contemporary design." },
    { slug: "cirque-le-soir", capacity: "350", tables: "Adjacent performer-side", why: "Even with 20+ guests, the circus performers interact with your entire group. Multiple tables positioned together mean everyone gets the Cirque experience. Friday nights recommended for large groups." },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Best Clubs for Large Groups London", href: "/best-clubs-for-large-groups-london" }]} />
      <ItemListSchema
        name="Best London Clubs for Large Groups 2026"
        description="London nightclubs ranked for large birthday group bookings of 15-30+ guests."
        items={[
          { name: "Reign London", url: "https://londonbirthdayclub.com/clubs/reign-london", position: 1 },
          { name: "BEAT London", url: "https://londonbirthdayclub.com/clubs/beat-london", position: 2 },
          { name: "Cuckoo Club", url: "https://londonbirthdayclub.com/clubs/cuckoo-club", position: 3 },
          { name: "The Box London", url: "https://londonbirthdayclub.com/clubs/the-box-london", position: 4 },
          { name: "Luna Club London", url: "https://londonbirthdayclub.com/clubs/luna-club-london", position: 5 },
          { name: "Cirque Le Soir", url: "https://londonbirthdayclub.com/clubs/cirque-le-soir", position: 6 },
        ]}
      />

      <section className="relative min-h-[50vh] flex items-center justify-center px-4">
        <Image src={images.hero.largeGroups} alt="Large group birthday celebration at a London nightclub" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Best Clubs for <span className="text-gold">Large Groups</span> in London</h1>
          <p className="text-lg text-white max-w-2xl [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] mx-auto leading-relaxed mb-8">
            Planning a birthday with 15, 20, or 30+ guests? These venues handle large groups without cramping the celebration. Multi-table configurations, space to spread out, and atmospheres that get better with bigger numbers.
          </p>
          <WhatsAppCTA message={getGeneralWhatsAppMessage()} label="Plan Large Group Booking" size="large" />
        </div>
      </section>

      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Why Large Groups Need the Right Venue</h2>
          <p className="text-text-secondary leading-relaxed mb-6">A group of 20+ at the wrong venue is a nightmare — people scattered across different areas, no cohesion, and a birthday that splits into fragments. At the right venue, that same group becomes the energy of the room. The key is choosing a club with the capacity, layout, and table configurations to keep your group connected while giving everyone space to enjoy the night.</p>
          <p className="text-text-secondary leading-relaxed">We specialise in large group bookings and know exactly which venues handle them well. The recommendations below aren&apos;t just the biggest clubs — they&apos;re the ones that actively make large groups feel like a cohesive celebration rather than just a crowd.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Top Venues for Large Group Birthdays</h2>
          <div className="space-y-4">
            {largeGroupVenues.map((venue, i) => {
              const club = openClubs.find(c => c.slug === venue.slug);
              if (!club) return null;
              return (
                <div key={venue.slug} className="bg-bg-card border border-border rounded-xl p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-gold font-bold">#{i + 1}</span>
                    <Link href={`/clubs/${club.slug}`} className="text-lg font-semibold hover:text-gold transition-colors">{club.name}</Link>
                    <span className="text-xs text-text-muted">Capacity: {venue.capacity} &middot; From {club.minSpend}</span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-2">{venue.why}</p>
                  <p className="text-text-muted text-xs">Table config: {venue.tables}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cost by group size */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Large Group Costs Per Person</h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto mb-10">The bigger the group, the better the value. Here&apos;s how a £1,000 table splits for larger groups.</p>
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            {[
              { guests: "15 guests (1 table)", pp: "~£67/person", note: "Sweet spot for single table" },
              { guests: "20 guests (1-2 tables)", pp: "~£50-100/person", note: "May need 2 tables at intimate venues" },
              { guests: "25 guests (2 tables)", pp: "~£80/person", note: "Two £1,000 tables = £2,000 total" },
              { guests: "30 guests (2-3 tables)", pp: "~£67-100/person", note: "Excellent value per head" },
            ].map((row, i) => (
              <div key={row.guests} className={`flex flex-col sm:flex-row sm:items-center px-6 py-4 gap-1 ${i % 2 === 0 ? "bg-bg-card" : "bg-bg-primary"}`}>
                <span className="font-medium sm:w-48">{row.guests}</span>
                <span className="text-gold font-bold sm:w-32">{row.pp}</span>
                <span className="text-text-muted text-sm flex-1">{row.note}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/birthday-table-prices-london" className="text-gold text-sm hover:underline">Full pricing breakdown &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Plan Your Large Group Booking</h2>
          <p className="text-text-secondary text-center text-lg mb-8">Tell us your headcount, date, and budget. We&apos;ll recommend the best venue and table configuration for your group size.</p>
          <WhatsAppCTA message={getGeneralWhatsAppMessage()} label="Plan Large Group on WhatsApp" size="large" variant="detailed" />
        </div>
      </section>

      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Large Group FAQ</h2>
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

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          <Link href="/group-night-out-london" className="text-gold text-sm hover:underline">Group night out guide &rarr;</Link>
          <Link href="/birthday-clubs-london" className="text-gold text-sm hover:underline">All birthday clubs &rarr;</Link>
          <Link href="/birthday-table-prices-london" className="text-gold text-sm hover:underline">Table prices &rarr;</Link>
        </div>
      </section>
    </>
  );
}
