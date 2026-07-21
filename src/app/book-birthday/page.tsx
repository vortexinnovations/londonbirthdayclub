import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { getGeneralWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Book Your Birthday — Free VIP Table Planning via WhatsApp",
  description:
    "Book your birthday celebration at a London nightclub in minutes via WhatsApp. Free planning service, VIP tables, birthday extras — we handle everything.",
  alternates: {
    canonical: "https://londonbirthdayclub.com/book-birthday",
  },
  openGraph: { url: "https://londonbirthdayclub.com/book-birthday" },
};

export default function BookBirthdayPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Book Your Birthday", href: "/book-birthday" }]} />

      {/* Hero */}
      <section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
        <Image src={images.hero.bookBirthday} alt="Book your birthday celebration at a London club" fill className="object-cover kenburns" priority sizes="100vw" />
        <div className="absolute inset-0 [background:var(--grad-hero)]" />
        <div className="grade" />
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
              <span className="block h-px w-10 bg-champagne/60" />
              The Booking
            </p>
            <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
              Book Your{" "}
              <em className="italic text-champagne font-normal">Birthday</em>
            </h1>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl mb-10">
              No forms. No waiting. Just message us on WhatsApp with your
              birthday details and we&apos;ll have your night sorted within
              minutes. Our service is completely free.
            </p>
            <WhatsAppCTA
              message={getGeneralWhatsAppMessage()}
              label="Message Us on WhatsApp"
              size="large"
              variant="detailed"
              microcopy="Free service · Replies in minutes"
            />
          </div>
        </div>
      </section>

      {/* What happens when you message */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Process
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              What Happens When You{" "}
              <em className="italic text-champagne font-normal">Message Us</em>
            </h2>
          </div>

          <div className="space-y-10" data-reveal>
            {[
              {
                step: "1",
                title: "You send us your details",
                description:
                  "Tap the WhatsApp button above — it opens a pre-filled message with spaces for your birthday date, group size, club preference (or ask us to recommend one), budget, and any special requests like cake or decorations.",
              },
              {
                step: "2",
                title: "We come back with options",
                description:
                  "Based on your details, we'll recommend the best club for your birthday (or confirm availability at your chosen venue). We'll tell you the minimum spend, what birthday extras are available, and what to expect on the night.",
              },
              {
                step: "3",
                title: "We confirm everything",
                description:
                  "Once you're happy, we lock in the booking. We'll send you a confirmation with the venue address, arrival time, dress code, and your table host's name. Any birthday extras (cake, sparklers, shoutouts) are arranged.",
              },
              {
                step: "4",
                title: "You turn up and celebrate",
                description:
                  "That's it. Arrive at the agreed time, give your name at the door, and enjoy your birthday. Your table, bottles, and extras are all sorted. If you need anything on the night, we're still on WhatsApp.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 sm:gap-8 border-t border-hairline pt-7"
              >
                <div className="font-display italic font-medium text-5xl sm:text-6xl text-champagne/40 leading-none w-12 sm:w-16 shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-display font-medium text-xl text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-base leading-[1.8] text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Why WhatsApp */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Service
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Why WhatsApp,{" "}
              <em className="italic text-champagne font-normal">Not a Form</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-14 gap-y-12">
            {[
              {
                title: "Instant conversation",
                desc: "No waiting for email replies. You get a real person responding in real-time, answering questions and offering advice as you go.",
              },
              {
                title: "Flexible and personal",
                desc: "Forms force you into boxes. On WhatsApp, you can explain exactly what you want, ask questions, and change your mind — it's a conversation, not a transaction.",
              },
              {
                title: "Support until the end",
                desc: "We're available on WhatsApp right up until your birthday night. Last-minute questions, changes, or requests — we're there.",
              },
              {
                title: "No spam, no newsletters",
                desc: "We'll never add you to a mailing list or send unsolicited messages. The WhatsApp conversation is just about your birthday, nothing else.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="group border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500"
                data-reveal
                data-reveal-delay={(i % 2) * 90}
              >
                <h3 className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300 mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-base leading-[1.8] text-ink-soft">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Links to explore */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Guides
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              Not Ready to Book?{" "}
              <em className="italic text-champagne font-normal">
                Explore First
              </em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2" data-reveal>
            <Link
              href="/birthday-clubs-london"
              className="group block border-t border-hairline hover:border-hairline-strong px-1 pt-5 pb-6 hover:bg-noir-soft/60 transition-colors duration-300"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300">
                  Birthday Clubs London
                </span>
                <span className="text-champagne transition-transform duration-400 group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </div>
              <div className="font-sans text-[0.8125rem] tracking-[0.02em] text-ink-faint mt-1.5">
                Compare all 13 venues
              </div>
            </Link>
            <Link
              href="/birthday-table-booking-london"
              className="group block border-t border-hairline hover:border-hairline-strong px-1 pt-5 pb-6 hover:bg-noir-soft/60 transition-colors duration-300"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300">
                  Table Booking Guide
                </span>
                <span className="text-champagne transition-transform duration-400 group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </div>
              <div className="font-sans text-[0.8125rem] tracking-[0.02em] text-ink-faint mt-1.5">
                Pricing, packages, what&apos;s included
              </div>
            </Link>
            <Link
              href="/best-birthday-clubs-london"
              className="group block border-t border-hairline hover:border-hairline-strong px-1 pt-5 pb-6 hover:bg-noir-soft/60 transition-colors duration-300"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300">
                  Best Birthday Clubs
                </span>
                <span className="text-champagne transition-transform duration-400 group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </div>
              <div className="font-sans text-[0.8125rem] tracking-[0.02em] text-ink-faint mt-1.5">
                Ranked guide with verdicts
              </div>
            </Link>
            <Link
              href="/plan-birthday-london-club"
              className="group block border-t border-hairline hover:border-hairline-strong px-1 pt-5 pb-6 hover:bg-noir-soft/60 transition-colors duration-300"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300">
                  Planning Guide
                </span>
                <span className="text-champagne transition-transform duration-400 group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </div>
              <div className="font-sans text-[0.8125rem] tracking-[0.02em] text-ink-faint mt-1.5">
                Step-by-step walkthrough
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Final CTA */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-noir-deep">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
            The Final Step
          </p>
          <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink mb-5">
            Your Birthday{" "}
            <em className="italic text-champagne font-normal">
              Deserves Better
            </em>{" "}
            Than a Form
          </h2>
          <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft mb-10 max-w-xl mx-auto">
            Two minutes on WhatsApp. That&apos;s all it takes to start
            planning the best birthday night of your life.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Let's Plan Your Birthday"
            size="large"
            microcopy="Free service · Replies in minutes"
          />
        </div>
      </section>
    </>
  );
}
