import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  clubs,
  openClubs,
  getClubBySlug,
  getClubWhatsAppMessage,
  getGeneralWhatsAppMessage,
} from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import { getClubImage } from "@/lib/images";

export async function generateStaticParams() {
  return clubs.map((club) => ({ slug: club.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const club = getClubBySlug(slug);
  if (!club) return {};

  return {
    title: `${club.name} Birthday | Birthday Table & Packages at ${club.name}`,
    description: `Celebrate your birthday at ${club.name}, ${club.location}. ${club.bestFor}. VIP tables from ${club.minSpend}, sparklers, cake, and birthday extras. Book free via WhatsApp.`,
    alternates: {
      canonical: `https://londonbirthdayclub.com/clubs/${club.slug}`,
    },
    openGraph: {
      title: `${club.name} Birthday Packages | London Birthday Club`,
      description: `Birthday table booking at ${club.name}. ${club.tagline}. Tables from ${club.minSpend}. Free booking via WhatsApp.`,
      url: `https://londonbirthdayclub.com/clubs/${club.slug}`,
    },
  };
}

export default async function ClubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const club = getClubBySlug(slug);
  if (!club) notFound();

  const faqs = [
    {
      question: `How much is a birthday table at ${club.name}?`,
      answer: `Minimum table spend at ${club.name} starts from ${club.minSpend}. This covers bottles and mixers for your group — it's not an additional charge on top of drinks. Prices can vary depending on the night of the week, table position, and group size. Contact us on WhatsApp for an exact quote for your birthday.`,
    },
    {
      question: `What birthday extras does ${club.name} offer?`,
      answer: `${club.birthdayExtras} Contact us to arrange specific birthday requests — we'll confirm exactly what's available for your chosen night.`,
    },
    {
      question: `What is the dress code at ${club.name}?`,
      answer: club.dressCode,
    },
    {
      question: `What nights is ${club.name} open?`,
      answer: `${club.name} is open on ${club.openingNights}. Not all nights have the same atmosphere or minimum spend — message us and we'll help you pick the best night for your birthday.`,
    },
    {
      question: `How do I book a birthday at ${club.name}?`,
      answer: `Simply message us on WhatsApp with your birthday date, group size, and any special requests. We'll confirm availability at ${club.name}, arrange your table and birthday extras, and make sure everything is sorted before you arrive. Our service is completely free.`,
    },
  ];

  const otherClubs = openClubs.filter((c) => c.slug !== club.slug).slice(0, 4);
  const isClosed = club.status === "closed";
  const alternativeClubs = isClosed && club.alternatives
    ? club.alternatives.map((s) => getClubBySlug(s)).filter(Boolean)
    : [];

  return (
    <>
      {!isClosed && <FAQSchema faqs={faqs} />}

      {/* Closed Banner */}
      {isClosed && (
        <section className="pt-36 sm:pt-40 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto border-y border-[#8a4432]/40 bg-[#2a120b]/40 px-6 sm:px-8 py-8">
            <h2 className="font-display font-medium text-lg sm:text-xl text-[#d98d75] mb-3">
              {club.name} Has Permanently Closed
            </h2>
            <p className="font-sans text-base leading-[1.8] text-ink-soft mb-5">
              {club.closedNote}
            </p>
            {alternativeClubs.length > 0 && (
              <div>
                <p className="font-sans text-[0.8125rem] tracking-[0.02em] text-ink-faint mb-3">
                  Recommended alternatives:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {alternativeClubs.map((alt) => alt && (
                    <Link
                      key={alt.slug}
                      href={`/clubs/${alt.slug}`}
                      className="inline-flex items-center gap-1.5 border border-hairline-strong hover:border-champagne rounded-[2px] px-3 py-1.5 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-champagne hover:text-champagne-bright transition-colors duration-300"
                    >
                      {alt.name} <span>&rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Hero */}
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image
          src={getClubImage(club.slug)}
          alt={`Birthday celebration at ${club.name} London`}
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
            <Link
              href="/best-birthday-clubs-london"
              className="inline-block font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-champagne hover:text-champagne-bright transition-colors duration-200 mb-6"
            >
              &larr; All Birthday Venues
            </Link>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-6">
              Birthday at{" "}
              <em
                className={
                  isClosed
                    ? "italic text-ink-faint font-normal"
                    : "italic text-champagne font-normal"
                }
              >
                {club.name}
              </em>
            </h1>
            {isClosed && (
              <p className="font-sans font-semibold text-[#d98d75] mb-5">
                This venue has permanently closed
              </p>
            )}
            {!isClosed && (
              <p className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-champagne mb-5">
                {club.tagline}
              </p>
            )}
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-2xl mb-10">
              {club.description}
            </p>
            {!isClosed && (
              <WhatsAppCTA
                message={getClubWhatsAppMessage(club.name)}
                label={`Book Birthday at ${club.shortName}`}
                size="large"
                microcopy="Free service · Replies in minutes"
              />
            )}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10" data-reveal>
            {[
              { label: "Min Spend", value: club.minSpend },
              { label: "Location", value: club.area },
              { label: "Music", value: club.musicPolicy.split(",")[0] },
              { label: "Open", value: club.openingNights },
            ].map((fact) => (
              <div key={fact.label} className="border-l border-hairline pl-6 py-2">
                <div className="font-display italic font-medium text-2xl sm:text-3xl text-champagne leading-[1.15]">
                  {fact.value}
                </div>
                <div className="mt-3 font-sans text-[0.6875rem] uppercase tracking-[0.24em] text-ink-faint">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Why great for birthdays */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Highlights
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Why {club.name} is{" "}
              <em className="italic text-champagne font-normal">
                Great for Birthdays
              </em>
            </h2>
          </div>
          <ul className="space-y-5" data-reveal>
            {club.birthdayHighlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="font-display italic text-champagne/70 select-none mt-0.5 flex-shrink-0">
                  &#10022;
                </span>
                <span className="font-sans text-base leading-[1.8] text-ink-soft">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* What to expect */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Night
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              What to Expect on Your{" "}
              <em className="italic text-champagne font-normal">
                Birthday Night
              </em>
            </h2>
          </div>
          <p className="font-sans text-base leading-[1.8] text-ink-soft mb-12" data-reveal>
            {club.whatToExpect}
          </p>

          <div className="border-t border-hairline pt-10" data-reveal>
            <h3 className="font-display font-medium text-xl text-ink mb-4">
              Birthday Extras &amp; Packages
            </h3>
            <p className="font-sans text-base leading-[1.8] text-ink-soft">
              {club.birthdayExtras}
            </p>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Atmosphere & Group Advice */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-14 gap-y-14">
          <div data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Vibe
            </p>
            <h2 className="font-display font-medium text-[1.75rem] leading-[1.15] sm:text-[2rem] tracking-[-0.01em] text-ink mb-5">
              The{" "}
              <em className="italic text-champagne font-normal">Atmosphere</em>
            </h2>
            <p className="font-sans text-base leading-[1.8] text-ink-soft">
              {club.atmosphere}
            </p>
          </div>
          <div data-reveal data-reveal-delay={90}>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Your Group
            </p>
            <h2 className="font-display font-medium text-[1.75rem] leading-[1.15] sm:text-[2rem] tracking-[-0.01em] text-ink mb-5">
              Group Size{" "}
              <em className="italic text-champagne font-normal">Guide</em>
            </h2>
            <p className="font-sans text-base leading-[1.8] text-ink-soft">
              {club.groupSizeAdvice}
            </p>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Pro Tip */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto" data-reveal>
          <div className="border-l-2 border-champagne/60 pl-7 sm:pl-10 py-1">
            <h3 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-4">
              Insider Tip
            </h3>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft">
              {club.proTip}
            </p>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Key Details Table */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Essentials
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              {club.name} Birthday{" "}
              <em className="italic text-champagne font-normal">Details</em>
            </h2>
          </div>
          <div className="border-y border-hairline divide-y divide-hairline" data-reveal>
            {(
              [
                { label: "Minimum Table Spend", value: `From ${club.minSpend}`, price: true },
                { label: "Location", value: club.location },
                { label: "Music Policy", value: club.musicPolicy },
                { label: "Dress Code", value: club.dressCode },
                { label: "Opening Nights", value: club.openingNights },
                { label: "Best For", value: club.bestFor },
              ] as { label: string; value: string; price?: boolean }[]
            ).map((row) => (
              <div
                key={row.label}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 px-1 py-5 hover:bg-noir-soft/70 transition-colors duration-300"
              >
                <div className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint sm:w-44 flex-shrink-0">
                  {row.label}
                </div>
                <div
                  className={
                    row.price
                      ? "font-display italic font-medium text-lg text-champagne whitespace-nowrap"
                      : "font-sans text-[0.9375rem] leading-relaxed text-ink-soft"
                  }
                >
                  {row.value}
                </div>
              </div>
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
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              {club.name} Birthday{" "}
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
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
            The Booking
          </p>
          {isClosed ? (
            <>
              <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink mb-5">
                Looking for a{" "}
                <em className="italic text-champagne font-normal">
                  Birthday Venue?
                </em>
              </h2>
              <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft mb-10 max-w-xl mx-auto">
                {club.name} has permanently closed, but we can help you find the perfect alternative. Message us on WhatsApp and we&apos;ll recommend the best venue for your birthday.
              </p>
              <WhatsAppCTA
                message={getGeneralWhatsAppMessage()}
                label="Find an Alternative on WhatsApp"
                size="large"
                microcopy="Free service · Replies in minutes"
              />
            </>
          ) : (
            <>
              <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink mb-5">
                Book Your Birthday at{" "}
                <em className="italic text-champagne font-normal">
                  {club.name}
                </em>
              </h2>
              <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft mb-10 max-w-xl mx-auto">
                Message us with your date, group size, and any special requests.
                We&apos;ll handle everything.
              </p>
              <WhatsAppCTA
                message={getClubWhatsAppMessage(club.name)}
                label={`Book at ${club.shortName} on WhatsApp`}
                size="large"
                microcopy="Free service · Replies in minutes"
              />
            </>
          )}
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Other clubs */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              More Venues
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Explore Other Birthday{" "}
              <em className="italic text-champagne font-normal">Venues</em>
            </h2>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10"
            data-reveal
          >
            {otherClubs.map((c) => (
              <Link
                key={c.slug}
                href={`/clubs/${c.slug}`}
                className="group block border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500"
              >
                <div className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300">
                  {c.name}
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-sans text-[0.625rem] uppercase tracking-[0.26em] text-ink-faint">
                    From
                  </span>
                  <span className="font-display italic text-lg text-champagne">
                    {c.minSpend}
                  </span>
                </div>
                <div className="mt-3 font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">
                  {c.area}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-14">
            <Link
              href="/birthday-clubs-london"
              className="font-sans text-[0.8125rem] text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200"
            >
              All birthday clubs &rarr;
            </Link>
            <Link
              href="/birthday-table-booking-london"
              className="font-sans text-[0.8125rem] text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200"
            >
              Table booking guide &rarr;
            </Link>
            <Link
              href="/best-birthday-clubs-london"
              className="font-sans text-[0.8125rem] text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200"
            >
              Ranked club guide &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
