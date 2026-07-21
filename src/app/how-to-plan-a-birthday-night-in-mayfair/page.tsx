import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { openClubs, getGeneralWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "Mayfair Birthday Night — How to Plan the Perfect Celebration (2026)",
  description: "The complete guide to planning a birthday night out in Mayfair. Which clubs are where, dress codes, what to expect, and how to make your Mayfair birthday celebration perfect.",
  alternates: { canonical: "https://londonbirthdayclub.com/how-to-plan-a-birthday-night-in-mayfair" },
  openGraph: { url: "https://londonbirthdayclub.com/how-to-plan-a-birthday-night-in-mayfair" },
};

const faqs = [
  { question: "Why is Mayfair the best area for a birthday night out?", answer: "Mayfair has the highest concentration of premium nightclubs in London, all within walking distance of each other. This means more venue choice, higher service standards, and the prestige of celebrating in London's most exclusive neighbourhood. Most of the city's best birthday venues are in Mayfair." },
  { question: "What is the dress code for Mayfair clubs?", answer: "Smart and stylish — no sportswear, trainers, shorts, or casual jeans. For men: smart shoes, fitted trousers, and a collared shirt. For women: the code is more flexible but still smart. Think Mayfair dinner rather than casual bar. Overdressing is better than underdressing." },
  { question: "How do I get to Mayfair clubs?", answer: "The nearest tube stations are Green Park (Jubilee, Piccadilly, Victoria lines), Bond Street (Central, Jubilee, Elizabeth lines), and Piccadilly Circus (Bakerloo, Piccadilly lines). Most Mayfair clubs are a 5-10 minute walk from these stations. Uber and black cabs are abundant in the area." },
  { question: "What time should I arrive at a Mayfair club for my birthday?", answer: "Aim for 10:30-11pm. This gives you time to settle into your table and order your first bottles before the energy peaks around midnight. Arriving earlier means a quieter start; later means walking into a full room. For dinner-club venues like Maddox, book dinner for 9-9:30pm." },
];

