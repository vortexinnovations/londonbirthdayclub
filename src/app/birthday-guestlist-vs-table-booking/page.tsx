import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { getGeneralWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "Guestlist vs Table for a London Birthday — Worth It?",
  description: "Should you book a guestlist or a VIP table for your birthday at a London nightclub? Honest comparison of costs, benefits, and which option suits your group size and budget.",
  alternates: { canonical: "https://londonbirthdayclub.com/birthday-guestlist-vs-table-booking" },
  openGraph: { url: "https://londonbirthdayclub.com/birthday-guestlist-vs-table-booking" },
};

const faqs = [
  { question: "Is a guestlist free at London clubs?", answer: "Guestlist entry is typically free or reduced entry (£10-20 per person). However, you don't get a reserved area, bottles, or dedicated service. You'll buy drinks individually at the bar, which adds up quickly — often totalling more than a table's per-person cost by the end of the night." },
  { question: "Is a table worth it for a birthday?", answer: "For birthdays specifically, a table is almost always worth it. The reserved area gives your group a home base, the birthday extras (sparklers, cake, shoutouts) require a table booking, and the VIP service makes the birthday person feel genuinely special. At £50-100 per person split across the group, it's comparable to buying drinks individually but with a vastly better experience." },
  { question: "Can you get birthday extras on a guestlist?", answer: "Unfortunately, no. Birthday extras like sparkler presentations, cake delivery, DJ shoutouts, and decorated tables are exclusively available with table bookings. Guestlist entry gets you into the club but doesn't include any birthday-specific treatments." },
  { question: "What's the minimum group size for a table booking?", answer: "Most clubs have no strict minimum group size for tables — you could technically book a table for 2 people. However, the minimum spend (typically £1,000) makes tables most cost-effective for groups of 6 or more. For groups under 6, guestlist might be more practical unless the birthday experience matters more than per-person cost." },
];

