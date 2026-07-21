import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { getGeneralWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title:
    "Best London Clubs by Age — 18th, 21st, 25th, 30th, 40th & 50th Birthday Guide",
  description:
    "Find the perfect London nightclub for your milestone birthday. Expert recommendations for 21st, 25th, 30th, 40th, and 50th birthday celebrations at Mayfair's best clubs.",
  alternates: {
    canonical: "https://londonbirthdayclub.com/birthday-by-age",
  },
  openGraph: { url: "https://londonbirthdayclub.com/birthday-by-age" },
};

const faqs = [
  {
    question: "What is the best London club for a 21st birthday?",
    answer:
      "For a 21st birthday, Cirque Le Soir offers the most exciting and memorable experience with live performers and an electric atmosphere. Cuckoo Club is also excellent thanks to its two floors catering to different music tastes. Both venues create the high-energy, spectacular atmosphere that 21st birthday groups are looking for.",
  },
  {
    question: "Where should I celebrate my 30th birthday in London?",
    answer:
      "For a 30th birthday, consider Maddox Club for the complete dinner-to-dancing experience, Dear Darling for an elegant cocktail-focused celebration, or Tape London for genuine exclusivity. A 30th calls for something more refined than a standard night out — these venues deliver sophistication without sacrificing fun.",
  },
  {
    question: "Is Mayfair good for a 25th birthday?",
    answer:
      "Mayfair is excellent for a 25th birthday. Venues like TABU, Luna Club London, and Cuckoo Club offer the perfect blend of high energy and style that suits the 25th birthday demographic. Minimum spends start from £1,000, which works well when split across a group of 8-15.",
  },
];

