import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { openClubs, getGeneralWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ItemListSchema from "@/components/ItemListSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "13 Best Birthday Clubs in London (2026) — Ranked by Real Experience",
  description:
    "We've booked hundreds of birthday tables. Here are the 13 best London clubs for a birthday, honestly ranked. Cirque Le Soir, Tape, The Box & more — with prices, group advice, and what to expect.",
  alternates: {
    canonical: "https://londonbirthdayclub.com/best-birthday-clubs-london",
  },
  openGraph: { url: "https://londonbirthdayclub.com/best-birthday-clubs-london" },
};

const faqs = [
  {
    question: "What is the best club in London for a birthday?",
    answer:
      "It depends on what kind of birthday you want. For the most unforgettable experience with live entertainment, Cirque Le Soir and The Box London are unmatched. For an exclusive, celebrity-style celebration, Tape London or Funky Buddha are the top choices. For a complete dinner-to-dancing evening, Maddox Club delivers the most complete experience.",
  },
  {
    question: "Which London club is best for a big birthday group?",
    answer:
      "For large birthday groups of 15+, Reign London, BEAT London, and Cuckoo Club offer the most space and can accommodate multiple tables together. Reign London is the best option for very large groups of 25+ thanks to its multi-level layout.",
  },
  {
    question: "Which Mayfair club is cheapest for a birthday?",
    answer:
      "Most Mayfair clubs start from £1,000 minimum spend. Weeknight bookings (Wednesday and Thursday) often have lower minimums than weekends. Cirque Le Soir on Wednesdays, Cuckoo Club on Tuesdays, and Funky Buddha on Wednesdays can offer more accessible entry points for birthday groups.",
  },
];

const rankings = [
  {
    position: 1,
    slug: "tape-london",
    verdict:
      "For exclusivity and genuine VIP treatment, Tape London is in a class of its own. The intimate members' club atmosphere means your birthday group gets real attention — not just a sparkler and a nod. The celebrity clientele, world-class sound, and personal service create a birthday that feels genuinely exclusive. Best for smaller groups who want quality over quantity.",
    bestForTag: "Most Exclusive Birthday Venue",
  },
  {
    position: 2,
    slug: "cirque-le-soir",
    verdict:
      "Nothing in London comes close to the sheer entertainment value of a birthday at Cirque Le Soir. The live performers, pyrotechnic bottle shows, and immersive atmosphere create a birthday experience that your guests will talk about for years. If you want your birthday to be genuinely unforgettable — not just another night at a club — Cirque is the one.",
    bestForTag: "Most Unforgettable Experience",
  },
  {
    position: 3,
    slug: "the-box-london",
    verdict:
      "The Box London delivers the most daring and talked-about birthday in the city. The provocative theatrical performances, stunning Soho venue, and boundary-pushing entertainment create a celebration that your guests will never stop discussing. If you want your birthday to be genuinely unique and unforgettable, The Box is the venue.",
    bestForTag: "Most Daring & Theatrical",
  },
  {
    position: 4,
    slug: "funky-buddha",
    verdict:
      "Funky Buddha is one of the most iconic names in London nightlife. The legendary Berkeley Street venue has hosted everyone from pop stars to footballers, and that celebrity energy infuses every birthday celebration. The intimate setting, exceptional hip-hop playlist, and incredible atmosphere make it a birthday that feels like a headline event.",
    bestForTag: "Iconic & Legendary",
  },
  {
    position: 5,
    slug: "reign-london",
    verdict:
      "If you're planning a big birthday with a large group and want a jaw-dropping venue, Reign London delivers. The aerial performances, grand setting, and large capacity mean your celebration can be as big as you want it to be. The visual spectacle gives your birthday a sense of occasion that smaller venues can't match.",
    bestForTag: "Big Group Spectacle",
  },
  {
    position: 6,
    slug: "dear-darling",
    verdict:
      "Dear Darling is the most elegant birthday option in London. If your ideal birthday is champagne cocktails in velvet booths surrounded by chandeliers rather than a packed dancefloor, this is your venue. Perfect for milestone birthdays (30th, 40th) where sophistication matters more than volume.",
    bestForTag: "Elegant & Sophisticated",
  },
  {
    position: 7,
    slug: "maddox-club",
    verdict:
      "Maddox's dinner-to-club format solves the birthday planning problem of coordinating a restaurant and a nightclub. Start with excellent Italian food, end on a house music dancefloor — all without leaving the building. The house music policy also makes it a refreshing alternative to Mayfair's hip-hop-heavy scene.",
    bestForTag: "Dinner-to-Dancing",
  },
  {
    position: 8,
    slug: "tabu-london",
    verdict:
      "TABU is the coolest-looking birthday venue on this list. The Japanese underground aesthetic creates an atmosphere that's dark, moody, and incredibly photogenic. If your birthday crew is style-conscious and hip-hop focused, TABU is the perfect match. The intimate size means the energy is concentrated and your celebration really stands out.",
    bestForTag: "Edgy & Photogenic",
  },
  {
    position: 9,
    slug: "cuckoo-club",
    verdict:
      "Cuckoo Club's two floors solve the common birthday problem of mixed music taste. House upstairs, hip-hop downstairs — everyone gets what they want without splitting the group across different venues. The Mayfair location and consistent atmosphere make it a reliable choice for birthdays where variety matters.",
    bestForTag: "Two Vibes, One Venue",
  },
  {
    position: 10,
    slug: "luna-club-london",
    verdict:
      "Luna Club London brings a fresh, visually stunning energy to Mayfair's birthday scene. The celestial-inspired interiors are incredibly photogenic, the music policy spans hip-hop to Afrobeats, and the newer-venue excitement means every visit feels like a discovery. If your group wants a modern, Instagram-worthy birthday, Luna delivers.",
    bestForTag: "Modern & Photogenic",
  },
  {
    position: 11,
    slug: "selene-london",
    verdict:
      "Selene strikes the balance that many Mayfair clubs aim for but few achieve: genuinely elegant without feeling intimidating. The refined interiors, balanced music policy, and warm atmosphere make it an excellent choice for birthday groups who want premium quality without pretension. Particularly well-suited for mixed groups.",
    bestForTag: "Refined & Balanced",
  },
  {
    position: 12,
    slug: "scotch-of-st-james",
    verdict:
      "Scotch of St James offers something no other venue can — genuine history and character. Celebrating your birthday in a venue with heritage stretching back to the Hendrix era gives the evening a story that goes beyond just another club night. Best for birthday groups who appreciate authenticity and a more intimate, characterful setting.",
    bestForTag: "Character & History",
  },
  {
    position: 13,
    slug: "beat-london",
    verdict:
      "BEAT is the choice for birthday groups where the music genuinely matters. The sound system is among the best in London, and the house and tech house policy creates a dancefloor energy that's about the music, not about being seen. More relaxed on dress code, more focused on the experience.",
    bestForTag: "Music-First Birthday",
  },
];

