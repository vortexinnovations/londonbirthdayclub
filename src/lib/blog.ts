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