const milestones = [
  {
    age: "18th & 21st",
    slug: "18th-21st",
    title: "18th & 21st Birthday Celebrations",
    subtitle:
      "The big coming-of-age night out. This birthday is about energy, spectacle, and making a statement.",
    description:
      "Your 18th or 21st birthday is one of the first big milestones that calls for a proper celebration. The priority here is fun, energy, and an experience that feels genuinely special — not just another night at the pub. Your group will likely be a mix of close friends who want to dance, take photos, and have the kind of night they'll be talking about for months.",
    topPicks: [
      {
        name: "Cirque Le Soir",
        slug: "cirque-le-soir",
        reason:
          "The live performers, theatrical atmosphere, and party energy make Cirque the ultimate 21st birthday experience. Your group will be genuinely amazed — fire breathers, acrobats, and pyrotechnic bottle shows create the kind of spectacle that makes turning 21 feel monumental.",
      },
      {
        name: "Cuckoo Club",
        slug: "cuckoo-club",
        reason:
          "Two floors with different music mean everyone in your birthday group finds their groove. The hip-hop basement is where the party peaks. The Mayfair location makes the night feel special without being intimidatingly exclusive.",
      },
      {
        name: "Reign London",
        slug: "reign-london",
        reason:
          "If your 21st group is big (15+), Reign's large capacity and aerial performances create a birthday that matches the energy of a milestone year. The spectacle gives everyone something to remember.",
      },
    ],
    budgetTip:
      "A 21st birthday group typically ranges from 10–20 people. With a £1,000 minimum spend, that's £50–100 per person for the table, plus your own drinks budget. Wednesday or Thursday nights often have lower minimums — and the atmosphere is still brilliant.",
  },
  {
    age: "25th",
    slug: "25th",
    title: "25th Birthday Celebrations",
    subtitle:
      "Old enough to appreciate quality, young enough to want a big night. The sweet spot.",
    description:
      "By 25, you and your friends have been to plenty of clubs. A 25th birthday needs to be a step up — somewhere that impresses, that feels like a genuine treat. Your group is likely earning more, willing to spend a bit more, and wants something that feels special without being stuffy. This is the age where Mayfair starts making sense.",
    topPicks: [
      {
        name: "TABU London",
        slug: "tabu-london",
        reason:
          "The Japanese underground aesthetic is the kind of venue that impresses a 25-year-old crowd. It's cool, it's different, and the hip-hop playlist is exactly right. The intimate size means your birthday group is part of the energy, not lost in it.",
      },
      {
        name: "Luna Club London",
        slug: "luna-club-london",
        reason:
          "The celestial-inspired interiors are the kind of venue that impresses a 25-year-old crowd — modern, visually stunning, and incredibly photogenic. The hip-hop and Afrobeats playlist keeps the energy high, and the newer-venue excitement means every visit feels like a discovery.",
      },
      {
        name: "Funky Buddha",
        slug: "funky-buddha",
        reason:
          "One of the most iconic names in London nightlife. The legendary Berkeley Street venue has incredible energy, an excellent hip-hop playlist, and the kind of celebrity pedigree that makes turning 25 feel like a headline event.",
      },
    ],
    budgetTip:
      "25th birthday groups tend to be 8–15 people. With minimum spends from £1,000, you're looking at £70–125 per person for the table. Friday and Saturday nights have higher minimums but bigger atmospheres.",
  },
  {
    age: "30th",
    slug: "30th",
    title: "30th Birthday Celebrations",
    subtitle:
      "A milestone that deserves something exceptional. Quality over chaos.",
    description:
      "Turning 30 is a big deal, and the celebration needs to match. At this stage, your birthday group values quality — good drinks, excellent service, an environment that feels premium. The focus shifts from pure energy to experience. A 30th birthday at the right venue feels like a proper event, not just another night out. Many 30th birthday groups also want the option to include dinner, making the evening feel more complete.",
    topPicks: [
      {
        name: "Maddox Club",
        slug: "maddox-club",
        reason:
          "Maddox's dinner-to-club format is perfect for milestone birthdays. Start with excellent Italian dining, then transition seamlessly into a house music dancefloor — all without leaving the building. It's the most complete 30th birthday experience in London — one booking, one venue, the whole evening sorted.",
      },
      {
        name: "Tape London",
        slug: "tape-london",
        reason:
          "For a 30th, genuine exclusivity matters more than spectacle. Tape's members' club atmosphere means your celebration is intimate, personal, and surrounded by quality. The smaller group that wants something truly special will love Tape.",
      },
      {
        name: "Dear Darling",
        slug: "dear-darling",
        reason:
          "If your 30th birthday vision is elegant cocktails in opulent surroundings rather than a packed dancefloor, Dear Darling is perfect. The chandeliers, velvet booths, and exceptional drinks list create a milestone celebration that feels grown-up in the best way.",
      },
    ],
    budgetTip:
      "30th birthday groups are typically 8–20 people with a higher per-person budget. Many groups are happy spending £100–200 per head for a premium experience. Consider Maddox Club for the dinner-and-club option, which maximises the evening for a similar per-person spend.",
  },
  {
    age: "40th",
    slug: "40th",
    title: "40th Birthday Celebrations",
    subtitle:
      "Refined, sophisticated, and worth every penny. A celebration of arriving.",
    description:
      "A 40th birthday is a celebration of success, friendship, and knowing exactly what you want. The group is typically smaller, the budget is higher, and the expectations are for genuine quality. A 40th birthday venue needs to deliver flawless service, a refined atmosphere, and an experience that feels worthy of the occasion. This is not about proving anything — it's about enjoying the very best.",
    topPicks: [
      {
        name: "Maddox Club",
        slug: "maddox-club",
        reason:
          "Maddox's Italian dinner followed by a house music club is ideal for a 40th. The dinner sets the tone for a proper celebration, the food is genuinely excellent, and the house music dancefloor attracts a mature, well-dressed crowd. The transition from dinner to dancing feels natural and exciting.",
      },
      {
        name: "Dear Darling",
        slug: "dear-darling",
        reason:
          "For a 40th that prioritises elegance, Dear Darling is unmatched. The opulent interiors, exceptional cocktails, and intimate atmosphere create the kind of evening where every moment feels considered. Perfect for a smaller group of close friends who want quality over quantity.",
      },
      {
        name: "Scotch of St James",
        slug: "scotch-of-st-james",
        reason:
          "Scotch's heritage and character resonate with a 40th birthday group. There's a warmth and authenticity here that newer, flashier venues lack. The intimate setting and eclectic music create a birthday with genuine personality.",
      },
    ],
    budgetTip:
      "40th birthday groups tend to be 6–15 people with comfort as a priority. Budget £150–250 per person for a premium experience including dinner. Private dining at Maddox or a champagne-focused evening at Dear Darling creates genuine luxury.",
  },
  {
    age: "50th",
    slug: "50th",
    title: "50th Birthday Celebrations",
    subtitle:
      "A landmark celebration that deserves the very best London has to offer.",
    description:
      "A 50th birthday is a landmark, and the celebration should reflect that. The group is typically close friends and loved ones, the atmosphere should be convivial and warm, and the experience should feel effortlessly premium. A 50th birthday venue needs to deliver impeccable service without pretension, a setting that facilitates conversation and connection, and enough energy to make the evening feel genuinely celebratory.",
    topPicks: [
      {
        name: "Maddox Club",
        slug: "maddox-club",
        reason:
          "The dinner-to-club format works exceptionally well for 50th birthdays. The Italian dinner allows for toasts, speeches, and catching up, while the house music club provides energy for those who want to keep the night going. The sophistication of the venue matches the milestone perfectly.",
      },
      {
        name: "Scotch of St James",
        slug: "scotch-of-st-james",
        reason:
          "Scotch's heritage stretching back to the Hendrix era resonates beautifully with a 50th birthday group. The warmth, character, and authenticity create an atmosphere that feels like celebrating in somewhere truly special. The intimate setting facilitates conversation and genuine connection.",
      },
      {
        name: "Dear Darling",
        slug: "dear-darling",
        reason:
          "For a 50th that's all about ambiance and quality, Dear Darling's opulent setting and cocktail expertise create an evening that feels genuinely special. The intimate scale means your group has the venue's attention, and the surroundings give the celebration a sense of grandeur.",
      },
    ],
    budgetTip:
      "50th birthday groups are typically 6–12 close friends. Budget generously — £200+ per person — and focus on the experience. A private dining area with dedicated service creates the kind of personal touch that marks a 50th properly.",
  },
];

