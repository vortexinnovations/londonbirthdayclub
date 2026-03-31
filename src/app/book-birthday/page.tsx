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
};

export default function BookBirthdayPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Book Your Birthday", href: "/book-birthday" }]} />
      <section className="relative min-h-[50vh] flex items-center justify-center px-4">
        <Image src={images.hero.bookBirthday} alt="Book your birthday celebration at a London club" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Book Your <span className="text-gold">Birthday</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed">
            No forms. No waiting. Just message us on WhatsApp with your
            birthday details and we&apos;ll have your night sorted within
            minutes. Our service is completely free.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Message Us on WhatsApp"
            size="large"
            variant="detailed"
          />
        </div>
      </section>

      {/* What happens when you message */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            What Happens When You Message Us
          </h2>

          <div className="space-y-8">
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
              <div key={item.step} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 text-gold font-bold flex items-center justify-center text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why WhatsApp */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why WhatsApp, Not a Form
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
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

      {/* Links to explore */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">
            Not Ready to Book? Explore First
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/birthday-clubs-london"
              className="block bg-bg-card hover:bg-bg-card-hover border border-border hover:border-gold/30 rounded-xl p-5 transition-all group"
            >
              <div className="font-semibold group-hover:text-gold transition-colors">
                Birthday Clubs London
              </div>
              <div className="text-text-secondary text-sm mt-1">
                Compare all 13 venues
              </div>
            </Link>
            <Link
              href="/birthday-table-booking-london"
              className="block bg-bg-card hover:bg-bg-card-hover border border-border hover:border-gold/30 rounded-xl p-5 transition-all group"
            >
              <div className="font-semibold group-hover:text-gold transition-colors">
                Table Booking Guide
              </div>
              <div className="text-text-secondary text-sm mt-1">
                Pricing, packages, what&apos;s included
              </div>
            </Link>
            <Link
              href="/best-birthday-clubs-london"
              className="block bg-bg-card hover:bg-bg-card-hover border border-border hover:border-gold/30 rounded-xl p-5 transition-all group"
            >
              <div className="font-semibold group-hover:text-gold transition-colors">
                Best Birthday Clubs
              </div>
              <div className="text-text-secondary text-sm mt-1">
                Ranked guide with verdicts
              </div>
            </Link>
            <Link
              href="/plan-birthday-london-club"
              className="block bg-bg-card hover:bg-bg-card-hover border border-border hover:border-gold/30 rounded-xl p-5 transition-all group"
            >
              <div className="font-semibold group-hover:text-gold transition-colors">
                Planning Guide
              </div>
              <div className="text-text-secondary text-sm mt-1">
                Step-by-step walkthrough
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Your Birthday Deserves Better Than a Form
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Two minutes on WhatsApp. That&apos;s all it takes to start
            planning the best birthday night of your life.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Let's Plan Your Birthday"
            size="large"
          />
        </div>
      </section>
    </>
  );
}
