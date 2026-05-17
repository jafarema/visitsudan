# Visit Sudan — Design System

A cinematic tourism brand system for **Visit Sudan**, presenting Sudan as a premium, emotional, and visually powerful travel destination. The system supports a full tourism website (Home, Destinations, Experiences, Culture & Stories, Travel Guide, Gallery, Plan Your Trip).

## Sources

No codebase, Figma, or slide deck was attached for this project. The system was built from the written brief alone, with these inputs:

- Brand pillars: Ancient Nubian kingdoms, Meroë pyramids, golden desert landscapes, Nile sunsets, Red Sea coastlines, Sudanese coffee & markets, hospitality.
- Reference moods: premium travel magazines (Condé Nast Traveler, Suitcase, Cereal), modern cinematic websites (Framer/Webflow editorial), AI-era landing pages.
- Color palette and typography direction supplied in the brief (see `colors_and_type.css`).

> **All photography in this kit is placeholder.** Real cinematic photography of Sudan (Meroë, Jebel Barkal, Nile, Suakin, Khartoum souks) is required before launch. The system uses warm sepia/desert toned image slots in the meantime.

## Brand personality

Cinematic · Premium · Warm · Adventurous · Editorial · Emotional · Minimal but dramatic · Culturally rich · Spacious · Immersive.

Core feeling for the user: *"I did not know Sudan looked like this."*

## Index

```
README.md                  ← this file
SKILL.md                   ← agent skill manifest (Claude Code compatible)
colors_and_type.css        ← color + type CSS variables (foundational + semantic)
fonts/                     ← (Google Fonts loaded via CDN — see Type notes)
assets/                    ← logos, icon set, placeholder imagery
preview/                   ← design system cards rendered for the Design System tab
ui_kits/
  website/                 ← the Visit Sudan tourism website UI kit
    index.html             ← interactive demo (Home → Destination detail → Plan trip)
    README.md
    *.jsx                  ← React components (Nav, Hero, DestinationCard, …)
```

## Quick start

