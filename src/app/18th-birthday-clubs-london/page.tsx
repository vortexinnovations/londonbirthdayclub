import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { openClubs, getMilestoneWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "18th Birthday Clubs London | Best Venues for Turning 18 in 2026",
  description: "The best London nightclubs for an 18th birthday celebration. First night out done properly — VIP tables, bottle service, and spectacular venues. From £1,000 with free booking.",
  alternates: { canonical: "https://londonbirthdayclub.com/18th-birthday-clubs-london" },
  openGraph: { url: "https://londonbirthdayclub.com/18th-birthday-clubs-london" },
};

const faqs = [
  { question: "Can you go to a London nightclub for your 18th birthday?", answer: "Yes. London nightclubs admit guests aged 18 and over. You'll need valid photo ID (passport or driving licence) to enter. For an 18th birthday, a VIP table booking ensures your group gets priority entry and avoids any door queue uncertainty." },
  { question: "What's the best London club for an 18th birthday?", answer: "Cirque Le Soir is our top recommendation — the live performers, pyrotechnics, and spectacular atmosphere create the most memorable first big night out. Cuckoo Club is also excellent with its two floors catering to different music tastes. Both are welcoming to 18th birthday groups." },
  { question: "How much does an 18th birthday table cost in London?", answer: "Tables start from £1,000 minimum spend. For a typical 18th birthday group of 10-15, that's £67-100 per person — often less than a night of buying individual drinks, but with VIP service, bottles, and a reserved area. Weeknight bookings can offer lower minimums." },
  { question: "What should I wear to a London club for my 18th?", answer: "Mayfair clubs require smart dress: no sportswear, trainers, or casual jeans. For men, smart shoes, fitted trousers, and a collared shirt. For women, the dress code is more flexible but still smart. BEAT London has a more relaxed smart-casual dress code." },
];

