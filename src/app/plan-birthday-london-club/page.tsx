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

      {/* Hero */}
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image src={images.hero.planBirthday} alt="Planning a birthday night at a London club" fill className="object-cover kenburns" priority sizes="100vw" />
        <div className="absolute inset-0 [background:var(--grad-hero)]" />
        <div className="grade" />
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
              <span className="block h-px w-10 bg-champagne/60" />
              The Planning Guide
            </p>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
              How to Plan a Birthday at a{" "}
              <em className="italic text-champagne font-normal">
                London Nightclub
              </em>
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-2xl">
              Everything you need to know about planning a birthday celebration at
              a London club — from choosing the right venue and understanding
              minimum spends to handling group payments and knowing what to expect
              on the night.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline / Steps */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Timeline
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Step-by-Step{" "}
              <em className="italic text-champagne font-normal">
                Birthday Planning
              </em>{" "}
              Timeline
            </h2>
          </div>

          <div className="space-y-14" data-reveal>
            {/* Step 1 */}
            <div className="flex gap-6 sm:gap-10 border-t border-hairline pt-8">
              <div className="font-display italic font-medium text-5xl sm:text-6xl text-champagne/40 leading-none w-14 sm:w-20 shrink-0 select-none">
                01
              </div>
              <div className="flex-1">
                <h3 className="font-display font-medium text-xl text-ink mb-4">
                  3–4 Weeks Before: Choose Your Venue
                </h3>
                <p className="font-sans text-base leading-[1.8] text-ink-soft mb-4">
                  Start by working out what kind of birthday you want. Consider
                  your group size, music preferences, and budget. A group of 8
                  hip-hop lovers needs a very different club from a dinner party
                  of 12 who like house music.
                </p>
                <p className="font-sans text-base leading-[1.8] text-ink-soft mb-4">
                  Key questions to answer early: How many people are definitely
                  coming? What night of the week? What&apos;s your realistic
                  per-person budget? Do you want just a club, or dinner and a
                  club?
                </p>
                <p className="font-sans text-base leading-[1.8] text-ink-soft">
                  Our{" "}
                  <Link
                    href="/best-birthday-clubs-london"
                    className="text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200"
                  >
                    ranked club guide
                  </Link>{" "}
                  can help you narrow down options, or{" "}
                  <Link
                    href="/birthday-by-age"
                    className="text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200"
                  >
                    browse by age group
                  </Link>{" "}
                  for tailored recommendations.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 sm:gap-10 border-t border-hairline pt-8">
              <div className="font-display italic font-medium text-5xl sm:text-6xl text-champagne/40 leading-none w-14 sm:w-20 shrink-0 select-none">
                02
              </div>
              <div className="flex-1">
                <h3 className="font-display font-medium text-xl text-ink mb-4">
                  2–3 Weeks Before: Book and Confirm
                </h3>
                <p className="font-sans text-base leading-[1.8] text-ink-soft mb-4">
                  Once you&apos;ve chosen your club, message us on WhatsApp with
                  your details. We&apos;ll check availability, confirm the
                  minimum spend for your chosen night, and arrange any birthday
                  extras you want — cake, sparklers, decorations, DJ shoutouts.
                </p>
                <p className="font-sans text-base leading-[1.8] text-ink-soft">
                  Most clubs require a deposit or card on file (typically
                  £200–500, deducted from your spend on the night). We&apos;ll
                  walk you through the process and make sure everything is
                  confirmed.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 sm:gap-10 border-t border-hairline pt-8">
              <div className="font-display italic font-medium text-5xl sm:text-6xl text-champagne/40 leading-none w-14 sm:w-20 shrink-0 select-none">
                03
              </div>
              <div className="flex-1">
                <h3 className="font-display font-medium text-xl text-ink mb-4">
                  1–2 Weeks Before: Sort Group Logistics
                </h3>
                <p className="font-sans text-base leading-[1.8] text-ink-soft mb-6">
                  This is when the practical stuff matters most. Confirm your
                  final headcount, collect money from the group, and share the
                  plan with everyone attending. Send out the dress code, arrival
                  time, and venue address.
                </p>
                <div className="border-l border-hairline pl-6 py-1">
                  <h4 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-champagne mb-4">
                    Group Payment Tips
                  </h4>
                  <ul className="space-y-3 font-sans text-[0.9375rem] leading-[1.8] text-ink-soft">
                    <li className="flex gap-3">
                      <span className="font-display italic text-champagne/70 select-none">✦</span>
                      The birthday person traditionally pays nothing — split the
                      cost among everyone else
                    </li>
                    <li className="flex gap-3">
                      <span className="font-display italic text-champagne/70 select-none">✦</span>
                      Collect money at least a week before, not on the night
                    </li>
                    <li className="flex gap-3">
                      <span className="font-display italic text-champagne/70 select-none">✦</span>
                      Use bank transfer or a group payment app — avoid chasing
                      cash
                    </li>
                    <li className="flex gap-3">
                      <span className="font-display italic text-champagne/70 select-none">✦</span>
                      Factor in a small buffer above the minimum spend for
                      extra drinks
                    </li>
                    <li className="flex gap-3">
                      <span className="font-display italic text-champagne/70 select-none">✦</span>
                      Be upfront about the cost — people appreciate honesty
                      over surprises
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 sm:gap-10 border-t border-hairline pt-8">
              <div className="font-display italic font-medium text-5xl sm:text-6xl text-champagne/40 leading-none w-14 sm:w-20 shrink-0 select-none">
                04
              </div>
              <div className="flex-1">
                <h3 className="font-display font-medium text-xl text-ink mb-4">
                  Day Before: Final Checks
                </h3>
                <p className="font-sans text-base leading-[1.8] text-ink-soft">
                  Confirm the guest list with us, remind your group about the
                  dress code and arrival time, and sort any last-minute birthday
                  extras (cake delivery, decorations). We&apos;ll send you a
                  final confirmation with all the details you need — venue
                  address, your table host&apos;s name, and what to expect on
                  arrival.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 sm:gap-10 border-t border-hairline pt-8">
              <div className="font-display italic font-medium text-5xl sm:text-6xl text-champagne/40 leading-none w-14 sm:w-20 shrink-0 select-none">
                05
              </div>
              <div className="flex-1">
                <h3 className="font-display font-medium text-xl text-ink mb-4">
                  On the Night: What to Expect
                </h3>
                <p className="font-sans text-base leading-[1.8] text-ink-soft mb-4">
                  Arrive at the time we&apos;ve agreed — usually between
                  10:30pm and 11:30pm for most clubs. Give your name at the door
                  and you&apos;ll be taken to your table. Your table host will
                  introduce themselves and present your bottles.
                </p>
                <p className="font-sans text-base leading-[1.8] text-ink-soft">
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
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Understanding Minimum Spend */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Budget
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Understanding{" "}
              <em className="italic text-champagne font-normal">
                Minimum Spend
              </em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-2xl">
              Minimum spend is the part of club birthday planning that confuses
              people most. Here&apos;s the simple version: minimum spend is the
              minimum amount your table must spend on drinks. It&apos;s not an
              entry fee, it&apos;s not a deposit on top of drinks — it IS your
              drinks budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-14 gap-y-12 mb-16" data-reveal>
            <div className="border-t border-hairline pt-6">
              <h3 className="font-display font-medium text-xl text-ink mb-5">
                What&apos;s Included in Minimum Spend
              </h3>
              <ul className="space-y-3 font-sans text-[0.9375rem] leading-[1.8] text-ink-soft">
                <li className="flex gap-3">
                  <span className="text-champagne/70 select-none">&#10003;</span>
                  <span>Your choice of bottles (vodka, champagne, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-champagne/70 select-none">&#10003;</span>
                  <span>Mixers — juices, soft drinks, Red Bull, tonic</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-champagne/70 select-none">&#10003;</span>
                  <span>Ice and glassware</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-champagne/70 select-none">&#10003;</span>
                  <span>Your reserved table and seating area</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-champagne/70 select-none">&#10003;</span>
                  <span>A dedicated table host for the night</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-hairline pt-6">
              <h3 className="font-display font-medium text-xl text-ink mb-5">
                What It Doesn&apos;t Cover
              </h3>
              <ul className="space-y-3 font-sans text-[0.9375rem] leading-[1.8] text-ink-soft">
                <li className="flex gap-3">
                  <span className="text-ink-faint select-none">&#10007;</span>
                  <span>Entry for non-table guests (guestlist separate)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ink-faint select-none">&#10007;</span>
                  <span>Birthday cake (arranged separately, usually £50–150)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ink-faint select-none">&#10007;</span>
                  <span>Dinner (at dinner-club venues, food is additional)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ink-faint select-none">&#10007;</span>
                  <span>Gratuity (10–15% is customary for great service)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-hairline pt-10" data-reveal>
            <h3 className="font-display font-medium text-xl text-ink mb-10">
              Per-Person Cost Guide
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
              {[
                { size: "6 people", cost: "~£170" },
                { size: "10 people", cost: "~£100" },
                { size: "15 people", cost: "~£70" },
                { size: "20 people", cost: "~£50" },
              ].map((item) => (
                <div key={item.size} className="border-l border-hairline pl-5 py-1">
                  <div className="font-display italic font-medium text-3xl sm:text-4xl text-champagne leading-none">
                    {item.cost}
                  </div>
                  <div className="mt-3 font-sans text-[0.6875rem] uppercase tracking-[0.24em] text-ink-faint">
                    {item.size}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 font-sans text-[0.8125rem] leading-relaxed tracking-[0.02em] text-ink-faint">
              Based on a £1,000 minimum spend, excluding birthday person.
              Prices vary by venue and night.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Birthday Extras */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Extras
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Birthday{" "}
              <em className="italic text-champagne font-normal">Extras</em> at
              London Clubs
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-2xl">
              London clubs know that birthdays are their biggest table bookings,
              so most venues offer dedicated birthday touches. Here&apos;s what
              you can typically expect and arrange.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-14 gap-y-12" data-reveal>
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
                className="border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500"
              >
                <h3 className="font-display font-medium text-xl text-ink mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-[0.9375rem] leading-[1.8] text-ink-soft">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Dress Code */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Dress Code
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Dress Code Guide for{" "}
              <em className="italic text-champagne font-normal">
                Birthday Groups
              </em>
            </h2>
            <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-2xl">
              Nothing ruins a birthday faster than someone in your group being
              turned away at the door. Share the dress code with your entire
              group in advance — no exceptions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-14 gap-y-12" data-reveal>
            <div className="border-t border-hairline pt-6">
              <h3 className="font-display font-medium text-xl text-ink mb-4">
                Mayfair Clubs (Most Venues)
              </h3>
              <p className="font-sans text-[0.9375rem] leading-[1.8] text-ink-soft mb-5">
                Smart dress code enforced strictly. For men: smart shoes
                (no trainers), fitted trousers or dark jeans, collared shirt
                or smart knitwear. No sportswear, caps, or casual wear. For
                women: dress to impress — heels, dresses, smart separates.
                The dress code is more flexible for women but still smart.
              </p>
              <p className="font-sans text-[0.8125rem] leading-relaxed tracking-[0.02em] text-ink-faint">
                Applies to: Tape, Cirque, TABU, Funky Buddha, Luna, Maddox,
                Scotch, Cuckoo, Dear Darling, The Box, Reign, Selene
              </p>
            </div>
            <div className="border-t border-hairline pt-6">
              <h3 className="font-display font-medium text-xl text-ink mb-4">
                More Relaxed Venues
              </h3>
              <p className="font-sans text-[0.9375rem] leading-[1.8] text-ink-soft mb-5">
                Smart-casual is accepted. Clean trainers are fine, but still
                no sportswear, flip-flops, or gym gear. The vibe is less
                formal — comfort and style over strict dress codes. You can
                express yourself more freely while still looking put-together.
              </p>
              <p className="font-sans text-[0.8125rem] leading-relaxed tracking-[0.02em] text-ink-faint">
                Applies to: BEAT London
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Next Steps */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Quick Links
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Ready to Take the{" "}
              <em className="italic text-champagne font-normal">Next Step?</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-2" data-reveal>
            <Link
              href="/birthday-table-prices-london"
              className="group block border-t border-hairline hover:border-hairline-strong px-1 pt-5 pb-6 hover:bg-noir-soft/60 transition-colors duration-300"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300">
                  Check Prices
                </span>
                <span className="text-champagne transition-transform duration-400 group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </div>
              <div className="font-sans text-[0.8125rem] tracking-[0.02em] text-ink-faint mt-1.5">
                Per-person cost breakdown
              </div>
            </Link>
            <Link
              href="/best-birthday-clubs-london"
              className="group block border-t border-hairline hover:border-hairline-strong px-1 pt-5 pb-6 hover:bg-noir-soft/60 transition-colors duration-300"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300">
                  Compare Clubs
                </span>
                <span className="text-champagne transition-transform duration-400 group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </div>
              <div className="font-sans text-[0.8125rem] tracking-[0.02em] text-ink-faint mt-1.5">
                13 venues ranked
              </div>
            </Link>
            <Link
              href="/book-birthday"
              className="group block border-t border-hairline-strong hover:border-champagne px-1 pt-5 pb-6 hover:bg-noir-soft/60 transition-colors duration-300"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display font-medium text-xl text-champagne group-hover:text-champagne-bright transition-colors duration-300">
                  Book Now
                </span>
                <span className="text-champagne transition-transform duration-400 group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </div>
              <div className="font-sans text-[0.8125rem] tracking-[0.02em] text-ink-faint mt-1.5">
                Free WhatsApp booking
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* FAQ */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Good to Know
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink">
              Birthday{" "}
              <em className="italic text-champagne font-normal">Planning</em>{" "}
              FAQ
            </h2>
          </div>

          <div className="divide-y divide-hairline border-y border-hairline" data-reveal>
            {faqs.map((faq) => (
              <div key={faq.question} className="py-7">
                <h3 className="font-display font-medium text-lg sm:text-xl text-ink flex gap-5">
                  <span className="font-display italic text-champagne/70 select-none">
                    Q.
                  </span>
                  {faq.question}
                </h3>
                <p className="mt-3 pl-[2.15rem] font-sans text-base leading-[1.8] text-ink-soft">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* CTA */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-noir-deep">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
            Get Started
          </p>
          <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink mb-5">
            Ready to Start{" "}
            <em className="italic text-champagne font-normal">Planning?</em>
          </h2>
          <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft mb-10 max-w-xl mx-auto">
            Send us your birthday details on WhatsApp and we&apos;ll handle
            the rest — venue recommendation, booking, extras, and
            confirmations. Takes two minutes, saves you hours.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Start Planning on WhatsApp"
            size="large"
            microcopy="Free service · Replies in minutes"
          />
        </div>
      </section>
    </>
  );
}
