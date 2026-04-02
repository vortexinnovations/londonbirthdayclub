# Automated Blog Post Publisher — London Birthday Club

This prompt is executed by an automated scheduler. Each run creates exactly ONE new blog post. You have NO prior context about this site beyond what is written here.

---

## SAFETY CONSTRAINT — FILES YOU MAY MODIFY

You may ONLY modify these files:

1. `src/lib/blog.ts` — add one new BlogPost entry to the `blogPosts` array
2. `src/lib/images.ts` — add one new image mapping to the `images.blog` object
3. `src/lib/used-images.json` — append the chosen image filename

**You must NOT modify any other file.** No page files, no components, no config, no layout, no styles, no clubs.ts. The sitemap, blog listing page, and blog post pages are all auto-generated from the `blogPosts` array — they require zero manual updates.

---

## SITE IDENTITY

**London Birthday Club** (londonbirthdayclub.com) is a birthday celebration and group-booking planning site for London's premium nightclubs. It targets people planning birthday nights out, hen parties, milestone celebrations, and group bookings at Mayfair and central London venues. The tone is premium, knowledgeable, warm, and insider — like a well-connected concierge who genuinely wants your night to be perfect. Never salesy, never cheesy, never generic nightlife filler.

- **Repository:** `vortexinnovations/londonbirthdayclub`
- **Domain:** londonbirthdayclub.com
- **Framework:** Next.js 16 (App Router, TypeScript, static site generation)
- **WhatsApp number:** 447880662708
- **WhatsApp CTA link format:** `https://wa.me/447880662708?text=...`

---

## STEP 1 — AUDIT EXISTING CONTENT

Before choosing a topic, read what already exists to avoid duplication.

**Read all existing blog titles and slugs:**

```bash
grep -E "slug:|title:" src/lib/blog.ts | grep -v "string\|interface\|function\|metaTitle\|metaDescription" | paste - - | head -40
```

**Read all existing categories and their counts:**

```bash
grep 'category:' src/lib/blog.ts | grep -v "string" | sed 's/.*category: "//' | sed 's/".*//' | sort | uniq -c
```

After reading the output, identify:
- Topics already covered (do NOT duplicate)
- Themes used in the last 3-5 posts (avoid repeating)
- Which categories are under-represented (favour those)
- What birthday/celebration subtopics are missing entirely

---

## STEP 2 — CHOOSE TODAY'S TOPIC

Select ONE topic that:
- Is NOT already covered by any existing blog post
- Is NOT too similar to an existing post's angle
- Fits this site's role (birthday/celebration/group nightlife — NOT generic nightlife)
- Targets a real search intent that someone planning a birthday would have
- Can be written with genuine expertise and useful detail

**Rotate through these categories** (use the exact strings):

### "Planning" — logistics and preparation
- How to collect money from a birthday group
- What to do if someone drops out of a birthday booking
- Birthday timeline: what to organise and when
- How to coordinate a large birthday group on WhatsApp
- Pre-drinks before a London club birthday

### "Guide" — comprehensive how-to and deep-dive
- Guide to birthday celebrations by budget tier
- Guide to choosing between Mayfair and Soho for a birthday
- What happens at a London club after midnight
- How London club door policies work for birthday groups
- Guide to birthday cake at London clubs

### "Tips" — practical advice and insider knowledge
- Tips for the birthday organiser (not the birthday person)
- Tips for first-time London club visitors
- How to get the best table position at a London club
- Tipping etiquette at London nightclubs
- How to handle dietary requirements for club birthdays

### "Ideas" — inspiration and creative approaches
- Birthday themes that work at London clubs
- Alternative birthday celebrations beyond the club
- Birthday surprise ideas that actually work at clubs
- Day-to-night birthday ideas for summer in London
- Birthday activity combos: escape rooms, cocktail classes, then club

### "Venue Guide" — club-specific content
- Comparing two specific clubs for birthdays (e.g. Cirque vs The Box)
- Best clubs for a specific music genre birthday
- Clubs with the best birthday bottle presentations
- Best clubs for a birthday dinner and drinks
- Hidden gems: underrated clubs for birthdays

---

## STEP 3 — SELECT AN IMAGE FROM SUPABASE

Images are stored in a Supabase public bucket. Blog posts reference images via `/gallery/images/FILENAME`.

**SETUP REQUIREMENT:** The project root must contain a `.env` file with `SUPABASE_SECRET_KEY` set to the Supabase secret key for this project. Ask the project owner if you do not have the key. This file is gitignored and must never be committed.

**Fetch the full image list (reads key from .env at runtime):**

