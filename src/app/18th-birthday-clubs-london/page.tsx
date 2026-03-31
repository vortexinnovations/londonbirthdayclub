import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { openClubs, getMilestoneWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "18th Birthday Clubs London | Best Venues for Turning 18 in 2026",
  description: "The best London nightclubs for an 18th birthday celebration. First night out done properly — VIP tables, bottle service, and spectacular venues. From £1,000 with free booking.",
  alternates: { canonical: "https://londonbirthdayclub.com/18th-birthday-clubs-london" },
};

const faqs = [
  { question: "Can you go to a London nightclub for your 18th birthday?", answer: "Yes. London nightclubs admit guests aged 18 and over. You'll need valid photo ID (passport or driving licence) to enter. For an 18th birthday, a VIP table booking ensures your group gets priority entry and avoids any door queue uncertainty." },
  { question: "What's the best London club for an 18th birthday?", answer: "Cirque Le Soir is our top recommendation — the live performers, pyrotechnics, and spectacular atmosphere create the most memorable first big night out. Cuckoo Club is also excellent with its two floors catering to different music tastes. Both are welcoming to 18th birthday groups." },
  { question: "How much does an 18th birthday table cost in London?", answer: "Tables start from £1,000 minimum spend. For a typical 18th birthday group of 10-15, that's £67-100 per person — often less than a night of buying individual drinks, but with VIP service, bottles, and a reserved area. Weeknight bookings can offer lower minimums." },
  { question: "What should I wear to a London club for my 18th?", answer: "Mayfair clubs require smart dress: no sportswear, trainers, or casual jeans. For men, smart shoes, fitted trousers, and a collared shirt. For women, the dress code is more flexible but still smart. BEAT London has a more relaxed smart-casual dress code." },
];

export default function EighteenthBirthdayPage() {
  const topPicks = [
    { slug: "cirque-le-soir", reason: "The ultimate first big night out. Live performers, pyrotechnic bottle shows, and an atmosphere that makes turning 18 feel monumental. Your group will be genuinely amazed — this is the kind of night you'll tell stories about for years." },
    { slug: "cuckoo-club", reason: "Two floors with completely different vibes solve the music-taste problem that every group has. Hip-hop downstairs, house upstairs — everyone finds their groove. The Mayfair location makes it feel special without being intimidating." },
    { slug: "reign-london", reason: "If your 18th group is big (15+), Reign's grand venue with aerial performances creates a celebration that matches the energy of the milestone. The spectacle gives everyone something to remember." },
    { slug: "funky-buddha", reason: "One of the most iconic names in London nightlife. The intimate setting and incredible hip-hop playlist create an 18th birthday that feels like a proper event. The energy is infectious." },
    { slug: "luna-club-london", reason: "Stunning modern interiors that photograph beautifully. For 18th birthday groups who want their first big night to look as good on Instagram as it feels in person." },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "18th Birthday Clubs London", href: "/18th-birthday-clubs-london" }]} />

      <section className="relative min-h-[50vh] flex items-center justify-center px-4">
        <Image src={images.hero.eighteenth} alt="18th birthday celebration at a London nightclub" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">18th Birthday Clubs in <span className="text-gold">London</span></h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
            Your first legal night out deserves better than a random bar. Celebrate turning 18 at one of London&apos;s best nightclubs with VIP tables, bottle service, and the kind of spectacle that makes this birthday genuinely unforgettable.
          </p>
          <WhatsAppCTA message={getMilestoneWhatsAppMessage("18th")} label="Plan My 18th Birthday" size="large" />
        </div>
      </section>

      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">What Makes an 18th Birthday at a Club Special</h2>
          <p className="text-text-secondary leading-relaxed mb-6">An 18th birthday is your first milestone celebration as an adult, and that calls for something more than showing up to a random bar. A VIP table at a London nightclub means your group has a reserved area, premium drinks, priority entry (no risking being turned away), and birthday extras like sparklers and DJ shoutouts that make the night feel properly celebratory.</p>
          <p className="text-text-secondary leading-relaxed">For many 18th birthday groups, this is their first experience of proper nightlife — and starting at a premium venue sets the bar high. The memories, the photos, and the shared experience of a spectacular night out create the kind of 18th birthday that lives up to the anticipation.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Top Picks for an 18th Birthday</h2>
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

      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">18th Birthday Budget Guide</h2>
          <p className="text-text-secondary leading-relaxed mb-6">An 18th birthday group typically ranges from 10-20 people. With a £1,000 minimum spend at most venues, that breaks down to £50-100 per person for the table — covering premium bottles, mixers, a reserved VIP area, and birthday extras. Compare that to buying individual drinks all night at a London bar, and a table often works out cheaper while being significantly more memorable.</p>
          <p className="text-text-secondary leading-relaxed mb-6">Midweek nights (Wednesday and Thursday) often have lower minimum spends — and the atmosphere is still brilliant. A Wednesday birthday at Cirque Le Soir still gets you the full circus experience at a more accessible price point.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/birthday-table-prices-london" className="text-gold text-sm hover:underline">Full pricing guide &rarr;</Link>
            <Link href="/birthday-guestlist-vs-table-booking" className="text-gold text-sm hover:underline">Guestlist vs table — which is right? &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Plan Your 18th Birthday</h2>
          <p className="text-text-secondary text-center text-lg mb-8">Tell us your date, group size, and vibe — we&apos;ll recommend the perfect venue and handle every detail. Free service, zero hassle.</p>
          <WhatsAppCTA message={getMilestoneWhatsAppMessage("18th")} label="Plan My 18th on WhatsApp" size="large" variant="detailed" />
        </div>
      </section>

      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">18th Birthday FAQ</h2>
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

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          <Link href="/21st-birthday-clubs-london" className="text-gold text-sm hover:underline">21st birthday guide &rarr;</Link>
          <Link href="/birthday-by-age" className="text-gold text-sm hover:underline">All milestone birthdays &rarr;</Link>
          <Link href="/birthday-clubs-london" className="text-gold text-sm hover:underline">All birthday clubs &rarr;</Link>
        </div>
      </section>
    </>
  );
}
