import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { openClubs, getMilestoneWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "21st Birthday Clubs London | Best Venues for Your 21st in 2026",
  description: "The best London nightclubs for a 21st birthday celebration. VIP tables, live entertainment, spectacular venues. Make turning 21 genuinely unforgettable. Free booking via WhatsApp.",
  alternates: { canonical: "https://londonbirthdayclub.com/21st-birthday-clubs-london" },
  openGraph: { url: "https://londonbirthdayclub.com/21st-birthday-clubs-london" },
};

const faqs = [
  { question: "What's the best club in London for a 21st birthday?", answer: "Cirque Le Soir consistently delivers the most spectacular 21st birthday experiences — live performers, pyrotechnic bottle shows, and an atmosphere of pure excitement. For a more exclusive 21st, Tape London offers intimate VIP energy. For large groups who want spectacle, Reign London has the space and aerial performances to match." },
  { question: "How far in advance should I book for a 21st birthday?", answer: "Book 2-3 weeks ahead for standard weekends, 3-4 weeks for peak Saturdays at popular venues like Cirque or Tape. 21st birthdays tend to be larger groups, and bigger tables need earlier booking to secure good positions." },
  { question: "What do 21st birthday groups get at London clubs?", answer: "A VIP table booking includes reserved seating, premium bottles and mixers, a dedicated host, priority entry, and birthday extras like sparkler presentations, cake arrangements, DJ shoutouts, and decorated tables. Some venues offer additional performer interactions for birthday groups." },
  { question: "How big is a typical 21st birthday group?", answer: "21st birthday groups range from 10-25 guests, with 12-18 being the most common. This size works well for a single table at most venues, or two tables at intimate clubs like Tape or TABU. Groups of 20+ may need multi-table arrangements." },
];

