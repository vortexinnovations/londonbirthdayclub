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
}

export const WHATSAPP_NUMBER = "447880662708";

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsAppMessage(): string {
  return `Hi, I found you on londonbirthdayclub.com and I'd like to plan a birthday night out. Here are my details:\n\nBirthday person's name:\nDate:\nClub preference (or need advice):\nGroup size:\nBudget:\nAny requests (cake, decorations, surprises):`;
}

export function getClubWhatsAppMessage(clubName: string): string {
  return `Hi, I'd like to book a birthday table at ${clubName}. Here are my details:\n\nBirthday person's name:\nDate:\nGroup size:\nBudget:\nAny requests (cake, decorations, surprises):`;
}

export const clubs: Club[] = [
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
    openingNights: "Thursday, Friday, Saturday",
    capacity: "Intimate (approx. 200)",
    birthdayRating: 5,
    bestFor: "Celebrity-style birthdays and exclusive private celebrations",
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
      "Book early — Tape has limited capacity and weekends fill up fast. Thursday nights are slightly easier to secure and often have an incredible atmosphere with a more industry-connected crowd.",
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
    openingNights: "Wednesday, Friday, Saturday",
    capacity: "Medium (approx. 350)",
    birthdayRating: 5,
    bestFor: "Show-stopping birthdays with entertainment and spectacle",
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
    slug: "the-london-reign",
    name: "The London Reign",
    shortName: "Reign",
    tagline: "The Grand Birthday Spectacle",
    location: "Piccadilly, Central London",
    area: "Piccadilly",
    minSpend: "£1,000",
    musicPolicy: "Commercial, Hip-Hop, RnB, House",
    dressCode: "Smart glamorous. This is a showclub — dress for the occasion. No sportswear or casual wear.",
    openingNights: "Friday, Saturday",
    capacity: "Large (approx. 500)",
    birthdayRating: 4,
    bestFor: "Big group birthdays who want a jaw-dropping venue",
    description:
      "The London Reign is Piccadilly's most extravagant showclub, combining world-class nightlife with theatrical performances that rival West End productions. The venue is spread across multiple levels with a grand central stage where aerial artists, dancers, and performers deliver jaw-dropping shows throughout the night. For birthdays, the sheer scale and spectacle of The London Reign creates a celebration that feels truly monumental.",
    birthdayHighlights: [
      "Aerial performances and acrobatic shows from the central stage",
      "Grand, multi-level venue with impressive architecture",
      "Large capacity perfect for big birthday groups",
      "Spectacular bottle presentations with full production",
      "Multiple seating areas with different vibes",
    ],
    whatToExpect:
      "The London Reign makes an impression from the moment you walk in. The venue is grand — high ceilings, dramatic lighting, and a central performance area that draws every eye in the room. Throughout the night, scheduled performances feature aerial silk artists, choreographed dance routines, and theatrical acts that pause the dancefloor. Your birthday table gives you a front-row seat to the action while enjoying premium bottle service.",
    birthdayExtras:
      "Birthday packages at The London Reign include sparkler-led bottle parades, the option to arrange cake delivery, decorated table setups, and DJ shoutouts. The venue's theatrical nature means birthday celebrations fit naturally into the night's energy — your bottle presentation becomes part of the show.",
    atmosphere:
      "Grand, theatrical, and high-energy. The crowd at Reign comes dressed to impress and ready for a big night. The combination of club music and live performances creates waves of energy — moments of spectacle followed by peak dancefloor moments. It's a club that rewards groups who come ready to celebrate.",
    groupSizeAdvice:
      "The London Reign excels with birthday groups of 10–30+. The large venue means big groups don't feel cramped, and multiple table configurations allow you to keep your entire birthday party together. This is one of the best choices for larger celebrations where you want everyone in one venue.",
    proTip:
      "Saturday nights have the fullest performance schedule. Arrive by 11pm to catch the earlier shows from your table before the club hits peak energy around midnight.",
  },
  {
    slug: "tabu-london",
    name: "TABU London",
    shortName: "TABU",
    tagline: "The Underground Birthday Experience",
    location: "Mayfair, London",
    area: "Mayfair",
    minSpend: "£1,000",
    musicPolicy: "Hip-Hop, RnB, Afrobeats",
    dressCode: "Smart stylish. Mayfair standards apply — no sportswear, casual trainers, or shorts.",
    openingNights: "Thursday, Friday, Saturday",
    capacity: "Intimate-Medium (approx. 250)",
    birthdayRating: 4,
    bestFor: "Hip-hop lovers wanting an intimate, edgy birthday vibe",
    description:
      "TABU brings a Japanese underground aesthetic to the heart of Mayfair, creating something genuinely different in London's nightlife scene. The dark, immersive interiors draw inspiration from Tokyo's hidden bars and underground clubs, with moody lighting, intricate detailing, and an atmosphere that feels like you've discovered somewhere secret. For birthdays, TABU offers an experience that's edgy, cool, and completely different from a standard Mayfair club night.",
    birthdayHighlights: [
      "Unique Japanese underground-themed interiors",
      "Intimate atmosphere where birthdays feel special",
      "Strong hip-hop and RnB playlist all night",
      "Stylish, design-forward venue perfect for photos",
      "Attentive service with a personal touch",
    ],
    whatToExpect:
      "TABU is the kind of club that makes you feel like you're in on a secret. The Japanese-inspired design creates an atmosphere that's dark, moody, and incredibly photogenic — your birthday photos will look amazing. The music policy is firmly hip-hop and RnB with Afrobeats, played loud and proud. The intimate size means the energy in the room is concentrated and infectious. Your birthday table puts you at the heart of the action without being overwhelmed.",
    birthdayExtras:
      "TABU offers sparkler bottle presentations, birthday cake arrangements, decorated tables, and DJ shoutouts for birthday celebrations. The unique aesthetic means even the standard bottle delivery feels special — the visual backdrop of the venue elevates everything.",
    atmosphere:
      "Dark, edgy, and effortlessly cool. TABU attracts a young, fashion-conscious crowd who appreciate good music and design. The energy builds steadily through the night, with the dancefloor peaking around 1am. It's the kind of club where everyone is there to have a good time, not to pose.",
    groupSizeAdvice:
      "TABU is ideal for birthday groups of 5–15. The intimate setting means smaller groups feel perfectly comfortable, and the club's size ensures your celebration gets noticed. Groups of 15+ can be accommodated with multiple tables.",
    proTip:
      "Thursday nights at TABU often have a more local, fashion-industry crowd and can be easier to book. Friday and Saturday are busier with more energy — perfect for a birthday where you want a packed room.",
  },
  {
    slug: "libertine",
    name: "Libertine",
    shortName: "Libertine",
    tagline: "The Futuristic Birthday Celebration",
    location: "Mayfair, London",
    area: "Mayfair",
    minSpend: "£1,000",
    musicPolicy: "Hip-Hop, RnB, Commercial",
    dressCode: "Smart and stylish. Mayfair dress code — no sportswear, trainers, or overly casual attire.",
    openingNights: "Wednesday, Friday, Saturday",
    capacity: "Medium (approx. 300)",
    birthdayRating: 4,
    bestFor: "Style-conscious birthday celebrations with a modern edge",
    description:
      "Libertine brings a sophisticated, futuristic energy to Mayfair's nightlife scene. The venue combines sleek design with state-of-the-art lighting and sound, creating an environment that feels like stepping into the future. The interiors are refined yet bold — think clean lines, ambient lighting, and a layout that makes every table feel like the best seat in the house. For birthdays, Libertine delivers a celebration that's polished, energetic, and undeniably cool.",
    birthdayHighlights: [
      "Futuristic, visually stunning interior design",
      "State-of-the-art sound and lighting systems",
      "Excellent dancefloor energy throughout the night",
      "Well-positioned tables with great sightlines",
      "Attentive, professional service team",
    ],
    whatToExpect:
      "Libertine impresses with its modern design and impeccable sound quality. The venue layout ensures every table has a view of the dancefloor and DJ, so your birthday group is always part of the action. The lighting shifts and evolves throughout the night, creating different moods as the energy builds. Bottle service is slick and well-choreographed, with sparkler presentations that match the venue's futuristic aesthetic.",
    birthdayExtras:
      "Birthday celebrations at Libertine include sparkler bottle presentations, birthday cake options, table decorations, and DJ shoutouts. The venue's sophisticated setup means everything feels premium — from the way bottles are presented to how your table is arranged for the evening.",
    atmosphere:
      "Sophisticated, energetic, and forward-thinking. Libertine attracts a well-dressed, fun-loving crowd who appreciate quality nightlife. The atmosphere builds from relaxed early-evening energy to a packed, high-energy dancefloor by midnight. The sound system is one of the best in Mayfair.",
    groupSizeAdvice:
      "Libertine works well for birthday groups of 8–20. The layout offers good options for medium-sized groups, and the atmosphere is lively enough that even smaller groups feel part of the action. Multiple tables can be arranged for larger parties.",
    proTip:
      "Wednesday nights at Libertine are an underrated option for birthdays — slightly lower minimum spends and a more relaxed atmosphere, but the venue still delivers the full Libertine experience.",
  },
  {
    slug: "luxx-club",
    name: "Luxx Club London",
    shortName: "Luxx",
    tagline: "The Electric Birthday Experience",
    location: "Mayfair, London",
    area: "Mayfair",
    minSpend: "£1,000",
    musicPolicy: "Open Format, Hip-Hop, Commercial",
    dressCode: "Smart stylish. Standard Mayfair dress code applies — look sharp.",
    openingNights: "Friday, Saturday",
    capacity: "Medium (approx. 300)",
    birthdayRating: 4,
    bestFor: "Visually spectacular birthdays with an electric atmosphere",
    description:
      "Luxx Club London brings an electric, light-show experience to Mayfair nightlife. The venue's signature feature is its stunning LED installations and dynamic light shows that transform the space throughout the night. Every surface seems to pulse with energy, creating a visual spectacle that makes the entire club feel alive. For birthdays, this means your celebration happens against a backdrop that's Instagram-ready from every angle.",
    birthdayHighlights: [
      "Stunning LED light shows and visual installations",
      "Every corner is Instagram-worthy for birthday photos",
      "Open format music policy appeals to diverse groups",
      "Premium Mayfair location and service standards",
      "Dynamic atmosphere that evolves through the night",
    ],
    whatToExpect:
      "Walking into Luxx is a visual experience. The LED installations create a constantly shifting backdrop of colour and light that makes the venue feel like it's breathing. The music policy is open format, meaning the DJ reads the room and plays what works — from hip-hop bangers to commercial anthems. For birthdays, the light shows can feel like they're part of your celebration. Bottle presentations are enhanced by the visual environment, with sparklers and LED elements combining for dramatic effect.",
    birthdayExtras:
      "Birthday packages at Luxx include sparkler-enhanced bottle deliveries, birthday cake arrangements, personalised table décor, and DJ birthday announcements. The LED environment adds an extra dimension to every celebration element — even a simple sparkler presentation looks spectacular against the backdrop.",
    atmosphere:
      "Electric, vibrant, and visually immersive. Luxx attracts a fun, photogenic crowd who appreciate the venue's visual impact. The energy is consistently high, with the light shows building alongside the music to create peak moments throughout the night.",
    groupSizeAdvice:
      "Luxx is great for birthday groups of 8–20. The visual environment means even smaller groups feel like they're in the middle of something special. The open format music policy works well for mixed groups who might have different music tastes.",
    proTip:
      "The LED shows peak around midnight-1am — time your birthday moment (cake, toast, sparklers) to coincide with the most intense visual displays for maximum impact.",
  },
  {
    slug: "maddox",
    name: "Maddox",
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
    description:
      "Maddox is Mayfair's premier restaurant-nightclub hybrid, offering the rare ability to seamlessly transition from an elegant Italian dinner to a full nightclub experience without leaving the building. The restaurant serves exceptional Italian cuisine in a sophisticated setting, while the club space features a house-music-driven atmosphere that attracts a mature, well-dressed crowd. For birthdays, this means you can host your entire evening — dinner, drinks, dancing — in one venue.",
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
    slug: "cuckoo-club",
    name: "Cuckoo Club",
    shortName: "Cuckoo",
    tagline: "The Two-Floor Birthday Party",
    location: "Swallow Street, Mayfair",
    area: "Mayfair",
    minSpend: "£1,000",
    musicPolicy: "Ground Floor: House & Commercial. Basement: Hip-Hop & RnB",
    dressCode: "Smart stylish. Mayfair standards — dress well, feel great.",
    openingNights: "Tuesday, Thursday, Friday, Saturday",
    capacity: "Medium (approx. 350)",
    birthdayRating: 4,
    bestFor: "Groups who want two vibes under one roof",
    description:
      "Cuckoo Club is Mayfair's versatile two-floor nightclub, offering the rare luxury of two completely different atmospheres in one venue. The ground floor delivers a sleek, house-music-driven experience, while the basement pumps hip-hop and RnB in a darker, more intimate setting. For birthday groups, this dual personality is a genuine advantage — different members of your group can gravitate toward their preferred sound while staying in the same venue.",
    birthdayHighlights: [
      "Two floors with completely different music and atmospheres",
      "Versatile option for groups with mixed music preferences",
      "Stylish Mayfair location on Swallow Street",
      "Open more nights than most Mayfair clubs (including Tuesday)",
      "Consistent, lively atmosphere with a loyal following",
    ],
    whatToExpect:
      "Arriving at Cuckoo, you'll first encounter the ground floor — a stylish, well-lit space with house and commercial music. Head downstairs to the basement, and the vibe shifts entirely: darker, more intimate, with hip-hop and RnB dominating. Your birthday table can be on either floor depending on your music preference. Throughout the night, your group can move freely between the two, discovering which vibe suits their mood. Bottle service is excellent on both floors.",
    birthdayExtras:
      "Birthday celebrations at Cuckoo include sparkler bottle presentations, birthday cake delivery, decorated table arrangements, and DJ shoutouts on your chosen floor. The two-floor layout means your birthday can have multiple moments — a toast upstairs, cake downstairs, or vice versa.",
    atmosphere:
      "Versatile and consistently fun. Cuckoo attracts a mixed crowd that appreciates having options — you'll find house music lovers upstairs and hip-hop heads downstairs, often crossing between the two. The vibe is fun, social, and unpretentious, making it easy for birthday groups to settle in and enjoy.",
    groupSizeAdvice:
      "Cuckoo is excellent for birthday groups of 8–25. The two-floor layout means larger groups never feel cramped, and splitting across both floors actually adds to the fun. Smaller groups of 8–12 can book a single floor and still have a brilliant night.",
    proTip:
      "For birthdays, the basement hip-hop floor tends to create a more energetic celebration atmosphere. But booking a table on the ground floor gives you the option to retreat to a slightly calmer vibe when you need a break from the bass.",
  },
  {
    slug: "dear-darling",
    name: "Dear Darling",
    shortName: "Dear Darling",
    tagline: "The Elegant Cocktail Birthday",
    location: "Mayfair, London",
    area: "Mayfair",
    minSpend: "£1,000",
    musicPolicy: "House, Soulful House, Cocktail Lounge",
    dressCode: "Smart elegant. Dear Darling is refined — dress to match the chandeliers.",
    openingNights: "Thursday, Friday, Saturday",
    capacity: "Intimate (approx. 150)",
    birthdayRating: 4,
    bestFor: "Elegant, cocktail-focused birthday celebrations",
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
    slug: "beat-london",
    name: "BEAT London",
    shortName: "BEAT",
    tagline: "The High-Energy Birthday",
    location: "Margaret Street, Central London",
    area: "Fitzrovia",
    minSpend: "£1,000",
    musicPolicy: "House, Tech House, Dance",
    dressCode: "Smart casual. BEAT is more relaxed than Mayfair — still look good, but less formal.",
    openingNights: "Friday, Saturday",
    capacity: "Medium (approx. 400)",
    birthdayRating: 4,
    bestFor: "Music-focused birthdays with incredible sound quality",
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
    slug: "ministry-of-sound",
    name: "Ministry of Sound",
    shortName: "Ministry",
    tagline: "The Legendary Birthday",
    location: "Elephant & Castle, South London",
    area: "Elephant & Castle",
    minSpend: "£1,000",
    musicPolicy: "House, Techno, Electronic, varies by night and room",
    dressCode: "Casual-smart. Ministry is more relaxed — comfort and style over formality.",
    openingNights: "Friday, Saturday (plus special events)",
    capacity: "Large (1,500+)",
    birthdayRating: 4,
    bestFor: "Dance music lovers wanting a legendary birthday venue",
    description:
      "Ministry of Sound needs no introduction. As one of the most iconic nightclubs in the world, Ministry has been at the forefront of dance music culture since 1991. The venue features multiple rooms, each with its own sound system and music policy, offering everything from house and techno to drum & bass and garage across a single night. For birthdays, celebrating at Ministry means your party happens in a venue that's genuinely part of music history.",
    birthdayHighlights: [
      "One of the world's most iconic nightclubs",
      "Multiple rooms with different music genres",
      "World-renowned sound system (The Box is legendary)",
      "Hosts global DJ talent regularly",
      "The most talked-about birthday venue choice",
    ],
    whatToExpect:
      "A night at Ministry of Sound is a pilgrimage for music fans. The Box — the main room — features a sound system that's considered one of the best on the planet. Additional rooms offer different genres, so your birthday group can explore different sounds throughout the night. The scale is impressive: this isn't an intimate Mayfair club, it's a full-scale superclub where thousands of people share the dancefloor. For birthdays, the VIP table experience gives you a premium base camp amidst the organised chaos.",
    birthdayExtras:
      "Birthday VIP packages at Ministry include dedicated table areas, sparkler bottle service, birthday cake arrangements, and dedicated hosts. The scale of the venue means your birthday celebration can be as big or as intimate as you want — from a table for six to a full VIP area for 30+.",
    atmosphere:
      "Legendary, immersive, and utterly electric. Ministry attracts dedicated music fans from across London and beyond. The atmosphere varies by room and night, but the common thread is a genuine love of dance music. The energy in The Box during a peak moment is something every music fan should experience at least once.",
    groupSizeAdvice:
      "Ministry works for birthday groups of all sizes, from 6 to 30+. The multiple rooms and large capacity mean groups never feel restricted. VIP areas can be tailored to your group size. This is an excellent choice for very large birthday celebrations where other venues would feel too small.",
    proTip:
      "Check the lineup for your birthday night — Ministry hosts different events and genres. Make sure the night aligns with your group's music taste. Saturday nights tend to have the biggest lineups and fullest rooms.",
  },
  {
    slug: "lio-london",
    name: "Lio Club London",
    shortName: "Lio",
    tagline: "The Glamorous Dining-to-Dancing Birthday",
    location: "Mayfair, London",
    area: "Mayfair",
    minSpend: "£1,000",
    musicPolicy: "House, Commercial, Live Performance",
    dressCode: "Smart glamorous. Lio is high-end — dress to match the surroundings.",
    openingNights: "Thursday, Friday, Saturday",
    capacity: "Medium (approx. 350)",
    birthdayRating: 5,
    bestFor: "The ultimate all-in-one birthday experience with dining, shows, and dancing",
    description:
      "Lio Club London brings the magic of the famous Ibiza venue to Mayfair, combining gourmet dining with live entertainment and late-night dancing in one seamless experience. The concept is dinner-and-a-show meets high-end nightclub — guests enjoy exceptional food while performers, singers, and dancers create an immersive spectacle around them. As the evening progresses, the tables are cleared and the space transforms into a full dancefloor. For birthdays, Lio offers the most complete celebration experience in London.",
    birthdayHighlights: [
      "Complete evening: gourmet dinner, live shows, and nightclub",
      "Live performers and singers throughout dinner service",
      "Seamless transition from dining to dancefloor",
      "Ibiza-famous concept brought to Mayfair",
      "The most complete birthday experience in London",
    ],
    whatToExpect:
      "A birthday at Lio is a full evening event. You'll arrive for dinner — expect high-quality cuisine served while live performers create magic around you. Singers, dancers, and artists perform between the tables, creating moments of spectacle that punctuate the meal. As the night deepens, the energy shifts — plates are cleared, the music builds, and the venue transforms into a fully-fledged nightclub. Your birthday table transitions with the room, giving you the best position for every phase of the evening.",
    birthdayExtras:
      "Lio's birthday packages are among the most comprehensive in London. Expect personalised service from the moment you arrive, cake during the dinner show, sparkler-adorned bottle presentations when the club kicks in, performer interactions with the birthday person, and a DJ dedication. The dinner-show-club format means there are multiple natural moments for birthday celebrations throughout the evening.",
    atmosphere:
      "Glamorous, theatrical, and building in intensity. Lio starts elegant and refined during dinner, becoming progressively more energetic as the live shows escalate and the dancefloor opens. The crowd is glamorous and well-heeled, adding to the sense of occasion. By the end of the night, the room is transformed — the same space that hosted a refined dinner is now a full-energy dancefloor.",
    groupSizeAdvice:
      "Lio is excellent for birthday groups of 6–25. The dinner format means everyone is seated together, creating a natural social dynamic. Larger groups can book extended table areas. This is particularly good for birthday groups where some people want dinner and shows while others are there for the club — Lio delivers both.",
    proTip:
      "Book a dinner table rather than a late-entry club table — the dinner show is half the experience and gives your birthday group the complete Lio journey. Arrive by 8:30pm for the full evening.",
  },
];

export function getClubBySlug(slug: string): Club | undefined {
  return clubs.find((c) => c.slug === slug);
}
