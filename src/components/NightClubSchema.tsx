import { safeJsonLd } from "@/lib/safe-output";
import type { Club } from "@/lib/clubs";
import { getClubImage, hasClubPhoto } from "@/lib/images";

/**
 * Structured data for an open venue's page that has a confirmed address. The
 * page is about the club but is not the club's own website, so the club is
 * the `about` of a WebPage for our URL and never takes that URL itself.
 * A venue that changed its name carries the old one as alternateName.
 */
export default function NightClubSchema({ club }: { club: Club }) {
  const pageUrl = `https://londonbirthdayclub.com/clubs/${club.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    about: {
      "@type": "NightClub",
      name: club.name,
      ...(club.previousName ? { alternateName: club.previousName } : {}),
      // No image for a venue with no photos of its own: never another venue's photo.
      ...(hasClubPhoto(club.slug) ? { image: `https://londonbirthdayclub.com${getClubImage(club.slug)}` } : {}),
      address: {
        "@type": "PostalAddress",
        streetAddress: club.streetAddress,
        addressLocality: "London",
        ...(club.postalCode ? { postalCode: club.postalCode } : {}),
        addressCountry: "GB",
      },
      // Hours only with a published closing time: a venue with openingSpec
      // (no closing time, which we never invent) gets none.
      ...(club.openingHours ? { openingHours: club.openingHours } : {}),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}
