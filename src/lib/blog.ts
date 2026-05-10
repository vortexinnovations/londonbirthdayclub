export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  readTime: string;
  sections: BlogSection[];
  faqs?: { question: string; answer: string }[];
}

export interface BlogSection {
  heading: string;
  headingLevel: "h2" | "h3";
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-birthday-table-cost-london",
    title: "How Much Does a Birthday Table Cost in London?",
    metaTitle:
      "How Much Does a Birthday Table Cost in London? 2025 Price Guide",
    metaDescription:
      "Full breakdown of birthday table costs at London nightclubs. Minimum spends, what's included, per-person costs, and how to get the best value at Mayfair clubs.",
    excerpt:
      "A transparent breakdown of what you'll actually spend on a birthday table at a London nightclub — from minimum spends to hidden costs and per-person budgets.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-03-25",
    category: "Planning",
    readTime: "7 min read",
    sections: [
      {
        heading: "The Real Cost of a Birthday Table in London",
        headingLevel: "h2",
        content: [
          "The question everyone asks first: how much does a birthday table at a London club actually cost? The short answer is that minimum table spends at most Mayfair clubs start from £1,000 and go up from there. But that number alone doesn't tell you much — what matters is what you get for that spend and how it breaks down per person.",
          "Understanding the cost structure of London nightclub tables removes the mystery and lets you plan a birthday that fits your budget without any surprises on the night.",
        ],
      },
      {
        heading: "What Is a Minimum Spend?",
        headingLevel: "h2",
        content: [
          "A minimum spend is the minimum amount your table must spend on drinks during the night. This is the most important thing to understand: it is not an entry fee charged on top of your drinks. The minimum spend IS your drinks budget. When a club quotes £1,000 minimum spend, that means your group will receive £1,000 worth of bottles, champagne, and mixers at your table.",
          "Your minimum spend typically includes your choice of premium bottles (vodka, gin, tequila, whisky, or champagne), all mixers (juices, soft drinks, tonic, Red Bull), ice, glassware, and your reserved table and seating area for the night. You also get a dedicated table host who manages your service throughout the evening.",
        ],
      },
      {
        heading: "Minimum Spend by Venue",
        headingLevel: "h2",
        content: [
          "Most Mayfair nightclubs start at £1,000 minimum spend on a standard weekend night. However, this varies by venue, night of the week, and table position. Tape London, being the most exclusive members' club, starts from £1,500. Most other venues — Cirque Le Soir, TABU, Funky Buddha, Luna Club London, Maddox Club, Scotch of St James, Cuckoo Club, Dear Darling, BEAT London, The Box London, Selene London, and Reign London — start from £1,000.",
          "These are starting prices. Premium table positions (closer to the DJ, in the centre of the room, or in more private areas) often carry higher minimums. Friday and Saturday nights are at the top end, while Thursday and midweek nights can offer lower entry points.",
        ],
      },
      {
        heading: "Per-Person Cost Breakdown",
        headingLevel: "h2",
        content: [
          "This is where birthday tables start making financial sense. A £1,000 minimum spend split across a group is surprisingly reasonable per person — especially when you factor in that you're getting premium bottles, a reserved area, and VIP service.",
          "For a group of 6 (excluding the birthday person), that's roughly £200 per person. For 10 people, it's about £110 each. For 15 people, it drops to around £75 per head. For 20 people, you're looking at approximately £55 each. These numbers change with the minimum spend amount, but the principle holds: bigger groups mean better per-person value.",
          "Compare that to buying individual drinks at a London bar all night — at £15–18 per cocktail, you'd easily spend £100+ per person anyway, without a table, without bottle service, and without any birthday extras.",
        ],
      },
      {
        heading: "What's Not Included in the Minimum Spend",
        headingLevel: "h2",
        content: [
          "A few costs sit outside the minimum spend that you should budget for. Birthday cakes, if arranged through the club, typically cost £50–150. Gratuity for your table host is customary at 10–15% for good service. Entry for guests who aren't on the table booking may require a separate guestlist arrangement.",
          "At dinner-club venues like Maddox Club, the food bill is separate from the club minimum spend. If you're planning a dinner-then-club evening, budget for the meal on top of the table minimum.",
        ],
      },
      {
        heading: "How to Get the Best Value",
        headingLevel: "h2",
        content: [
          "There are genuine ways to get more value from your birthday table budget. Booking on a Thursday instead of Saturday can reduce minimum spends by 20–40% while still delivering a brilliant atmosphere. Midweek nights at Cirque Le Soir, Funky Buddha, and Cuckoo Club are particularly good value.",
          "Choosing your bottles wisely also matters. Premium vodka and champagne have the highest markup, while spirits like gin and tequila can stretch your minimum spend further. Your table host can advise on the best bottle choices for your group size and budget.",
          "Most importantly, get your group size confirmed early. The more people sharing the spend, the better the per-person value — and the more fun the table is. A table of 12 is always a better experience and better value than a table of 5.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the minimum spend a deposit or extra charge?",
        answer:
          "No. The minimum spend is your drinks budget, not an additional charge. A £1,000 minimum spend means you'll receive £1,000 worth of bottles and drinks at your table. Any deposit paid in advance is deducted from this amount on the night.",
      },
      {
        question: "What happens if we don't reach the minimum spend?",
        answer:
          "You'll be charged the minimum spend amount regardless of actual consumption. This is standard practice at all London clubs. To avoid waste, work with your table host to choose the right bottles for your group size.",
      },
      {
        question: "Can I pay the minimum spend by card?",
        answer:
          "Yes, all London clubs accept card payments. Most accept Visa, Mastercard, and Amex. The minimum spend is settled at the end of the night via card payment at your table.",
      },
    ],
  },
  {
    slug: "what-to-wear-birthday-london-nightclub",
    title: "What to Wear to a Birthday at a London Nightclub",
    metaTitle:
      "What to Wear to a London Nightclub Birthday | Dress Code Guide 2025",
    metaDescription:
      "Complete dress code guide for London nightclub birthdays. What to wear at Mayfair clubs, what gets you turned away, and outfit ideas for birthday celebrations.",
    excerpt:
      "A practical guide to dressing for a birthday at a London nightclub — what works, what doesn't, and how to make sure nobody in your group gets turned away at the door.",
    publishedAt: "2026-01-22",
    updatedAt: "2026-03-25",
    category: "Tips",
    readTime: "6 min read",
    sections: [
      {
        heading: "Why Dress Code Matters at London Clubs",
        headingLevel: "h2",
        content: [
          "Nothing derails a birthday faster than someone in your group being refused entry at the door. London's Mayfair clubs take their dress codes seriously — it's not optional, and door staff won't make exceptions because it's someone's birthday. Getting the dress code right is one of the most practical things you can do to ensure your night goes smoothly.",
          "The good news is that the dress codes aren't complicated. They're consistent across most Mayfair venues, and once you know the rules, you'll never have an issue.",
        ],
      },
      {
        heading: "The Standard Mayfair Dress Code",
        headingLevel: "h2",
        content: [
          "The majority of London's premium nightclubs — including Tape London, Cirque Le Soir, Reign London, TABU, Funky Buddha, Luna Club London, Maddox Club, Scotch of St James, Cuckoo Club, Dear Darling, and The Box London — enforce a smart dress code. The principle is simple: look like you've made an effort.",
          "For men, this means smart shoes (leather shoes, Chelsea boots, or clean designer trainers at some venues), fitted trousers or dark jeans (not ripped or faded), and a collared shirt, smart knitwear, or a well-fitted T-shirt under a blazer. No sportswear, no caps, no hoodies, no shorts, and no plain trainers.",
          "For women, the dress code is more flexible. Dresses, jumpsuits, skirts with nice tops, heels or smart boots all work well. The key is looking put-together and occasion-appropriate. Avoid overly casual items like flip-flops, gym leggings, or basic jeans and trainers.",
        ],
      },
      {
        heading: "Venues with Relaxed Dress Codes",
        headingLevel: "h2",
        content: [
          "BEAT London has a more relaxed dress code than the Mayfair clubs. Clean trainers are absolutely fine, smart-casual is the standard, and the emphasis is on comfort and personal style over formality. You still can't wear sportswear, gym gear, or flip-flops, but the bar is noticeably lower than Mayfair.",
          "These venues are great options for birthday groups who don't want the pressure of a strict dress code — especially if your group includes people who don't typically dress up for nights out.",
        ],
      },
      {
        heading: "Birthday-Specific Style Tips",
        headingLevel: "h2",
        content: [
          "For the birthday person, standing out is part of the fun. A statement outfit, a birthday sash, or a tiara won't get you turned away — clubs expect and welcome birthday celebrations. Just make sure the base outfit meets the dress code even without the birthday accessories.",
          "For the wider group, coordinate loosely. You don't need matching outfits, but a shared colour palette or general style (all in black, everyone in cocktail attire) photographs well and adds to the sense of occasion. Send the dress code details to your group at least a week before — don't assume everyone knows what Mayfair clubs expect.",
        ],
      },
      {
        heading: "Common Mistakes That Get People Turned Away",
        headingLevel: "h2",
        content: [
          "The most common rejections at Mayfair club doors are men wearing trainers (Nike Air Max, Air Force 1s, and similar athletic trainers are the usual culprits), sportswear of any kind, shorts (even tailored ones can be risky), and caps or hats. For women, rejections are rarer but can happen with overly casual outfits or inappropriate footwear.",
          "If you're unsure about a specific item, err on the side of dressing up rather than down. Nobody has ever been turned away from a Mayfair club for looking too smart.",
        ],
      },
      {
        heading: "What to Do If Someone Gets Turned Away",
        headingLevel: "h2",
        content: [
          "If someone in your birthday group doesn't meet the dress code, don't argue with door staff — it won't change the outcome and can make things worse. The best approach is prevention: share the dress code clearly with every guest beforehand, and specifically call out the items that will get people refused.",
          "If the worst happens, some nearby hotel lobbies and late-night shops can help with emergency outfit changes. But realistically, prevention is the only reliable solution. Be specific and direct when sharing the dress code with your group.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I wear trainers to a Mayfair nightclub?",
        answer:
          "Most Mayfair clubs don't allow standard athletic trainers. Some venues accept clean, premium designer trainers (like Common Projects or Louboutins), but it varies by venue and door staff. Smart shoes are always the safest option. BEAT London is more relaxed about trainers than the Mayfair clubs.",
      },
      {
        question: "Do London clubs have a separate dress code for birthdays?",
        answer:
          "No — the same dress code applies whether it's a birthday or a regular night. Birthday accessories like sashes and tiaras are fine, but the base outfit must meet the standard dress code requirements.",
      },
    ],
  },
  {
    slug: "how-to-surprise-birthday-london-club",
    title: "How to Plan a Surprise Birthday at a London Club",
    metaTitle:
      "How to Plan a Surprise Birthday at a London Nightclub | Step-by-Step",
    metaDescription:
      "Complete guide to planning a surprise birthday at a London club. Secret booking tips, how to coordinate with the venue, surprise arrival ideas, and common mistakes to avoid.",
    excerpt:
      "Planning a surprise birthday at a London club requires coordination, secrecy, and timing. Here's how to pull it off without the birthday person finding out.",
    publishedAt: "2026-01-05",
    updatedAt: "2026-03-25",
    category: "Planning",
    readTime: "6 min read",
    sections: [
      {
        heading: "Why Clubs Are Perfect for Surprise Birthdays",
        headingLevel: "h2",
        content: [
          "A surprise birthday at a London club is one of the most impactful ways to celebrate someone. The combination of walking into a dark venue, seeing your closest friends at a decorated VIP table with sparklers and champagne, and having the DJ shout your name creates a genuine moment of shock and joy that a restaurant or house party can't match.",
          "The logistics actually work in your favour too. You can coordinate everything through WhatsApp without the birthday person knowing, the club handles all the setup on-site, and the 'cover story' of a casual night out is completely believable.",
        ],
      },
      {
        heading: "Step 1: Book Without the Birthday Person Knowing",
        headingLevel: "h2",
        content: [
          "This is the easy part. Message us on WhatsApp and tell us it's a surprise — we'll handle the booking entirely through you. No confirmation emails to the birthday person's phone, no deposits on their card. Everything goes through the organiser.",
          "Choose the venue based on what the birthday person would love, not just what's available. If they're a hip-hop fan, TABU or Cirque Le Soir. If they love house music, Maddox or BEAT. If they appreciate luxury, Tape or Dear Darling. We can help you match their personality to the right club.",
        ],
      },
      {
        heading: "Step 2: Coordinate the Guest List Secretly",
        headingLevel: "h2",
        content: [
          "Create a separate WhatsApp group without the birthday person for coordination. Share the venue, date, dress code, arrival time, and — critically — the cover story. Everyone needs to tell the same story if asked.",
          "Collect money in advance through the group. Use a bank transfer or payment app and give people a clear deadline at least a week before. Nothing ruins a surprise faster than chasing payments at the last minute in a way the birthday person might notice.",
        ],
      },
      {
        heading: "Step 3: Plan the Arrival",
        headingLevel: "h2",
        content: [
          "The arrival is the surprise moment, so plan it carefully. The most common approach: have the guests arrive at the club 20–30 minutes before the birthday person. Everyone gets settled at the table, bottles are ready, the table host knows the plan.",
          "Then one or two close friends bring the birthday person to the club under a cover story — 'quick drink,' 'meeting friends for dinner nearby,' or 'checking out this new place.' When they walk in, they see their entire friend group at a decorated VIP table with sparklers going off. That's the moment.",
          "Coordinate with us to make sure the club door staff know the plan. They'll let the advance group in without questions and make sure the birthday person's arrival is smooth.",
        ],
      },
      {
        heading: "Step 4: The Birthday Extras",
        headingLevel: "h2",
        content: [
          "Pre-arrange all the birthday touches for maximum impact at the surprise moment. Have the table decorated before the birthday person arrives. Arrange for sparklers and a bottle presentation within minutes of their arrival. Have the birthday cake ready to bring out once the initial excitement settles.",
          "The DJ shoutout is particularly powerful for surprises — time it for shortly after arrival when the birthday person is still processing the surprise. Hearing their name over the sound system while surrounded by friends is genuinely emotional.",
        ],
      },
      {
        heading: "Common Surprise Birthday Mistakes",
        headingLevel: "h2",
        content: [
          "The biggest mistake is overcomplicating the cover story. Keep it simple and believable. The second biggest is not accounting for timing — if you tell the birthday person you're meeting at 10pm, make sure all guests are at the venue by 9:30pm at the latest. Stragglers arriving after the birthday person ruin the reveal.",
          "Don't rely on the birthday person getting ready quickly. If you know they take two hours to get dressed, factor that into your timeline. And make sure the friend bringing them knows the exact table location so there's no awkward wandering around the club looking for the group.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Can I arrange a surprise birthday at a London club without the birthday person knowing?",
        answer:
          "Yes, absolutely. We handle the entire booking through the organiser — no emails, calls, or confirmations go to the birthday person. Everything is coordinated via WhatsApp with the person planning the surprise.",
      },
      {
        question: "How early should guests arrive for a surprise birthday?",
        answer:
          "Guests should arrive 20-30 minutes before the birthday person. This allows time to get settled, have bottles ready, and brief the table host on the plan. The surprise is much more impactful when everyone is already in place.",
      },
    ],
  },
  {
    slug: "birthday-bottle-service-london-guide",
    title: "Birthday Bottle Service in London: The Complete Guide",
    metaTitle:
      "Birthday Bottle Service London | What It Is, How It Works & What to Expect",
    metaDescription:
      "Everything you need to know about birthday bottle service at London nightclubs. How it works, what bottles to choose, tipping etiquette, and how to make the most of your table.",
    excerpt:
      "A no-nonsense guide to how bottle service actually works at London clubs on your birthday — from choosing bottles to tipping your table host.",
    publishedAt: "2026-01-12",
    updatedAt: "2026-03-25",
    category: "Guide",
    readTime: "8 min read",
    sections: [
      {
        heading: "What Is Bottle Service and How Does It Work?",
        headingLevel: "h2",
        content: [
          "Bottle service means you book a reserved table at a nightclub and purchase bottles of spirits or champagne rather than individual drinks at the bar. Your table comes with a dedicated host who pours your drinks, keeps your ice fresh, and ensures your group has everything they need throughout the night.",
          "For birthdays, bottle service is the standard way to celebrate at London's premium clubs. It gives your group a home base for the evening — somewhere to keep your things, have conversations, and retreat to between trips to the dancefloor. Your table area is yours for the night; nobody else sits there.",
        ],
      },
      {
        heading: "How to Choose Your Bottles",
        headingLevel: "h2",
        content: [
          "The bottles you choose should match what your group actually drinks. There's no point ordering three bottles of vodka if half your group prefers gin. A good mix for most birthday groups of 10–15 is two bottles of a spirit (vodka is the most popular, followed by gin and tequila) and one bottle of champagne for the birthday toast.",
          "Your table host will present the bottle menu when you arrive. Prices vary by brand and venue, but as a general guide: premium vodka (Grey Goose, Belvedere) runs £300–400 per bottle, champagne (Moët, Veuve Clicquot) £300–500, and super-premium options (Dom Pérignon, Ace of Spades) £500–1,500+.",
          "A practical tip: choose one or two spirits that most of your group enjoys, add a bottle of champagne for the birthday moment, and use the rest of your minimum spend on drinks that suit the group. Your table host can advise on the best combination for your budget and group size.",
        ],
      },
      {
        heading: "The Birthday Bottle Presentation",
        headingLevel: "h2",
        content: [
          "The bottle presentation is one of the highlights of a birthday at a London club. When your bottles arrive — especially at venues like Cirque Le Soir, Tape, and The London Reign — they come with sparklers, LED displays, and sometimes a procession of staff carrying them to your table. The music drops, the sparklers light up, and the whole room's attention turns to your table.",
          "At birthday celebrations, the first bottle presentation is usually the biggest moment. The sparklers, combined with a DJ shoutout and the energy of your group cheering, creates a genuine peak moment. Some clubs, like Cirque Le Soir, incorporate their performers into the bottle delivery, making it even more theatrical.",
          "If you've arranged a birthday cake, it's often delivered alongside or shortly after the first bottle presentation. The timing creates a natural flow: sparklers and bottles, then cake and singing, then the party continues.",
        ],
      },
      {
        heading: "Table Host Etiquette and Tipping",
        headingLevel: "h2",
        content: [
          "Your table host is your main point of contact for the entire evening. They'll greet you on arrival, show you to your table, present your bottles, keep your drinks topped up, manage ice and mixers, and handle any requests. Good table hosts anticipate what you need before you ask.",
          "Tipping is customary at London clubs, typically 10–15% for good service. For birthday celebrations where your host has gone above and beyond — coordinating cake delivery, arranging extra sparklers, liaising with the DJ — 15–20% is appropriate. Tips can be added to your card payment at the end of the night.",
          "Don't hesitate to ask your table host for anything. Need more mixers? Different glasses? Want to rearrange the table area? They're there to make your night work. The best birthday table experiences come from groups who communicate with their host about what they want.",
        ],
      },
      {
        heading: "Making the Most of Your Birthday Table",
        headingLevel: "h2",
        content: [
          "Your table is a home base, not a prison. The best birthday nights involve a mix of table time and dancefloor time. Use the table for toasts, cake, conversations, and refuelling — then hit the dancefloor when the music hits right. Your bottles and belongings are safe at the table with your host.",
          "Position matters. If you're booking and have a choice, tables near the dancefloor offer more energy and easier access to the action. Tables in more secluded areas offer better conversation and a more relaxed vibe. For birthdays, dancefloor-adjacent tables are usually the better choice — you want to be where the energy is.",
          "Timing your key birthday moments (cake, toast, sparklers) for when the club is at peak energy — typically midnight to 1am — maximises the impact. Your table host can help coordinate timing with the DJ for the perfect moment.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many bottles do I need for my group?",
        answer:
          "As a rough guide, one bottle of spirits serves 15-20 mixed drinks. For a group of 10 over a full evening, 2-3 bottles of spirits plus a bottle of champagne is a comfortable amount. Your table host can help you gauge the right amount based on your group's drinking pace.",
      },
      {
        question: "Can I order more bottles during the night?",
        answer:
          "Yes, absolutely. You can add bottles at any time through your table host. Many birthday groups start with the minimum spend and add bottles as the night progresses. Additional bottles can be ordered with sparklers for extra birthday moments throughout the evening.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
