# CHAMPAGNE NOIR — Implementation Style Guide
*The binding contract for restyling every page of londonbirthdayclub.com.*

**Concept:** Editorial luxury — Vogue front-of-book meets private members' club. Warm espresso-noir, didone serif display type, gilded hairlines, fashion-grade photo treatment, expensive whitespace. Everything on the page is ivory/espresso/champagne, which makes the single WhatsApp-green CTA the only saturated object in the visual field. Restraint IS the conversion mechanism.

**Reference implementations (READ THESE FIRST):**
- `src/app/page.tsx` — the homepage: canonical example of every pattern
- `src/components/ClubCard.tsx`, `TrustSignals.tsx`, `ClubComparisonModule.tsx`, `HeroImage.tsx`, `WhatsAppCTA.tsx`, `Header.tsx`, `Footer.tsx`
- `src/app/globals.css` — all tokens + component classes

---

## 1. Tokens (Tailwind v4 utilities, already defined)

Backgrounds: `bg-noir` (page, default via body) · `bg-noir-deep` (footer/final CTA) · `bg-noir-soft` (alternating sections) · `bg-surface` / `bg-surface-raised` (only where a surface is unavoidable)
Hairlines: `border-hairline` (default) · `border-hairline-strong` (hover/active) — **never grey borders**
Text: `text-ink` (headlines/primary) · `text-ink-soft` (body) · `text-ink-faint` (meta/captions ONLY, never paragraphs)
Accent: `text-champagne` / `text-champagne-bright` (hover) / `text-champagne-deep` — **champagne is type + hairlines ONLY, never large fills**
Green: `bg-whatsapp` / `bg-whatsapp-deep` (hover) / `text-whatsapp-ink` (dark ink ON green) — green appears ONLY on WhatsApp CTAs
Fonts: `font-display` (Bodoni Moda) · `font-sans` (Hanken Grotesk)
Easing: `ease-[var(--ease-lux)]`

Legacy classes (`text-gold`, `bg-bg-card`, `border-border`, `text-text-secondary`, `bg-bg-primary`, `bg-bg-secondary`, `text-text-muted`, `text-text-primary`, `border-border-light`, `bg-bg-card-hover`) are TEMPORARY aliases. **Your job is to remove every one of them from your page.**

## 2. Type scale (exact recipes)

| Role | Classes |
|---|---|
| Hero h1 | `font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink` |
| Section h2 | `font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink` |
| Card/sub h3 | `font-display font-medium text-xl text-ink` (club names: `font-display font-semibold text-[1.375rem] leading-snug text-ink`) |
| FAQ question | `font-display font-medium text-lg sm:text-xl text-ink` |
| Eyebrow | `font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne` |
| Body | `font-sans text-base leading-[1.8] text-ink-soft` |
| Lead/intro | `font-sans text-[1.0625rem] leading-[1.8] text-ink-soft` |
| Small/meta | `font-sans text-[0.8125rem] leading-relaxed tracking-[0.02em] text-ink-faint` |
| Micro-caps meta | `font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint` |
| Didone numeral (prices/stats/steps/ranks) | `font-display italic font-medium text-champagne` at 1.5–4× context size |

**Type rules (binding):**
1. Bodoni (`font-display`) NEVER below 18px, NEVER in paragraphs — display, headings, numerals only.
2. Every h1 and section-level h2 gets exactly ONE italic phrase: `<em className="italic text-champagne font-normal">…</em>` around the emotional word(s). Never more than one per heading.
3. Every section h2 is preceded by an eyebrow (see §4). No orphan headings.
4. All prices/min-spends/stats/step-numbers/rank-numbers become didone numerals.
5. Headings max `font-medium`/`font-semibold` — never `font-bold`/`font-black`.
6. Section headers are LEFT-ALIGNED (mobile AND desktop). Exception: the final bottom-CTA section of a page may be centered.

## 3. Shape & depth

- Default `rounded-none`. Buttons/badges: `rounded-[2px]`. **BANNED: `rounded-xl`, `rounded-lg`, `rounded-full`** (only exception: tiny decorative dots/lozenges).
- Depth via hairlines and frames, not shadows or glows.
- No boxed cards. The old `bg-bg-card border border-border rounded-xl p-6` pattern becomes an **editorial list-panel**: `border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500` (add `group` + title `group-hover:text-champagne-bright transition-colors duration-300` when the panel is a link).

