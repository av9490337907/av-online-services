# Design Brief

## Direction
AV Online Services — Premium digital services hub with clean card-based layout, bold CTA accents, and trust-driven positioning through consistent brand presence.

## Tone
Professional boutique minimalism: restrained color palette, elevated whitespace, gold highlights as premium micro-detail—commanding attention through clarity, not noise.

## Differentiation
Gold-accented service cards with warm CTAs and floating WhatsApp action create approachable premium feel; business hours indicator and hero banner establish instant operational transparency.

## Color Palette

| Token      | OKLCH            | Role                           |
| ---------- | ---------------- | ------------------------------ |
| background | 0.975 0.002 248  | Off-white, main surface         |
| foreground | 0.18 0.05 258    | Deep navy, primary text         |
| card       | 1.0 0 0          | Pure white, elevated surfaces   |
| primary    | 0.48 0.22 264    | Brand blue, interactive & logo  |
| secondary  | 0.22 0.14 265    | Dark navy, secondary headings    |
| accent     | 0.74 0.14 87     | Brand gold, highlights & CTAs    |
| muted      | 0.95 0.01 240    | Light gray, borders & dividers  |

## Typography

- Display: Inter 700–800 — Hero titles, section headers, branding
- Body: Inter 400–600 — Content, descriptions, UI labels
- Scale: hero 3xl/4xl, h2 2xl, label md, body base

## Elevation & Depth

Card-based surfaces (shadow-sm on cards, shadow-blue on CTAs) create subtle depth hierarchy; header/footer use border-bottom/top with muted backgrounds to define zones without visual weight.

## Structural Zones

| Zone    | Background         | Border          | Notes                                     |
| ------- | ------------------ | --------------- | ----------------------------------------- |
| Header  | card (white)       | border-bottom   | Fixed nav, logo + menu, 1rem padding      |
| Hero    | primary/gold blend | —               | Full-width banner with offer tagline      |
| Content | background (off-white) | —            | Section cards on white, 2rem gap spacing  |
| Card    | card (white)       | shadow-blue     | Service cards, shadow-sm elevation        |
| Footer  | secondary (navy)   | border-top      | Dark background, white text, hours widget |
| CTA     | accent (gold)      | —               | Buttons: gold bg, navy text, rounded-md   |

## Spacing & Rhythm

Generous vertical rhythm (2rem–3rem section gaps), tight card grouping (1rem gap), consistent 1.5rem content padding within cards; creates breathing room for premium feel and hierarchy clarity.

## Component Patterns

- Buttons: Rounded-md, gold background, navy text, font-semibold, hover:shadow-gold (not opacity)
- Cards: Rounded-md, white background, shadow-sm, 1rem padding, gold accent border-top or left
- Service grid: 2 cols (sm), 3 cols (md), auto-fit (lg) for responsive flexibility
- Hero banner: Full-width with warm gradient overlay, centered text, 4rem vertical padding

## Motion

- Entrance: Cards fade-in + slide-up on page load via CSS animation (0.3s ease-out, staggered 50ms)
- Hover: Buttons lift via shadow-gold + subtle scale 1.02, cards gain shadow-blue lift
- Decorative: Floating WhatsApp button has gentle pulse animation; business hours indicator updates in real-time

## Constraints

- Max content width 1280px (lg: container padding 2rem)
- No animations on mobile (prefers-reduced-motion respect)
- Fixed WhatsApp button always accessible, 60px diameter
- Gold accents used sparingly (CTAs, highlights, hero banner)—never backgrounds

## Signature Detail

Gold accent border-left or -top on service cards creates premium "premium detail" micro-interaction—instantly recognizable, executed with 2–3px width for restraint.