```bash
node -e "
const fs = require('fs');
const env = Object.fromEntries(fs.readFileSync('.env','utf8').trim().split('\n').map(l=>l.split('=')).map(([k,...v])=>[k,v.join('=')]));
const https = require('https');
const url = 'https://hgsgysaxiraaezeneshr.supabase.co/storage/v1/object/list/gallery';
const options = {
  method: 'POST',
  headers: {
    'apikey': env.SUPABASE_SECRET_KEY,
    'Authorization': 'Bearer ' + env.SUPABASE_SECRET_KEY,
    'Content-Type': 'application/json',
  },
};
const req = https.request(url, options, (res) => {
  let body = '';
  res.on('data', (c) => body += c);
  res.on('end', () => {
    const files = JSON.parse(body);
    console.log(JSON.stringify(files.map(f => f.name)));
  });
});
req.write(JSON.stringify({ prefix: '', limit: 1000, offset: 0 }));
req.end();
"
```

**Read used images:**

```bash
cat src/lib/used-images.json
```

**Selection logic:**

1. Parse the bucket file list and the used-images.json array
2. Filter out any filenames already in used-images.json
3. If ALL images are used, reset: clear used-images.json to `[]` and start fresh
4. From the unused images, pick one using this deterministic method: sort the unused list alphabetically, then select index = `(day_of_year * 7 + existing_post_count) % unused_count`
5. The chosen filename goes into:
   - `src/lib/images.ts` as: `"your-blog-slug": "/gallery/images/CHOSEN_FILE.jpg",`
   - `src/lib/used-images.json`: append `"CHOSEN_FILE.jpg"` to the array
6. **Filenames are case-sensitive.** Use the EXACT filename from the bucket.

---

## STEP 4 — GATHER VALID INTERNAL LINKS

You MUST include 3-6 internal links in each blog post. You may ONLY link to pages that actually exist.

**Static pages (always valid):**

- `/birthday-clubs-london`
- `/birthday-table-booking-london`
- `/best-birthday-clubs-london`
- `/birthday-by-age`
- `/birthday-by-night`
- `/plan-birthday-london-club`
- `/book-birthday`
- `/group-night-out-london`
- `/vip-birthday-tables-london`
- `/18th-birthday-clubs-london`
- `/21st-birthday-clubs-london`
- `/30th-birthday-night-out-london`
- `/birthday-guestlist-vs-table-booking`
- `/best-clubs-for-large-groups-london`
- `/how-to-plan-a-birthday-night-in-mayfair`
- `/birthday-table-prices-london`

**Club pages (always valid):**

- `/clubs/tape-london`
- `/clubs/cirque-le-soir`
- `/clubs/reign-london`
- `/clubs/tabu-london`
- `/clubs/funky-buddha`
- `/clubs/cuckoo-club`
- `/clubs/scotch-of-st-james`
- `/clubs/dear-darling`
- `/clubs/maddox-club`
- `/clubs/the-box-london`
- `/clubs/luna-club-london`
- `/clubs/selene-london`
- `/clubs/beat-london`

**Blog post pages — fetch dynamically:**

```bash
grep 'slug:' src/lib/blog.ts | grep -v "string\|function" | sed 's/.*slug: "//' | sed 's/".*//' | awk '{print "/blog/" $0}'
```

**CRITICAL:** Never link to a URL that does not exist. Never invent URLs. Only use URLs from the lists above or the dynamic blog slug output.

**Link format:** All internal links are relative paths with no trailing slash. Example: `/birthday-table-prices-london` not `https://londonbirthdayclub.com/birthday-table-prices-london/`.

---

## STEP 5 — WRITE THE POST

### File 1: `src/lib/blog.ts`

**Where to insert:** Add the new blog post object as the LAST entry in the `blogPosts` array — immediately before the closing `];` on the last line of the array.

Find the insertion point:

```bash
grep -n "^];" src/lib/blog.ts
```

Insert your new entry BEFORE that line. The previous entry ends with `},` — your new entry starts with `{` on the next line.

**Exact format (copy this template precisely):**

```typescript
  {
    slug: "your-kebab-case-slug",
    title: "Your Blog Post Title",
    metaTitle: "Your SEO Title Tag (50-60 chars)",
    metaDescription: "Your meta description targeting the primary keyword. 120-155 characters. Compelling, specific, includes a benefit.",
    excerpt: "One or two sentence summary for the blog listing card. Should make someone want to click through.",
    publishedAt: "YYYY-MM-DD",
    updatedAt: "YYYY-MM-DD",
    category: "Planning",
    readTime: "7 min read",
    sections: [
      {
        heading: "First H2 Section Heading",
        headingLevel: "h2" as const,
        content: [
          "First paragraph of this section. Each paragraph is a separate string in the array.",
          "Second paragraph. Include internal links as plain text references like 'check our birthday table prices guide' — the blog template renders these as plain text, not HTML links.",
        ],
      },
      {
        heading: "Second H2 Section Heading",
        headingLevel: "h2" as const,
        content: [
          "Content paragraphs here.",
        ],
      },
    ],
    faqs: [
      { question: "A question someone would ask about this topic?", answer: "A helpful, specific answer. 1-3 sentences." },
      { question: "Another question?", answer: "Another answer." },
      { question: "A third question?", answer: "A third answer." },
    ],
  },
```