export default function MayfairBirthdayPage() {
  const mayfairClubs = openClubs.filter(c => c.area === "Mayfair");

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Birthday Night in Mayfair", href: "/how-to-plan-a-birthday-night-in-mayfair" }]} />
      <ArticleSchema title="How to Plan a Birthday Night in Mayfair" description="The complete guide to planning a birthday night out in Mayfair." url="https://londonbirthdayclub.com/how-to-plan-a-birthday-night-in-mayfair" />

      {/* Hero */}
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image src={images.hero.mayfairGuide} alt="Mayfair nightlife district at night" fill className="object-cover kenburns" priority sizes="100vw" />
        <div className="absolute inset-0 [background:var(--grad-hero)]" />
        <div className="grade" />
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
              <span className="block h-px w-10 bg-champagne/60" />
              The Mayfair Guide
            </p>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
              How to Plan a Birthday Night in{" "}
              <em className="italic text-champagne font-normal">Mayfair</em>
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl mb-10">
              Mayfair is London&apos;s premier nightlife district — the highest concentration of luxury clubs in the city, all within walking distance. Here&apos;s everything you need to plan a birthday celebration in London&apos;s most exclusive neighbourhood.
            </p>
            <WhatsAppCTA message={getGeneralWhatsAppMessage()} label="Plan My Mayfair Birthday" size="large" microcopy="Free service · Replies in minutes" />
          </div>
        </div>
      </section>

      {/* Why Mayfair */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Neighbourhood
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Why Mayfair for Your{" "}
              <em className="italic text-champagne font-normal">Birthday</em>
            </h2>
          </div>
          <div className="space-y-6" data-reveal>
            <p className="font-sans text-base leading-[1.8] text-ink-soft">Mayfair isn&apos;t just another nightlife area — it&apos;s London&apos;s most prestigious neighbourhood for a reason. The clubs here operate at a level of service, design, and atmosphere that other areas simply don&apos;t match. Every venue has been curated rather than just opened, and the competition between them drives standards relentlessly upward.</p>
            <p className="font-sans text-base leading-[1.8] text-ink-soft">For birthdays specifically, Mayfair&apos;s density of premium venues means you have genuine choice. Whether you want the theatrical spectacle of a performance club, the intimacy of a members&apos; bar, the elegance of a cocktail lounge, or the energy of a hip-hop-driven dancefloor — Mayfair has a venue that matches. And they&apos;re all within a 10-minute walk of each other.</p>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Mayfair clubs */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Venues
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Birthday Clubs in{" "}
              <em className="italic text-champagne font-normal">Mayfair</em>
            </h2>
          </div>
          <div className="border-t border-hairline" data-reveal>
            {mayfairClubs.map(club => (
              <Link key={club.slug} href={`/clubs/${club.slug}`} className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between border-b border-hairline hover:bg-noir-soft/70 px-1 py-5 transition-colors duration-300">
                <div className="flex items-baseline">
                  <span className="font-display font-medium text-lg text-ink group-hover:text-champagne-bright transition-colors duration-300">{club.name}</span>
                  <span className="font-sans text-[0.8125rem] tracking-[0.02em] text-ink-faint ml-3">{club.musicPolicy.split(",")[0]}</span>
                </div>
                <div className="sm:text-right">
                  <span className="font-display italic text-lg text-champagne whitespace-nowrap">{club.minSpend}</span>
                  <span className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint ml-2">{club.openingNights}</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-6 font-sans text-[0.8125rem] leading-relaxed tracking-[0.02em] text-ink-faint">
            Plus <Link href="/clubs/the-box-london" className="text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">The Box</Link> and <Link href="/clubs/cirque-le-soir" className="text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">Cirque Le Soir</Link> in nearby Soho, <Link href="/clubs/reign-london" className="text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">Reign</Link> on Piccadilly, and <Link href="/clubs/beat-london" className="text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200">BEAT</Link> on Margaret Street.
          </p>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* The Mayfair dress code */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Dress Code
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              The Mayfair{" "}
              <em className="italic text-champagne font-normal">Dress Code</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">Mayfair clubs take dress code seriously. This isn&apos;t about being exclusive for the sake of it — it&apos;s about maintaining an atmosphere where everyone has made an effort. The standard across all Mayfair venues: smart and stylish, no exceptions.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-14 gap-y-12" data-reveal>
            <div className="border-t border-hairline pt-6">
              <h3 className="font-display font-medium text-xl text-ink mb-3">Men</h3>
              <p className="font-sans text-base leading-[1.8] text-ink-soft">Smart shoes (no trainers), fitted trousers or smart jeans, collared shirt or smart knitwear. A blazer is never wrong. Avoid: sportswear, hoodies, shorts, flip-flops, ripped jeans, plain t-shirts.</p>
            </div>
            <div className="border-t border-hairline pt-6">
              <h3 className="font-display font-medium text-xl text-ink mb-3">Women</h3>
              <p className="font-sans text-base leading-[1.8] text-ink-soft">More flexible but still smart. Dresses, heels, smart separates, jumpsuits — essentially, dress for a special occasion. Avoid: casual daywear, very casual trainers, sportswear. When in doubt, overdress.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Timeline */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Timeline
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Your Mayfair Birthday Night{" "}
              <em className="italic text-champagne font-normal">Timeline</em>
            </h2>
          </div>
          <div className="space-y-8" data-reveal>
            {[
              { time: "7:00–8:30pm", title: "Pre-drinks or dinner", desc: "Start with cocktails at a nearby bar or book dinner at Maddox Club for the full dinner-to-club experience. Mayfair has no shortage of excellent restaurants within walking distance of every club." },
              { time: "10:30–11:00pm", title: "Arrive at the club", desc: "This is the sweet spot. Your table and bottles are ready, the room is filling up, and you have time to settle in before the peak. Give your name at the door — priority entry for table bookings means no queue." },
              { time: "11:30pm–12:30am", title: "Birthday moment", desc: "Time for the birthday bottle presentation. Sparklers, DJ shoutout, cake if arranged. The room is full, the energy is right, and your birthday is the centre of attention." },
              { time: "12:30am–3:00am", title: "Peak celebration", desc: "The dancefloor peaks. Your table is your home base between dances. Enjoy the bottles, the music, and the feeling of celebrating somewhere genuinely special." },
            ].map(item => (
              <div key={item.time} className="flex flex-col sm:flex-row gap-2 sm:gap-8 border-t border-hairline pt-6">
                <div className="flex-shrink-0 sm:w-36 font-display italic font-medium text-lg text-champagne leading-snug">{item.time}</div>
                <div className="flex-1">
                  <h3 className="font-display font-medium text-xl text-ink mb-2">{item.title}</h3>
                  <p className="font-sans text-base leading-[1.8] text-ink-soft">{item.desc}</p>
                </div>
              </div>
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
              Plan Your Mayfair{" "}
              <em className="italic text-champagne font-normal">Birthday</em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">Tell us your date, group size, and preferred vibe — we know Mayfair inside out and will recommend the perfect venue.</p>
          </div>
          <div data-reveal>
            <WhatsAppCTA message={getGeneralWhatsAppMessage()} label="Plan Mayfair Birthday on WhatsApp" size="large" variant="detailed" />
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
              Mayfair Birthday{" "}
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

      {/* Related links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-4" data-reveal>
          <Link href="/birthday-clubs-london" className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-champagne hover:text-champagne-bright transition-colors duration-200">All birthday clubs &rarr;</Link>
          <Link href="/plan-birthday-london-club" className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-champagne hover:text-champagne-bright transition-colors duration-200">Full planning guide &rarr;</Link>
          <Link href="/birthday-table-prices-london" className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-champagne hover:text-champagne-bright transition-colors duration-200">Table prices &rarr;</Link>
        </div>
      </section>
    </>
  );
}
