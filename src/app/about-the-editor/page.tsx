import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://londonbirthdayclub.com";

export const metadata: Metadata = {
  title: "About the Editor — Charlotte Hayes | London Birthday Club",
  description:
    "Meet Charlotte Hayes, Events Specialist. She plans group nightlife celebrations across London and covers what each venue can actually deliver for a private celebration.",
  alternates: { canonical: `${SITE_URL}/about-the-editor` },
  openGraph: {
    title: "About the Editor — Charlotte Hayes | London Birthday Club",
    description:
      "Charlotte Hayes plans group nightlife celebrations across London: birthdays, hen parties, and milestone events.",
    url: `${SITE_URL}/about-the-editor`,
    type: "profile",
  },
};

export default function AboutTheEditorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              "@id": `${SITE_URL}/about-the-editor/#author-charlotte`,
              name: "Charlotte Hayes",
              jobTitle: "Events Specialist",
              url: `${SITE_URL}/about-the-editor/`,
              description:
                "Charlotte plans group nightlife celebrations across London - birthdays, hen parties, milestone events. She covers what each venue can actually deliver for a private celebration.",
              worksFor: {
                "@type": "Organization",
                name: "London Birthday Club",
                url: SITE_URL,
              },
              knowsAbout: [
                "Birthday party planning in London",
                "Group nightlife bookings",
                "Milestone celebrations",
                "Private hire and celebration packages",
              ],
            },
          }),
        }}
      />

      <article className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs bg-gold/10 text-gold px-2 py-1 rounded inline-block mb-4">
            About the Editor
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Charlotte Hayes</h1>
          <p className="text-text-muted text-lg mb-10">Events Specialist, London Birthday Club</p>

          <div className="space-y-5 text-text-muted leading-relaxed mb-12">
            <p>
              Charlotte plans group nightlife celebrations across London: birthdays, hen parties,
              and milestone events. Her guides cover what each venue can actually deliver for a
              private celebration, from the cake and the decorations to the timings that make a
              group night hold together.
            </p>
            <p>
              Coordinating more than a hundred celebrations a year means the advice here comes
              from organising real groups, not theory: how to get friends to commit, what happens
              when plans change, and which formats suit which occasions. Every guide carries a
              visible last-updated date.
            </p>
          </div>

          <h2 className="text-2xl font-bold tracking-tight mb-5">What Charlotte Covers</h2>
          <ul className="space-y-3 text-text-muted leading-relaxed list-disc list-inside mb-12">
            <li>Birthday and celebration planning, end to end</li>
            <li>Group bookings and private hire know-how</li>
            <li>Milestone events: 18ths to 40ths and beyond</li>
            <li>100+ celebrations coordinated annually</li>
          </ul>

          <h2 className="text-2xl font-bold tracking-tight mb-5">Recent Guides by Charlotte</h2>
          <ul className="space-y-3 mb-8">
            <li>
              <Link href="/blog/birthday-falls-on-a-weekday-london" className="text-gold hover:underline">
                When Your Birthday Falls on a Weekday: How to Celebrate in London
              </Link>
            </li>
            <li>
              <Link href="/blog/sober-birthday-night-out-london" className="text-gold hover:underline">
                How to Plan a Sober Birthday Night Out in London
              </Link>
            </li>
          </ul>
          <p className="text-text-muted leading-relaxed">
            Browse all of Charlotte&apos;s guides on the{" "}
            <Link href="/blog" className="text-gold hover:underline">blog</Link>, or see{" "}
            <Link href="/birthday-clubs-london" className="text-gold hover:underline">
              birthday clubs in London
            </Link>{" "}
            to start planning.
          </p>
        </div>
      </article>
    </>
  );
}