```html
<link rel="stylesheet" href="colors_and_type.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Then write with the semantic classes (`.h1-display`, `.eyebrow`, `.body`, `.caption`) and color vars (`var(--ink)`, `var(--gold)`, `var(--nile)` …).

---

## Content Fundamentals

The voice is **editorial, second-person, sparing, and emotionally weighted**. Imagine a Condé Nast Traveler longform headline cut to a single line. Visit Sudan never explains; it invites.

**Voice rules**

- **Person:** Second person ("you") for invitations and CTAs. First-person plural ("we") only for hospitality moments where the country itself speaks. Never "I."
- **Tense:** Present tense. The desert *is*, the Nile *flows*. Avoid future-tense marketing speak ("you'll discover…").
- **Casing:** Sentence case for body and most headlines. ALL CAPS reserved for navigation labels, eyebrows, and section indices (`01 — DESTINATIONS`). Title Case is *avoided* — it reads corporate.
- **Length:** Headlines are 2–7 words. Sub-decks 12–22 words. Body paragraphs short, often 1–3 sentences. White space is content.
- **Punctuation:** Em-dashes for breath. Numerals always digits (1,200 years, not "one thousand two hundred"). The ampersand "&" is used in titles ("Culture & Stories") and never in body.
- **No emoji.** No exclamation points. No "amazing," "stunning," "unforgettable" — earn the feeling with the image, not the adjective.
- **Naming:** "Sudan" never "the Sudan." "Meroë" with diaeresis. "Nubia" capitalised. Arabic place names use accepted English transliteration (Khartoum, Suakin, Karima).

**Headline examples** (use as canon)

> *Where the pyramids outnumber Egypt's.*
> *The Nile begins twice.*
> *Sand older than memory.*
> *Coffee, then the desert.*
> *You will be the only one there.*

**Eyebrow examples**

> `01 — ANCIENT NUBIA`   `IN THE FIELD`   `A 7-DAY ITINERARY`   `RED SEA · DIVE`

**CTA examples**

> *Plan your trip*   ·   *Begin the journey*   ·   *See the route*   ·   *Read the story*

**Avoid**

- "Discover," "explore," "experience" used as verbs — overused tourism cliché. Replace with a specific verb: *cross, sleep, swim, drink, walk.*
- "Hidden gem," "off the beaten path," "must-see."
- Government-tourism formality ("The Republic of Sudan welcomes visitors…").
- Hashtags. Emoji. Loud calls-to-action.

---

## Visual Foundations

**Grounds.** The default ground is `--ink` (#080706) — a true cinematic black with the faintest warm undertone. Light grounds (`--sand`, `--ivory`) appear only for editorial breaks: a culture story, a recipe card, a quiet "field notes" interlude. The page should breathe between dark and warm light grounds like film cuts.

**Color rhythm.** Gold is rare and reserved — a single underline, one button, one numeric. Sudan Red appears once or twice per page, for energy moments (a tag, a marker on a map, an accent stroke). Nile Blue is used for evening/sea sections and overlays. Never combine all three accents in one element.

**Typography.** Fraunces (variable serif, optical-size 144 at hero scale, soft axis 50) for editorial display; Inter for body; Space Grotesk for eyebrows and meta. Hero type is set very large (clamp up to 144px) with tight tracking (-0.03em) and a balanced wrap. Body type stays at 17px with 1.55 line height for magazine readability. Eyebrows are uppercase, 12px, gold, with 0.22em tracking.

**Imagery.** Full-bleed, cinematic, warm. Editorial color grading — preserved highlights, deep blacks, warm midtones (subtle sepia + amber). A faint film grain (`opacity: .06`, `mix-blend: overlay`) is layered on hero images. Black-and-white is reserved for historical/archival callouts. Imagery is **never** stocky, never crowded, never over-saturated. Subjects: long shadows on dunes, a Nubian woman pouring jebena coffee, the eastern pyramids at golden hour, fishermen at Suakin, market color at Omdurman, Nile reflections.

**Layout rules.** Twelve-column editorial grid with very wide outer gutters on desktop (8–12% of viewport). Most sections use only 6–10 columns of content; the air is intentional. Headlines often start at column 2; a paragraph slides into column 7. Heavy use of **asymmetry**: a 60/40 split between image and text, with a numbered index in the margin (`01 / 06`).

**Backgrounds.** Plain `--ink` for most sections. Full-bleed image for openers. Occasional gradient ramps from `--ink-2` to `--ink` to suggest dusk. No patterns, no textures other than the grain overlay. No repeating motifs.

**Animation.** Cinematic and restrained. The signature easing is `cubic-bezier(.22, .61, .36, 1)` — slow-in, soft-out, ~620ms. Hero text fades + rises 24px on load (320ms stagger). Images cross-fade rather than slide. On scroll, large images parallax at 0.85× page speed. No bounces, no springs, no Lottie illustrations.

**Hover states.** On dark grounds: text lightens to pure `--ivory` and a 1px gold underline draws left→right in 220ms. Image cards lift 4px and reveal a 1px gold hairline border. Buttons brighten +6% luminance and the label kerning expands by 0.02em.

**Press states.** Buttons scale to 0.985 with a 90ms ease-out, and the label dims to 90%. Cards do not press — only buttons and chips.

**Borders.** Hairlines are 1px `rgba(255,248,232,0.14)` on dark, `rgba(42,31,18,0.16)` on warm grounds. Cards do not use full borders; they use a top hairline + ample padding. Outlined buttons use a 1px solid gold border.

**Shadows.** Used very sparingly. Cinematic drop shadows on lifted glass cards only (`--shadow-3`). The gold "glow" (`--shadow-glow`) is reserved for the primary CTA on hero sections.

**Glassmorphism.** The sticky nav, hero overlay chips, and filter pills are glass (`rgba(20,17,13,0.55)` + `blur(18px) saturate(140%)` + 1px `rgba(255,248,232,0.18)` border). Glass is only used over imagery — never over flat black.

**Protection.** Image text overlays use a bottom-up linear gradient (`--grad-protect`) — never a flat overlay. Pills/capsules are used for short labels in the upper third of imagery (location tags); gradient protections are used for long-form headlines in the lower third.

**Corner radii.** Most cards are `--r-lg` (22px). Hero media is `--r-xl` (32px). Pills are full radius. Sharp 0px corners are reserved for editorial dividers and small caps numerics.

**Cards.** Standard destination card: full-bleed image at 4:5 portrait or 3:2 landscape, 22px radius, no border, no shadow. Below the image: an eyebrow row (location + duration), a serif title, a one-line dek. Hover: slight rise (4px), gold underline on the title. Glass cards (used inside hero) have the glass styles above.

**Transparency & blur.** Used only for: sticky nav (over imagery), hero overlay cards, modal sheets. Never on flat backgrounds. Never to "soften" — always to layer.

**Layout primitives.** Section gutters use `--s-11` (192px) on desktop top/bottom. Content max-width is 1440px; reading columns are 640px wide for body copy. The sticky nav is 72px tall, becomes 56px after 80px scroll.

---

## Iconography

Visit Sudan does **not** use a decorative icon set as its primary visual language — imagery and typography carry the brand. Icons appear only as **micro-affordances**: a single chevron in a CTA, a play triangle on video, a pin on a map, a hamburger on mobile. The whole UI should feel like there are no icons at all, and then a tiny gold mark resolves an action.

**System.** Use **[Lucide](https://lucide.dev)** via CDN (`lucide-react` in the Vite build; `lucide@latest/dist/umd/lucide.js` in prototypes). Lucide's 1.5px stroke, geometric construction, and editorial silhouette match the brand. Substitution flag: this is the recommended set; if the client prefers another (Phosphor Light, Iconoir), it must keep ≤1.5px strokes and zero fill.

**Style rules.**

- Stroke 1.5px, never filled.
- 20px or 24px at body scale. 16px at chip/meta scale. Never larger than the text next to them.
- Color: `currentColor` always — they inherit `--gold` on CTAs, `--ivory` in nav, `--fg-3` in meta rows.
- No icon-only buttons except: close (×), menu, search, audio toggle, fullscreen. Everything else has a label.
- Icons sit on the **right** of CTAs ("Plan your trip →"), never on both sides.

**Logo / mark.** The wordmark `Visit Sudan` is set in Fraunces with `Sudan` in gold. The accompanying glyph is a stylized double-line pyramid (see `preview/logo-wordmark.html`) — two nested triangles in 2px gold stroke. The mark works at 28px minimum. It is **never** placed on a busy image without the glass nav pill behind it.

**Emoji.** Not used in the production brand voice. The `Destinations` component uses emoji as **temporary placeholders** until photography arrives — these should be replaced with real images or the Lucide icon equivalent (`Landmark`, `Waves`, `Fish`, `Building2`, `Mountain`, `Home`) before launch. This is flagged in `BUILD_NOTES.md`.

**Unicode.** The hieroglyph `𓂀` (Eye of Horus, U+13080) appears once as an editorial gesture on the Meroë card. This is the *only* place a unicode character is used decoratively — everywhere else, icons are SVG.

**Hieroglyph / Nubian motif (future).** A small library of authentic Meroitic glyph illustrations would be a strong brand extension — used as section dividers in long-form stories, or as a watermark in footers. **Not yet produced.** Do not generate them via SVG; commission an illustrator who knows Meroitic script.

---

## Index / Manifest

```
README.md                  This document
SKILL.md                   Agent skill manifest (Claude Code compatible)
BUILD_NOTES.md             Production stack (Vite + R3F + Framer Motion + GSAP)
colors_and_type.css        Token sheet (CSS custom properties + semantic classes)
tailwind.config.js         Tailwind theme tokens (mirror of color/font tokens)