## 4. Section anatomy (the canonical pattern)

```tsx
<section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 [bg-noir-soft on alternates]">
  <div className="max-w-6xl mx-auto">   {/* 3xl for prose/FAQ, 6xl standard, 7xl for card grids */}
    <div className="mb-14 sm:mb-20" data-reveal>
      <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
        <span className="hairline-draw block h-px w-10 bg-champagne/60" />
        Eyebrow Label
      </p>
      <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
        Heading With <em className="italic text-champagne font-normal">Accent</em>
      </h2>
      <p className="mt-5 font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-xl">Intro…</p>
    </div>
    …content…
  </div>
</section>
```

- Between major sections place the gilded divider: `<div className="divider-gilt" />` — replaces hard bg-band edges. Don't stack a divider against a `bg-noir-soft` boundary AND alternate bg at the same seam more than once; look at homepage rhythm.
- Eyebrow labels: short (1–3 words), echo the section topic ("The Venues", "The Service", "Good to Know", "Budget", "The Verdict"). Do not invent long copy.

## 5. Component recipes

**Photo hero (pages with image heroes):**
```tsx
<section className="relative min-h-[64vh] img-editorial flex items-end overflow-hidden">
  <Image src={…} alt={…} fill className="object-cover kenburns" priority sizes="100vw" />
  <div className="absolute inset-0 [background:var(--grad-hero)]" />
  <div className="grade" />
  <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pb-20">
    <div className="max-w-3xl">
      {/* eyebrow → h1 (with one <em>) → lead → CTA row */}
    </div>
  </div>
</section>
```
- LEFT-aligned content. Delete old `bg-gradient-to-t from-black…` overlays, `text-white`, and `[text-shadow:…]` hacks — the scrim + crush-zone handles legibility. Text over imagery sits only in the bottom portion where the scrim is near-opaque (the `items-end` + `pb` pattern guarantees this).
- Homepage uses `min-h-[88vh]`; interior pages `min-h-[64vh]`; keep roughly the page's existing scale intent.
- If the page uses the shared `<HeroImage>` component, it already implements this — just restyle the children you pass (eyebrow + h1 + lead + CTA, left-aligned, no text-center).

