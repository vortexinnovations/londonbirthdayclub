import { safeJsonLd } from "@/lib/safe-output";
import type { Metadata } from "next";
import Link from "next/link";
import { fitTitle } from "@/lib/seo";
import { WHATSAPP_NUMBER } from "@/lib/clubs";
import { SITE_URL, siteOrganization } from "@/lib/organization";

const PAGE_URL = `${SITE_URL}/about`;
const TITLE = "About London Birthday Club: Who We Are and How We Write";
const DESCRIPTION =
  "Who runs London Birthday Club, how we earn money from table bookings, how our birthday guides are written and checked, and how to report a mistake.";

export const metadata: Metadata = {
  title: fitTitle(TITLE),
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
  },
};

const eyebrowClass =
  "flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5";
const h2Class =
  "font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl";
const bodyClass = "font-sans text-[1.0625rem] leading-[1.8] text-ink-soft";
const linkClass =
  "text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200";

const coverage = [
  "Birthday planning at London clubs: tables, guestlist, cakes and decorations",
  "Club pages with birthday table prices, opening nights and dress codes",
  "Milestone birthdays, from 18ths to 40ths and beyond",
  "Group nights, from hen parties to work celebrations",
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": PAGE_URL,
            url: PAGE_URL,
            name: "About London Birthday Club",
            about: siteOrganization(),
          }),
        }}
      />

      <article>
        {/* Masthead and who runs the site */}
        <section className="pt-36 sm:pt-40 pb-24 sm:pb-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 sm:mb-14" data-reveal>
              <p className={eyebrowClass}>
                <span className="hairline-draw block h-px w-10 bg-champagne/60" />
                About Us
              </p>
              <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-5">
                About London Birthday{" "}
                <em className="italic text-champagne font-normal">Club</em>
              </h1>
              <p className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">
                Who we are and how we write
              </p>
            </div>

            <h2 className={`${h2Class} mb-8`} data-reveal>
              Who runs London Birthday{" "}
              <em className="italic text-champagne font-normal">Club</em>
            </h2>
            <div className="space-y-5 mb-12" data-reveal>
              <p className={bodyClass}>
                London Birthday Club is run by a London nightlife booking team. We
                arrange VIP tables and guestlist places at London clubs, and we
                handle enquiries on WhatsApp. This site is about birthdays: which
                club suits which celebration, what a birthday table costs and what
                each venue can arrange on the night.
              </p>
              <p className={bodyClass}>
                How we make money: we earn a commission when a table or guestlist
                place we arrange goes ahead. That makes us a booking service, not
                an independent review site, so read our recommendations with that
                in mind.
              </p>
            </div>

            <p className={eyebrowClass} data-reveal>
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              What We Cover
            </p>
            <ul className="space-y-4 mb-10" data-reveal>
              {coverage.map((item) => (
                <li key={item} className="flex gap-4 font-sans text-base leading-[1.8] text-ink-soft">
                  <span className="font-display italic text-champagne/70 select-none">✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className={bodyClass} data-reveal>
              Start with{" "}
              <Link href="/birthday-clubs-london" className={linkClass}>
                birthday clubs in London
              </Link>
              , browse the{" "}
              <Link href="/blog" className={linkClass}>
                blog
              </Link>
              , or{" "}
              <Link href="/book-birthday" className={linkClass}>
                book your birthday
              </Link>
              .
            </p>
          </div>
        </section>

        <div className="divider-gilt" />

        {/* How we write */}
        <section
          id="how-we-write"
          className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft scroll-mt-24"
        >
          <div className="max-w-3xl mx-auto">
            <div className="mb-10" data-reveal>
              <p className={eyebrowClass}>
                <span className="hairline-draw block h-px w-10 bg-champagne/60" />
                Our Guides
              </p>
              <h2 className={h2Class}>
                How we <em className="italic text-champagne font-normal">write</em>
              </h2>
            </div>
            <div className="space-y-5" data-reveal>
              <p className={bodyClass}>
                We write and update our guides with the help of AI tools. They are
                based on what venues announce, published listings and news reports,
                and the prices and door policies our booking desk works with.
              </p>
              <p className={bodyClass}>
                Automated checks look for closed venues, broken links and
                house-style problems before a page goes live. From 25 November 2026,
                a member of our team reads and approves every new article before it
                is published.
              </p>
              <p className={bodyClass}>
                We credit pages to the London Birthday Club team rather than to
                individual writers.
              </p>
              <p className={bodyClass}>
                Prices, opening nights and door policies change often. Message us
                before you go and we will confirm the details for your night.
              </p>
            </div>
          </div>
        </section>

        <div className="divider-gilt" />

        {/* Corrections */}
        <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10" data-reveal>
              <p className={eyebrowClass}>
                <span className="hairline-draw block h-px w-10 bg-champagne/60" />
                Accuracy
              </p>
              <h2 className={h2Class}>Corrections</h2>
            </div>
            <p className={bodyClass} data-reveal>
              If something on a page is wrong or out of date, tell us on{" "}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                WhatsApp
              </a>{" "}
              and we will correct it.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