src/                       Production source the client provided
  main.jsx
  App.jsx
  index.css
  components/              ← canonical components, source-of-truth
    Navigation.jsx
    Hero.jsx               (Three.js / R3F — pyramids, desert plane, particles)
    WhySudan.jsx
    Destinations.jsx
    Experiences.jsx
    Culture.jsx
    Gallery.jsx
    TravelGuide.jsx
    FinalCTA.jsx
    Footer.jsx

preview/                   Design-system tab cards
  _card.css                Shared frame styles
  colors-core.html         Core palette
  colors-neutrals.html     Ink surfaces & ivory opacities
  colors-accents.html      Gold / Nile / Red ramps
  colors-gradients.html    Sunset / Dune / Nile / Protection
  type-display.html        Fraunces display specimens
  type-body.html           Inter body specimens
  type-utility.html        Eyebrow / nav / button labels
  spacing-scale.html       8pt scale
  radius-scale.html        Radius tokens
  shadows.html             Elevation
  buttons.html             Buttons
  chips.html               Chips & tags
  forms.html               Underline form inputs
  cards-destination.html   Destination card pattern
  nav-glass.html           Glass sticky nav
  hero-protection.html     Hero with protection gradient
  logo-wordmark.html       Wordmark on three grounds

ui_kits/website/           UI kit for the tourism website
  README.md                Kit notes
  index.html               Standalone preview of the whole site
  *.jsx                    Mirrored components
```


