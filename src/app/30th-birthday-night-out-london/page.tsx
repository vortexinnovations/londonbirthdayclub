import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { openClubs, getMilestoneWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "30th Birthday Night Out London | Celebrate Turning 30 in Style",
  description: "The best London clubs and venues for a 30th birthday celebration. Quality over chaos — elegant venues, dinner-to-club options, and VIP birthday experiences for the milestone that matters.",
  alternates: { canonical: "https://londonbirthdayclub.com/30th-birthday-night-out-london" },
  openGraph: { url: "https://londonbirthdayclub.com/30th-birthday-night-out-london" },
};

const faqs = [
  { question: "Where should I celebrate my 30th birthday in London?", answer: "For a complete evening, Maddox Club offers Italian dining followed by a house music dancefloor — one venue, whole night sorted. For pure elegance, Dear Darling's chandeliered booths are unmatched. For exclusivity, Tape London's members' club atmosphere delivers genuine VIP treatment. The best choice depends on whether you prioritise food, atmosphere, or exclusivity." },
  { question: "How much should I budget for a 30th birthday at a London club?", answer: "A 30th birthday group of 10-15 people at a £1,000 minimum spend works out to £67-100 per person. For the full dinner-to-club experience at Maddox, add roughly £50-70 per person for dinner. Many 30th birthday groups are comfortable spending £150-200 per head for a premium experience." },
  { question: "Should I combine dinner and a club for a 30th birthday?", answer: "Absolutely — it's the most popular format for 30th birthdays. Maddox Club offers this seamlessly under one roof. Alternatively, start with cocktails and cake at Dear Darling, then move to a higher-energy venue. A 30th warrants the full evening treatment, not just showing up to a club at midnight." },
  { question: "Is Mayfair good for a 30th birthday?", answer: "Mayfair is excellent for 30th birthdays. The area's concentration of premium venues means you're surrounded by quality — sophisticated atmospheres, exceptional service, and the kind of environment that matches the significance of turning 30. Most of our 30th birthday bookings are in Mayfair." },
];