**Page top rule:** `<main>` no longer has top padding. Full-bleed heroes sit under the transparent header (the `pt-40` inside the hero handles clearance). If your page does NOT start with a full-bleed hero, give the first section `pt-36 sm:pt-40` (instead of `py-24`'s top) so content clears the fixed 72px header.

**CTAs:** always via `<WhatsAppCTA …/>`. For hero + bottom CTAs add `size="large"` and `microcopy="Free service · Replies in minutes"`. Never hand-roll a green button. Keep every existing `message={…}` and `label` prop text unchanged.

**Ghost/secondary button:**
`inline-flex items-center justify-center gap-2 border border-hairline-strong hover:border-champagne text-champagne hover:text-champagne-bright font-sans text-[0.8125rem] font-bold uppercase tracking-[0.16em] px-9 py-[15px] rounded-[2px] transition-colors duration-300`

**Text link:** `text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200`
**Arrow link (no underline):** `inline-flex items-center gap-2 text-champagne text-[0.8125rem] font-semibold uppercase tracking-[0.14em]` with arrow span `transition-transform duration-400 group-hover:translate-x-1.5` (needs `group` on the parent link).

**FAQ (hairline registry — replaces card stacks):**
```tsx
<div className="divide-y divide-hairline border-y border-hairline" data-reveal>
  {faqs.map(faq => (
    <div key={faq.question} className="py-7">
      <h3 className="font-display font-medium text-lg sm:text-xl text-ink flex gap-5">
        <span className="font-display italic text-champagne/70 select-none">Q.</span>
        {faq.question}
      </h3>
      <p className="mt-3 pl-[2.15rem] font-sans text-base leading-[1.8] text-ink-soft">{faq.answer}</p>
    </div>
  ))}
</div>
```

**Data tables / detail rows:** table or row-list with `border-y border-hairline`, header cells `font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-faint py-4 border-b border-hairline-strong`, rows `border-b border-hairline hover:bg-noir-soft/70 transition-colors duration-300`, cells `py-5 pr-6 font-sans text-[0.9375rem] text-ink-soft`, first/name cell `font-display font-medium text-lg text-ink`, price cells `font-display italic text-lg text-champagne whitespace-nowrap`. NO zebra striping (remove `i % 2` alternating bg patterns).

**Ranked list items (top-5 patterns):** replace boxed cards with hairline panels. Rank number becomes a didone numeral: `font-display italic font-medium text-4xl text-champagne/60 leading-none` (e.g. "01"), layout `flex gap-6 border-t border-hairline pt-6` with content beside the numeral.

**Step lists (numbered how-it-works):** numeral `font-display italic font-medium text-6xl sm:text-7xl text-champagne/40 leading-none mb-5` above `font-display font-medium text-xl text-ink` title + body. (See homepage How It Works.)

**Stat tiles:** `border-l border-hairline pl-6 py-2` + didone stat `font-display italic font-medium text-4xl sm:text-5xl text-champagne leading-none` + label `mt-3 font-sans text-[0.6875rem] uppercase tracking-[0.24em] text-ink-faint`.

**Badges/pills → engraved labels:** `inline-flex items-center gap-1.5 border border-hairline-strong rounded-[2px] px-2.5 py-1 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-champagne` (on imagery add `bg-noir-deep/70 backdrop-blur-sm`).

**Non-hero images in content:** wrap in `frame-mat img-editorial relative … overflow-hidden` + `<div className="grade" />` after the Image. Keep existing aspect classes unless clearly better.

**Status/warning (closed venue banner):** no bright reds. Use muted rust on noir: container `border-y border-[#8a4432]/40 bg-[#2a120b]/40`, heading `text-[#d98d75]`, body `text-ink-soft`. Alternative links inside use engraved-label style.

## 6. Motion

- Add `data-reveal` to section headers and major content blocks (grids get ONE data-reveal on the container, not per item; up to 4 siblings may use `data-reveal data-reveal-delay={i * 90}`).
- Transitions: colors `duration-200/300`, transforms `duration-500`+ with `ease-[var(--ease-lux)]`. Image hover zoom: `scale-[1.04]` over `duration-[900ms]`.
- Never add new self-animating elements. The only ambient animations are the CTA sheen (built into `.cta-wa`), hero ken-burns, and the homepage ticker.

## 7. Hard bans (any one of these = review failure)

1. `rounded-xl` / `rounded-lg` / `rounded-full` / pill shapes
2. Gold/champagne FILLS (backgrounds) — champagne is type + hairline only
3. Grey borders (`border-border` legacy, `#222`-style greys)
4. `font-bold`/`font-black` on Bodoni headings; Bodoni in body copy or <18px
5. Green anywhere except WhatsApp CTAs; more than one green object visible per mobile viewport
6. Boxed `bg-*-card` + border + radius card pattern
7. Centered section headers (except final bottom-CTA sections)
8. `text-white` / `text-black` / raw hex colors outside the defined palette
9. Icon sets / emoji decoration (existing content emoji like ⚠ may be removed; type and rules carry the UI). The star ✶/★ list bullets become `<span className="font-display italic text-champagne/70">✦</span>` or a champagne en-dash — pick one per page and be consistent
10. Zebra striping, `[text-shadow:…]`, black gradient overlays (`from-black`)

## 8. Content-integrity rules (absolute)

- ZERO changes to user-visible copy: headings, paragraphs, FAQ text, labels, link text, alt text. (Exceptions explicitly allowed: NONE. Eyebrow labels are the only NEW text you may add, and they must be short generic section labels.)
- ZERO changes to URLs: every `href`, every `Link`, every `getWhatsAppLink`/`WhatsAppCTA message` prop stays byte-identical.
- Keep ALL schema components (`FAQSchema`, `BreadcrumbSchema`, `ArticleSchema`, `ItemListSchema`) and `metadata` exports untouched.
- Keep all `Image` `src`/`alt`/`priority`/`sizes` props (className treatment changes are the point).
- Do not add/remove sections; do not reorder content; do not create/delete files.
- Do not run builds or dev servers. Edit only your assigned file.
