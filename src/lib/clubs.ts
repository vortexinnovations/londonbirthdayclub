export interface Club {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  location: string;
  area: string;
  minSpend: string;
  musicPolicy: string;
  dressCode: string;
  openingNights: string;
  capacity: string;
  birthdayRating: number;
  bestFor: string;
  description: string;
  birthdayHighlights: string[];
  whatToExpect: string;
  birthdayExtras: string;
  atmosphere: string;
  groupSizeAdvice: string;
  proTip: string;
  status: "open" | "closed";
  /** Renamed venues only (still open and bookable; name holds "New (formerly Old)"): the old name people still search for. */
  formerName?: string;
  /** Closed venues: the statement shown at the top of the venue page. */
  closedNote?: string;
  alternatives?: string[];
}

// Set NEXT_PUBLIC_WHATSAPP_NUMBER in Vercel (international format, no + or spaces).
// Falls back to the current number so the site keeps working if the var is unset.
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "447880662708";

/** E.164 form for schema.org / tel: links. */
export const WHATSAPP_TEL = `+${WHATSAPP_NUMBER}`;

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsAppMessage(): string {
  return `Hi, I found you on londonbirthdayclub.com and I'd like to plan a birthday night out. Here are my details:\n\nBirthday person's name:\nDate:\nClub preference (or need advice):\nGroup size:\nBudget:\nAny requests (cake, decorations, surprises):`;
}

export function getClubWhatsAppMessage(clubName: string): string {
  return `Hi, I'd like to book a birthday table at ${clubName}. Here are my details:\n\nBirthday person's name:\nDate:\nGroup size:\nBudget:\nAny requests (cake, decorations, surprises):`;
}

export function getGroupWhatsAppMessage(): string {
  return `Hi, I'm planning a group night out in London. Here are my details:\n\nWhat we're celebrating:\nGroup size:\nDate:\nMusic preference:\nBudget:\nAny specific club in mind?:`;
}

export function getMilestoneWhatsAppMessage(age: string): string {
  return `Hi, I'm planning a ${age} birthday celebration. Here are my details:\n\nBirthday person's name:\nDate:\nGroup size:\nBudget:\nPreferred vibe (big party / intimate / dinner & club):\nAny requests (cake, decorations, surprises):`;
}

export function getPricingWhatsAppMessage(): string {
  return `Hi, I'd like a price quote for a birthday table. Here are my details:\n\nDate:\nGroup size:\nBudget per person (or total):\nPreferred area (Mayfair / Soho / anywhere):\nMusic preference:`;
}

export function getVIPWhatsAppMessage(): string {
  return `Hi, I'm interested in a VIP birthday table. Here are my details:\n\nBirthday person's name:\nDate:\nGroup size:\nBudget:\nPreferred club (or need a recommendation):\nAny premium requests (champagne, premium position, extra decorations):`;
}