export default function TwentyFirstBirthdayPage() {
  const topPicks = [
    { slug: "cirque-le-soir", reason: "The undisputed champion for 21st birthdays. The live circus performers, pyrotechnic bottle presentations, and immersive atmosphere create a night that defines what turning 21 should feel like. Your group will be genuinely amazed — fire breathers, acrobats, and the kind of spectacle that makes this milestone birthday monumental." },
    { slug: "tape-london", reason: "For a 21st that prioritises exclusivity over spectacle. The members' club atmosphere, A-list clientele, and world-class sound create a celebration that feels genuinely VIP. Best for smaller 21st birthday groups of 8-12 who want quality over quantity." },
    { slug: "the-box-london", reason: "For the adventurous 21st birthday group. The provocative theatrical performances are unlike anything else in London — your group will be talking about this night for years. A genuinely unique way to mark the milestone." },
    { slug: "funky-buddha", reason: "Legendary status, incredible energy, intimate setting. A 21st at Funky Buddha feels like stepping into London nightlife history. The hip-hop and RnB playlist is perfectly pitched for the 21st birthday demographic." },
    { slug: "cuckoo-club", reason: "The two-floor layout solves every 21st birthday group's music dilemma. House upstairs, hip-hop downstairs — everyone happy, nobody compromises. Open more nights than most Mayfair clubs too." },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "21st Birthday Clubs London", href: "/21st-birthday-clubs-london" }]} />

      {/* Hero */}
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image src={images.hero.twentyFirst} alt="21st birthday party at a London club" fill className="object-cover kenburns" priority sizes="100vw" />
        <div className="absolute inset-0 [background:var(--grad-hero)]" />
        <div className="grade" />
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
              <span className="block h-px w-10 bg-champagne/60" />
              Milestone &middot; 21st
            </p>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
              21st Birthday Clubs in{" "}
              <em className="italic text-champagne font-normal">London</em>
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl mb-10">
              Turning 21 is the biggest birthday milestone in nightlife. This is the one your friends will compare every future night out to — make it count with a VIP celebration at one of London&apos;s most spectacular clubs.
            </p>
            <WhatsAppCTA message={getMilestoneWhatsAppMessage("21st")} label="Plan My 21st Birthday" size="large" microcopy="Free service · Replies in minutes" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Milestone
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Why Your 21st <em className="italic text-champagne font-normal">Deserves</em> a London Club
            </h2>
          </div>
          <div data-reveal>
            <p className="font-sans text-base leading-[1.8] text-ink-soft mb-6">By 21, you and your friends have been to enough bars and house parties to know the difference between a good night and a great one. A 21st birthday at a London nightclub elevates the celebration from memorable to legendary — VIP service, spectacular venues, bottle presentations with sparklers, and the feeling of being at the centre of something genuinely exciting.</p>
            <p className="font-sans text-base leading-[1.8] text-ink-soft">The 21st birthday group is typically the perfect size for a club celebration: big enough to create energy, close enough as friends to make the night genuinely personal. Whether you want the theatrical spectacle of Cirque Le Soir, the exclusive cool of Tape London, or the daring entertainment of The Box, London has a venue that matches exactly what your 21st should feel like.</p>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Top 5 ranked list */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Shortlist
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Top 5 Clubs for a{" "}
              <em className="italic text-champagne font-normal">21st Birthday</em>
            </h2>
          </div>
          <div className="space-y-10" data-reveal>
            {topPicks.map((pick, i) => {
              const club = openClubs.find(c => c.slug === pick.slug);
              if (!club) return null;
              return (
                <div key={pick.slug} className="flex gap-6 sm:gap-8 border-t border-hairline pt-6">
                  <span className="font-display italic font-medium text-4xl text-champagne/60 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                      <Link href={`/clubs/${club.slug}`} className="font-display font-semibold text-[1.375rem] leading-snug text-ink hover:text-champagne-bright transition-colors duration-300">
                        {club.name}
                      </Link>
                      <p className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">
                        {club.area} &middot; From{" "}
                        <span className="font-display italic font-medium text-lg normal-case tracking-normal text-champagne whitespace-nowrap">{club.minSpend}</span>
                      </p>
                    </div>
                    <p className="font-sans text-base leading-[1.8] text-ink-soft max-w-3xl">{pick.reason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Quick comparisons */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Quick Match
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Quick Match: What Kind of{" "}
              <em className="italic text-champagne font-normal">21st</em> Are You Planning?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2" data-reveal>
            {[
              { q: "Want the biggest wow?", a: "Cirque Le Soir — performers and pyrotechnics", slug: "cirque-le-soir" },
              { q: "Want genuine exclusivity?", a: "Tape London — members' club, A-list energy", slug: "tape-london" },
              { q: "Want something daring?", a: "The Box — provocative theatre meets nightclub", slug: "the-box-london" },
              { q: "Mixed music tastes?", a: "Cuckoo Club — house upstairs, hip-hop downstairs", slug: "cuckoo-club" },
              { q: "Large group (15+)?", a: "Reign London — grand venue, aerial performances", slug: "reign-london" },
              { q: "Instagram-worthy venue?", a: "TABU — Japanese underground, every angle looks amazing", slug: "tabu-london" },
            ].map(item => (
              <Link key={item.q} href={`/clubs/${item.slug}`} className="group block border-t border-hairline hover:border-hairline-strong px-1 pt-5 pb-6 transition-colors duration-500">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300">{item.q}</span>
                  <span className="text-champagne transition-transform duration-400 group-hover:translate-x-1.5">&rarr;</span>
                </div>
                <div className="font-sans text-[0.9375rem] leading-relaxed text-ink-soft mt-1.5">{item.a}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Budget guide */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Budget
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              21st Birthday <em className="italic text-champagne font-normal">Budget</em> Guide
            </h2>
          </div>
          <div data-reveal>
            <p className="font-sans text-base leading-[1.8] text-ink-soft mb-6">A typical 21st birthday group of 12-18 people, with a £1,000 minimum spend, breaks down to approximately £56-83 per person. That covers premium bottles, mixers, VIP service, and a reserved area for the entire night. Factor in cake (£50-150) and you&apos;re looking at a genuinely premium experience for less than you might expect.</p>
            <p className="font-sans text-base leading-[1.8] text-ink-soft">The birthday person typically pays nothing — their share is covered by the group. With 15 friends splitting £1,000 plus cake, each person pays roughly £70-75 for a VIP birthday experience that&apos;s incomparably better than buying individual drinks at a bar all night.</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8">
              <Link href="/birthday-table-prices-london" className="font-sans text-sm text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">Full pricing guide &rarr;</Link>
              <Link href="/vip-birthday-tables-london" className="font-sans text-sm text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">VIP table upgrades &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Plan CTA */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Booking
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Plan Your <em className="italic text-champagne font-normal">21st Birthday</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">This is the big one. Tell us your date, group size, and dream venue — we&apos;ll make your 21st unforgettable.</p>
          </div>
          <div data-reveal>
            <WhatsAppCTA message={getMilestoneWhatsAppMessage("21st")} label="Plan My 21st on WhatsApp" size="large" variant="detailed" microcopy="Free service · Replies in minutes" />
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
              21st Birthday <em className="italic text-champagne font-normal">FAQ</em>
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

      {/* Related guides */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3" data-reveal>
          <Link href="/18th-birthday-clubs-london" className="font-sans text-sm text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">&larr; 18th birthday guide</Link>
          <Link href="/30th-birthday-night-out-london" className="font-sans text-sm text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">30th birthday guide &rarr;</Link>
          <Link href="/birthday-by-age" className="font-sans text-sm text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">All milestone birthdays</Link>
        </div>
      </section>
    </>
  );
}
