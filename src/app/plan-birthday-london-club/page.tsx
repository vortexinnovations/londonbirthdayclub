import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { getGeneralWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title:
    "How to Plan a Birthday at a London Club — Step-by-Step (2026 Guide)",
  description:
    "Step-by-step guide to planning a birthday at a London nightclub. Covers booking, minimum spends, group payments, dress codes, birthday extras, and what to expect on the night.",
  alternates: {
    canonical: "https://londonbirthdayclub.com/plan-birthday-london-club",
  },
  openGraph: { url: "https://londonbirthdayclub.com/plan-birthday-london-club" },
};

const faqs = [
  {
    question: "How far in advance should I book a birthday table in London?",
    answer:
      "Book 1-2 weeks ahead for most venues. For popular clubs like Tape London or Cirque Le Soir on a Friday or Saturday, 2-3 weeks is safer. For milestone birthdays with large groups (15+), aim for 3-4 weeks. Thursday and Wednesday nights are easier to book at short notice.",
  },
  {
    question: "What does minimum spend mean at a London nightclub?",
    answer:
      "Minimum spend is the minimum amount your table must spend on drinks (bottles, cocktails, champagne) during the night. It's not an entry fee or deposit on top of drinks — it IS your drinks budget. A £1,000 minimum spend means your group will have £1,000 worth of bottles and mixers at your table.",
  },
  {
    question: "Can I bring a birthday cake to a London nightclub?",
    answer:
      "Most London clubs allow birthday cakes and many actively help arrange them. Some clubs have preferred bakeries they work with, while others allow you to bring your own. We can arrange cake delivery to your club on the night — just let us know when you book.",
  },
  {
    question: "What happens if my group doesn't meet the minimum spend?",
    answer:
      "You'll still be charged the minimum spend amount regardless of actual consumption. This is standard across all London clubs. To avoid waste, choose your bottles wisely and make sure your group size matches your budget. We'll help you plan the right spend for your group size.",
  },
  {
    question: "Do I need to pay a deposit for a birthday table?",
    answer:
      "Most clubs require a deposit or credit card on file to secure a booking, typically £200-500. This is deducted from your minimum spend on the night, not charged on top. We'll confirm the exact deposit requirements for your chosen venue.",
  },
  {
    question: "What's included in a birthday package at a London club?",
    answer:
      "A typical birthday table booking at a London club includes your reserved table area, a dedicated table host, mixers (juices, soft drinks, Red Bull), ice, and glassware. Birthday extras like sparklers, cake, DJ shoutouts, and decorated tables can be arranged on top. Specific inclusions vary by venue.",
  },
  {
    question: "How do I split the bill for a birthday table?",
    answer:
      "The most common approach is to have the birthday person pay nothing, with the cost split equally among the rest of the group. Collect money in advance via bank transfer — chasing people for cash on the night ruins the mood. We recommend using a group payment app and collecting at least a week before.",
  },
  {
    question: "What should I wear to a London nightclub birthday?",
    answer:
      "Mayfair clubs enforce smart dress codes: no sportswear, trainers, shorts, or overly casual clothing. For men, smart shoes, fitted trousers, and a collared shirt are safe. For women, the dress code is more flexible but still smart. BEAT London has a more relaxed dress code than the Mayfair venues. Always check the specific venue's requirements.",
  },
];

