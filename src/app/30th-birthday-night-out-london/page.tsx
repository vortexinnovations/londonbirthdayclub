import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { openClubs, getMilestoneWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "30th Birthday Night Out London | Celebrate Turning 30 in Style",
  description: "The best London clubs and venues for a 30th birthday celebration. Quality over chaos — elegant venues, dinner-to-club options, and VIP birthday experiences for the milestone that matters.",
  alternates: { canonical: "https://londonbirthdayclub.com/30th-birthday-night-out-london" },
  openGraph: { url: "https://londonbirthdayclub.com/30th-birthday-night-out-london" },
};

const faqs = [
  { question: "Where should I celebrate my 30th birthday in London?", answer: "For a complete evening, Maddox Club offers Italian dining followed by a house music dancefloor — one venue, whole night sorted. For pure elegance, Dear Darling's chandeliered booths are unmatched. For exclusivity, Tape London's members' club atmosphere delivers genuine VIP treatment. The best choice depends on whether you prioritise food, atmosphere, or exclusivity." },
  { question: "How much should I budget for a 30th birthday at a London club?", answer: "A 30th birthday group of 10-15 people at a £1,000 minimum spend works out to £67-100 per person. For the full dinner-to-club experience at Maddox, add roughly £50-70 per person for dinner. Many 30th birthday groups are comfortable spending £150-200 per head for a premium experience." },
  { question: "Should I combine dinner and a club for a 30th birthday?", answer: "Absolutely — it's the most popular format for 30th birthdays. Maddox Club offers this seamlessly under one roof. Alternatively, start with cocktails and cake at Dear Darling, then move to a higher-energy venue. A 30th warrants the full evening treatment, not just showing up to a club at midnight." },
  { question: "Is Mayfair good for a 30th birthday?", answer: "Mayfair is excellent for 30th birthdays. The area's concentration of premium venues means you're surrounded by quality — sophisticated atmospheres, exceptional service, and the kind of environment that matches the significance of turning 30. Most of our 30th birthday bookings are in Mayfair." },
];

export default function ThirtiethBirthdayPage() {
  const topPicks = [
    { slug: "maddox-club", reason: "The complete 30th birthday experience. Start with Italian dining — genuinely excellent food, not a club afterthought — then transition seamlessly to a house music dancefloor. One venue, one booking, the whole evening sorted. The house music policy attracts a mature, well-dressed crowd that matches the 30th birthday energy perfectly." },
    { slug: "dear-darling", reason: "If your 30th birthday vision is champagne cocktails in velvet booths surrounded by chandeliers, Dear Darling is perfect. The most elegant birthday setting in Mayfair. Exceptional drinks, opulent interiors, and late-night hours mean you don't need to leave for the celebration to feel complete." },
    { slug: "tape-london", reason: "For a 30th that prioritises genuine exclusivity. The members' club atmosphere means your celebration is intimate, personal, and surrounded by quality. Smaller 30th birthday groups of 6-10 who want something truly special will love Tape." },
    { slug: "selene-london", reason: "Selene strikes the balance that 30th birthday groups want: elegant without being intimidating, fun without being chaotic. The refined interiors and balanced music policy work for groups with mixed preferences — everyone enjoys the evening at their own pace." },
    { slug: "scotch-of-st-james", reason: "For the 30th birthday person who values character over gloss. Scotch's Hendrix-era heritage and vintage-meets-luxury interiors create a celebration with genuine personality. The intimate setting means every detail feels personal." },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "30th Birthday Night Out London", href: "/30th-birthday-night-out-london" }]} />

      <section className="relative min-h-[50vh] flex items-center justify-center px-4">
        <Image src={images.hero.thirtieth} alt="30th birthday night out at a sophisticated London venue" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">30th Birthday Night Out in <span className="text-gold">London</span></h1>
          <p className="text-lg text-white max-w-2xl [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] mx-auto leading-relaxed mb-8">
            Turning 30 calls for quality, not chaos. The right venue, exceptional service, and an evening that feels worthy of the milestone. This is your guide to celebrating 30 with the sophistication it deserves.
          </p>
          <WhatsAppCTA message={getMilestoneWhatsAppMessage("30th")} label="Plan My 30th Birthday" size="large" />
        </div>
      </section>

      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">What a 30th Birthday Night Should Feel Like</h2>
          <p className="text-text-secondary leading-relaxed mb-6">A 30th birthday is fundamentally different from a 21st. The group is slightly smaller but closer. The budget is higher but expectations match. The priority shifts from pure energy to quality — good drinks, excellent service, a venue that feels genuinely premium. Many 30th birthday groups want the evening to include dinner, making it a proper occasion rather than just a club night.</p>
          <p className="text-text-secondary leading-relaxed">The venues we recommend for 30th birthdays reflect this shift. They prioritise atmosphere over volume, sophistication over spectacle, and personal service over crowd size. The result is a birthday that feels like an achievement celebrated, not just another night out.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Top 5 Venues for a 30th Birthday</h2>
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
          <h2 className="text-3xl font-bold text-center mb-10">Match Your 30th Birthday Style</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { q: "Want dinner + club?", a: "Maddox Club — Italian dining then house music", slug: "maddox-club" },
              { q: "Want pure elegance?", a: "Dear Darling — chandeliers, cocktails, opulence", slug: "dear-darling" },
              { q: "Want exclusivity?", a: "Tape London — members' club, celebrity crowd", slug: "tape-london" },
              { q: "Want balance?", a: "Selene — refined but fun, works for everyone", slug: "selene-london" },
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Plan Your 30th Birthday</h2>
          <p className="text-text-secondary text-center text-lg mb-8">This milestone deserves the right venue. Tell us your vision and we&apos;ll make it happen — dinner, club, birthday extras, everything.</p>
          <WhatsAppCTA message={getMilestoneWhatsAppMessage("30th")} label="Plan My 30th on WhatsApp" size="large" variant="detailed" />
        </div>
      </section>

      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">30th Birthday FAQ</h2>
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
          <Link href="/21st-birthday-clubs-london" className="text-gold text-sm hover:underline">&larr; 21st birthday guide</Link>
          <Link href="/birthday-by-age" className="text-gold text-sm hover:underline">All milestone birthdays</Link>
          <Link href="/how-to-plan-a-birthday-night-in-mayfair" className="text-gold text-sm hover:underline">Mayfair planning guide &rarr;</Link>
        </div>
      </section>
    </>
  );
}
