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

      <section className="relative min-h-[50vh] flex items-center justify-center px-4">
        <Image src={images.hero.guestlistVsTable} alt="London nightclub VIP area versus general guestlist entry" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Birthday Guestlist vs <span className="text-gold">Table Booking</span></h1>
          <p className="text-lg text-white max-w-2xl [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] mx-auto leading-relaxed mb-8">
            Should you go guestlist or book a table for your birthday? An honest comparison to help you decide which option gives your group the best night.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Side-by-Side Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Guestlist */}
            <div className="bg-bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Guestlist Entry</h3>
              <div className="space-y-3">
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
                  <div key={row.label} className="flex justify-between text-sm border-b border-border/50 pb-2">
                    <span className="text-text-muted">{row.label}</span>
                    <span className="text-text-secondary text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="bg-bg-card border border-gold/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gold mb-4">VIP Table Booking</h3>
              <div className="space-y-3">
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
                  <div key={row.label} className="flex justify-between text-sm border-b border-border/50 pb-2">
                    <span className="text-text-muted">{row.label}</span>
                    <span className="text-text-secondary text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The real cost comparison */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The Real Cost Comparison</h2>
          <p className="text-text-secondary leading-relaxed mb-6">Guestlist looks cheaper on paper, but the maths tells a different story. On guestlist, each person buys drinks individually at London club prices — £12-18 per cocktail, £15-20 per spirit and mixer. Over a 4-5 hour night, most people spend £80-150 on drinks alone. With no reserved area, you&apos;re standing in the crowd the entire time.</p>
          <p className="text-text-secondary leading-relaxed mb-6">A table booking at £1,000 split 10 ways is £100 per person — and that covers premium bottles, mixers, a reserved VIP area, dedicated service, and birthday extras. You&apos;re often spending the same amount or less, but getting a dramatically better experience. For groups of 15+, the per-person table cost drops to £67 — significantly cheaper than a guestlist night of buying individual drinks.</p>
          <p className="text-text-secondary leading-relaxed">The deciding factor for birthdays specifically: you only get birthday extras (sparklers, cake, DJ shoutout, decorated table) with a table booking. If you want the night to actually feel like a birthday celebration rather than just a night at a club, the table is the clear choice.</p>
        </div>
      </section>

      {/* When guestlist makes sense */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">When Guestlist Makes Sense</h2>
          <p className="text-text-secondary leading-relaxed mb-6">Guestlist is the right choice in specific situations: very small groups (2-4 people) where the table minimum doesn&apos;t split well, tight budgets where £50-67 per person is genuinely too much, or when the birthday person simply prefers to be on the dancefloor all night rather than at a table. Some birthday groups also use guestlist for the &quot;after-party&quot; — table at one venue, then guestlist at a second for late-night dancing.</p>
          <h2 className="text-3xl font-bold mb-6 mt-12">When a Table Is the Better Choice</h2>
          <p className="text-text-secondary leading-relaxed">For 90% of birthday celebrations, a table is the better choice. Any group of 6+ gets excellent per-person value. The birthday extras make the night feel genuinely special. The reserved area gives your group a home base. And the guaranteed entry removes the anxiety of door policy — nobody in your birthday group gets turned away. If the birthday matters, book a table.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Need Help Deciding?</h2>
          <p className="text-text-secondary text-center text-lg mb-8">Tell us your group size and budget — we&apos;ll honestly advise whether a table or guestlist makes more sense for your birthday.</p>
          <WhatsAppCTA message={getGeneralWhatsAppMessage()} label="Get Honest Advice on WhatsApp" size="large" variant="detailed" />
        </div>
      </section>

      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Guestlist vs Table FAQ</h2>
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
          <Link href="/birthday-table-prices-london" className="text-gold text-sm hover:underline">Table pricing guide &rarr;</Link>
          <Link href="/birthday-table-booking-london" className="text-gold text-sm hover:underline">How table booking works &rarr;</Link>
          <Link href="/birthday-clubs-london" className="text-gold text-sm hover:underline">All birthday clubs &rarr;</Link>
        </div>
      </section>
    </>
  );
}