export default function BestClubsPage() {
  const itemListItems = rankings.map((r) => {
    const club = openClubs.find((c) => c.slug === r.slug);
    return {
      name: club?.name ?? r.slug,
      url: `https://londonbirthdayclub.com/clubs/${r.slug}`,
      position: r.position,
    };
  });

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Best Birthday Clubs London", href: "/best-birthday-clubs-london" }]} />
      <ItemListSchema name="Best Birthday Clubs in London 2026" description="13 London nightclubs ranked for birthday celebrations, based on atmosphere, service, entertainment, and birthday-specific features." items={itemListItems} />
      <ArticleSchema title="13 Best Birthday Clubs in London — Ranked by Real Experience" description="Honest, ranked guide to the best London nightclubs for birthday celebrations." url="https://londonbirthdayclub.com/best-birthday-clubs-london" />

      <section className="relative min-h-[50vh] flex items-center justify-center px-4">
        <Image src={images.hero.bestClubs} alt="Best birthday clubs in London" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Best Clubs for a Birthday in{" "}
            <span className="text-gold">London</span>
          </h1>
          <p className="text-lg text-white max-w-2xl leading-relaxed mb-4 [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            An honest, opinionated guide to the best London nightclubs for
            birthday celebrations. We&apos;ve helped plan hundreds of birthday
            nights — these are the venues that consistently deliver
            unforgettable celebrations, ranked by how well they handle birthdays
            specifically.
          </p>
          <p className="text-white/70 text-sm [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            Updated for 2026. Every venue personally vetted.
          </p>
        </div>
      </section>

      {/* Rankings */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {rankings.map((item) => {
            const club = openClubs.find((c) => c.slug === item.slug)!;
            return (
              <div
                key={item.slug}
                className="bg-bg-card border border-border rounded-xl p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-gold text-3xl font-bold opacity-50 leading-none">
                    #{item.position}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <Link
                        href={`/clubs/${club.slug}`}
                        className="text-2xl font-bold hover:text-gold transition-colors"
                      >
                        {club.name}
                      </Link>
                      <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded">
                        {item.bestForTag}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-text-muted mb-4">
                      <span>{club.area}</span>
                      <span>From {club.minSpend}</span>
                      <span>{club.musicPolicy.split(",")[0]}</span>
                    </div>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {item.verdict}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="text-gold text-sm font-medium hover:underline"
                  >
                    Full birthday guide &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick comparison */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Quick Comparison: Which Club Suits Your Birthday?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                q: "Biggest wow factor?",
                a: "Cirque Le Soir — live performers and pyrotechnics",
                link: "/clubs/cirque-le-soir",
              },
              {
                q: "Most exclusive?",
                a: "Tape London — members' club, celebrity crowd",
                link: "/clubs/tape-london",
              },
              {
                q: "Best for big groups?",
                a: "Reign London — grand multi-level venue",
                link: "/clubs/reign-london",
              },
              {
                q: "Most elegant?",
                a: "Dear Darling — chandeliers and cocktails",
                link: "/clubs/dear-darling",
              },
              {
                q: "Best dinner + club?",
                a: "Maddox Club — Italian dining meets dancefloor",
                link: "/clubs/maddox-club",
              },
              {
                q: "Best sound system?",
                a: "BEAT London — music-first experience",
                link: "/clubs/beat-london",
              },
            ].map((item) => (
              <Link
                key={item.q}
                href={item.link}
                className="block bg-bg-card border border-border hover:border-gold/30 rounded-xl p-5 transition-all group"
              >
                <div className="font-semibold text-sm mb-2 group-hover:text-gold transition-colors">
                  {item.q}
                </div>
                <div className="text-text-secondary text-sm">{item.a}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Birthday Club FAQ
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
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Not Sure Which Club? We&apos;ll Help
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Tell us about your birthday — group size, vibe, budget — and
            we&apos;ll recommend the perfect venue. Free advice, no obligation.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Get a Recommendation on WhatsApp"
            size="large"
          />
        </div>
      </section>
    </>
  );
}
