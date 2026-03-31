import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { openClubs, getMilestoneWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "21st Birthday Clubs London | Best Venues for Your 21st in 2026",
  description: "The best London nightclubs for a 21st birthday celebration. VIP tables, live entertainment, spectacular venues. Make turning 21 genuinely unforgettable. Free booking via WhatsApp.",
  alternates: { canonical: "https://londonbirthdayclub.com/21st-birthday-clubs-london" },
};

const faqs = [
  { question: "What's the best club in London for a 21st birthday?", answer: "Cirque Le Soir consistently delivers the most spectacular 21st birthday experiences — live performers, pyrotechnic bottle shows, and an atmosphere of pure excitement. For a more exclusive 21st, Tape London offers intimate VIP energy. For large groups who want spectacle, Reign London has the space and aerial performances to match." },
  { question: "How far in advance should I book for a 21st birthday?", answer: "Book 2-3 weeks ahead for standard weekends, 3-4 weeks for peak Saturdays at popular venues like Cirque or Tape. 21st birthdays tend to be larger groups, and bigger tables need earlier booking to secure good positions." },
  { question: "What do 21st birthday groups get at London clubs?", answer: "A VIP table booking includes reserved seating, premium bottles and mixers, a dedicated host, priority entry, and birthday extras like sparkler presentations, cake arrangements, DJ shoutouts, and decorated tables. Some venues offer additional performer interactions for birthday groups." },
  { question: "How big is a typical 21st birthday group?", answer: "21st birthday groups range from 10-25 guests, with 12-18 being the most common. This size works well for a single table at most venues, or two tables at intimate clubs like Tape or TABU. Groups of 20+ may need multi-table arrangements." },
];