export const clubs: Club[] = [
  // ==================== OPEN VENUES ====================
  {
    slug: "tape-london",
    name: "Tape London",
    shortName: "Tape",
    tagline: "The A-List Birthday Experience",
    location: "Hanover Square, Mayfair",
    area: "Mayfair",
    minSpend: "£1,500",
    musicPolicy: "Hip-Hop, RnB, Commercial",
    dressCode: "Smart and stylish. No sportswear, trainers, or casual denim. Think upscale Mayfair — dress to impress.",
    openingNights: "Tuesday, Friday, Saturday, Sunday",
    capacity: "Intimate (approx. 200)",
    birthdayRating: 5,
    bestFor: "Celebrity-style birthdays and exclusive private celebrations",
    status: "open",
    description:
      "Tape London is Mayfair's most exclusive members' club, tucked away on Hanover Square. This is where London's elite celebrate — A-list celebrities, musicians, and footballers are regulars. The intimate setting means your birthday group won't be lost in a massive crowd. Instead, you're part of an exclusive room where everyone feels like a VIP. The interiors are dark, sleek, and sophisticated with world-class sound — think recording studio meets luxury lounge.",
    birthdayHighlights: [
      "Intimate, exclusive setting where your group stands out",
      "Celebrity-calibre service and atmosphere",
      "World-class sound system for music lovers",
      "Dedicated table hosts who go above and beyond",
      "Sparkler-led bottle presentations that light up the room",
    ],
    whatToExpect:
      "Arriving at Tape feels different from any other club. There's no flashy signage — just a discreet entrance that sets the tone for the night. Once inside, the intimate layout means your birthday table is always close to the action. The DJ plays directly to the room, the sound quality is exceptional, and the bottle presentations with sparklers create genuine birthday moments. Expect the staff to treat your group like personal guests, not just another booking.",
    birthdayExtras:
      "Birthday celebrations at Tape include sparkler-adorned bottle deliveries, the option to arrange a birthday cake, and personalised attention from your table host. The intimate size means a DJ shoutout actually resonates — the whole room hears it. Decorated table arrangements can be organised in advance.",
    atmosphere:
      "Exclusive, intimate, and effortlessly cool. Tape attracts a well-dressed, well-connected crowd. The energy is sophisticated but never pretentious — people come here to genuinely enjoy music and company. On a birthday night, the intimate setting means your celebration becomes part of the club's energy.",
    groupSizeAdvice:
      "Tape works best for birthday groups of 5–15. The intimate setting means smaller groups feel perfectly at home, and the exclusive atmosphere means your celebration gets genuine attention. Larger groups (15+) can be accommodated but may need multiple tables.",
    proTip:
      "Book early — Tape has limited capacity and weekends fill up fast. Tuesday nights are slightly easier to secure and often have an incredible atmosphere with a more industry-connected crowd.",
  },
  {
    slug: "cirque-le-soir",
    name: "Cirque Le Soir",
    shortName: "Cirque",
    tagline: "The Most Unforgettable Birthday in London",
    location: "Ganton Street, Soho",
    area: "Soho",
    minSpend: "£1,000",
    musicPolicy: "Hip-Hop, RnB, Party Anthems",
    dressCode: "Smart casual. Avoid sportswear and plain trainers. The vibe is fun and expressive — dress up and enjoy it.",
    openingNights: "Monday, Wednesday, Friday, Saturday",
    capacity: "Medium (approx. 350)",
    birthdayRating: 5,
    bestFor: "Show-stopping birthdays with entertainment and spectacle",
    status: "open",
    description:
      "Cirque Le Soir is unlike any other club in London — or the world. This circus-themed nightclub has been a celebrity magnet since it opened, attracting everyone from Drake to Rihanna. The club features live performers throughout the night: fire breathers, contortionists, stilt walkers, and aerial artists weave through the crowd, creating an atmosphere that's part nightclub, part immersive theatre. For birthdays, this translates into an experience your guests will genuinely never forget.",
    birthdayHighlights: [
      "Live circus performers interact with birthday groups",
      "Dramatic bottle presentations with pyrotechnics and performers",
      "Immersive, theatrical atmosphere unlike any other venue",
      "Celebrity hotspot — the place to see and be seen",
      "Birthday cake and sparkler packages available",
    ],
    whatToExpect:
      "Walking into Cirque Le Soir is a sensory overload in the best possible way. Performers greet you at the entrance, the décor is dark and theatrical, and the music hits hard. Throughout the night, performers will come to your table — expect fire shows, acrobatic displays, and moments that make your birthday group scream. Bottle deliveries are a production in themselves, with LED displays, sparklers, and sometimes a performer leading the procession. The energy never drops.",
    birthdayExtras:
      "Cirque goes further than most clubs for birthdays. Expect dramatic sparkler and pyrotechnic bottle presentations, the option to have performers interact directly with the birthday person, cake arrangements, personalised LED signs, and DJ shoutouts. The performers make the birthday person feel like the star of the show — because at Cirque, you literally are.",
    atmosphere:
      "Electric, theatrical, and unapologetically over-the-top. Cirque attracts a fun-loving, adventurous crowd who want more than just a night out — they want an experience. The mix of live entertainment and club music creates an energy that builds throughout the night. By midnight, the whole room is part of the show.",
    groupSizeAdvice:
      "Cirque works brilliantly for groups of 8–25. This is the kind of place where a bigger group amplifies the fun — more people means more reactions to the performers, more energy at the table, and more moments to remember. Groups of 20+ can book multiple tables in the same area.",
    proTip:
      "Friday nights tend to have the most performers and the biggest production. If you want the full Cirque experience for your birthday, Friday is the night. Wednesday is great for a more relaxed but still spectacular celebration.",
  },
  {
    slug: "reign-london",
    name: "Reign London",
    shortName: "Reign",
    tagline: "The Grand Birthday Spectacle",
    location: "Piccadilly, Central London",
    area: "Piccadilly",
    minSpend: "£1,000",
    musicPolicy: "Commercial, Hip-Hop, RnB, House",
    dressCode: "Smart glamorous. This is a showclub — dress for the occasion. No sportswear or casual wear.",
    openingNights: "Tuesday, Thursday, Friday, Saturday",
    capacity: "Large (approx. 500)",
    birthdayRating: 4,
    bestFor: "Big group birthdays who want a jaw-dropping venue",
    status: "open",
    description:
      "Reign London is Piccadilly's most extravagant showclub, combining world-class nightlife with theatrical performances that rival West End productions. The venue is spread across multiple levels with a grand central stage where aerial artists, dancers, and performers deliver jaw-dropping shows throughout the night. For birthdays, the sheer scale and spectacle of Reign creates a celebration that feels truly monumental.",
    birthdayHighlights: [
      "Aerial performances and acrobatic shows from the central stage",
      "Grand, multi-level venue with impressive architecture",
      "Large capacity perfect for big birthday groups",
      "Spectacular bottle presentations with full production",
      "Multiple seating areas with different vibes",
    ],
    whatToExpect:
      "Reign makes an impression from the moment you walk in. The venue is grand — high ceilings, dramatic lighting, and a central performance area that draws every eye in the room. Throughout the night, scheduled performances feature aerial silk artists, choreographed dance routines, and theatrical acts that pause the dancefloor. Your birthday table gives you a front-row seat to the action while enjoying premium bottle service.",
    birthdayExtras:
      "Birthday packages at Reign include sparkler-led bottle parades, the option to arrange cake delivery, decorated table setups, and DJ shoutouts. The venue's theatrical nature means birthday celebrations fit naturally into the night's energy — your bottle presentation becomes part of the show.",
    atmosphere:
      "Grand, theatrical, and high-energy. The crowd at Reign comes dressed to impress and ready for a big night. The combination of club music and live performances creates waves of energy — moments of spectacle followed by peak dancefloor moments. It's a club that rewards groups who come ready to celebrate.",
    groupSizeAdvice:
      "Reign excels with birthday groups of 10–30+. The large venue means big groups don't feel cramped, and multiple table configurations allow you to keep your entire birthday party together. This is one of the best choices for larger celebrations where you want everyone in one venue.",
    proTip:
      "Saturday nights have the fullest performance schedule. Arrive by 11pm to catch the earlier shows from your table before the club hits peak energy around midnight.",
  },
  {
    slug: "tabu-london",
    name: "Rumour (formerly TABU)",
    shortName: "Rumour",
    formerName: "TABU London",
    tagline: "TABU Is Now Rumour",
    location: "1 Dover Street, Mayfair",
    area: "Mayfair",
    minSpend: "On request",
    musicPolicy: "To be confirmed",
    dressCode: "Not confirmed for Rumour yet: ask us when you book.",
    openingNights: "Wednesday, Thursday, Friday, Saturday",
    capacity: "To be confirmed",
    birthdayRating: 0,
    bestFor: "Birthday tables on Dover Street, Wednesday to Saturday",
    status: "open",
    description:
      "TABU is now Rumour. The Mayfair club at 1 Dover Street trades under its new name and opens Wednesday to Saturday from 11pm. People still search for TABU when planning a birthday, so this page covers the change and how to book a birthday table at Rumour, free via WhatsApp.",
    birthdayHighlights: [
      "TABU is now Rumour, at 1 Dover Street in Mayfair",
      "Open Wednesday to Saturday from 11pm",
      "A short walk from Green Park station",
      "Birthday tables booked free through us on WhatsApp",
    ],
    whatToExpect:
      "Rumour is the new name for the club at 1 Dover Street, the room that was TABU. Doors open from 11pm, Wednesday to Saturday. Music, dress code and table minimums are the new venue's own, and none of TABU's old terms carry over, so message us with your date and group size for current birthday table options. History: under the TABU name, the room was a Japanese-underground-themed Mayfair club.",
    birthdayExtras:
      "Ask us on WhatsApp which birthday extras Rumour can arrange for your table, such as sparklers, cake or decorations, and we will confirm what is available on your night.",
    atmosphere: "Not confirmed for Rumour yet.",
    groupSizeAdvice: "Not confirmed for Rumour yet: tell us your group size and we will check table options.",
    proTip:
      "TABU is now Rumour, so look for it under the new name. Doors open from 11pm, Wednesday to Saturday.",
  },
  {
    slug: "funky-buddha",
    name: "Funky Buddha",
    shortName: "Funky Buddha",
    tagline: "Permanently Closed",
    location: "Berkeley Street, Mayfair",
    area: "Mayfair",
    minSpend: "Closed",
    musicPolicy: "Hip-Hop, RnB, Dancehall, Afrobeats",
    dressCode: "Smart stylish.",
    openingNights: "Permanently Closed",
    capacity: "Intimate (approx. 200)",
    birthdayRating: 5,
    bestFor: "This venue has permanently closed",
    status: "closed",
    closedNote:
      "Funky Buddha has closed, and Itzel now operates at its Berkeley Street address. Funky Buddha no longer takes birthday tables or guestlist names. For the same hip-hop and RnB party energy, Tape London, Cirque Le Soir and Reign London are the closest open alternatives.",
    alternatives: ["tape-london", "cirque-le-soir", "reign-london"],
    description:
      "Funky Buddha was one of the best-known clubs in Mayfair, on Berkeley Street, with an intimate room, a hip-hop, RnB, dancehall and Afrobeats music policy and a long celebrity following. Funky Buddha has now closed, and Itzel now operates at its Berkeley Street address.",
    birthdayHighlights: [],
    whatToExpect:
      "Funky Buddha has closed, and Itzel now operates at its Berkeley Street address. If you were planning a birthday there, Tape London is the closest match for hip-hop and RnB in Mayfair, Cirque Le Soir adds performers and a show to the same music, and Reign London suits a bigger birthday group with a full production.",
    birthdayExtras: "Funky Buddha has closed.",
    atmosphere: "Funky Buddha has closed.",
    groupSizeAdvice: "Funky Buddha has closed.",
    proTip: "Funky Buddha has closed. For a similar birthday, try Tape London, Cirque Le Soir or Reign London.",
  },
  {
    slug: "cuckoo-club",
    name: "99 Regent Street (formerly Cuckoo Club)",
    shortName: "99 Regent Street",
    formerName: "Cuckoo Club",
    tagline: "Cuckoo Club Is Now 99 Regent Street",
    location: "Swallow Street, by Piccadilly Circus",
    area: "Mayfair",
    minSpend: "£600",
    musicPolicy: "To be confirmed",
    dressCode: "Not confirmed for 99 Regent Street yet: ask us when you book. Entry is for over 19s.",
    openingNights: "Wednesday, Thursday, Friday, Saturday",
    capacity: "To be confirmed",
    birthdayRating: 0,
    bestFor: "Birthday tables by Piccadilly Circus from £600, over 19s",
    status: "open",
    description:
      "Cuckoo Club is now 99 Regent Street. The venue on Swallow Street, by Piccadilly Circus, trades under its new name and opens Wednesday to Saturday for over 19s, with tables from £600. People still search for Cuckoo Club when planning a birthday, so this page covers the change and how to book a birthday table at 99 Regent Street, free via WhatsApp.",
    birthdayHighlights: [
      "Cuckoo Club is now 99 Regent Street, on Swallow Street by Piccadilly Circus",
      "Tables from £600 minimum spend",
      "Open Wednesday to Saturday",
      "Over 19s only: every guest needs photo ID",
      "Birthday tables booked free through us on WhatsApp",
    ],
    whatToExpect:
      "99 Regent Street is the new name for the Swallow Street venue that was Cuckoo Club, by Piccadilly Circus. It opens Wednesday to Saturday, entry is for over 19s, and tables start from £600 minimum spend. Music and dress code are the new venue's own, and none of Cuckoo Club's old terms carry over, so message us with your date and group size for birthday table options. History: under the Cuckoo Club name, the venue was a long-running Swallow Street club.",
    birthdayExtras:
      "Ask us on WhatsApp which birthday extras 99 Regent Street can arrange for your table, such as sparklers, cake or decorations, and we will confirm what is available on your night.",
    atmosphere: "Not confirmed for 99 Regent Street yet.",
    groupSizeAdvice: "Not confirmed for 99 Regent Street yet: tell us your group size and we will check table options.",
    proTip:
      "Entry is for over 19s, so check every guest's age and bring photo ID. That rules it out for an 18th birthday.",
  },
  {
    slug: "scotch-of-st-james",
    name: "Scotch of St James",
    shortName: "Scotch",
    tagline: "The Iconic Birthday in a Historic Setting",
    location: "Mayfair, London",
    area: "Mayfair",
    minSpend: "£1,000",
    musicPolicy: "Mixed — Hip-Hop, RnB, House, depending on the night",
    dressCode: "Smart stylish. Scotch has heritage — respect the dress code. No sportswear or casual attire.",
    openingNights: "Thursday, Friday, Saturday",
    capacity: "Intimate (approx. 200)",
    birthdayRating: 4,
    bestFor: "Birthdays with character in a venue with genuine history",
    status: "open",
    description:
      "Scotch of St James is one of London's most storied nightclub locations, with a history stretching back to the 1960s when Jimi Hendrix himself was a regular. That rock'n'roll heritage permeates the venue today — the interiors blend vintage elegance with modern luxury, creating a space that feels like it has stories to tell. For birthdays, Scotch offers something no other Mayfair club can: genuine character and history, combined with modern VIP service.",
    birthdayHighlights: [
      "Historic venue with genuine 1960s heritage (Hendrix era)",
      "Intimate setting with bags of character",
      "Vintage-meets-luxury interior design",
      "Eclectic music policy that varies by night",
      "Personal, attentive service in a compact space",
    ],
    whatToExpect:
      "Scotch has a warmth that many Mayfair clubs lack. The vintage detailing, intimate layout, and rich history create an atmosphere that feels like celebrating in someone's incredibly cool private members' bar. The music varies by night — some evenings lean hip-hop, others more house — so check which night suits your birthday crew's taste. The compact size means your celebration has presence; a birthday at Scotch is felt by everyone in the room.",
    birthdayExtras:
      "Birthday celebrations at Scotch include sparkler bottle presentations, cake arrangements, DJ shoutouts, and decorated tables. The intimate setting means everything feels personal and considered — you're not just another table, you're part of the evening's story.",
    atmosphere:
      "Characterful, warm, and unexpectedly rock'n'roll. Scotch attracts a crowd that appreciates the venue's uniqueness — creative types, music lovers, and people who've grown tired of identikit Mayfair clubs. The energy is fun and unpretentious, built on genuine connection to the music and the space.",
    groupSizeAdvice:
      "Scotch is ideal for birthday groups of 5–12. The intimate setting means smaller groups feel special, and the venue's character ensures your birthday has personality. For groups larger than 12, multiple tables can be arranged but the venue works best with tighter birthday parties.",
    proTip:
      "Ask about the music policy for your specific night before booking. Scotch varies its sound more than most Mayfair clubs, so matching the right night to your birthday crowd's music taste makes a big difference.",
  },
  {
    slug: "dear-darling",
    name: "Dear Darling",
    shortName: "Dear Darling",
    tagline: "The Elegant Cocktail Birthday",
    location: "91 Jermyn Street, St James's",
    area: "Mayfair",
    minSpend: "£1,000",
    musicPolicy: "House, Soulful House, Cocktail Lounge",
    dressCode: "Smart elegant. Dear Darling is refined — dress to match the chandeliers.",
    openingNights: "Thursday, Friday, Saturday, Sunday",
    capacity: "Intimate (approx. 150)",
    birthdayRating: 4,
    bestFor: "Elegant, cocktail-focused birthday celebrations",
    status: "open",
    description:
      "Dear Darling is Mayfair's most opulent bar, a venue that feels like stepping into a lavishly decorated private salon. Think chandeliers, velvet booths, ornate detailing, and a cocktail programme that rivals the best bars in the city. With late-night hours that push it into club territory, Dear Darling occupies a unique space — more refined than a nightclub, more exciting than a cocktail bar. For birthdays where elegance is the priority, this is the venue.",
    birthdayHighlights: [
      "Stunning opulent interiors with chandeliers and velvet",
      "Exceptional cocktail programme alongside bottle service",
      "The most photogenic birthday venue in Mayfair",
      "Late-night hours mean the party goes on",
      "Intimate, luxurious atmosphere ideal for milestone birthdays",
    ],
    whatToExpect:
      "Dear Darling envelops you in luxury from the moment you arrive. The décor is deliberately over-the-top in the best possible way — every booth, every corner, every surface has been designed to impress. The cocktails are exceptional, the music is tasteful (soulful house and lounge), and the service is attentive without being intrusive. For birthdays, this environment creates a sense of occasion that more casual venues simply can't match. Your group will feel genuinely pampered.",
    birthdayExtras:
      "Birthday celebrations at Dear Darling include sparkler presentations, birthday cake service, personalised cocktails, decorated booths, and DJ acknowledgements. The opulent setting means even simple celebrations feel elevated — a champagne toast surrounded by chandeliers and candlelight creates an unforgettable moment.",
    atmosphere:
      "Opulent, intimate, and effortlessly glamorous. Dear Darling attracts a sophisticated crowd who appreciate luxury and attention to detail. The atmosphere is more conversational and elegant than a high-energy nightclub — perfect for birthdays where the priority is quality over volume.",
    groupSizeAdvice:
      "Dear Darling is ideal for birthday groups of 4–12. The intimate setting means smaller groups feel perfectly suited, and the velvet booths create a semi-private experience. This is the best choice for milestone birthdays (30th, 40th) where elegance matters more than a packed dancefloor.",
    proTip:
      "Start your evening at Dear Darling for cocktails and cake, then move to a high-energy club later if your group wants to dance. Or stay all night — Dear Darling's late hours mean you absolutely can.",
  },
  {
    slug: "maddox-club",
    name: "Maddox Club",
    shortName: "Maddox",
    tagline: "The Dinner-to-Dance Birthday",
    location: "Mayfair, London",
    area: "Mayfair",
    minSpend: "£1,000",
    musicPolicy: "House, Deep House, Tech House",
    dressCode: "Smart elegant. Maddox is refined — dress accordingly. No sportswear or casual wear.",
    openingNights: "Thursday, Friday, Saturday",
    capacity: "Medium (approx. 300)",
    birthdayRating: 4,
    bestFor: "Sophisticated birthdays combining dinner and nightclub",
    status: "open",
    description:
      "Maddox Club is Mayfair's premier restaurant-nightclub hybrid, offering the rare ability to seamlessly transition from an elegant Italian dinner to a full nightclub experience without leaving the building. The restaurant serves exceptional Italian cuisine in a sophisticated setting, while the club space features a house-music-driven atmosphere that attracts a mature, well-dressed crowd. For birthdays, this means you can host your entire evening — dinner, drinks, dancing — in one venue.",
    birthdayHighlights: [
      "Start with Italian dinner, transition seamlessly to the club",
      "One venue for the entire birthday evening",
      "House music focus attracts a sophisticated crowd",
      "Elegant restaurant perfect for pre-club birthday toasts",
      "The only Mayfair venue offering this dinner-to-dance concept",
    ],
    whatToExpect:
      "A birthday at Maddox typically begins with dinner in the restaurant — Italian cuisine that's genuinely excellent, not just a club-attached afterthought. As the evening progresses, the energy shifts as the club space opens and the DJ starts building. The transition feels natural and exciting — one moment you're toasting with champagne over pasta, the next you're on a dancefloor with deep house filling the room. The house music policy sets Maddox apart from the hip-hop-heavy Mayfair scene.",
    birthdayExtras:
      "Birthday celebrations at Maddox can include a full dinner service with birthday cake for dessert, followed by sparkler bottle presentations in the club. Table decorations, DJ shoutouts, and personalised touches can be arranged. The dinner-to-club format means the celebration naturally builds in energy throughout the evening.",
    atmosphere:
      "Refined, warm, and musically driven. Maddox attracts a slightly older, more sophisticated crowd than some Mayfair venues — people who appreciate good food, good music, and good company. The house music policy means the dancefloor has a different energy — more groovy, less intense, but equally engaging.",
    groupSizeAdvice:
      "Maddox is perfect for birthday groups of 6–20. The dinner-then-club format works especially well for groups where some people prefer dining and conversation over pure clubbing — everyone can enjoy the evening at their own pace. Book a private dining area for groups of 10+.",
    proTip:
      "Book dinner for 9–9:30pm to perfectly time the transition into the club. The kitchen produces excellent sharing platters that work perfectly for birthday groups who want variety.",
  },
  {
    slug: "the-box-london",
    name: "The Box London",
    shortName: "The Box",
    tagline: "The Most Daring Birthday in London",
    location: "Soho, London",
    area: "Soho",
    minSpend: "£1,000",
    musicPolicy: "Eclectic — Hip-Hop, Pop, Commercial, mixed by performance",
    dressCode: "Smart and expressive. The Box rewards creativity — dress bold, dress sharp, but no sportswear.",
    openingNights: "Wednesday, Thursday, Friday, Saturday",
    capacity: "Medium (approx. 300)",
    birthdayRating: 5,
    bestFor: "Boundary-pushing birthday celebrations for the adventurous",
    status: "open",
    description:
      "The Box London is Soho's most provocative and talked-about nightclub, a venue that has built its reputation on delivering theatrical performances that push every boundary. Born from the legendary New York original, The Box combines burlesque, cabaret, circus, and live music in a multi-level theatre-club hybrid that's unlike anything else in London. For birthdays, The Box offers the kind of night your guests will never stop talking about — thrilling, surprising, and completely unforgettable.",
    birthdayHighlights: [
      "London's most provocative and boundary-pushing performances",
      "Theatre-meets-nightclub atmosphere in a stunning Soho venue",
      "Multi-level venue with stage, mezzanine, and dance areas",
      "The ultimate talking-point birthday — your guests will never forget it",
      "Eclectic music policy that keeps the energy unpredictable",
    ],
    whatToExpect:
      "Walking into The Box feels like entering another world. The venue is designed as a theatre, with a central stage that commands the room. Performances happen throughout the night and range from breathtaking burlesque and acrobatics to provocative, jaw-dropping acts that you genuinely won't see anywhere else. Between performances, the DJ takes over and the dancefloor fills. For birthdays, the combination of spectacle and party creates a celebration that's equal parts sophisticated and wild. Your table gives you a prime view of the stage while keeping you close to the energy.",
    birthdayExtras:
      "Birthday celebrations at The Box include sparkler bottle presentations timed between performances, birthday cake service, DJ shoutouts, and the possibility of the birthday person being acknowledged from the stage. The theatrical environment means every birthday element feels amplified — sparklers against a theatre backdrop hit differently.",
    atmosphere:
      "Provocative, theatrical, and exhilarating. The Box attracts an adventurous, creative crowd — artists, performers, industry figures, and people who want their night out to be an experience, not just a venue. The energy swings between edge-of-your-seat performances and full dancefloor euphoria. No two nights are exactly the same.",
    groupSizeAdvice:
      "The Box works well for birthday groups of 6–20. Tables near the stage offer the most immersive experience, while mezzanine positions provide a more relaxed view. The theatrical format means even smaller groups feel part of something epic. Larger groups can book multiple tables.",
    proTip:
      "The performances are the main event — arrive by 11pm to catch them from the start. Saturday nights have the most elaborate shows. If anyone in your group is easily shocked, give them a gentle heads-up about The Box's reputation beforehand.",
  },
  {
    slug: "luna-club-london",
    name: "Luna Club London",
    shortName: "Luna",
    tagline: "Permanently Closed",
    location: "Mayfair, London",
    area: "Mayfair",
    minSpend: "£1,000",
    musicPolicy: "Hip-Hop, RnB, Commercial, Afrobeats",
    dressCode: "Smart stylish.",
    openingNights: "Permanently Closed",
    capacity: "Medium (approx. 300)",
    birthdayRating: 4,
    bestFor: "This venue has permanently closed",
    status: "closed",
    closedNote:
      "Luna Club London has closed. The Mayfair club, also known as Luna Mayfair or Club Luna, no longer takes birthday tables or guestlist names. For the same hip-hop, RnB and Afrobeats with a young, well-dressed crowd, Tape London, Cirque Le Soir and The Box are the closest open alternatives.",
    alternatives: ["tape-london", "cirque-le-soir", "the-box-london"],
    description:
      "Luna Club London was a Mayfair nightclub with celestial-inspired interiors, atmospheric lighting and a music policy that mixed hip-hop, RnB, commercial and Afrobeats for a young, well-dressed crowd. Luna Club London has now closed.",
    birthdayHighlights: [],
    whatToExpect:
      "Luna Club London has closed. If you were planning a birthday at Luna, Tape London is the closest match for hip-hop and RnB in Mayfair, Cirque Le Soir adds performers and a show to the same music, and The Box in Soho turns a birthday into a theatrical night.",
    birthdayExtras: "Luna Club London has closed.",
    atmosphere: "Luna Club London has closed.",
    groupSizeAdvice: "Luna Club London has closed.",
    proTip: "Luna Club London has closed. For a similar birthday, try Tape London, Cirque Le Soir or The Box.",
  },
  {
    slug: "selene-london",
    name: "Selene London",
    shortName: "Selene",
    tagline: "The Refined Fitzrovia Birthday",
    location: "Fitzrovia, London",
    area: "Fitzrovia",
    minSpend: "£1,000",
    musicPolicy: "House, Commercial, RnB",
    dressCode: "Smart elegant. Smart London club standards, so dress to impress.",
    openingNights: "Thursday, Friday, Saturday, Sunday",
    capacity: "Intimate-Medium (approx. 250)",
    birthdayRating: 4,
    bestFor: "Refined birthday celebrations in an elegant setting just north of Oxford Circus",
    status: "open",
    description:
      "Selene London brings a refined elegance to the nightlife just north of Oxford Circus, on Winsley Street in Fitzrovia, a short walk from Mayfair, offering a venue that balances sophisticated design with genuine club energy. The interiors are polished and considered — soft lighting, luxurious materials, and a layout that creates both intimate corners and open dancefloor space. Alongside the club rooms, Selene has private bowling lanes, which birthday groups can book together with their birthday table. The music spans house, commercial, and RnB, appealing to a broad range of tastes. For birthdays, Selene delivers a celebration that feels premium without being pretentious — stylish, fun, and effortlessly impressive.",
    birthdayHighlights: [
      "Elegant, refined interiors with luxurious finishing",
      "Balanced atmosphere — sophisticated but never stuffy",
      "Music policy that appeals to diverse group tastes",
      "Premium service with genuine attention to detail",
      "Intimate enough for personal celebrations, large enough for groups",
    ],
    whatToExpect:
      "Selene strikes the balance that many Mayfair clubs aim for but few achieve: genuinely elegant without feeling intimidating. The design is luxurious but warm, the music is polished but fun, and the service is attentive without being overbearing. For birthdays, this balance means your group can relax and enjoy — the venue does the impressing for you. Bottle presentations are slick and well-choreographed, and the atmosphere builds naturally through the evening.",
    birthdayExtras:
      "Birthday celebrations at Selene include sparkler bottle presentations, birthday cake service, decorated tables, and DJ shoutouts. The refined setting elevates every celebration element — even a simple champagne toast feels special in Selene's elegant surroundings.",
    atmosphere:
      "Refined, warm, and celebratory. Selene attracts a well-dressed, fun-loving crowd who appreciate quality without pretension. The atmosphere is consistently enjoyable — sophisticated enough for a milestone birthday, energetic enough for a group who wants to dance.",
    groupSizeAdvice:
      "Selene is ideal for birthday groups of 6–18. The venue's intimate-medium size means your group is always part of the energy without being lost in a crowd. The elegant setting works particularly well for groups who want their birthday to feel premium.",
    proTip:
      "Selene's balanced atmosphere makes it an excellent choice for birthday groups with mixed preferences — those who want to dance and those who prefer conversation can both enjoy the evening.",
  },
  {
    slug: "beat-london",
    name: "BEAT London",
    shortName: "BEAT",
    tagline: "The High-Energy Birthday",
    location: "48 Margaret Street, Fitzrovia",
    area: "Fitzrovia",
    minSpend: "£1,000",
    musicPolicy: "House, Tech House, Dance",
    dressCode: "Smart casual. BEAT is more relaxed than Mayfair — still look good, but less formal.",
    openingNights: "Thursday (select nights), Friday, Saturday",
    capacity: "Medium (approx. 400)",
    birthdayRating: 4,
    bestFor: "Music-focused birthdays with incredible sound quality",
    status: "open",
    description:
      "BEAT London puts music first. The Margaret Street venue is built around one of London's finest sound systems, delivering audio quality that rivals dedicated music venues. The focus here is on the dancefloor experience — house and tech house played loud, clear, and with the bass you can feel in your chest. For birthdays where the music matters as much as the celebration, BEAT delivers an experience that music lovers genuinely appreciate.",
    birthdayHighlights: [
      "One of London's best nightclub sound systems",
      "Music-first atmosphere with quality DJs",
      "High-energy dancefloor that peaks late",
      "More relaxed dress code than Mayfair venues",
      "Great value for quality nightlife experience",
    ],
    whatToExpect:
      "BEAT is for people who love music. The sound system is the star — from the moment you walk in, the audio quality is noticeably superior to most London clubs. The DJs play house and tech house that builds progressively, with the dancefloor peaking between 1–3am. For birthdays, this means the energy of the night grows alongside your celebration. Table service puts you adjacent to the dancefloor action with room to dance, drink, and celebrate.",
    birthdayExtras:
      "Birthday celebrations at BEAT include sparkler bottle deliveries, birthday cake arrangements, and DJ shoutouts. The music-first environment means the birthday shoutout comes through a world-class sound system — it hits different when the bass backs it up.",
    atmosphere:
      "High-energy, music-driven, and unpretentious. BEAT attracts genuine music fans alongside the nightlife crowd, creating an atmosphere that's less about being seen and more about losing yourself in the music. The energy builds throughout the night, making it perfect for birthdays that are all about the party.",
    groupSizeAdvice:
      "BEAT works well for birthday groups of 6–20. The medium capacity means your group has space to spread out between the table and the dancefloor. Music-loving birthday groups of any size will appreciate what BEAT does differently.",
    proTip:
      "If your birthday falls on a night when BEAT has a notable guest DJ, book it — the combination of a special lineup and your celebration creates something magical. Check the BEAT socials for upcoming lineups.",
  },

  {
    slug: "maison-close",
    name: "Maison Close",
    shortName: "Maison Close",
    tagline: "Permanently Closed",
    location: "9 Swallow Street, Mayfair",
    area: "Mayfair",
    minSpend: "£1,000",
    musicPolicy: "House, Deep House, Soulful House",
    dressCode: "Smart and sophisticated.",
    openingNights: "Permanently Closed",
    capacity: "Intimate (approx. 160)",
    birthdayRating: 5,
    bestFor: "This venue has permanently closed",
    status: "closed",
    closedNote:
      "Maison Close has closed and no longer takes birthday tables or guestlist names. For house music in an intimate, dressed-up room nearby, Maddox Club in Mayfair, Scotch of St James and Selene London, just north of Oxford Circus, are the closest open alternatives.",
    alternatives: ["maddox-club", "selene-london", "scotch-of-st-james"],
    description:
      "Maison Close was a French-inspired house music club at 9 Swallow Street in Mayfair, in the former Kadies space. Its vintage chandeliers, velvet seating, red accents and capacity of around 160 made it feel more like a Parisian salon than a nightclub. Maison Close has now closed.",
    birthdayHighlights: [],
    whatToExpect:
      "Maison Close has closed. If you were planning a birthday there, Maddox Club pairs dinner with house music downstairs, Selene London offers refined house and commercial sets in an elegant room, and Scotch of St James is a small, storied Mayfair club for an intimate celebration.",
    birthdayExtras: "Maison Close has closed.",
    atmosphere: "Maison Close has closed.",
    groupSizeAdvice: "Maison Close has closed.",
    proTip: "Maison Close has closed. For a similar birthday, try Maddox Club, Selene London or Scotch of St James.",
  },

  // ==================== PERMANENTLY CLOSED VENUES ====================
  {
    slug: "luxx-club",
    name: "Luxx Club London",
    shortName: "Luxx",
    tagline: "Permanently Closed",
    location: "Mayfair, London",
    area: "Mayfair",
    minSpend: "£1,000",
    musicPolicy: "Open Format, Hip-Hop, Commercial",
    dressCode: "Smart stylish.",
    openingNights: "Permanently Closed",
    capacity: "Medium (approx. 300)",
    birthdayRating: 4,
    bestFor: "This venue has permanently closed",
    status: "closed",
    closedNote:
      "Luxx Club London has permanently closed, and its successor is Itzel, which now operates at its Berkeley Street address. The venue was known for its stunning LED installations and electric light shows that made every birthday celebration visually spectacular. While Luxx is no longer operating, its legacy as one of Mayfair's most photogenic birthday venues lives on.",
    alternatives: ["selene-london", "reign-london", "the-box-london"],
    description:
      "Luxx Club London was a premium Mayfair venue famous for its electric light show theme and stunning LED imagery. The club offered an immersive visual experience with dynamic LED installations that transformed the space throughout the night. Luxx has now permanently closed; its successor is Itzel.",
    birthdayHighlights: [
      "Stunning LED light shows and visual installations",
      "Every corner was Instagram-worthy for birthday photos",
      "Open format music policy appealed to diverse groups",
      "Premium Mayfair location and service standards",
      "Dynamic atmosphere that evolved through the night",
    ],
    whatToExpect: "Luxx Club London has permanently closed, and its successor is Itzel. If you were planning a birthday at Luxx, we recommend Selene London for refined elegance, Reign London for production and shows, or The Box for a theatrical night.",
    birthdayExtras: "Luxx Club London has permanently closed.",
    atmosphere: "Luxx Club London has permanently closed.",
    groupSizeAdvice: "Luxx Club London has permanently closed.",
    proTip: "Luxx has permanently closed. For a similar experience, try Reign London for visual impact, The Box for theatre, or Selene for refined elegance.",
  },
  {
    slug: "lio-london",
    name: "Lio Club London",
    shortName: "Lio",
    tagline: "Permanently Closed",
    location: "Mayfair, London",
    area: "Mayfair",
    minSpend: "£1,000",
    musicPolicy: "House, Commercial, Live Performance",
    dressCode: "Smart glamorous.",
    openingNights: "Permanently Closed",
    capacity: "Medium (approx. 350)",
    birthdayRating: 5,
    bestFor: "This venue has permanently closed",
    status: "closed",
    closedNote:
      "Lio Club London has permanently closed. Originally bringing the famous Ibiza dining-and-entertainment concept to Mayfair, Lio was known for its seamless blend of gourmet dining, live performances, and late-night dancing. For a similar dinner-to-club birthday experience, Maddox Club remains an excellent alternative.",
    alternatives: ["maddox-club", "the-box-london", "reign-london"],
    description:
      "Lio Club London brought the magic of the famous Ibiza venue to Mayfair, combining gourmet dining with live entertainment and late-night dancing. The concept was dinner-and-a-show meets high-end nightclub. Lio has now permanently closed.",
    birthdayHighlights: [
      "Complete evening: gourmet dinner, live shows, and nightclub",
      "Live performers and singers throughout dinner service",
      "Seamless transition from dining to dancefloor",
      "Ibiza-famous concept brought to Mayfair",
      "The most complete birthday experience concept in London",
    ],
    whatToExpect: "Lio Club London has permanently closed. If you were planning a birthday at Lio, we recommend Maddox Club for dinner-to-dancing, The Box for theatrical performances, or Reign London for grand spectacle.",
    birthdayExtras: "Lio Club London has permanently closed.",
    atmosphere: "Lio Club London has permanently closed.",
    groupSizeAdvice: "Lio Club London has permanently closed.",
    proTip: "Lio has permanently closed. For the dinner-to-club birthday experience, Maddox Club is the top alternative. For live entertainment, The Box or Cirque Le Soir deliver unforgettable performances.",
  },
  {
    slug: "libertine",
    name: "Libertine",
    shortName: "Libertine",
    tagline: "Permanently Closed",
    location: "4 Winsley Street, Fitzrovia",
    area: "Fitzrovia",
    minSpend: "£1,000",
    musicPolicy: "Hip-Hop, RnB, Commercial",
    dressCode: "Smart and stylish.",
    openingNights: "Permanently Closed",
    capacity: "Medium (approx. 300)",
    birthdayRating: 4,
    bestFor: "This venue has permanently closed",
    status: "closed",
    closedNote:
      "Libertine has permanently closed, and Selene now operates in its place. Known for its sophisticated, futuristic design and excellent sound system, Libertine was a popular choice for style-conscious birthday celebrations. For a similar experience, Selene London, Tape London and The Box are excellent alternatives.",
    alternatives: ["selene-london", "tape-london", "the-box-london"],
    description:
      "Libertine brought a sophisticated, futuristic energy to the West End from 4 Winsley Street in Fitzrovia, just north of Oxford Circus. The venue combined sleek design with state-of-the-art lighting and sound. Libertine has now permanently closed, and Selene now operates in its place.",
    birthdayHighlights: [
      "Futuristic, visually stunning interior design",
      "State-of-the-art sound and lighting systems",
      "Excellent dancefloor energy throughout the night",
      "Well-positioned tables with great sightlines",
      "Attentive, professional service team",
    ],
    whatToExpect: "Libertine has permanently closed, and Selene now operates in its place. If you were planning a birthday here, Selene London is the venue there now, Tape London suits hip-hop and RnB, and The Box suits a theatrical night.",
    birthdayExtras: "Libertine has permanently closed.",
    atmosphere: "Libertine has permanently closed.",
    groupSizeAdvice: "Libertine has permanently closed.",
    proTip: "Libertine has permanently closed, and Selene now operates in its place. For a birthday there, book Selene; for hip-hop and RnB, try Tape London, or The Box for theatre.",
  },
];

export const openClubs = clubs.filter((c) => c.status === "open");
export const closedClubs = clubs.filter((c) => c.status === "closed");

export function getClubBySlug(slug: string): Club | undefined {
  return clubs.find((c) => c.slug === slug);
}