export default function EighteenthBirthdayPage() {
  const topPicks = [
    { slug: "cirque-le-soir", reason: "The ultimate first big night out. Live performers, pyrotechnic bottle shows, and an atmosphere that makes turning 18 feel monumental. Your group will be genuinely amazed — this is the kind of night you'll tell stories about for years." },
    { slug: "cuckoo-club", reason: "Two floors with completely different vibes solve the music-taste problem that every group has. Hip-hop downstairs, house upstairs — everyone finds their groove. The Mayfair location makes it feel special without being intimidating." },
    { slug: "reign-london", reason: "If your 18th group is big (15+), Reign's grand venue with aerial performances creates a celebration that matches the energy of the milestone. The spectacle gives everyone something to remember." },
    { slug: "funky-buddha", reason: "One of the most iconic names in London nightlife. The intimate setting and incredible hip-hop playlist create an 18th birthday that feels like a proper event. The energy is infectious." },
    { slug: "luna-club-london", reason: "Stunning modern interiors that photograph beautifully. For 18th birthday groups who want their first big night to look as good on Instagram as it feels in person." },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "18th Birthday Clubs London", href: "/18th-birthday-clubs-london" }]} />

      {/* Hero */}
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image src={images.hero.eighteenth} alt="18th birthday celebration at a London nightclub" fill className="object-cover kenburns" priority sizes="100vw" />
        <div className="absolute inset-0 [background:var(--grad-hero)]" />
        <div className="grade" />
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
              <span className="block h-px w-10 bg-champagne/60" />
              The Milestone
            </p>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
              18th Birthday Clubs in{" "}
              <em className="italic text-champagne font-normal">London</em>
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl mb-10">
              Your first legal night out deserves better than a random bar. Celebrate turning 18 at one of London&apos;s best nightclubs with VIP tables, bottle service, and the kind of spectacle that makes this birthday genuinely unforgettable.
            </p>
            <WhatsAppCTA message={getMilestoneWhatsAppMessage("18th")} label="Plan My 18th Birthday" size="large" microcopy="Free service · Replies in minutes" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 sm:mb-10" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Occasion
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              What Makes an 18th Birthday at a Club{" "}
              <em className="italic text-champagne font-normal">Special</em>
            </h2>
          </div>
          <div data-reveal>
            <p className="font-sans text-base leading-[1.8] text-ink-soft mb-6">An 18th birthday is your first milestone celebration as an adult, and that calls for something more than showing up to a random bar. A VIP table at a London nightclub means your group has a reserved area, premium drinks, priority entry (no risking being turned away), and birthday extras like sparklers and DJ shoutouts that make the night feel properly celebratory.</p>
            <p className="font-sans text-base leading-[1.8] text-ink-soft">For many 18th birthday groups, this is their first experience of proper nightlife — and starting at a premium venue sets the bar high. The memories, the photos, and the shared experience of a spectacular night out create the kind of 18th birthday that lives up to the anticipation.</p>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Ranked top picks */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Verdict
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Our <em className="italic text-champagne font-normal">Top Picks</em>{" "}
              for an 18th Birthday
            </h2>
          </div>
          <div className="space-y-10" data-reveal>
            {topPicks.map((pick, i) => {
              const club = openClubs.find(c => c.slug === pick.slug);
              if (!club) return null;
              return (
                <div key={pick.slug} className="flex gap-6 border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500">
                  <span className="font-display italic font-medium text-4xl text-champagne/60 leading-none select-none">
                    {`0${i + 1}`}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <Link href={`/clubs/${club.slug}`} className="font-display font-semibold text-[1.375rem] leading-snug text-ink hover:text-champagne-bright transition-colors duration-300">{club.name}</Link>
                      <span className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">
                        {club.area} &middot; From{" "}
                        <span className="font-display italic font-medium text-lg normal-case tracking-normal text-champagne">{club.minSpend}</span>
                      </span>
                    </div>
                    <p className="mt-3 font-sans text-base leading-[1.8] text-ink-soft max-w-2xl">{pick.reason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Budget guide */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 sm:mb-10" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Budget
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              18th Birthday{" "}
              <em className="italic text-champagne font-normal">Budget</em> Guide
            </h2>
          </div>
          <div data-reveal>
            <p className="font-sans text-base leading-[1.8] text-ink-soft mb-6">An 18th birthday group typically ranges from 10-20 people. With a £1,000 minimum spend at most venues, that breaks down to £50-100 per person for the table — covering premium bottles, mixers, a reserved VIP area, and birthday extras. Compare that to buying individual drinks all night at a London bar, and a table often works out cheaper while being significantly more memorable.</p>
            <p className="font-sans text-base leading-[1.8] text-ink-soft mb-8">Midweek nights (Wednesday and Thursday) often have lower minimum spends — and the atmosphere is still brilliant. A Wednesday birthday at Cirque Le Soir still gets you the full circus experience at a more accessible price point.</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/birthday-table-prices-london" className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200">
                Full pricing guide{" "}
                <span className="transition-transform duration-400 group-hover:translate-x-1.5">&rarr;</span>
              </Link>
              <Link href="/birthday-guestlist-vs-table-booking" className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200">
                Guestlist vs table — which is right?{" "}
                <span className="transition-transform duration-400 group-hover:translate-x-1.5">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Plan CTA */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 sm:mb-14" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Start Planning
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Plan Your{" "}
              <em className="italic text-champagne font-normal">18th Birthday</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">Tell us your date, group size, and vibe — we&apos;ll recommend the perfect venue and handle every detail. Free service, zero hassle.</p>
          </div>
          <div data-reveal>
            <WhatsAppCTA message={getMilestoneWhatsAppMessage("18th")} label="Plan My 18th on WhatsApp" size="large" variant="detailed" microcopy="Free service · Replies in minutes" />
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
              <em className="italic text-champagne font-normal">18th</em> Birthday
              FAQ
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

      {/* Cross-links */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-4" data-reveal>
          <Link href="/21st-birthday-clubs-london" className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200">
            21st birthday guide{" "}
            <span className="transition-transform duration-400 group-hover:translate-x-1.5">&rarr;</span>
          </Link>
          <Link href="/birthday-by-age" className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200">
            All milestone birthdays{" "}
            <span className="transition-transform duration-400 group-hover:translate-x-1.5">&rarr;</span>
          </Link>
          <Link href="/birthday-clubs-london" className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200">
            All birthday clubs{" "}
            <span className="transition-transform duration-400 group-hover:translate-x-1.5">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
