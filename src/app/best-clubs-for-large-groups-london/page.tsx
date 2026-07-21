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
  openGraph: { url: "https://londonbirthdayclub.com/best-clubs-for-large-groups-london" },
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

      {/* Hero */}
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image src={images.hero.largeGroups} alt="Large group birthday celebration at a London nightclub" fill className="object-cover kenburns" priority sizes="100vw" />
        <div className="absolute inset-0 [background:var(--grad-hero)]" />
        <div className="grade" />
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
              <span className="block h-px w-10 bg-champagne/60" />
              Group Bookings
            </p>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
              Best Clubs for <em className="italic text-champagne font-normal">Large Groups</em> in London
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-2xl mb-10">
              Planning a birthday with 15, 20, or 30+ guests? These venues handle large groups without cramping the celebration. Multi-table configurations, space to spread out, and atmospheres that get better with bigger numbers.
            </p>
            <WhatsAppCTA message={getGeneralWhatsAppMessage()} label="Plan Large Group Booking" size="large" microcopy="Free service · Replies in minutes" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Brief
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Why Large Groups Need the <em className="italic text-champagne font-normal">Right Venue</em>
            </h2>
          </div>
          <div className="mt-8 space-y-6" data-reveal>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft">A group of 20+ at the wrong venue is a nightmare — people scattered across different areas, no cohesion, and a birthday that splits into fragments. At the right venue, that same group becomes the energy of the room. The key is choosing a club with the capacity, layout, and table configurations to keep your group connected while giving everyone space to enjoy the night.</p>
            <p className="font-sans text-base leading-[1.8] text-ink-soft">We specialise in large group bookings and know exactly which venues handle them well. The recommendations below aren&apos;t just the biggest clubs — they&apos;re the ones that actively make large groups feel like a cohesive celebration rather than just a crowd.</p>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Top venues */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Venues
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Top Venues for Large Group <em className="italic text-champagne font-normal">Birthdays</em>
            </h2>
          </div>
          <div className="space-y-10" data-reveal>
            {largeGroupVenues.map((venue, i) => {
              const club = openClubs.find(c => c.slug === venue.slug);
              if (!club) return null;
              return (
                <div key={venue.slug} className="flex gap-6 sm:gap-8 border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500">
                  <span className="font-display italic font-medium text-4xl text-champagne/60 leading-none select-none shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1.5 mb-3">
                      <Link href={`/clubs/${club.slug}`} className="font-display font-semibold text-[1.375rem] leading-snug text-ink hover:text-champagne-bright transition-colors duration-300">{club.name}</Link>
                      <span className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">
                        Capacity: <span className="font-display italic font-medium text-lg text-champagne tracking-normal">{venue.capacity}</span> &middot; From <span className="font-display italic font-medium text-lg text-champagne tracking-normal">{club.minSpend}</span>
                      </span>
                    </div>
                    <p className="font-sans text-[0.9375rem] leading-[1.8] text-ink-soft mb-3">{venue.why}</p>
                    <p className="font-sans text-[0.8125rem] leading-relaxed tracking-[0.02em] text-ink-faint">Table config: {venue.tables}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Cost by group size */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Budget
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Large Group Costs <em className="italic text-champagne font-normal">Per Person</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">The bigger the group, the better the value. Here&apos;s how a £1,000 table splits for larger groups.</p>
          </div>
          <div className="divide-y divide-hairline border-y border-hairline" data-reveal>
            {[
              { guests: "15 guests (1 table)", pp: "~£67/person", note: "Sweet spot for single table" },
              { guests: "20 guests (1-2 tables)", pp: "~£50-100/person", note: "May need 2 tables at intimate venues" },
              { guests: "25 guests (2 tables)", pp: "~£80/person", note: "Two £1,000 tables = £2,000 total" },
              { guests: "30 guests (2-3 tables)", pp: "~£67-100/person", note: "Excellent value per head" },
            ].map((row) => (
              <div key={row.guests} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-5 px-1 hover:bg-noir-soft/70 transition-colors duration-300">
                <span className="font-display font-medium text-lg text-ink sm:w-56 shrink-0">{row.guests}</span>
                <span className="font-display italic font-medium text-lg text-champagne whitespace-nowrap sm:w-44 shrink-0">{row.pp}</span>
                <span className="font-sans text-[0.9375rem] text-ink-soft flex-1">{row.note}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/birthday-table-prices-london" className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200">
              Full pricing breakdown <span className="transition-transform duration-400 group-hover:translate-x-1.5">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Plan CTA */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Booking
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Plan Your <em className="italic text-champagne font-normal">Large Group</em> Booking
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">Tell us your headcount, date, and budget. We&apos;ll recommend the best venue and table configuration for your group size.</p>
          </div>
          <div data-reveal>
            <WhatsAppCTA message={getGeneralWhatsAppMessage()} label="Plan Large Group on WhatsApp" size="large" variant="detailed" microcopy="Free service · Replies in minutes" />
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
              Large Group <em className="italic text-champagne font-normal">FAQ</em>
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4">
          <Link href="/group-night-out-london" className="font-sans text-[0.8125rem] tracking-[0.02em] text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">Group night out guide &rarr;</Link>
          <Link href="/birthday-clubs-london" className="font-sans text-[0.8125rem] tracking-[0.02em] text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">All birthday clubs &rarr;</Link>
          <Link href="/birthday-table-prices-london" className="font-sans text-[0.8125rem] tracking-[0.02em] text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">Table prices &rarr;</Link>
        </div>
      </section>
    </>
  );
}
