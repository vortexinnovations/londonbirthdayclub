import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { openClubs, getVIPWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "VIP Birthday Tables London — Luxury Packages (2026)",
  description: "Book a VIP birthday table at London's most exclusive nightclubs. Premium table positions, champagne packages, sparklers, and dedicated hosts. Luxury birthday experiences from £1,000.",
  alternates: { canonical: "https://londonbirthdayclub.com/vip-birthday-tables-london" },
  openGraph: { url: "https://londonbirthdayclub.com/vip-birthday-tables-london" },
};

const faqs = [
  { question: "What makes a VIP table different from a standard table?", answer: "VIP tables are positioned in the best spots — closer to the DJ, centre of the room, or in elevated areas with the best views. They come with enhanced service: a dedicated host, priority bottle delivery, and often better birthday extras like bigger sparkler presentations. The experience feels noticeably more premium." },
  { question: "How much is a VIP birthday table in London?", answer: "VIP table minimum spends start from £1,000 at most Mayfair clubs, with premium positions ranging £1,500-3,000+ depending on venue, night, and position. Tape London starts from £1,500 for any table. The minimum spend covers premium bottles, mixers, and full VIP service." },
  { question: "Which London club has the best VIP birthday experience?", answer: "Tape London offers the most exclusive VIP experience with its members' club atmosphere. Cirque Le Soir delivers the most spectacular VIP birthday with live performers and pyrotechnic presentations. For elegant luxury, Dear Darling's chandeliered VIP booths are unmatched." },
  { question: "Can I request a specific table position for my birthday?", answer: "Yes. When booking through us, you can request specific positions — centre stage, near the DJ, private corner, or elevated area. We confirm position availability with the venue and lock in the best available spot for your birthday. Early booking gives you the widest choice." },
];