export default function GuestlistVsTablePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Guestlist vs Table Booking", href: "/birthday-guestlist-vs-table-booking" }]} />
      <ArticleSchema title="Birthday Guestlist vs Table Booking in London" description="Should you book a guestlist or a VIP table for your birthday?" url="https://londonbirthdayclub.com/birthday-guestlist-vs-table-booking" />

      {/* Hero */}
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image src={images.hero.guestlistVsTable} alt="London nightclub VIP area versus general guestlist entry" fill className="object-cover kenburns" priority sizes="100vw" />
        <div className="absolute inset-0 [background:var(--grad-hero)]" />
        <div className="grade" />
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
              <span className="block h-px w-10 bg-champagne/60" />
              The Comparison
            </p>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
              Birthday Guestlist vs{" "}
              <em className="italic text-champagne font-normal">Table Booking</em>
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">
              Should you go guestlist or book a table for your birthday? An honest comparison to help you decide which option gives your group the best night.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Head to Head
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Side-by-Side{" "}
              <em className="italic text-champagne font-normal">Comparison</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {/* Guestlist */}
            <div className="border-t border-hairline pt-6" data-reveal>
              <h3 className="font-display font-medium text-xl text-ink mb-6">Guestlist Entry</h3>
              <div>
                {[
                  { label: "Cost", value: "Free or £10-20 per person" },
                  { label: "Reserved area", value: "No — standing only" },
                  { label: "Drinks", value: "Buy individually at bar (£12-18 each)" },
                  { label: "Guaranteed entry", value: "Subject to capacity and door policy" },
                  { label: "Queue", value: "Reduced wait, but still possible" },
                  { label: "Birthday extras", value: "None available" },
                  { label: "Service", value: "Standard — no dedicated host" },
                  { label: "Best for", value: "Small groups (2-5) on a tight budget" },
                ].map(row => (
                  <div key={row.label} className="flex items-baseline justify-between gap-6 border-b border-hairline py-3.5">
                    <span className="shrink-0 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint">{row.label}</span>
                    {row.label === "Cost" ? (
                      <span className="font-display italic text-lg text-champagne text-right">{row.value}</span>
                    ) : (
                      <span className="font-sans text-[0.9375rem] text-ink-soft text-right">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="border-t border-champagne/40 pt-6" data-reveal data-reveal-delay={90}>
              <h3 className="font-display font-medium text-xl text-champagne mb-6">VIP Table Booking</h3>
              <div>
                {[
                  { label: "Cost", value: "From £1,000 (split across group)" },
                  { label: "Reserved area", value: "Yes — your own table and seating" },
                  { label: "Drinks", value: "Premium bottles and mixers included" },
                  { label: "Guaranteed entry", value: "Yes — priority entry for full group" },
                  { label: "Queue", value: "Skip entirely" },
                  { label: "Birthday extras", value: "Sparklers, cake, DJ shoutout, decorations" },
                  { label: "Service", value: "Dedicated host all night" },
                  { label: "Best for", value: "Groups of 6+ who want a proper birthday" },
                ].map(row => (
                  <div key={row.label} className="flex items-baseline justify-between gap-6 border-b border-hairline py-3.5">
                    <span className="shrink-0 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint">{row.label}</span>
                    {row.label === "Cost" ? (
                      <span className="font-display italic text-lg text-champagne text-right">{row.value}</span>
                    ) : (
                      <span className="font-sans text-[0.9375rem] text-ink-soft text-right">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* The real cost comparison */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Numbers
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              The <em className="italic text-champagne font-normal">Real Cost</em> Comparison
            </h2>
          </div>
          <div className="space-y-6" data-reveal>
            <p className="font-sans text-base leading-[1.8] text-ink-soft">Guestlist looks cheaper on paper, but the maths tells a different story. On guestlist, each person buys drinks individually at London club prices — £12-18 per cocktail, £15-20 per spirit and mixer. Over a 4-5 hour night, most people spend £80-150 on drinks alone. With no reserved area, you&apos;re standing in the crowd the entire time.</p>
            <p className="font-sans text-base leading-[1.8] text-ink-soft">A table booking at £1,000 split 10 ways is £100 per person — and that covers premium bottles, mixers, a reserved VIP area, dedicated service, and birthday extras. You&apos;re often spending the same amount or less, but getting a dramatically better experience. For groups of 15+, the per-person table cost drops to £67 — significantly cheaper than a guestlist night of buying individual drinks.</p>
            <p className="font-sans text-base leading-[1.8] text-ink-soft">The deciding factor for birthdays specifically: you only get birthday extras (sparklers, cake, DJ shoutout, decorated table) with a table booking. If you want the night to actually feel like a birthday celebration rather than just a night at a club, the table is the clear choice.</p>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* When guestlist makes sense */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Guestlist
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              When Guestlist Makes{" "}
              <em className="italic text-champagne font-normal">Sense</em>
            </h2>
          </div>
          <p className="font-sans text-base leading-[1.8] text-ink-soft" data-reveal>Guestlist is the right choice in specific situations: very small groups (2-4 people) where the table minimum doesn&apos;t split well, tight budgets where £50-67 per person is genuinely too much, or when the birthday person simply prefers to be on the dancefloor all night rather than at a table. Some birthday groups also use guestlist for the &quot;after-party&quot; — table at one venue, then guestlist at a second for late-night dancing.</p>
          <div className="mt-16 sm:mt-20 mb-10" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Table
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              When a Table Is the{" "}
              <em className="italic text-champagne font-normal">Better Choice</em>
            </h2>
          </div>
          <p className="font-sans text-base leading-[1.8] text-ink-soft" data-reveal>For 90% of birthday celebrations, a table is the better choice. Any group of 6+ gets excellent per-person value. The birthday extras make the night feel genuinely special. The reserved area gives your group a home base. And the guaranteed entry removes the anxiety of door policy — nobody in your birthday group gets turned away. If the birthday matters, book a table.</p>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* CTA */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Verdict
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Need Help{" "}
              <em className="italic text-champagne font-normal">Deciding?</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">Tell us your group size and budget — we&apos;ll honestly advise whether a table or guestlist makes more sense for your birthday.</p>
          </div>
          <div data-reveal>
            <WhatsAppCTA message={getGeneralWhatsAppMessage()} label="Get Honest Advice on WhatsApp" size="large" variant="detailed" microcopy="Free service · Replies in minutes" />
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
              Guestlist vs Table{" "}
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

      <div className="divider-gilt" />

      {/* Related links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4" data-reveal>
          <Link href="/birthday-table-prices-london" className="font-sans text-sm text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">Table pricing guide &rarr;</Link>
          <Link href="/birthday-table-booking-london" className="font-sans text-sm text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">How table booking works &rarr;</Link>
          <Link href="/birthday-clubs-london" className="font-sans text-sm text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">All birthday clubs &rarr;</Link>
        </div>
      </section>
    </>
  );
}
