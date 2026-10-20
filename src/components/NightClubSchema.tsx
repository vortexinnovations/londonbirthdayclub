import type { Club } from "@/lib/clubs";
import { getClubImage } from "@/lib/images";

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
    image: `https://londonbirthdayclub.com${getClubImage(club.slug)}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: club.streetAddress,
      addressLocality: "London",
      ...(club.postalCode ? { postalCode: club.postalCode } : {}),
      addressCountry: "GB",
    },
    ...(club.openingHours ? { openingHours: club.openingHours } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