export default function VIPBirthdayTablesPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "VIP Birthday Tables London", href: "/vip-birthday-tables-london" }]} />

      {/* Hero */}
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image src={images.hero.vipTables} alt="VIP birthday table with bottle service in London" fill className="object-cover kenburns" priority sizes="100vw" />
        <div className="absolute inset-0 [background:var(--grad-hero)]" />
        <div className="grade" />
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
              <span className="block h-px w-10 bg-champagne/60" />
              The VIP Experience
            </p>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
              VIP Birthday Tables in{" "}
              <em className="italic text-champagne font-normal">London</em>
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl mb-10">
              The premium birthday experience. The best table positions, enhanced service, spectacular presentations, and the kind of night that makes turning another year older feel like an achievement worth celebrating.
            </p>
            <WhatsAppCTA message={getVIPWhatsAppMessage()} label="Book a VIP Birthday Table" size="large" microcopy="Free service · Replies in minutes" />
          </div>
        </div>
      </section>

      {/* What VIP means */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Service
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              What a VIP Birthday Table{" "}
              <em className="italic text-champagne font-normal">Gets You</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12" data-reveal>
            {[
              { title: "Premium Position", desc: "The best table in the house — centre stage, near the DJ, or in an elevated VIP area with commanding views of the entire room." },
              { title: "Dedicated VIP Host", desc: "Your personal host for the night. They manage your service, anticipate needs, and ensure your birthday runs flawlessly." },
              { title: "Enhanced Presentations", desc: "Birthday bottle deliveries with full sparkler processions, LED displays, and the kind of spectacle that stops the room." },
              { title: "Premium Bottle Selection", desc: "Access to the venue's finest champagnes and spirits. Dom Perignon, Ace of Spades, premium Grey Goose magnums — the celebration-grade bottles." },
              { title: "Priority Everything", desc: "First to be served, first through the door, and first to receive attention. VIP means your group never waits." },
              { title: "Birthday Concierge", desc: "We coordinate cake delivery, table decorations, DJ shoutouts, and any surprises you want to arrange for the birthday person." },
            ].map(item => (
              <div key={item.title} className="border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500">
                <h3 className="font-display font-medium text-xl text-ink mb-3">{item.title}</h3>
                <p className="font-sans text-base leading-[1.8] text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Best VIP venues */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Venues
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Best Venues for{" "}
              <em className="italic text-champagne font-normal">VIP Birthdays</em>
            </h2>
          </div>
          <div className="space-y-10" data-reveal>
            {[
              { slug: "tape-london", why: "The most exclusive VIP experience in London. Members' club atmosphere, celebrity clientele, world-class sound. Every table at Tape feels VIP." },
              { slug: "cirque-le-soir", why: "VIP tables get the best performer interactions, the most dramatic bottle presentations, and front-row seats to the circus spectacle." },
              { slug: "dear-darling", why: "Opulent VIP booths surrounded by chandeliers and velvet. The most elegant VIP birthday setting in Mayfair." },
              { slug: "the-box-london", why: "Premium positions with direct stage views. VIP here means front-row seats to London's most provocative performances." },
              { slug: "funky-buddha", why: "Legendary VIP energy. The intimate setting means every table feels exclusive, and the celebrity pedigree is genuine." },
            ].map(item => {
              const club = openClubs.find(c => c.slug === item.slug);
              if (!club) return null;
              return (
                <div key={item.slug} className="border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <Link href={`/clubs/${club.slug}`} className="font-display font-semibold text-[1.375rem] leading-snug text-ink hover:text-champagne-bright transition-colors duration-300">{club.name}</Link>
                    <span className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">
                      {club.area} &middot; From{" "}
                      <span className="font-display italic font-medium text-lg normal-case tracking-normal text-champagne">{club.minSpend}</span>
                    </span>
                  </div>
                  <p className="mt-3 font-sans text-base leading-[1.8] text-ink-soft max-w-2xl">{item.why}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Budget tiers */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Budget
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              VIP Birthday{" "}
              <em className="italic text-champagne font-normal">Budget</em> Tiers
            </h2>
          </div>
          <div className="space-y-10" data-reveal>
            {[
              { tier: "Premium", spend: "£1,000–£1,500", desc: "A standard VIP table at most Mayfair venues. Premium bottles, dedicated host, sparkler presentations, and reserved seating. The entry point to VIP and genuinely excellent.", venues: "Most Mayfair clubs" },
              { tier: "Luxury", spend: "£1,500–£3,000", desc: "Premium table positions, upgraded bottle selections, enhanced birthday presentations. The sweet spot for a memorable VIP birthday that impresses everyone.", venues: "Tape, Cirque, The Box" },
              { tier: "Ultra-Premium", spend: "£3,000+", desc: "The absolute best table, the finest champagnes, the most dramatic presentations. For milestone birthdays where the budget matches the occasion.", venues: "Tape, Cirque — by arrangement" },
            ].map(item => (
              <div key={item.tier} className="border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-display font-medium text-xl text-ink">{item.tier}</span>
                  <span className="font-display italic font-medium text-lg text-champagne whitespace-nowrap">{item.spend}</span>
                </div>
                <p className="mt-3 font-sans text-base leading-[1.8] text-ink-soft max-w-2xl">{item.desc}</p>
                <p className="mt-3 font-sans text-[0.8125rem] leading-relaxed tracking-[0.02em] text-ink-faint">Best venues: {item.venues}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/birthday-table-prices-london" className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200">
              Full pricing breakdown{" "}
              <span className="transition-transform duration-400 group-hover:translate-x-1.5">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Book CTA */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 sm:mb-14" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Start Planning
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Book Your{" "}
              <em className="italic text-champagne font-normal">VIP Birthday</em> Table
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">Tell us your date, group size, and budget. We&apos;ll secure the best VIP table available and handle every detail.</p>
          </div>
          <div data-reveal>
            <WhatsAppCTA message={getVIPWhatsAppMessage()} label="Book VIP Table on WhatsApp" size="large" variant="detailed" microcopy="Free service · Replies in minutes" />
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
              <em className="italic text-champagne font-normal">VIP</em> Birthday
              Table FAQ
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
    </>
  );
}