export default function PlanBirthdayPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <ArticleSchema title="How to Plan a Birthday at a London Club" description="Step-by-step guide to planning a birthday at a London nightclub." url="https://londonbirthdayclub.com/plan-birthday-london-club" />

      <section className="relative min-h-[50vh] flex items-center justify-center px-4">
        <Image src={images.hero.planBirthday} alt="Planning a birthday night at a London club" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            How to Plan a Birthday at a{" "}
            <span className="text-gold">London Nightclub</span>
          </h1>
          <p className="text-lg text-white max-w-2xl leading-relaxed [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            Everything you need to know about planning a birthday celebration at
            a London club — from choosing the right venue and understanding
            minimum spends to handling group payments and knowing what to expect
            on the night.
          </p>
        </div>
      </section>

      {/* Timeline / Steps */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">
            Step-by-Step Birthday Planning Timeline
          </h2>

          <div className="space-y-10">
            {/* Step 1 */}
            <div className="border-l-2 border-gold/30 pl-8 relative">
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-gold" />
              <h3 className="text-xl font-semibold mb-2">
                3–4 Weeks Before: Choose Your Venue
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Start by working out what kind of birthday you want. Consider
                your group size, music preferences, and budget. A group of 8
                hip-hop lovers needs a very different club from a dinner party
                of 12 who like house music.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Key questions to answer early: How many people are definitely
                coming? What night of the week? What&apos;s your realistic
                per-person budget? Do you want just a club, or dinner and a
                club?
              </p>
              <p className="text-text-secondary leading-relaxed">
                Our{" "}
                <Link
                  href="/best-birthday-clubs-london"
                  className="text-gold hover:underline"
                >
                  ranked club guide
                </Link>{" "}
                can help you narrow down options, or{" "}
                <Link
                  href="/birthday-by-age"
                  className="text-gold hover:underline"
                >
                  browse by age group
                </Link>{" "}
                for tailored recommendations.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border-l-2 border-gold/30 pl-8 relative">
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-gold" />
              <h3 className="text-xl font-semibold mb-2">
                2–3 Weeks Before: Book and Confirm
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Once you&apos;ve chosen your club, message us on WhatsApp with
                your details. We&apos;ll check availability, confirm the
                minimum spend for your chosen night, and arrange any birthday
                extras you want — cake, sparklers, decorations, DJ shoutouts.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Most clubs require a deposit or card on file (typically
                £200–500, deducted from your spend on the night). We&apos;ll
                walk you through the process and make sure everything is
                confirmed.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border-l-2 border-gold/30 pl-8 relative">
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-gold" />
              <h3 className="text-xl font-semibold mb-2">
                1–2 Weeks Before: Sort Group Logistics
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                This is when the practical stuff matters most. Confirm your
                final headcount, collect money from the group, and share the
                plan with everyone attending. Send out the dress code, arrival
                time, and venue address.
              </p>
              <div className="bg-bg-card border border-border rounded-xl p-5 mb-4">
                <h4 className="text-sm font-semibold text-gold mb-3">
                  Group Payment Tips
                </h4>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex gap-2">
                    <span className="text-gold">&#8226;</span>
                    The birthday person traditionally pays nothing — split the
                    cost among everyone else
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">&#8226;</span>
                    Collect money at least a week before, not on the night
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">&#8226;</span>
                    Use bank transfer or a group payment app — avoid chasing
                    cash
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">&#8226;</span>
                    Factor in a small buffer above the minimum spend for
                    extra drinks
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">&#8226;</span>
                    Be upfront about the cost — people appreciate honesty
                    over surprises
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="border-l-2 border-gold/30 pl-8 relative">
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-gold" />
              <h3 className="text-xl font-semibold mb-2">
                Day Before: Final Checks
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Confirm the guest list with us, remind your group about the
                dress code and arrival time, and sort any last-minute birthday
                extras (cake delivery, decorations). We&apos;ll send you a
                final confirmation with all the details you need — venue
                address, your table host&apos;s name, and what to expect on
                arrival.
              </p>
            </div>

            {/* Step 5 */}
            <div className="border-l-2 border-gold/30 pl-8 relative">
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-gold" />
              <h3 className="text-xl font-semibold mb-2">
                On the Night: What to Expect
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Arrive at the time we&apos;ve agreed — usually between
                10:30pm and 11:30pm for most clubs. Give your name at the door
                and you&apos;ll be taken to your table. Your table host will
                introduce themselves and present your bottles.
              </p>
              <p className="text-text-secondary leading-relaxed">
                From there, it&apos;s your night. Birthday sparklers and
                bottle shows typically happen within the first hour. If
                you&apos;ve arranged a cake or DJ shoutout, your table host
                will coordinate the timing. The best birthday nights are the
                ones where you stop thinking about logistics and just enjoy it
                — which is exactly why we handle all of that for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Minimum Spend */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Understanding Minimum Spend
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Minimum spend is the part of club birthday planning that confuses
            people most. Here&apos;s the simple version: minimum spend is the
            minimum amount your table must spend on drinks. It&apos;s not an
            entry fee, it&apos;s not a deposit on top of drinks — it IS your
            drinks budget.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">
                What&apos;s Included in Minimum Spend
              </h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>&#10003; Your choice of bottles (vodka, champagne, etc.)</li>
                <li>&#10003; Mixers — juices, soft drinks, Red Bull, tonic</li>
                <li>&#10003; Ice and glassware</li>
                <li>&#10003; Your reserved table and seating area</li>
                <li>&#10003; A dedicated table host for the night</li>
              </ul>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">
                What It Doesn&apos;t Cover
              </h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>&#10007; Entry for non-table guests (guestlist separate)</li>
                <li>&#10007; Birthday cake (arranged separately, usually £50–150)</li>
                <li>&#10007; Dinner (at dinner-club venues, food is additional)</li>
                <li>&#10007; Gratuity (10–15% is customary for great service)</li>
              </ul>
            </div>
          </div>

          <div className="bg-bg-card border border-gold/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gold mb-3">
              Per-Person Cost Guide
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { size: "6 people", cost: "~£170" },
                { size: "10 people", cost: "~£100" },
                { size: "15 people", cost: "~£70" },
                { size: "20 people", cost: "~£50" },
              ].map((item) => (
                <div key={item.size}>
                  <div className="text-text-primary font-semibold">
                    {item.cost}
                  </div>
                  <div className="text-text-muted text-sm">{item.size}</div>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-xs mt-4 text-center">
              Based on a £1,000 minimum spend, excluding birthday person.
              Prices vary by venue and night.
            </p>
          </div>
        </div>
      </section>

      {/* Birthday Extras */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Birthday Extras at London Clubs
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            London clubs know that birthdays are their biggest table bookings,
            so most venues offer dedicated birthday touches. Here&apos;s what
            you can typically expect and arrange.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Sparkler Bottle Presentations",
                desc: "Your bottles are delivered to the table with lit sparklers, creating a visual spectacle that stops the room. This is standard at most clubs and included with your table booking.",
              },
              {
                title: "Birthday Cake",
                desc: "Most clubs can arrange a birthday cake for your table. Some work with preferred bakeries, others allow you to bring your own. Prices typically range from £50–150 for club-arranged cakes.",
              },
              {
                title: "DJ Birthday Shoutout",
                desc: "The DJ announces your birthday over the sound system — a moment your group won't forget. Available at most venues and can be coordinated through your table host.",
              },
              {
                title: "Decorated Tables",
                desc: "Balloons, banners, and personalised touches can be arranged at most clubs. Discuss your vision with us in advance and we'll coordinate with the venue.",
              },
              {
                title: "Priority Entry",
                desc: "Birthday groups with a table booking skip the main queue. You'll arrive, give your name, and be taken straight to your table — no waiting in the cold.",
              },
              {
                title: "Complimentary Extras",
                desc: "Some clubs offer complimentary shots, a glass of champagne for the birthday person, or upgraded bottle presentations. Availability varies by venue and night.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-bg-card border border-border rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gold mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Dress Code Guide for Birthday Groups
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Nothing ruins a birthday faster than someone in your group being
            turned away at the door. Share the dress code with your entire
            group in advance — no exceptions.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">
                Mayfair Clubs (Most Venues)
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Smart dress code enforced strictly. For men: smart shoes
                (no trainers), fitted trousers or dark jeans, collared shirt
                or smart knitwear. No sportswear, caps, or casual wear. For
                women: dress to impress — heels, dresses, smart separates.
                The dress code is more flexible for women but still smart.
              </p>
              <p className="text-text-muted text-xs">
                Applies to: Tape, Cirque, TABU, Funky Buddha, Luna, Maddox,
                Scotch, Cuckoo, Dear Darling, The Box, Reign, Selene
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">
                More Relaxed Venues
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Smart-casual is accepted. Clean trainers are fine, but still
                no sportswear, flip-flops, or gym gear. The vibe is less
                formal — comfort and style over strict dress codes. You can
                express yourself more freely while still looking put-together.
              </p>
              <p className="text-text-muted text-xs">
                Applies to: BEAT London
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Ready to Take the Next Step?</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/birthday-table-prices-london" className="block bg-bg-card hover:bg-bg-card-hover border border-border hover:border-gold/30 rounded-xl p-5 transition-all group text-center">
              <div className="font-semibold group-hover:text-gold transition-colors text-sm">Check Prices</div>
              <div className="text-text-muted text-xs mt-1">Per-person cost breakdown</div>
            </Link>
            <Link href="/best-birthday-clubs-london" className="block bg-bg-card hover:bg-bg-card-hover border border-border hover:border-gold/30 rounded-xl p-5 transition-all group text-center">
              <div className="font-semibold group-hover:text-gold transition-colors text-sm">Compare Clubs</div>
              <div className="text-text-muted text-xs mt-1">13 venues ranked</div>
            </Link>
            <Link href="/book-birthday" className="block bg-bg-card hover:bg-bg-card-hover border border-gold/30 rounded-xl p-5 transition-all group text-center">
              <div className="font-semibold text-gold text-sm">Book Now</div>
              <div className="text-text-muted text-xs mt-1">Free WhatsApp booking</div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Birthday Planning FAQ
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
            Ready to Start Planning?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Send us your birthday details on WhatsApp and we&apos;ll handle
            the rest — venue recommendation, booking, extras, and
            confirmations. Takes two minutes, saves you hours.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Start Planning on WhatsApp"
            size="large"
          />
        </div>
      </section>
    </>
  );
}
