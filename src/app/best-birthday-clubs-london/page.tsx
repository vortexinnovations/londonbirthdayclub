import type { Metadata } from "next";
import Link from "next/link";
import { clubs, getGeneralWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Best Clubs for a Birthday in London 2025 | Ranked Birthday Venue Guide",
  description:
    "Honest, ranked guide to the best London nightclubs for birthday celebrations. From intimate Mayfair lounges to iconic superclubs — find the perfect venue for your birthday party.",
  alternates: {
    canonical: "https://londonbirthdayclub.com/best-birthday-clubs-london",
  },
};

const faqs = [
  {
    question: "What is the best club in London for a birthday?",
    answer:
      "It depends on what kind of birthday you want. For the most unforgettable experience with live entertainment, Cirque Le Soir and Lio Club London are unmatched. For an exclusive, celebrity-style celebration, Tape London is the top choice. For a complete dinner-to-dancing evening, Maddox or Lio deliver the most complete experience.",
  },
  {
    question: "Which London club is best for a big birthday group?",
    answer:
      "For large birthday groups of 15+, The London Reign, Ministry of Sound, and Cuckoo Club offer the most space and can accommodate multiple tables together. Ministry of Sound is the best option for very large groups of 25+ thanks to its dedicated VIP areas.",
  },
  {
    question: "Which Mayfair club is cheapest for a birthday?",
    answer:
      "Most Mayfair clubs start from £1,000 minimum spend. Weeknight bookings (Wednesday and Thursday) often have lower minimums than weekends. Cirque Le Soir on Wednesdays, Cuckoo Club on Tuesdays, and Libertine on Wednesdays can offer more accessible entry points for birthday groups.",
  },
];