**Field rules:**

| Field | Rules |
|-------|-------|
| `slug` | Kebab-case, 4-8 words, includes primary keyword, unique across all posts |
| `title` | 40-70 characters, includes primary keyword near the start |
| `metaTitle` | 50-60 characters, includes primary keyword + year or qualifier |
| `metaDescription` | 120-155 characters, includes primary keyword, has a benefit/hook |
| `excerpt` | 1-2 sentences, compelling, matches the title's promise |
| `publishedAt` | Today's date as YYYY-MM-DD |
| `updatedAt` | Today's date as YYYY-MM-DD |
| `category` | One of EXACTLY: `"Planning"`, `"Guide"`, `"Tips"`, `"Ideas"`, `"Venue Guide"` |
| `readTime` | Format: `"N min read"` where N is 5-8 based on content length |
| `sections` | 4-6 sections, each with `heading`, `headingLevel: "h2" as const`, and `content` array |
| `content` | Array of paragraph strings. 2-3 paragraphs per section. Total article: 800-1200 words |
| `faqs` | 3-4 FAQ items. Questions should be things real people search for |

**Content quality rules:**
- Write in premium British English (colour, organise, favourite, etc.)
- No emojis, no exclamation marks in headings, no clickbait
- Be genuinely helpful — specific advice, real numbers, honest assessments
- Mention 3-5 specific club names where relevant (use their exact names from the club pages)
- Include the WhatsApp CTA naturally in the final section: "Message us on WhatsApp and we'll handle everything"
- Never make guaranteed-entry claims
- Never invent prices — use "from £1,000" as the standard baseline
- Escape apostrophes in content strings: use `\\'` or restructure the sentence to avoid them. Alternatively, use Unicode: `\\u2019` for curly apostrophes.

### File 2: `src/lib/images.ts`

**Where to insert:** Add a new entry to the `images.blog` object, before the closing `},` of the blog section.

```typescript
    "your-blog-slug": "/gallery/images/CHOSEN_FILE.jpg",
```

The slug MUST exactly match the slug in blog.ts.

### File 3: `src/lib/used-images.json`

Append the chosen image filename to the JSON array. Ensure valid JSON (proper commas, no trailing comma on last element).

---

## STEP 6 — COMMIT AND PUSH

```bash
git add src/lib/blog.ts src/lib/images.ts src/lib/used-images.json
git commit -m "Add blog post: [title of post]

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
git push origin master
```

---

## STEP 7 — VERIFY

After writing, confirm:

- [ ] The slug is unique (not used by any existing post)
- [ ] The category is one of the 5 exact valid strings
- [ ] The `publishedAt` and `updatedAt` are today's date
- [ ] The image filename exists in the Supabase bucket (case-sensitive match)
- [ ] The image is not already in used-images.json (before you added it)
- [ ] The image mapping slug in images.ts matches the blog slug exactly
- [ ] All internal links reference real, existing pages
- [ ] The content has 4-6 sections with 2-3 paragraphs each
- [ ] The FAQs have 3-4 items with real questions people would search
- [ ] No TypeScript syntax errors (proper commas, quotes, `as const`)
- [ ] The entry is placed before the `];` closing bracket
- [ ] The `readTime` format is `"N min read"`
- [ ] The metaTitle is under 60 characters
- [ ] The metaDescription is under 155 characters
- [ ] Run `npm run build` — it must complete with zero errors

---

## ABSOLUTE RULES

### FILE SAFETY
- Only modify `src/lib/blog.ts`, `src/lib/images.ts`, and `src/lib/used-images.json`
- Never modify page components, layout, config, clubs.ts, or any other file
- Never delete existing blog posts or image mappings
- Never modify existing entries — only add new ones

### CONTENT RULES
- Never duplicate an existing topic or angle
- Never write generic nightlife content that doesn't relate to birthdays/celebrations
- Never use emojis in the article
- Never make up club names — only reference the 13 clubs listed in Step 4
- Never fabricate prices beyond the established "from £1,000" baseline
- Never claim guaranteed entry — clubs have door policies
- Never write fewer than 800 words or more than 1200 words
- Never skip the FAQ section
- Always include 3-6 internal links to real pages
- Always use `"h2" as const` for headingLevel (not just `"h2"`)

### SEO BEST PRACTICES
- Title tag: include primary keyword in first 40 characters
- Meta description: include primary keyword, add a benefit, stay under 155 chars
- H2 headings: include relevant keywords naturally (not stuffed)
- First paragraph: answer the search query directly within the first 2 sentences
- Internal links: use descriptive anchor text concepts (not "click here")
- FAQs: target "People Also Ask" style questions with concise, direct answers
- Slug: include the primary keyword, keep it 4-8 words
- One clear search intent per article — don't try to cover everything
