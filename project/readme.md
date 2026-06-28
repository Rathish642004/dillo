# Dillo Uniforms Design System

> **The Perfect Uniform Makers** — a B2B uniform manufacturer.
> This design system codifies Dillo's brand into tokens, components and full
> page kits for the company's marketing website (Home, About, Products,
> Portfolio, Contact).

---

## Company context

Dillo Uniforms manufactures and supplies uniforms across five verticals:

| Vertical              | Notes                                                                |
| --------------------- | -------------------------------------------------------------------- |
| **Healthcare**        | Scrubs, lab coats, ward uniforms — clinics & hospitals               |
| **Hospitality**       | Hotel front-of-house, F&B, housekeeping, chef whites                 |
| **Educational**       | School uniforms — shirts, trousers, skirts, blazers, sportswear      |
| **Industrial / PPE**  | Coveralls, work shirts, hi-vis, factory floor                        |
| **Corporate T-Shirts**| Customised tees for events, agencies, internal branding              |

Customers reach Dillo through a quote workflow — they describe their
requirement (industry, quantity, customisation) and a sales rep follows up by
phone / WhatsApp. Trust signals (years in business, units delivered, named
client logos) are central to conversion.

## Sources used

- **Brand mark:** `uploads/WhatsApp Image 2026-06-28 at 18.52.10.jpeg` →
  copied to `assets/logo-dillo.jpg`. Bold red rectangular banner with white
  "DILLO" wordmark (the "i" dot is shaped like a tailor's needle); deep navy
  serif tagline "The Perfect Uniform Makers" beneath, finished with a red
  underline rule.
- No codebase, Figma, or additional style references were supplied. Every
  visual decision below was derived from the brand mark and the product
  brief.

---

## File index

```
styles.css              ← consumers link this one file
readme.md               ← this file
SKILL.md                ← Agent Skill stub (downloadable)

tokens/
  fonts.css             — Google Fonts imports
  colors.css            — brand red & navy, neutrals, semantics
  typography.css        — type scale, weights, families
  spacing.css           — 4px grid, section rhythm, radii
  elevation.css         — shadows, focus rings, motion
  base.css              — element resets, .dillo-eyebrow, .dillo-rule

assets/
  logo-dillo.jpg        — original brand mark (bitmap, awaiting SVG)

components/
  forms/                — Button, IconButton, Input, Textarea, Select
  surfaces/             — Card, ProductCard, StatCard, TestimonialCard
  navigation/           — NavBar, Footer, WhatsAppFab
  feedback/             — Badge, SectionHeader, ProcessStep
  layout/               — Section

ui_kits/
  marketing-website/
    index.html          — interactive click-thru (Home → About → Products → Portfolio → Contact)
    photos.js           — image URL map (swap for client photography)
    HomePage.jsx
    AboutPage.jsx
    ProductsPage.jsx
    PortfolioPage.jsx
    ContactPage.jsx
    README.md

guidelines/             — foundation specimen cards (Brand, Type, Colors, Spacing)
```

Compiled outputs `_ds_bundle.js`, `_ds_manifest.json` and the adherence
config are produced automatically — do not edit by hand.

---

## CONTENT FUNDAMENTALS

### Voice

Dillo is a craftsman, not a tech startup. The voice is **confident,
factual and proud of the work** — never breathless, never "playful", never
ironic. Think of an experienced workshop manager walking a client through
the floor.

- **Pronouns:** "we" for Dillo, "you" for the buyer. Avoid "they".
- **Tense:** present — "We stitch.", "We deliver.", not "We will…".
- **Length:** short, declarative sentences. One idea per line on the web.
- **Numbers are heroes:** counts of units delivered, years in business,
  industries served — these earn their own large display.
- **Verbs:** _make, deliver, stitch, fit, equip, supply, source, finish_.
  Avoid _craft, curate, empower, transform_.

### Casing

- **Section eyebrows:** `UPPERCASE`, tracked +160 (`var(--ls-eyebrow)`), red.
  Example: `WHY DILLO`, `HOW IT WORKS`.
- **Headlines:** Sentence case. _"Built to last. Delivered on time."_
- **Buttons:** Sentence case. _"Get a quote"_, _"View products"_.
- **Body:** Sentence case.

### Tone examples (write like this)

> ✓  "Twenty years stitching uniforms for India's hospitals, hotels and
> classrooms. Tell us what you need — we'll quote within 24 hours."
>
> ✓  "Healthcare uniforms that hold up to a hundred wash cycles."
>
> ✓  "From 50 to 50,000 pieces. Same quality control either way."

### Tone counter-examples (don't)

> ✗  "Imagine uniforms that empower your team's potential."
> ✗  "Crafted with love by passionate makers."
> ✗  "Let's revolutionise workwear together!"

### Emoji & exclamation

- **No decorative emoji in product copy.**
- The Contact page uses functional unicode glyphs (📍 📞 📧 🕒 📱) only
  because the original brief lists them — they label rows, never appear
  inside prose.
- Exclamation marks: avoid. Confidence does not shout.

### CTAs

| Surface         | Primary CTA               | Secondary CTA          |
| --------------- | ------------------------- | ---------------------- |
| Hero            | _Get a quote_             | _View our work_        |
| Product page    | _Request a sample_        | _Talk to us_           |
| Portfolio item  | _Build something similar_ | —                      |
| Contact         | _Send request_            | _WhatsApp us_          |

---

## VISUAL FOUNDATIONS

The brand mark sets every rule below. Two colours do almost all the work.

### Palette

- **Dillo Red `#D7011F`** — the primary brand colour, sampled from the
  banner. Used for: the logo plate, primary buttons, eyebrow text, the
  signature 4-8px **red rule** under headings and section bands, stat
  callouts, hover accents.
- **Dillo Navy `#0F1F4D`** — sampled from the tagline. The default text
  colour. Also: dark sections (footer, "Numbers" band), serif quote
  copy, large numerals.
- **Off-white `#FAFAFB`** — alternate band background, never pure 50%
  grey.
- **Neutrals** — cool, biased toward navy. Pure black is never used;
  the darkest text is `--neutral-900` (`#0C0E13`).

### Type system

- **Display — Archivo Black.** Used at `--fs-display-md` and above. Sits
  on hero banners and section-starter callouts. Carries the same blocky,
  geometric confidence as the DILLO wordmark.
- **Headings & UI — Archivo (700/800).** All `<h*>`, button labels,
  eyebrows.
- **Serif accent — Source Serif 4.** Echoes the logo tagline. Used
  _sparingly_ — pull quotes, the tagline itself, the lead paragraph of an
  About page. Never for UI.
- **Body — Public Sans (400/500).** All paragraph copy, form fields,
  table data.

### Backgrounds

- **Flat colour bands.** No gradients beyond a single navy → navy-600
  protection gradient on hero imagery (so white text stays legible).
- **No hand-drawn illustrations.** This is a manufacturing brand.
- **Full-bleed photography** in heroes — close-up product or worn-in-context
  shots. Imagery has a warm neutral grade; never b&w, never heavy filter.
  A subtle navy scrim sits on top.
- **Repeating texture** is reserved for one place: the footer top edge has
  a 4px red rule (`--rule-thickness`) running full-bleed across.

### Borders, radii, shadows

- **Radii are restrained.** Cards & inputs `--radius-lg` (8px), buttons
  `--radius-md` (4px). The brand is industrial — pill shapes are limited
  to badges and the WhatsApp FAB.
- **Borders** are 1px `--border-default` on neutral cards; 2px
  `--border-brand` (red) on hover or active state.
- **Shadows** are soft and navy-tinted (`rgba(15,31,77,…)`), never warm.
  `--shadow-md` for resting cards, `--shadow-lg` on hover.

### Hover / press

- **Hover (button, link, card):** background _darkens_ by one step
  (e.g. `--dillo-red-500` → `--dillo-red-600`); cards lift to
  `--shadow-lg` and gain a 2px red border on the bottom edge.
- **Press:** translateY(1px) and reduce shadow by one step. No scale
  transforms.
- **Transitions:** 200ms `--ease-out` on colour, transform and shadow.
  Never spring/bounce.

### Layout

- **1240px container max.** Outer gutter 24px, inner column gap 24-32px.
- **Section rhythm:** 96px vertical padding on desktop, 64px on smaller.
- **The red rule is structural.** Every section header carries a 64px ×
  4px red bar to its left or beneath it (see `.dillo-rule`). Every dark
  band ends with a full-width 4-8px red rule.
- **Fixed elements:** the navigation bar is sticky and gains a 1px
  bottom border once scrolled. A floating green WhatsApp button is
  fixed bottom-right on every public page.

### Transparency & blur

- **Used once:** when an image sits behind a hero headline, a 55% navy
  scrim (`--surface-overlay`) lies between image and text. No glassmorphic
  blur, no backdrop-filter elsewhere.

### Imagery direction

- Warm, neutral grade — slight golden cast in factory shots; cool but
  not blue in hospital scenes.
- Always show product **in context** (a doctor at a counter, a chef
  plating, a student walking) rather than ghost mannequins on white.
- No stock-photo people staring at camera.

---

## ICONOGRAPHY

No bespoke icon set ships with Dillo. The system uses **[Lucide](https://lucide.dev)
v0.469.0** loaded from CDN — a clean, neutral, 1.5px stroke set that pairs
well with the brand's industrial type without competing with the red. _This
substitution is flagged_; if Dillo has a preferred icon kit (Material Symbols?
Phosphor?) please share it and we'll swap.

- **Stroke weight:** 1.5px default, 2px when used inside a red filled
  button for contrast.
- **Sizing:** 16 / 20 / 24 px in-line; 32 / 40 px when used as the entire
  visual of a step/feature row.
- **Colour:** inherits `currentColor` — typically `--text-primary` (navy)
  on light backgrounds, white on dark bands, red only when used as a
  brand bullet.
- **No emoji in product copy** — see Content Fundamentals. The Contact
  page is the one exception (functional row labels only).
- **No bespoke SVG illustration.** Photography does that job. If a spot
  illustration is needed (e.g. a "How it works" diagram), build it from
  Lucide glyphs + the red rule, not a hand-drawn vector.

Common glyphs in use:

```
Healthcare         Stethoscope, HeartPulse
Hospitality        ChefHat, BedDouble, ConciergeBell
Education          GraduationCap, School
Industrial         HardHat, Wrench, ShieldCheck
Corporate          Shirt, Building2
Process            ClipboardList, Scissors, Truck, BadgeCheck
Contact            Phone, Mail, MapPin, Clock, MessageCircle
```

---

## Index of cards & components

(Generated — see the Design System tab.)
- **Brand** — logo lockups, the red rule, eyebrow specimen
- **Colors** — primary, navy, neutrals, semantics
- **Type** — display, headings, body, serif accent, eyebrow
- **Spacing** — 4px scale, section rhythm
- **Components** — Button, IconButton, Input, Card variants, NavBar, Footer
- **Marketing Website** — full kit preview (Home above-fold)
