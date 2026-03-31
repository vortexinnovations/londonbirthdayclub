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
        <section className="bg-red-900/30 border-b border-red-700/40 py-6 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-red-400 text-2xl flex-shrink-0">&#9888;</span>
              <div>
                <h2 className="text-lg font-bold text-red-300 mb-2">
                  {club.name} Has Permanently Closed
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {club.closedNote}
                </p>
                {alternativeClubs.length > 0 && (
                  <div>
                    <p className="text-sm text-text-muted mb-2">Recommended alternatives:</p>
                    <div className="flex flex-wrap gap-2">
                      {alternativeClubs.map((alt) => alt && (
                        <Link
                          key={alt.slug}
                          href={`/clubs/${alt.slug}`}
                          className="inline-flex items-center px-4 py-2 bg-gold/10 text-gold border border-gold/20 rounded-lg text-sm font-medium hover:bg-gold/20 transition-colors"
                        >
                          {alt.name} &rarr;
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end px-4 pb-12 pt-28">
        <Image src={getClubImage(club.slug)} alt={`Birthday celebration at ${club.name} London`} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="max-w-4xl mx-auto relative z-10 w-full">
          <Link
            href="/best-birthday-clubs-london"
            className="text-gold text-sm hover:underline mb-4 inline-block"
          >
            &larr; All Birthday Venues
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Birthday at{" "}
            <span className={isClosed ? "text-text-muted" : "text-gold"}>{club.name}</span>
          </h1>
          {isClosed && (
            <p className="text-red-400 font-semibold mb-4">This venue has permanently closed</p>
          )}
          {!isClosed && (
            <p className="text-xl text-gold/80 font-medium mb-4">
              {club.tagline}
            </p>
          )}
          <p className="text-lg text-text-secondary max-w-2xl mb-8 leading-relaxed">
            {club.description}
          </p>
          {!isClosed && (
            <WhatsAppCTA
              message={getClubWhatsAppMessage(club.name)}
              label={`Book Birthday at ${club.shortName}`}
              size="large"
            />
          )}
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 px-4 bg-bg-secondary border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Min Spend", value: club.minSpend },
              { label: "Location", value: club.area },
              { label: "Music", value: club.musicPolicy.split(",")[0] },
              { label: "Open", value: club.openingNights },
            ].map((fact) => (
              <div key={fact.label}>
                <div className="text-text-muted text-xs uppercase tracking-wider mb-1">
                  {fact.label}
                </div>
                <div className="text-text-primary font-semibold">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why great for birthdays */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Why {club.name} is Great for Birthdays
          </h2>
          <ul className="space-y-4">
            {club.birthdayHighlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1 flex-shrink-0">&#9733;</span>
                <span className="text-text-secondary leading-relaxed">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            What to Expect on Your Birthday Night
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            {club.whatToExpect}
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gold">
            Birthday Extras & Packages
          </h3>
          <p className="text-text-secondary leading-relaxed">
            {club.birthdayExtras}
          </p>
        </div>
      </section>

      {/* Atmosphere & Group Advice */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">The Atmosphere</h2>
            <p className="text-text-secondary leading-relaxed">
              {club.atmosphere}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Group Size Guide</h2>
            <p className="text-text-secondary leading-relaxed">
              {club.groupSizeAdvice}
            </p>
          </div>
        </div>
      </section>

      {/* Pro Tip */}
      <section className="py-12 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="bg-bg-card border border-gold/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gold mb-2">
              Insider Tip
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {club.proTip}
            </p>
          </div>
        </div>
      </section>

      {/* Key Details Table */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            {club.name} Birthday Details
          </h2>
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            {[
              { label: "Minimum Table Spend", value: `From ${club.minSpend}` },
              { label: "Location", value: club.location },
              { label: "Music Policy", value: club.musicPolicy },
              { label: "Dress Code", value: club.dressCode },
              { label: "Opening Nights", value: club.openingNights },
              { label: "Best For", value: club.bestFor },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col sm:flex-row sm:items-center px-6 py-4 ${
                  i % 2 === 0 ? "bg-bg-card" : "bg-bg-primary"
                }`}
              >
                <div className="text-text-muted text-sm font-medium sm:w-48 flex-shrink-0 mb-1 sm:mb-0">
                  {row.label}
                </div>
                <div className="text-text-primary">{row.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            {club.name} Birthday FAQ
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-bg-card border border-border rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {isClosed ? (
            <>
              <h2 className="text-3xl font-bold mb-4">
                Looking for a Birthday Venue?
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                {club.name} has permanently closed, but we can help you find the perfect alternative. Message us on WhatsApp and we&apos;ll recommend the best venue for your birthday.
              </p>
              <WhatsAppCTA
                message={getGeneralWhatsAppMessage()}
                label="Find an Alternative on WhatsApp"
                size="large"
              />
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-4">
                Book Your Birthday at {club.name}
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Message us with your date, group size, and any special requests.
                We&apos;ll handle everything.
              </p>
              <WhatsAppCTA
                message={getClubWhatsAppMessage(club.name)}
                label={`Book at ${club.shortName} on WhatsApp`}
                size="large"
              />
            </>
          )}
        </div>
      </section>

      {/* Other clubs */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Explore Other Birthday Venues
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherClubs.map((c) => (
              <Link
                key={c.slug}
                href={`/clubs/${c.slug}`}
                className="block bg-bg-card hover:bg-bg-card-hover border border-border hover:border-gold/30 rounded-xl p-5 transition-all group"
              >
                <div className="font-semibold group-hover:text-gold transition-colors">
                  {c.name}
                </div>
                <div className="text-text-secondary text-sm mt-1">
                  From {c.minSpend}
                </div>
                <div className="text-text-muted text-xs mt-2">{c.area}</div>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link
              href="/birthday-clubs-london"
              className="text-gold hover:underline text-sm"
            >
              All birthday clubs &rarr;
            </Link>
            <Link
              href="/birthday-table-booking-london"
              className="text-gold hover:underline text-sm"
            >
              Table booking guide &rarr;
            </Link>
            <Link
              href="/best-birthday-clubs-london"
              className="text-gold hover:underline text-sm"
            >
              Ranked club guide &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