const rankings = [
  {
    position: 1,
    slug: "cirque-le-soir",
    verdict:
      "Nothing in London comes close to the sheer entertainment value of a birthday at Cirque Le Soir. The live performers, pyrotechnic bottle shows, and immersive atmosphere create a birthday experience that your guests will talk about for years. If you want your birthday to be genuinely unforgettable — not just another night at a club — Cirque is the one.",
    bestForTag: "Most Unforgettable Experience",
  },
  {
    position: 2,
    slug: "lio-london",
    verdict:
      "Lio delivers the most complete birthday evening in London. Starting with gourmet dining surrounded by live performers, then seamlessly transitioning into a full nightclub — it removes the logistical headache of organising dinner and a club separately. For milestone birthdays where you want the whole evening to feel special, Lio is exceptional.",
    bestForTag: "Complete Birthday Evening",
  },
  {
    position: 3,
    slug: "tape-london",
    verdict:
      "For exclusivity and genuine VIP treatment, Tape London is in a class of its own. The intimate members' club atmosphere means your birthday group gets real attention — not just a sparkler and a nod. The celebrity clientele, world-class sound, and personal service create a birthday that feels genuinely exclusive. Best for smaller groups who want quality over quantity.",
    bestForTag: "Exclusive & Intimate",
  },
  {
    position: 4,
    slug: "the-london-reign",
    verdict:
      "If you're planning a big birthday with a large group and want a jaw-dropping venue, The London Reign delivers. The aerial performances, grand setting, and large capacity mean your celebration can be as big as you want it to be. The visual spectacle gives your birthday a sense of occasion that smaller venues can't match.",
    bestForTag: "Big Group Spectacle",
  },
  {
    position: 5,
    slug: "dear-darling",
    verdict:
      "Dear Darling is the most elegant birthday option in London. If your ideal birthday is champagne cocktails in velvet booths surrounded by chandeliers rather than a packed dancefloor, this is your venue. Perfect for milestone birthdays (30th, 40th) where sophistication matters more than volume.",
    bestForTag: "Elegant & Sophisticated",
  },
  {
    position: 6,
    slug: "maddox",
    verdict:
      "Maddox's dinner-to-club format solves the birthday planning problem of coordinating a restaurant and a nightclub. Start with excellent Italian food, end on a house music dancefloor — all without leaving the building. The house music policy also makes it a refreshing alternative to Mayfair's hip-hop-heavy scene.",
    bestForTag: "Dinner-to-Dancing",
  },
  {
    position: 7,
    slug: "tabu-london",
    verdict:
      "TABU is the coolest-looking birthday venue on this list. The Japanese underground aesthetic creates an atmosphere that's dark, moody, and incredibly photogenic. If your birthday crew is style-conscious and hip-hop focused, TABU is the perfect match. The intimate size means the energy is concentrated and your celebration really stands out.",
    bestForTag: "Edgy & Photogenic",
  },
  {
    position: 8,
    slug: "cuckoo-club",
    verdict:
      "Cuckoo Club's two floors solve the common birthday problem of mixed music taste. House upstairs, hip-hop downstairs — everyone gets what they want without splitting the group across different venues. The Mayfair location and consistent atmosphere make it a reliable choice for birthdays where variety matters.",
    bestForTag: "Two Vibes, One Venue",
  },
  {
    position: 9,
    slug: "libertine",
    verdict:
      "Libertine delivers a polished, futuristic birthday experience with one of the best sound systems in Mayfair. It's a strong all-rounder — great music, great design, great service — without a single weak point. If you want a guaranteed good night without the theatrics of Cirque or the exclusivity of Tape, Libertine is a smart choice.",
    bestForTag: "Polished All-Rounder",
  },
  {
    position: 10,
    slug: "luxx-club",
    verdict:
      "Luxx's LED installations make every moment of your birthday visually spectacular. The open format music policy means the DJ adapts to the room, which works brilliantly for birthday groups with diverse tastes. If your group cares about the visual experience and Instagram-worthy moments, Luxx delivers.",
    bestForTag: "Visual Spectacle",
  },
  {
    position: 11,
    slug: "scotch-of-st-james",
    verdict:
      "Scotch of St James offers something no other venue can — genuine history and character. Celebrating your birthday in a venue where Hendrix once hung out gives the evening a story that goes beyond just another club night. Best for birthday groups who appreciate authenticity and a more intimate, characterful setting.",
    bestForTag: "Character & History",
  },
  {
    position: 12,
    slug: "beat-london",
    verdict:
      "BEAT is the choice for birthday groups where the music genuinely matters. The sound system is among the best in London, and the house and tech house policy creates a dancefloor energy that's about the music, not about being seen. More relaxed on dress code, more focused on the experience.",
    bestForTag: "Music-First Birthday",
  },
  {
    position: 13,
    slug: "ministry-of-sound",
    verdict:
      "Ministry of Sound is a bucket-list venue. Celebrating your birthday at one of the world's most iconic clubs is a statement in itself. The multiple rooms, legendary sound system, and massive capacity make it ideal for dance music lovers and very large birthday groups. It's a different experience from Mayfair — rawer, louder, more about the music.",
    bestForTag: "Iconic & Legendary",
  },
];

export default function BestClubsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="relative py-20 sm:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Best Clubs for a Birthday in{" "}
            <span className="text-gold">London</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-4">
            An honest, opinionated guide to the best London nightclubs for
            birthday celebrations. We&apos;ve helped plan hundreds of birthday
            nights — these are the venues that consistently deliver
            unforgettable celebrations, ranked by how well they handle birthdays
            specifically.
          </p>
          <p className="text-text-muted text-sm">
            Updated for 2025. Every venue personally vetted.
          </p>
        </div>
      </section>

      {/* Rankings */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {rankings.map((item) => {
            const club = clubs.find((c) => c.slug === item.slug)!;
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
                a: "The London Reign or Ministry of Sound",
                link: "/clubs/the-london-reign",
              },
              {
                q: "Most elegant?",
                a: "Dear Darling — chandeliers and cocktails",
                link: "/clubs/dear-darling",
              },
              {
                q: "Best dinner + club?",
                a: "Maddox or Lio Club London",
                link: "/clubs/lio-london",
              },
              {
                q: "Best sound system?",
                a: "BEAT London or Ministry of Sound",
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
