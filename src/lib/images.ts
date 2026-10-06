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
    birthdayByNight: "/gallery/images/fe4414_e1f2fd914f9242519de6a80616cdf5ce.jpg",
    bookBirthday: "/gallery/images/Tape-3.jpg",
    groupNight: "/gallery/images/fe4414_12418cd5e5264ad0aaff1cb8bdfe39ba.jpg",
    vipTables: "/gallery/images/NL_TAPE_CLEAN_1229_549.jpg",
    eighteenth: "/gallery/images/fe4414_12832d40673b426d9faf3d07656aad64.jpg",
    twentyFirst: "/gallery/images/TapeFriday041024PartyNextDoor-410.jpg",
    thirtieth: "/gallery/images/NL_TAPE_CLEAN_1229_567.jpg",
    guestlistVsTable: "/gallery/images/fe4414_c254e1f4304344cfb8b6af7fff37e11e.jpg",
    largeGroups: "/gallery/images/fe4414_da0cb8898a7e4810883b651ad05b110e.jpg",
    mayfairGuide: "/gallery/images/NL_TAPE_CLEAN_1229_639.jpg",
    tablePrices: "/gallery/images/fe4414_ae4e1af2acbc4ebd9e058cc104b07933.jpg",
    blog: "/gallery/images/Tape-6.jpg",
  },

  // Section break / atmosphere images
  sections: {
    bottleService: "/gallery/images/Tape-10.jpg",
    vipArea: "/gallery/images/Tape-15.jpg",
    dancefloor: "/gallery/images/fe4414_c73240a359b04bea89f5ca5d4dbdd648.jpg",
    neonLights: "/gallery/images/fe4414_a70d49c35c0843e39348d4e4b5f02f62.jpg",
    champagne: "/gallery/images/Tape-17.jpg",
    djBooth: "/gallery/images/fe4414_fa4f218533a449be8b8b4e000f425300.jpg",
  },

  // Club-specific images
  clubs: {
    "tape-london": "/gallery/images/Tape-1-.jpg",
    "cirque-le-soir": "/gallery/images/fe4414_54a8200c73ae49e7a5ee7170777de8bf.jpg",
    "reign-london": "/gallery/images/DSC_6754.jpg",
    "tabu-london": "/gallery/images/fe4414_344fbd63598246e7aa317196b7721a0c.jpg",
    "funky-buddha": "/gallery/images/fe4414_affd1145589143f7a655ebcb34a0a7c8.jpg",
    "cuckoo-club": "/gallery/images/fe4414_cb890a122c024a4ab9ebfd0340633155.jpg",
    "scotch-of-st-james": "/gallery/images/fe4414_016460dc35074665a9f15d051da0d9de.jpg",
    "dear-darling": "/gallery/images/photo-dec-23-2024-2-34-05-am.jpg",
    "maddox-club": "/gallery/images/photo-dec-23-2024-2-47-27-am.jpg",
    "the-box-london": "/gallery/images/photo-dec-23-2024-2-50-36-am.jpg",
    "luna-club-london": "/gallery/images/photo-dec-23-2024-3-08-31-am.jpg",
    "selene-london": "/gallery/images/DesDior-167.jpg",
    "beat-london": "/gallery/images/DesDior-99.jpg",
    "maison-close": "/gallery/images/maison-close-479.jpg",
  },

  // Blog featured images (one per blog post — all unique)
  blog: {
    "dietary-requirements-london-club-birthday": "/gallery/images/maison-close-054.jpg",
    "invited-to-a-birthday-at-a-london-club-guest-guide": "/gallery/images/maison-close-094.jpg",
    "birthday-for-someone-who-doesnt-like-clubs-london": "/gallery/images/maison-close-025.jpg",
    "birthday-weekend-london": "/gallery/images/maison-close-625.jpg",
    "joint-birthday-night-out-london": "/gallery/images/maison-close-288.jpg",
    "organise-birthday-group-whatsapp-london": "/gallery/images/maison-close-278.jpg",
    "budget-birthday-night-out-london": "/gallery/images/maison-close-970.jpg",
    "summer-birthday-night-out-london": "/gallery/images/maison-close-410.jpg",
    "birthday-falls-on-a-weekday-london": "/gallery/images/maison-close-302.jpg",
    "sober-birthday-night-out-london": "/gallery/images/fe4414_a543e3bada6841d880fc0c4ab560c2b5.jpg",
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
    "cirque-le-soir-birthday-what-happens": "/gallery/images/fe4414_e139c9c3f58a470ba008a1ac6ddbd730.jpg",
    "reign-london-birthday-worth-the-hype": "/gallery/images/DSC_6763.jpg",
    "tabu-london-birthday-underground-mayfair": "/gallery/images/fe4414_b4633e7c60fa491e8c26bea776d3e98c.jpg",
    "funky-buddha-birthday-legendary-london": "/gallery/images/fe4414_cd791cc0715e4c7581fcec2e3b9030c3.jpg",
    "cuckoo-club-birthday-two-floors": "/gallery/images/fe4414_491c64bede334c11aad784d7517742a7.jpg",
    "scotch-of-st-james-birthday-hendrix": "/gallery/images/fe4414_8742ffee41884142b564cb9eb73dbd2e.jpg",
    "dear-darling-birthday-elegant-mayfair": "/gallery/images/fe4414_950de24e4f2b429ba47a022f13479db5.jpg",
    "maddox-club-birthday-dinner-dancing": "/gallery/images/fe4414_d06e7bf2872e4c60853096d8aa8afe24.jpg",
    "the-box-london-birthday-daring": "/gallery/images/fe4414_af41f902101148d3866c12c28816d0d0.jpg",
    "luna-club-london-birthday-newest-mayfair": "/gallery/images/fe4414_141a8e5a0dc0400caa5217cf2d206ba5.jpg",
    "selene-london-birthday-refined-celebration": "/gallery/images/fe4414_9584be9cd3af42b28799afa2a52a64ec.jpg",
    "beat-london-birthday-sound-system": "/gallery/images/fe4414_b3ddf2c48c9d49dfbd53bd0710bcf757.jpg",
    "hen-party-london-clubs-guide": "/gallery/images/fe4414_55edd7519192444fb58119bd91d7af1b.jpg",
    "birthday-dinner-then-club-london": "/gallery/images/fe4414_acdf2a4fa9c84dbc97b1bc7d35e637e6.jpg",
    "what-happens-when-you-book-birthday-table": "/gallery/images/Tape-157.jpg",
    "what-happens-when-you-book-birthday-table-london": "/gallery/images/Tape-157.jpg",
    "best-birthday-clubs-by-music-style": "/gallery/images/TapeTuesday011024-183.jpg",
    "best-clubs-by-music-birthday-london": "/gallery/images/TapeTuesday011024-183.jpg",
    "birthday-club-mistakes-to-avoid": "/gallery/images/12-DSC03270.jpg",
    "birthday-nightclub-mistakes-to-avoid": "/gallery/images/12-DSC03270.jpg",
    "mixed-group-birthday-london": "/gallery/images/TapeTuesday170924-248.jpg",
    "mixed-group-birthday-london-clubs": "/gallery/images/TapeTuesday170924-248.jpg",
    "work-leaving-party-london-club": "/gallery/images/31-DSC03353.jpg",
    "work-leaving-party-london-clubs": "/gallery/images/31-DSC03353.jpg",
    "last-minute-birthday-london": "/gallery/images/37-DSC03377.jpg",
    "last-minute-birthday-london-club": "/gallery/images/37-DSC03377.jpg",
    "birthday-decorations-extras-london-clubs": "/gallery/images/68-DSC03508.jpg",
    "couples-birthday-london-intimate": "/gallery/images/Tape-104.jpg",
    "couples-birthday-london-intimate-celebration": "/gallery/images/Tape-104.jpg",
    "40th-birthday-night-out-london": "/gallery/images/NL_TAPE_CLEAN_1229_545.jpg",
    "birthday-brunch-to-club-london": "/gallery/images/TapeSaturdayNYE311222-114.jpg",
    "tipping-etiquette-london-nightclubs-birthday": "/gallery/images/fe4414_c855b43f41f44f79891ae18f1e6a765c.jpg",
    "birthday-activity-combos-london-clubs": "/gallery/images/fe4414_cba78c72313f4958a32bbc1868c02b8e.jpg",
    "birthday-cake-london-clubs-guide": "/gallery/images/fe4414_ccd327574dd4452aabb60f9bc26e3b4e.jpg",
    "birthday-organiser-tips-london-club": "/gallery/images/fe4414_d2079b72ac414f71bdef2fffc70fe4ab.jpg",
    "birthday-party-themes-london-clubs": "/gallery/images/fe4414_dd9694e452204ef99a0b6c2dc693faf9.jpg",
    "pre-drinks-london-club-birthday-guide": "/gallery/images/maison-close-070.jpg",
    "london-club-door-policy-birthday-groups": "/gallery/images/maison-close-086.jpg",
    "friends-cancel-birthday-night-out-london": "/gallery/images/maison-close-1014.jpg",
    "birthday-planning-timeline-london": "/gallery/images/maison-close-106.jpg",
    "december-birthday-london": "/gallery/images/maison-close-300.jpg",
  },
} as const;

export function getClubImage(slug: string): string {
  return (images.clubs as Record<string, string>)[slug] || images.hero.homepage;
}

export function getBlogImage(slug: string): string {
  return (images.blog as Record<string, string>)[slug] || images.hero.blog;
}
