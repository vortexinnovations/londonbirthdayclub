import type { Metadata } from "next";
import Link from "next/link";
import { openClubs, getVIPWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "VIP Birthday Tables London — Luxury Packages (2026)",
  description: "Book a VIP birthday table at London's most exclusive nightclubs. Premium table positions, champagne packages, sparklers, and dedicated hosts. Luxury birthday experiences from £1,000.",
  alternates: { canonical: "https://londonbirthdayclub.com/vip-birthday-tables-london" },
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

      <section className="relative py-20 sm:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">VIP Birthday Tables in <span className="text-gold">London</span></h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
            The premium birthday experience. The best table positions, enhanced service, spectacular presentations, and the kind of night that makes turning another year older feel like an achievement worth celebrating.
          </p>
          <WhatsAppCTA message={getVIPWhatsAppMessage()} label="Book a VIP Birthday Table" size="large" />
        </div>
      </section>

      {/* What VIP means */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What a VIP Birthday Table Gets You</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Premium Position", desc: "The best table in the house — centre stage, near the DJ, or in an elevated VIP area with commanding views of the entire room." },
              { title: "Dedicated VIP Host", desc: "Your personal host for the night. They manage your service, anticipate needs, and ensure your birthday runs flawlessly." },
              { title: "Enhanced Presentations", desc: "Birthday bottle deliveries with full sparkler processions, LED displays, and the kind of spectacle that stops the room." },
              { title: "Premium Bottle Selection", desc: "Access to the venue's finest champagnes and spirits. Dom Perignon, Ace of Spades, premium Grey Goose magnums — the celebration-grade bottles." },
              { title: "Priority Everything", desc: "First to be served, first through the door, and first to receive attention. VIP means your group never waits." },
              { title: "Birthday Concierge", desc: "We coordinate cake delivery, table decorations, DJ shoutouts, and any surprises you want to arrange for the birthday person." },
            ].map(item => (
              <div key={item.title} className="bg-bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-gold mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best VIP venues */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Best Venues for VIP Birthdays</h2>
          <div className="space-y-4">
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
                <div key={item.slug} className="bg-bg-card border border-border rounded-xl p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Link href={`/clubs/${club.slug}`} className="text-xl font-bold hover:text-gold transition-colors">{club.name}</Link>
                    <span className="text-xs text-text-muted">{club.area} &middot; From {club.minSpend}</span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.why}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Budget tiers */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">VIP Birthday Budget Tiers</h2>
          <div className="space-y-4">
            {[
              { tier: "Premium", spend: "£1,000–£1,500", desc: "A standard VIP table at most Mayfair venues. Premium bottles, dedicated host, sparkler presentations, and reserved seating. The entry point to VIP and genuinely excellent.", venues: "Most Mayfair clubs" },
              { tier: "Luxury", spend: "£1,500–£3,000", desc: "Premium table positions, upgraded bottle selections, enhanced birthday presentations. The sweet spot for a memorable VIP birthday that impresses everyone.", venues: "Tape, Cirque, The Box" },
              { tier: "Ultra-Premium", spend: "£3,000+", desc: "The absolute best table, the finest champagnes, the most dramatic presentations. For milestone birthdays where the budget matches the occasion.", venues: "Tape, Cirque — by arrangement" },
            ].map(item => (
              <div key={item.tier} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-gold font-bold text-lg">{item.tier}</span>
                  <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded">{item.spend}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-2">{item.desc}</p>
                <p className="text-text-muted text-xs">Best venues: {item.venues}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/birthday-table-prices-london" className="text-gold text-sm hover:underline">Full pricing breakdown &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Book Your VIP Birthday Table</h2>
          <p className="text-text-secondary text-center text-lg mb-8">Tell us your date, group size, and budget. We&apos;ll secure the best VIP table available and handle every detail.</p>
          <WhatsAppCTA message={getVIPWhatsAppMessage()} label="Book VIP Table on WhatsApp" size="large" variant="detailed" />
        </div>
      </section>

      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">VIP Birthday Table FAQ</h2>
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
    </>
  );
}
