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

      <section className="relative min-h-[50vh] flex items-center justify-center px-4">
        <Image src={images.hero.mayfairGuide} alt="Mayfair nightlife district at night" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">How to Plan a Birthday Night in <span className="text-gold">Mayfair</span></h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
            Mayfair is London&apos;s premier nightlife district — the highest concentration of luxury clubs in the city, all within walking distance. Here&apos;s everything you need to plan a birthday celebration in London&apos;s most exclusive neighbourhood.
          </p>
          <WhatsAppCTA message={getGeneralWhatsAppMessage()} label="Plan My Mayfair Birthday" size="large" />
        </div>
      </section>

      {/* Why Mayfair */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Why Mayfair for Your Birthday</h2>
          <p className="text-text-secondary leading-relaxed mb-6">Mayfair isn&apos;t just another nightlife area — it&apos;s London&apos;s most prestigious neighbourhood for a reason. The clubs here operate at a level of service, design, and atmosphere that other areas simply don&apos;t match. Every venue has been curated rather than just opened, and the competition between them drives standards relentlessly upward.</p>
          <p className="text-text-secondary leading-relaxed">For birthdays specifically, Mayfair&apos;s density of premium venues means you have genuine choice. Whether you want the theatrical spectacle of a performance club, the intimacy of a members&apos; bar, the elegance of a cocktail lounge, or the energy of a hip-hop-driven dancefloor — Mayfair has a venue that matches. And they&apos;re all within a 10-minute walk of each other.</p>
        </div>
      </section>

      {/* Mayfair clubs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Birthday Clubs in Mayfair</h2>
          <div className="space-y-3">
            {mayfairClubs.map(club => (
              <Link key={club.slug} href={`/clubs/${club.slug}`} className="flex items-center justify-between bg-bg-card border border-border hover:border-gold/30 rounded-lg px-5 py-4 transition-all group">
                <div>
                  <span className="font-semibold group-hover:text-gold transition-colors">{club.name}</span>
                  <span className="text-text-muted text-sm ml-3">{club.musicPolicy.split(",")[0]}</span>
                </div>
                <div className="text-right">
                  <span className="text-gold text-sm font-medium">{club.minSpend}</span>
                  <span className="text-text-muted text-xs ml-2">{club.openingNights}</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-text-muted text-sm mt-4 text-center">
            Plus <Link href="/clubs/the-box-london" className="text-gold hover:underline">The Box</Link> and <Link href="/clubs/cirque-le-soir" className="text-gold hover:underline">Cirque Le Soir</Link> in nearby Soho, <Link href="/clubs/reign-london" className="text-gold hover:underline">Reign</Link> on Piccadilly, and <Link href="/clubs/beat-london" className="text-gold hover:underline">BEAT</Link> on Margaret Street.
          </p>
        </div>
      </section>

      {/* The Mayfair dress code */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The Mayfair Dress Code</h2>
          <p className="text-text-secondary leading-relaxed mb-6">Mayfair clubs take dress code seriously. This isn&apos;t about being exclusive for the sake of it — it&apos;s about maintaining an atmosphere where everyone has made an effort. The standard across all Mayfair venues: smart and stylish, no exceptions.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-gold mb-3">Men</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Smart shoes (no trainers), fitted trousers or smart jeans, collared shirt or smart knitwear. A blazer is never wrong. Avoid: sportswear, hoodies, shorts, flip-flops, ripped jeans, plain t-shirts.</p>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-gold mb-3">Women</h3>
              <p className="text-text-secondary text-sm leading-relaxed">More flexible but still smart. Dresses, heels, smart separates, jumpsuits — essentially, dress for a special occasion. Avoid: casual daywear, very casual trainers, sportswear. When in doubt, overdress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Your Mayfair Birthday Night Timeline</h2>
          <div className="space-y-4">
            {[
              { time: "7:00–8:30pm", title: "Pre-drinks or dinner", desc: "Start with cocktails at a nearby bar or book dinner at Maddox Club for the full dinner-to-club experience. Mayfair has no shortage of excellent restaurants within walking distance of every club." },
              { time: "10:30–11:00pm", title: "Arrive at the club", desc: "This is the sweet spot. Your table and bottles are ready, the room is filling up, and you have time to settle in before the peak. Give your name at the door — priority entry for table bookings means no queue." },
              { time: "11:30pm–12:30am", title: "Birthday moment", desc: "Time for the birthday bottle presentation. Sparklers, DJ shoutout, cake if arranged. The room is full, the energy is right, and your birthday is the centre of attention." },
              { time: "12:30am–3:00am", title: "Peak celebration", desc: "The dancefloor peaks. Your table is your home base between dances. Enjoy the bottles, the music, and the feeling of celebrating somewhere genuinely special." },
            ].map(item => (
              <div key={item.time} className="flex gap-5">
                <div className="flex-shrink-0 w-28 text-gold font-medium text-sm pt-1">{item.time}</div>
                <div className="bg-bg-card border border-border rounded-xl p-5 flex-1">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Plan Your Mayfair Birthday</h2>
          <p className="text-text-secondary text-center text-lg mb-8">Tell us your date, group size, and preferred vibe — we know Mayfair inside out and will recommend the perfect venue.</p>
          <WhatsAppCTA message={getGeneralWhatsAppMessage()} label="Plan Mayfair Birthday on WhatsApp" size="large" variant="detailed" />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Mayfair Birthday FAQ</h2>
          <div className="space-y-6">
            {faqs.map(faq => (
              <div key={faq.question} className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          <Link href="/birthday-clubs-london" className="text-gold text-sm hover:underline">All birthday clubs &rarr;</Link>
          <Link href="/plan-birthday-london-club" className="text-gold text-sm hover:underline">Full planning guide &rarr;</Link>
          <Link href="/birthday-table-prices-london" className="text-gold text-sm hover:underline">Table prices &rarr;</Link>
        </div>
      </section>
    </>
  );
}
