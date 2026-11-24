import { WHATSAPP_TEL } from "@/lib/clubs";

export const SITE_URL = "https://londonbirthdayclub.com";

/**
 * The site itself: a booking service, not a place people visit, so an
 * Organization (never LocalBusiness) and no address. Used site-wide by the
 * root layout and as the `about` of the About page.
 */
export function siteOrganization() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "London Birthday Club",
    description:
      "Birthday party planning service for London's most exclusive nightclubs. Free VIP table booking and birthday packages at Mayfair's finest venues.",
    url: SITE_URL,
    telephone: WHATSAPP_TEL,
    image: `${SITE_URL}/gallery/images/TapeSaturdayNYE311222-130.jpg`,
    areaServed: {
      "@type": "City",
      name: "London",
    },
    knowsAbout: [
      "Birthday party planning",
      "VIP nightclub table booking",
      "London nightlife",
      "Mayfair nightclubs",
      "Birthday bottle service",
      "Hen party nightlife",
      "Milestone birthday celebrations",
      "Group nightclub bookings",
    ],
  };
}
