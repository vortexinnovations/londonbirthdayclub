import { safeJsonLd } from "@/lib/safe-output";
import type { Club } from "@/lib/clubs";
import { getClubImage, hasClubPhoto } from "@/lib/images";

/**
 * NightClub structured data for an open venue with a confirmed address.
 * A venue that changed its name carries the old one as alternateName.
 */
export default function NightClubSchema({ club }: { club: Club }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NightClub",
    name: club.name,
    ...(club.previousName ? { alternateName: club.previousName } : {}),
    url: `https://londonbirthdayclub.com/clubs/${club.slug}`,
    // No image for a venue with no photos of its own: never another venue's photo.
    ...(hasClubPhoto(club.slug) ? { image: `https://londonbirthdayclub.com${getClubImage(club.slug)}` } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: club.streetAddress,
      addressLocality: "London",
      ...(club.postalCode ? { postalCode: club.postalCode } : {}),
      addressCountry: "GB",
    },
    ...(club.openingHours ? { openingHours: club.openingHours } : {}),
    // A venue with no published closing time: days and opening time only.
    ...(club.openingSpec
      ? {
          openingHoursSpecification: club.openingSpec.days.map((day) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: day,
            opens: club.openingSpec?.opens,
          })),
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}
