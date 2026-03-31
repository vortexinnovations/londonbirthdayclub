// Centralised image assignments for the site.
// All paths use the /gallery/images/ proxy (rewrites to Supabase).
// ONLY verified filenames from the bucket are used below.

export const images = {
  // Hero backgrounds
  hero: {
    homepage: "/gallery/images/TapeSaturdayNYE311222-130.jpg",
    birthdayClubs: "/gallery/images/TapeFriday041024PartyNextDoor-279.jpg",
    tableBooking: "/gallery/images/TapeSaturdayNYE311222-118.jpg",
    bestClubs: "/gallery/images/TapeSaturday191024-102.jpg",
    planBirthday: "/gallery/images/Tape-156.jpg",
    birthdayByAge: "/gallery/images/TapeFriday041024PartyNextDoor-333.jpg",
    birthdayByNight: "/gallery/images/DSC_7154.jpg",
    bookBirthday: "/gallery/images/Tape-3.jpg",
    groupNight: "/gallery/images/DSC_7331.jpg",
    vipTables: "/gallery/images/NL_TAPE_CLEAN_1229_549.jpg",
    eighteenth: "/gallery/images/DSC_7399.jpg",
    twentyFirst: "/gallery/images/TapeFriday041024PartyNextDoor-410.jpg",
    thirtieth: "/gallery/images/NL_TAPE_CLEAN_1229_567.jpg",
    guestlistVsTable: "/gallery/images/DSC_7507.jpg",
    largeGroups: "/gallery/images/DSC_7610.jpg",
    mayfairGuide: "/gallery/images/NL_TAPE_CLEAN_1229_639.jpg",
    tablePrices: "/gallery/images/DSC_7671.jpg",
    blog: "/gallery/images/Tape-6.jpg",
  },

  // Section break / atmosphere images
  sections: {
    bottleService: "/gallery/images/Tape-10.jpg",
    vipArea: "/gallery/images/Tape-15.jpg",
    dancefloor: "/gallery/images/DSC_7715.jpg",
    neonLights: "/gallery/images/DSC_7740.jpg",
    champagne: "/gallery/images/Tape-17.jpg",
    djBooth: "/gallery/images/DSC_7812.jpg",
  },

  // Club-specific images
  clubs: {
    "tape-london": "/gallery/images/Tape-1-.jpg",
    "cirque-le-soir": "/gallery/images/DSC_7857.jpg",
    "reign-london": "/gallery/images/DSC_7860.jpg",
    "tabu-london": "/gallery/images/DSC_7877.jpg",
    "funky-buddha": "/gallery/images/DSC_7884.jpg",
    "cuckoo-club": "/gallery/images/DSC_7900.jpg",
    "scotch-of-st-james": "/gallery/images/DSC_7916.jpg",
    "dear-darling": "/gallery/images/DSC_7931.jpg",
    "maddox-club": "/gallery/images/DSC_7940.jpg",
    "the-box-london": "/gallery/images/DSC_7943.jpg",
    "luna-club-london": "/gallery/images/DSC_7952.jpg",
    "selene-london": "/gallery/images/DSC_7984.jpg",
    "beat-london": "/gallery/images/DSC_7988.jpg",
  },

  // Blog featured images (one per blog post — all unique)
  blog: {
    "how-much-does-birthday-table-cost-london": "/gallery/images/Tape-4-2.jpg",
    "what-to-wear-birthday-london-nightclub": "/gallery/images/Tape-8.jpg",
    "how-to-surprise-birthday-london-club": "/gallery/images/Tape-9.jpg",
    "birthday-bottle-service-london-guide": "/gallery/images/Tape-10-.jpg",
    "best-birthday-ideas-london-nightlife": "/gallery/images/Tape-14.jpg",
    "birthday-group-payment-tips": "/gallery/images/Tape-16.jpg",
    "london-birthday-ideas-for-her": "/gallery/images/Tape-18.jpg",
    "london-birthday-ideas-for-him": "/gallery/images/Tape-19.jpg",
    "best-birthday-songs-request-dj-london-club": "/gallery/images/Tape-20.jpg",
    "birthday-weekend-london-itinerary": "/gallery/images/Tape-36.jpg",
    "tape-london-birthday-exclusive-mayfair": "/gallery/images/Tape-89.jpg",
    "cirque-le-soir-birthday-what-happens": "/gallery/images/DSC_6749.jpg",
    "reign-london-birthday-worth-the-hype": "/gallery/images/DSC_6763.jpg",
    "tabu-london-birthday-underground-mayfair": "/gallery/images/DSC_6776.jpg",
    "funky-buddha-birthday-legendary-london": "/gallery/images/DSC_6795.jpg",
    "cuckoo-club-birthday-two-floors": "/gallery/images/DSC_6808.jpg",
    "scotch-of-st-james-birthday-hendrix": "/gallery/images/DSC_6820.jpg",
    "dear-darling-birthday-elegant-mayfair": "/gallery/images/DSC_6837.jpg",
    "maddox-club-birthday-dinner-dancing": "/gallery/images/DSC_6849.jpg",
    "the-box-london-birthday-daring": "/gallery/images/DSC_6868.jpg",
    "luna-club-london-birthday-newest-mayfair": "/gallery/images/DSC_6882.jpg",
    "selene-london-birthday-refined-celebration": "/gallery/images/DSC_6895.jpg",
    "beat-london-birthday-sound-system": "/gallery/images/DSC_6910.jpg",
    "hen-party-london-clubs-guide": "/gallery/images/DSC_6922.jpg",
    "birthday-dinner-then-club-london": "/gallery/images/DSC_6932.jpg",
    "what-happens-when-you-book-birthday-table": "/gallery/images/DSC_6946.jpg",
    "best-birthday-clubs-by-music-style": "/gallery/images/DSC_6982.jpg",
    "birthday-club-mistakes-to-avoid": "/gallery/images/DSC_6997.jpg",
    "mixed-group-birthday-london": "/gallery/images/DSC_7019.jpg",
    "work-leaving-party-london-club": "/gallery/images/DSC_7034.jpg",
    "last-minute-birthday-london": "/gallery/images/DSC_7047.jpg",
    "birthday-decorations-extras-london-clubs": "/gallery/images/DSC_7058.jpg",
    "couples-birthday-london-intimate": "/gallery/images/Tape-104.jpg",
    "40th-birthday-night-out-london": "/gallery/images/NL_TAPE_CLEAN_1229_545.jpg",
    "birthday-brunch-to-club-london": "/gallery/images/TapeSaturdayNYE311222-114.jpg",
  },
} as const;

export function getClubImage(slug: string): string {
  return (images.clubs as Record<string, string>)[slug] || images.hero.homepage;
}

export function getBlogImage(slug: string): string {
  return (images.blog as Record<string, string>)[slug] || images.hero.blog;
}