export default function TwentyFirstBirthdayPage() {
  const topPicks = [
    { slug: "cirque-le-soir", reason: "The undisputed champion for 21st birthdays. The live circus performers, pyrotechnic bottle presentations, and immersive atmosphere create a night that defines what turning 21 should feel like. Your group will be genuinely amazed — fire breathers, acrobats, and the kind of spectacle that makes this milestone birthday monumental." },
    { slug: "tape-london", reason: "For a 21st that prioritises exclusivity over spectacle. The members' club atmosphere, A-list clientele, and world-class sound create a celebration that feels genuinely VIP. Best for smaller 21st birthday groups of 8-12 who want quality over quantity." },
    { slug: "the-box-london", reason: "For the adventurous 21st birthday group. The provocative theatrical performances are unlike anything else in London — your group will be talking about this night for years. A genuinely unique way to mark the milestone." },
    { slug: "funky-buddha", reason: "Legendary status, incredible energy, intimate setting. A 21st at Funky Buddha feels like stepping into London nightlife history. The hip-hop and RnB playlist is perfectly pitched for the 21st birthday demographic." },
    { slug: "cuckoo-club", reason: "The two-floor layout solves every 21st birthday group's music dilemma. House upstairs, hip-hop downstairs — everyone happy, nobody compromises. Open more nights than most Mayfair clubs too." },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "21st Birthday Clubs London", href: "/21st-birthday-clubs-london" }]} />

      <section className="relative min-h-[50vh] flex items-center justify-center px-4">
        <Image src={images.hero.twentyFirst} alt="21st birthday party at a London club" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">21st Birthday Clubs in <span className="text-gold">London</span></h1>
          <p className="text-lg text-white max-w-2xl [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] mx-auto leading-relaxed mb-8">
            Turning 21 is the biggest birthday milestone in nightlife. This is the one your friends will compare every future night out to — make it count with a VIP celebration at one of London&apos;s most spectacular clubs.
          </p>
          <WhatsAppCTA message={getMilestoneWhatsAppMessage("21st")} label="Plan My 21st Birthday" size="large" />
        </div>
      </section>

      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Why Your 21st Deserves a London Club</h2>
          <p className="text-text-secondary leading-relaxed mb-6">By 21, you and your friends have been to enough bars and house parties to know the difference between a good night and a great one. A 21st birthday at a London nightclub elevates the celebration from memorable to legendary — VIP service, spectacular venues, bottle presentations with sparklers, and the feeling of being at the centre of something genuinely exciting.</p>
          <p className="text-text-secondary leading-relaxed">The 21st birthday group is typically the perfect size for a club celebration: big enough to create energy, close enough as friends to make the night genuinely personal. Whether you want the theatrical spectacle of Cirque Le Soir, the exclusive cool of Tape London, or the daring entertainment of The Box, London has a venue that matches exactly what your 21st should feel like.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Top 5 Clubs for a 21st Birthday</h2>
          <div className="space-y-4">
            {topPicks.map((pick, i) => {
              const club = openClubs.find(c => c.slug === pick.slug);
              if (!club) return null;
              return (
                <div key={pick.slug} className="bg-bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-gold font-bold text-lg">#{i + 1}</span>
                    <Link href={`/clubs/${club.slug}`} className="text-lg font-semibold hover:text-gold transition-colors">{club.name}</Link>
                    <span className="text-xs text-text-muted">{club.area} &middot; From {club.minSpend}</span>
                  </div>
                  <p className="text-text-secondary leading-relaxed text-sm">{pick.reason}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick comparisons */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Quick Match: What Kind of 21st Are You Planning?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { q: "Want the biggest wow?", a: "Cirque Le Soir — performers and pyrotechnics", slug: "cirque-le-soir" },
              { q: "Want genuine exclusivity?", a: "Tape London — members' club, A-list energy", slug: "tape-london" },
              { q: "Want something daring?", a: "The Box — provocative theatre meets nightclub", slug: "the-box-london" },
              { q: "Mixed music tastes?", a: "Cuckoo Club — house upstairs, hip-hop downstairs", slug: "cuckoo-club" },
              { q: "Large group (15+)?", a: "Reign London — grand venue, aerial performances", slug: "reign-london" },
              { q: "Instagram-worthy venue?", a: "TABU — Japanese underground, every angle looks amazing", slug: "tabu-london" },
            ].map(item => (
              <Link key={item.q} href={`/clubs/${item.slug}`} className="block bg-bg-card border border-border hover:border-gold/30 rounded-xl p-5 transition-all group">
                <div className="font-semibold text-sm mb-1 group-hover:text-gold transition-colors">{item.q}</div>
                <div className="text-text-secondary text-sm">{item.a}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">21st Birthday Budget Guide</h2>
          <p className="text-text-secondary leading-relaxed mb-6">A typical 21st birthday group of 12-18 people, with a £1,000 minimum spend, breaks down to approximately £56-83 per person. That covers premium bottles, mixers, VIP service, and a reserved area for the entire night. Factor in cake (£50-150) and you&apos;re looking at a genuinely premium experience for less than you might expect.</p>
          <p className="text-text-secondary leading-relaxed">The birthday person typically pays nothing — their share is covered by the group. With 15 friends splitting £1,000 plus cake, each person pays roughly £70-75 for a VIP birthday experience that&apos;s incomparably better than buying individual drinks at a bar all night.</p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link href="/birthday-table-prices-london" className="text-gold text-sm hover:underline">Full pricing guide &rarr;</Link>
            <Link href="/vip-birthday-tables-london" className="text-gold text-sm hover:underline">VIP table upgrades &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Plan Your 21st Birthday</h2>
          <p className="text-text-secondary text-center text-lg mb-8">This is the big one. Tell us your date, group size, and dream venue — we&apos;ll make your 21st unforgettable.</p>
          <WhatsAppCTA message={getMilestoneWhatsAppMessage("21st")} label="Plan My 21st on WhatsApp" size="large" variant="detailed" />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">21st Birthday FAQ</h2>
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
          <Link href="/18th-birthday-clubs-london" className="text-gold text-sm hover:underline">&larr; 18th birthday guide</Link>
          <Link href="/30th-birthday-night-out-london" className="text-gold text-sm hover:underline">30th birthday guide &rarr;</Link>
          <Link href="/birthday-by-age" className="text-gold text-sm hover:underline">All milestone birthdays</Link>
        </div>
      </section>
    </>
  );
}
