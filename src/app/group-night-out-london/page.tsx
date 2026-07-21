import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { openClubs, getGroupWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Group Night Out London — VIP Tables for Celebrations",
  description: "Planning a group night out in London? Birthday parties, hen nights, work dos — we'll sort VIP tables and bottle service at the best clubs. Groups of 5 to 30+. Free booking via WhatsApp.",
  alternates: { canonical: "https://londonbirthdayclub.com/group-night-out-london" },
  openGraph: { url: "https://londonbirthdayclub.com/group-night-out-london" },
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

      {/* Hero */}
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image src={images.hero.groupNight} alt="Group night out celebration at a London venue" fill className="object-cover kenburns" priority sizes="100vw" />
        <div className="absolute inset-0 [background:var(--grad-hero)]" />
        <div className="grade" />
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
              <span className="block h-px w-10 bg-champagne/60" />
              Group Celebrations
            </p>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
              Group Night Out in{" "}
              <em className="italic text-champagne font-normal">London</em>
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-2xl mb-10">
              Whether it&apos;s a birthday, hen night, work celebration, or any excuse to get your group together — we&apos;ll sort VIP tables, bottle service, and everything else at London&apos;s best clubs. Free booking, zero hassle.
            </p>
            <WhatsAppCTA message={getGroupWhatsAppMessage()} label="Plan Our Group Night" size="large" microcopy="Free service · Replies in minutes" />
          </div>
        </div>
      </section>

      {/* What types of group celebrations */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Occasions
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Every Kind of Group{" "}
              <em className="italic text-champagne font-normal">Celebration</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12" data-reveal>
            {[
              { title: "Birthday Parties", desc: "Our bread and butter. From intimate 21st birthdays to massive 30th celebrations with 30+ guests.", link: "/birthday-clubs-london" },
              { title: "Hen & Stag Nights", desc: "VIP tables with bottle service, sparklers, and a dedicated host. The premium way to celebrate before the big day." },
              { title: "Work Celebrations", desc: "Promotions, leaving parties, team milestones. Impress your colleagues at a venue they'd never book themselves." },
              { title: "Engagement Parties", desc: "Toast the happy couple surrounded by champagne, sparklers, and the energy of London's best venues." },
              { title: "Graduation Nights", desc: "You earned it. Celebrate the achievement with your closest friends at a Mayfair club." },
              { title: "Reunions & Catch-ups", desc: "Getting the group back together? A VIP table gives you the space and service to make it memorable." },
            ].map(item => (
              <div key={item.title} className="border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500">
                <h3 className="font-display font-medium text-xl text-ink mb-3">{item.title}</h3>
                <p className="font-sans text-base leading-[1.8] text-ink-soft">{item.desc}</p>
                {item.link && <Link href={item.link} className="inline-block mt-4 font-sans text-[0.8125rem] text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">Learn more &rarr;</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Group size recommendations */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Venues
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Best Venues by{" "}
              <em className="italic text-champagne font-normal">Group Size</em>
            </h2>
          </div>
          <div className="space-y-14">
            {[
              { size: "5–10 guests", label: "Intimate Group", venues: intimateVenues, desc: "Smaller groups thrive at intimate venues where your celebration is part of the room's energy. Personal service, concentrated atmosphere." },
              { size: "15–30+ guests", label: "Large Group", venues: largeVenues, desc: "Big groups need space without sacrificing atmosphere. These venues handle multi-table bookings and keep your group connected." },
            ].map((item, i) => (
              <div key={item.size} className="border-t border-hairline pt-6" data-reveal data-reveal-delay={i * 90}>
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-3 mb-4">
                  <span className="font-display italic font-medium text-2xl sm:text-3xl text-champagne leading-none">{item.size}</span>
                  <span className="inline-flex items-center border border-hairline-strong rounded-[2px] px-2.5 py-1 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-champagne">{item.label}</span>
                </div>
                <p className="font-sans text-base leading-[1.8] text-ink-soft max-w-2xl mb-6">{item.desc}</p>
                <div className="flex flex-wrap gap-2.5">
                  {item.venues.map(v => (
                    <Link key={v.slug} href={`/clubs/${v.slug}`} className="inline-flex items-center border border-hairline hover:border-champagne rounded-[2px] px-3 py-1.5 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-soft hover:text-champagne transition-colors duration-300">
                      {v.shortName} — {v.minSpend}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14" data-reveal>
            <Link href="/best-clubs-for-large-groups-london" className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200">
              Large group guide{" "}
              <span className="transition-transform duration-400 group-hover:translate-x-1.5">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Per person costs */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Budget
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              What Does a Group Night{" "}
              <em className="italic text-champagne font-normal">Actually Cost?</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">Most venues start at £1,000 minimum spend. The bigger your group, the better the per-person value.</p>
          </div>
          <div className="divide-y divide-hairline border-y border-hairline" data-reveal>
            {[
              { guests: "6 guests", pp: "~£167/person" },
              { guests: "10 guests", pp: "~£100/person" },
              { guests: "15 guests", pp: "~£67/person" },
              { guests: "20 guests", pp: "~£50/person" },
              { guests: "30 guests", pp: "~£33/person" },
            ].map(row => (
              <div key={row.guests} className="flex items-center justify-between px-1 py-5 hover:bg-noir-soft/70 transition-colors duration-300">
                <span className="font-display font-medium text-lg text-ink">{row.guests}</span>
                <span className="font-display italic text-lg text-champagne whitespace-nowrap">{row.pp}</span>
              </div>
            ))}
          </div>
          <div className="mt-10" data-reveal>
            <Link href="/birthday-table-prices-london" className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200">
              Full pricing breakdown{" "}
              <span className="transition-transform duration-400 group-hover:translate-x-1.5">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* CTA */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Get Started
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Plan Your{" "}
              <em className="italic text-champagne font-normal">Group Night</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">Tell us your group size, date, and what you&apos;re celebrating. We&apos;ll recommend the perfect venue and handle everything.</p>
          </div>
          <div data-reveal>
            <WhatsAppCTA message={getGroupWhatsAppMessage()} label="Start Planning on WhatsApp" size="large" variant="detailed" microcopy="Free service · Replies in minutes" />
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Related pages */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Guides
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Explore More{" "}
              <em className="italic text-champagne font-normal">Guides</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-2" data-reveal>
            {[
              { href: "/birthday-clubs-london", label: "Birthday Clubs", sub: "All 13 venues" },
              { href: "/best-clubs-for-large-groups-london", label: "Large Groups", sub: "15+ guests" },
              { href: "/birthday-table-prices-london", label: "Table Prices", sub: "Full breakdown" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="group block border-t border-hairline hover:border-hairline-strong px-1 pt-5 pb-6 hover:bg-noir-soft/60 transition-colors duration-300">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300">{link.label}</span>
                  <span className="text-champagne transition-transform duration-400 group-hover:translate-x-1.5">&rarr;</span>
                </div>
                <div className="font-sans text-[0.8125rem] tracking-[0.02em] text-ink-faint mt-1.5">{link.sub}</div>
              </Link>
            ))}
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
              Group Night Out{" "}
              <em className="italic text-champagne font-normal">FAQ</em>
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
    </>
  );
}