export default function BirthdayByAgePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Birthday by Age", href: "/birthday-by-age" }]} />

      {/* Hero */}
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image
          src={images.hero.birthdayByAge}
          alt="Birthday celebrations for every age milestone in London"
          fill
          className="object-cover kenburns"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 [background:var(--grad-hero)]" />
        <div className="grade" />
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
              <span className="block h-px w-10 bg-champagne/60" />
              The Age Guide
            </p>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
              Best London Clubs by{" "}
              <em className="italic text-champagne font-normal">
                Birthday Milestone
              </em>
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-2xl">
              Different ages call for different celebrations. A 21st birthday
              crew wants a completely different vibe from a 40th. Here&apos;s our
              honest guide to matching the right London club to your milestone
              birthday.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Jump */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b border-hairline">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-3">
          {milestones.map((m) => (
            <a
              key={m.slug}
              href={`#${m.slug}`}
              className="inline-flex items-center border border-hairline-strong hover:border-champagne rounded-[2px] px-4 py-2 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-champagne hover:text-champagne-bright transition-colors duration-300"
            >
              {m.age} Birthday
            </a>
          ))}
        </div>
      </section>

      {/* Milestone Sections */}
      {milestones.map((milestone, idx) => (
        <Fragment key={milestone.slug}>
          {idx > 0 && <div className="divider-gilt" />}
          <section
            id={milestone.slug}
            className={`scroll-mt-24 py-24 sm:py-28 px-4 sm:px-6 lg:px-8${
              idx % 2 === 1 ? " bg-noir-soft" : ""
            }`}
          >
            <div className="max-w-3xl mx-auto">
              <div className="mb-12 sm:mb-16" data-reveal>
                <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
                  <span className="hairline-draw block h-px w-10 bg-champagne/60" />
                  The Milestone
                </p>
                <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
                  {milestone.title.replace(" Celebrations", "")}{" "}
                  <em className="italic text-champagne font-normal">
                    Celebrations
                  </em>
                </h2>
                <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-champagne max-w-xl">
                  {milestone.subtitle}
                </p>
                <p className="mt-5 font-sans text-base leading-[1.8] text-ink-soft">
                  {milestone.description}
                </p>
              </div>

              <h3 className="font-display font-medium text-xl text-ink mb-8">
                Our Top Picks for a {milestone.age} Birthday
              </h3>
              <div className="space-y-8 mb-12">
                {milestone.topPicks.map((pick, i) => (
                  <div
                    key={pick.slug}
                    className="flex gap-6 border-t border-hairline pt-6"
                    data-reveal
                    data-reveal-delay={i * 90}
                  >
                    <div className="flex-none font-display italic font-medium text-4xl text-champagne/60 leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <Link
                        href={`/clubs/${pick.slug}`}
                        className="font-display font-medium text-xl text-ink hover:text-champagne-bright transition-colors duration-300"
                      >
                        {pick.name}
                      </Link>
                      <p className="mt-3 font-sans text-base leading-[1.8] text-ink-soft">
                        {pick.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-l border-hairline pl-6 py-2" data-reveal>
                <h4 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-3">
                  Budget Guide for a {milestone.age} Birthday
                </h4>
                <p className="font-sans text-[0.9375rem] leading-[1.8] text-ink-soft">
                  {milestone.budgetTip}
                </p>
              </div>

              {milestone.slug === "18th-21st" && (
                <div className="flex flex-wrap gap-x-8 gap-y-4 mt-10">
                  <Link
                    href="/18th-birthday-clubs-london"
                    className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200"
                  >
                    Full 18th birthday guide{" "}
                    <span className="transition-transform duration-400 group-hover:translate-x-1.5">
                      &rarr;
                    </span>
                  </Link>
                  <Link
                    href="/21st-birthday-clubs-london"
                    className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200"
                  >
                    Full 21st birthday guide{" "}
                    <span className="transition-transform duration-400 group-hover:translate-x-1.5">
                      &rarr;
                    </span>
                  </Link>
                </div>
              )}
              {milestone.slug === "30th" && (
                <div className="mt-10">
                  <Link
                    href="/30th-birthday-night-out-london"
                    className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200"
                  >
                    Full 30th birthday guide{" "}
                    <span className="transition-transform duration-400 group-hover:translate-x-1.5">
                      &rarr;
                    </span>
                  </Link>
                </div>
              )}
              {milestone.slug === "40th" && (
                <div className="mt-10">
                  <Link
                    href="/blog/40th-birthday-night-out-london"
                    className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200"
                  >
                    Full 40th birthday guide{" "}
                    <span className="transition-transform duration-400 group-hover:translate-x-1.5">
                      &rarr;
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </section>
        </Fragment>
      ))}

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
              Birthday Age Guide{" "}
              <em className="italic text-champagne font-normal">FAQ</em>
            </h2>
          </div>
          <div className="divide-y divide-hairline border-y border-hairline" data-reveal>
            {faqs.map((faq) => (
              <div key={faq.question} className="py-7">
                <h3 className="font-display font-medium text-lg sm:text-xl text-ink flex gap-5">
                  <span className="font-display italic text-champagne/70 select-none">
                    Q.
                  </span>
                  {faq.question}
                </h3>
                <p className="mt-3 pl-[2.15rem] font-sans text-base leading-[1.8] text-ink-soft">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* CTA */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-noir-deep">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
            Your Milestone Awaits
          </p>
          <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink mb-5">
            Tell Us Your Age & We&apos;ll Find{" "}
            <em className="italic text-champagne font-normal">Your Venue</em>
          </h2>
          <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft mb-10 max-w-xl mx-auto">
            Every milestone deserves the right venue. Message us with your
            birthday details and we&apos;ll recommend the perfect club.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Get Personalised Recommendations"
            size="large"
            microcopy="Free service · Replies in minutes"
          />
        </div>
      </section>
    </>
  );
}
