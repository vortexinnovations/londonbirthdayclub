import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://londonbirthdayclub.com";

export const metadata: Metadata = {
  title: "About the Editor — Charlotte Hayes | London Birthday Club",
  description:
    "Meet Charlotte Hayes, Events Specialist. She plans group nightlife celebrations across London and covers what each venue can actually deliver for a private celebration.",
  alternates: { canonical: `${SITE_URL}/about-the-editor` },
  openGraph: {
    title: "About the Editor — Charlotte Hayes | London Birthday Club",
    description:
      "Charlotte Hayes plans group nightlife celebrations across London: birthdays, hen parties, and milestone events.",
    url: `${SITE_URL}/about-the-editor`,
    type: "profile",
  },
};

export default function AboutTheEditorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              "@id": `${SITE_URL}/about-the-editor/#author-charlotte`,
              name: "Charlotte Hayes",
              jobTitle: "Events Specialist",
              url: `${SITE_URL}/about-the-editor/`,
              description:
                "Charlotte plans group nightlife celebrations across London - birthdays, hen parties, milestone events. She covers what each venue can actually deliver for a private celebration.",
              worksFor: {
                "@type": "Organization",
                name: "London Birthday Club",
                url: SITE_URL,
              },
              knowsAbout: [
                "Birthday party planning in London",
                "Group nightlife bookings",
                "Milestone celebrations",
                "Private hire and celebration packages",
              ],
            },
          }),
        }}
      />

      <article>
        {/* Masthead + bio */}
        <section className="pt-36 sm:pt-40 pb-24 sm:pb-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 sm:mb-14" data-reveal>
              <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
                <span className="hairline-draw block h-px w-10 bg-champagne/60" />
                About the Editor
              </p>
              <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-5">
                Charlotte{" "}
                <em className="italic text-champagne font-normal">Hayes</em>
              </h1>
              <p className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">
                Events Specialist, London Birthday Club
              </p>
            </div>

            <div className="space-y-5" data-reveal>
              <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft">
                Charlotte plans group nightlife celebrations across London:
                birthdays, hen parties, and milestone events. Her guides cover
                what each venue can actually deliver for a private celebration,
                from the cake and the decorations to the timings that make a
                group night hold together.
              </p>
              <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft">
                Coordinating more than a hundred celebrations a year means the
                advice here comes from organising real groups, not theory: how
                to get friends to commit, what happens when plans change, and
                which formats suit which occasions. Every guide carries a
                visible last-updated date.
              </p>
            </div>
          </div>
        </section>

        <div className="divider-gilt" />

        {/* What Charlotte Covers */}
        <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
          <div className="max-w-3xl mx-auto">
            <div className="mb-14" data-reveal>
              <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
                <span className="hairline-draw block h-px w-10 bg-champagne/60" />
                Coverage
              </p>
              <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
                What Charlotte{" "}
                <em className="italic text-champagne font-normal">Covers</em>
              </h2>
            </div>

            <ul className="space-y-4" data-reveal>
              <li className="flex gap-4 font-sans text-base leading-[1.8] text-ink-soft">
                <span className="font-display italic text-champagne/70 select-none">
                  ✦
                </span>
                Birthday and celebration planning, end to end
              </li>
              <li className="flex gap-4 font-sans text-base leading-[1.8] text-ink-soft">
                <span className="font-display italic text-champagne/70 select-none">
                  ✦
                </span>
                Group bookings and private hire know-how
              </li>
              <li className="flex gap-4 font-sans text-base leading-[1.8] text-ink-soft">
                <span className="font-display italic text-champagne/70 select-none">
                  ✦
                </span>
                Milestone events: 18ths to 40ths and beyond
              </li>
              <li className="flex gap-4 font-sans text-base leading-[1.8] text-ink-soft">
                <span className="font-display italic text-champagne/70 select-none">
                  ✦
                </span>
                <span>
                  <span className="font-display italic font-medium text-xl text-champagne">
                    100+
                  </span>{" "}
                  celebrations coordinated annually
                </span>
              </li>
            </ul>
          </div>
        </section>

        <div className="divider-gilt" />

        {/* Recent Guides */}
        <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-14" data-reveal>
              <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
                <span className="hairline-draw block h-px w-10 bg-champagne/60" />
                The Guides
              </p>
              <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
                Recent{" "}
                <em className="italic text-champagne font-normal">Guides</em> by
                Charlotte
              </h2>
            </div>

            <ul
              className="border-y border-hairline divide-y divide-hairline mb-10"
              data-reveal
            >
              <li>
                <Link
                  href="/blog/birthday-falls-on-a-weekday-london"
                  className="group flex items-baseline justify-between gap-4 py-6 transition-colors duration-300 hover:bg-noir-soft/60 px-1"
                >
                  <span className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300">
                    When Your Birthday Falls on a Weekday: How to Celebrate in
                    London
                  </span>
                  <span className="flex-none text-champagne transition-transform duration-400 group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/sober-birthday-night-out-london"
                  className="group flex items-baseline justify-between gap-4 py-6 transition-colors duration-300 hover:bg-noir-soft/60 px-1"
                >
                  <span className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300">
                    How to Plan a Sober Birthday Night Out in London
                  </span>
                  <span className="flex-none text-champagne transition-transform duration-400 group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </Link>
              </li>
            </ul>

            <p className="font-sans text-base leading-[1.8] text-ink-soft">
              Browse all of Charlotte&apos;s guides on the{" "}
              <Link
                href="/blog"
                className="text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200"
              >
                blog
              </Link>
              , or see{" "}
              <Link
                href="/birthday-clubs-london"
                className="text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200"
              >
                birthday clubs in London
              </Link>{" "}
              to start planning.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