export default function ThirtiethBirthdayPage() {
  const topPicks = [
    { slug: "maddox-club", reason: "The complete 30th birthday experience. Start with Italian dining — genuinely excellent food, not a club afterthought — then transition seamlessly to a house music dancefloor. One venue, one booking, the whole evening sorted. The house music policy attracts a mature, well-dressed crowd that matches the 30th birthday energy perfectly." },
    { slug: "dear-darling", reason: "If your 30th birthday vision is champagne cocktails in velvet booths surrounded by chandeliers, Dear Darling is perfect. The most elegant birthday setting in Mayfair. Exceptional drinks, opulent interiors, and late-night hours mean you don't need to leave for the celebration to feel complete." },
    { slug: "tape-london", reason: "For a 30th that prioritises genuine exclusivity. The members' club atmosphere means your celebration is intimate, personal, and surrounded by quality. Smaller 30th birthday groups of 6-10 who want something truly special will love Tape." },
    { slug: "selene-london", reason: "Selene strikes the balance that 30th birthday groups want: elegant without being intimidating, fun without being chaotic. The refined interiors and balanced music policy work for groups with mixed preferences — everyone enjoys the evening at their own pace." },
    { slug: "scotch-of-st-james", reason: "For the 30th birthday person who values character over gloss. Scotch's Hendrix-era heritage and vintage-meets-luxury interiors create a celebration with genuine personality. The intimate setting means every detail feels personal." },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "30th Birthday Night Out London", href: "/30th-birthday-night-out-london" }]} />

      {/* Hero */}
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image src={images.hero.thirtieth} alt="30th birthday night out at a sophisticated London venue" fill className="object-cover kenburns" priority sizes="100vw" />
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
              30th Birthday Night Out in{" "}
              <em className="italic text-champagne font-normal">London</em>
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl mb-10">
              Turning 30 calls for quality, not chaos. The right venue, exceptional service, and an evening that feels worthy of the milestone. This is your guide to celebrating 30 with the sophistication it deserves.
            </p>
            <WhatsAppCTA message={getMilestoneWhatsAppMessage("30th")} label="Plan My 30th Birthday" size="large" microcopy="Free service · Replies in minutes" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Occasion
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              What a 30th Birthday Night Should{" "}
              <em className="italic text-champagne font-normal">Feel Like</em>
            </h2>
          </div>
          <div data-reveal>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft mb-6">A 30th birthday is fundamentally different from a 21st. The group is slightly smaller but closer. The budget is higher but expectations match. The priority shifts from pure energy to quality — good drinks, excellent service, a venue that feels genuinely premium. Many 30th birthday groups want the evening to include dinner, making it a proper occasion rather than just a club night.</p>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft">The venues we recommend for 30th birthdays reflect this shift. They prioritise atmosphere over volume, sophistication over spectacle, and personal service over crowd size. The result is a birthday that feels like an achievement celebrated, not just another night out.</p>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Ranked Top 5 */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Venues
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Top 5 Venues for a{" "}
              <em className="italic text-champagne font-normal">30th Birthday</em>
            </h2>
          </div>
          <div className="space-y-10" data-reveal>
            {topPicks.map((pick, i) => {
              const club = openClubs.find(c => c.slug === pick.slug);
              if (!club) return null;
              return (
                <div key={pick.slug} className="flex gap-6 sm:gap-8 border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500">
                  <span className="font-display italic font-medium text-4xl text-champagne/60 leading-none select-none w-12 flex-shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5 mb-3">
                      <Link href={`/clubs/${club.slug}`} className="font-display font-semibold text-[1.375rem] leading-snug text-ink hover:text-champagne-bright transition-colors duration-300">{club.name}</Link>
                      <span className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">{club.area} &middot; From</span>
                      <span className="font-display italic font-medium text-lg text-champagne leading-none">{club.minSpend}</span>
                    </div>
                    <p className="font-sans text-base leading-[1.8] text-ink-soft">{pick.reason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Style Match */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Style Match
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Match Your 30th Birthday{" "}
              <em className="italic text-champagne font-normal">Style</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-14 gap-y-12">
            {[
              { q: "Want dinner + club?", a: "Maddox Club — Italian dining then house music", slug: "maddox-club" },
              { q: "Want pure elegance?", a: "Dear Darling — chandeliers, cocktails, opulence", slug: "dear-darling" },
              { q: "Want exclusivity?", a: "Tape London — members' club, celebrity crowd", slug: "tape-london" },
              { q: "Want balance?", a: "Selene — refined but fun, works for everyone", slug: "selene-london" },
            ].map((item, i) => (
              <Link
                key={item.q}
                href={`/clubs/${item.slug}`}
                className="group block border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500"
                data-reveal
                data-reveal-delay={(i % 2) * 90}
              >
                <div className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300 mb-3">{item.q}</div>
                <div className="font-sans text-base leading-[1.8] text-ink-soft">{item.a}</div>
              </Link>
            ))}
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
              The Service
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Plan Your{" "}
              <em className="italic text-champagne font-normal">30th Birthday</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">This milestone deserves the right venue. Tell us your vision and we&apos;ll make it happen — dinner, club, birthday extras, everything.</p>
          </div>
          <div data-reveal>
            <WhatsAppCTA message={getMilestoneWhatsAppMessage("30th")} label="Plan My 30th on WhatsApp" size="large" variant="detailed" microcopy="Free service · Replies in minutes" />
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
              30th Birthday{" "}
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

      {/* Cross-links */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4">
          <Link href="/21st-birthday-clubs-london" className="font-sans text-[0.8125rem] text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">&larr; 21st birthday guide</Link>
          <Link href="/birthday-by-age" className="font-sans text-[0.8125rem] text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">All milestone birthdays</Link>
          <Link href="/how-to-plan-a-birthday-night-in-mayfair" className="font-sans text-[0.8125rem] text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">Mayfair planning guide &rarr;</Link>
        </div>
      </section>
    </>
  );
}
