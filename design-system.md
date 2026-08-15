# Design System

Extracted from `context/design2.webp` (personal-brand / coaching landing page), then re-themed per project direction:

| Token | Source design | This system |
| --- | --- | --- |
| Primary background | `#FFF5F2` (warm off-white, light theme) | **`#131516`** (near-black, dark theme) |
| Accent | `#FF5733` (orange-red) | **`#2D6A4F`** (deep green) |
| Primary font | Geometric grotesque (Helvetica Now / Poppins-class) | **Unbounded** |
| Secondary font | same family, regular weights | **Inter** |

The *structure* of the source is preserved — full-bleed rounded hero panel, pill buttons, generous white space, editorial two-column blocks, rounded photography. The *tonality* is inverted: what was a light peach canvas with black ink is now a dark canvas with light ink and a green accent.

---

## 1. Design principles

1. **One accent, used sparingly.** The source uses orange on ~5% of surface area: one button per section, one highlighted phrase per heading. Green replaces it at the same density. More accent = less accent.
2. **Panels, not pages.** Major sections sit on inset rounded panels (32–40px radius) floating on the base background, rather than edge-to-edge bands.
3. **Type carries the hierarchy.** Size and weight jumps are large (64 → 48 → 24 → 16). There is no decorative chrome doing hierarchy work.
4. **Photography is a first-class element.** Every section has a person in it. Images are always rounded, never square-cornered.
5. **Rounded, soft, pill-shaped.** No sharp corners anywhere. Every interactive element is either a pill or a circle.
6. **Air.** Section padding is 96–140px vertical. Content columns rarely exceed 560px of text width.

---

## 2. Color

### 2.1 Base & surfaces

Cool-cast neutrals derived from the `#131516` base (hue ≈ 195°, sat ≈ 7%).

| Token | Hex | Use |
| --- | --- | --- |
| `--bg` | `#131516` | Page background. The default for everything. |
| `--surface-1` | `#1A1D1F` | Cards, panels resting on the page. |
| `--surface-2` | `#212528` | Nested cards, input fields, hover state of `surface-1`. |
| `--surface-3` | `#282D30` | Pressed states, chips, badges. |
| `--surface-inverse` | `#F2F5F4` | Inverted pill buttons, "light" CTA blocks. |
| `--border-subtle` | `#23282A` | Hairlines inside dark cards, table rules. |
| `--border` | `#2F3538` | Default 1px card/input border. |
| `--border-strong` | `#3D4448` | Focus-adjacent, ghost button outline. |

Elevation on dark is expressed by **lightening the surface**, not by shadow. Shadows are for lift off the page, never for separation.

### 2.2 Text

| Token | Hex | Contrast on `--bg` | Use |
| --- | --- | --- | --- |
| `--text-primary` | `#F2F5F4` | 16.7 : 1 | Headings, button labels, stat numbers. |
| `--text-secondary` | `#A9B3B0` | 8.5 : 1 | Body copy, card descriptions. |
| `--text-muted` | `#7E8A88` | 5.1 : 1 | Captions, meta, form placeholders, footer legal. |
| `--text-on-accent` | `#FFFFFF` | 6.4 : 1 on `#2D6A4F` | Text on filled accent surfaces. |
| `--text-inverse` | `#131516` | 16.7 : 1 on `#F2F5F4` | Text on light/inverted surfaces. |

Never use `--text-muted` below 14px, and never for anything a user must read to act.

### 2.3 Accent ramp

Base accent `#2D6A4F` anchors a nine-step green ramp. Steps are ordered light → dark (Tailwind convention).

| Token | Hex | Contrast on `--bg` | Use |
| --- | --- | --- | --- |
| `--accent-50` | `#D8F3DC` | 15.3 : 1 | Rare — tinted text on deep-green panels. |
| `--accent-100` | `#B7E4C7` | 13.2 : 1 | Illustration fills. |
| `--accent-200` | `#95D5B2` | 10.9 : 1 | Icon glyphs on dark, decorative shapes. |
| `--accent-300` | `#74C69D` | 9.0 : 1 | Link hover. |
| `--accent-400` | `#52B788` | 7.4 : 1 | **Accent text on dark**, links, icon glyphs, focus ring. |
| `--accent-500` | `#40916C` | 4.8 : 1 | Accent hover fill, large accent text only. |
| `--accent-600` | `#2D6A4F` | 2.9 : 1 | **Brand accent.** Fills only — buttons, badges, panels. |
| `--accent-700` | `#255741` | — | Pressed state of accent fills. |
| `--accent-800` | `#1B4332` | — | Deep panel backgrounds, hero gradient stop. |
| `--accent-900` | `#081C15` | — | Darkest gradient stop, text on light-green fills. |

> **Hard rule:** `--accent-600` (`#2D6A4F`) fails contrast as text on `--bg` (2.9 : 1). Use it as a **background** with white text (6.4 : 1), and use `--accent-400` (`#52B788`) whenever the accent needs to be *ink*. This is the single most important adaptation from the source design, where the orange was light enough to work as text.

### 2.4 Gradients

The source hero is a soft peach gradient panel. The dark equivalent keeps the same 3-stop diagonal, rebuilt in green.

```css
--gradient-hero:   linear-gradient(135deg, #2D6A4F 0%, #1B4332 48%, #101C18 100%);
--gradient-panel:  linear-gradient(160deg, #1B4332 0%, #16211C 70%, #131516 100%);
--gradient-fade:   linear-gradient(180deg, rgba(19,21,22,0) 0%, #131516 85%);  /* image bottom scrim */
--gradient-sheen:  linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,0) 60%);
```

`--gradient-hero` carries white headline text at ≥ 6.4 : 1 across all stops. `--gradient-fade` is mandatory under any text that sits on a photograph.

### 2.5 Status

| Token | Hex | Contrast on `--bg` |
| --- | --- | --- |
| `--success` | `#52B788` | 7.4 : 1 (shares the accent ramp) |
| `--warning` | `#FBBF24` | 11.0 : 1 |
| `--danger` | `#F87171` | 6.6 : 1 |
| `--info` | `#7DD3FC` | 11.5 : 1 |

### 2.6 Alpha utilities

```css
--overlay-scrim:  rgba(8, 12, 11, 0.72);   /* modal backdrop */
--white-04:       rgba(255,255,255,0.04);  /* card wash */
--white-08:       rgba(255,255,255,0.08);  /* hairline border alt */
--accent-glow:    rgba(45,106,79,0.35);    /* accent button shadow */
--focus-ring:     rgba(82,183,136,0.55);   /* --accent-400 @ 55% */
```

---

## 3. Typography

### 3.1 Families

```css
--font-display: 'Unbounded', 'Inter', system-ui, sans-serif;  /* headings, buttons, numbers */
--font-body:    'Inter', system-ui, -apple-system, sans-serif; /* everything else */
```

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300..800&family=Inter:wght@400..700&display=swap" rel="stylesheet">
```

Both are variable fonts. Load weights `300–800` for Unbounded and `400–700` for Inter; do not ship static instances of every weight.

**Unbounded runs wide.** It is roughly 15–20% wider per character than the grotesque in the source. Three consequences, all applied in the scale below:

- Display sizes are set ~10% smaller than the measured source values so line counts stay the same.
- Tracking is negative (`-0.02em` to `-0.03em`) at display sizes; Unbounded's default spacing is loose.
- Headlines cap at **3 lines / ~18 words**. Beyond that, drop a size step rather than wrap further.

Unbounded is never used below 16px and never for paragraphs. Its role is display type, button labels, stat figures, and the nav wordmark.

### 3.2 Scale

Measured off the source artboard (892px render → 1440px design frame) and normalized to an 8pt-friendly scale.

| Style | Family | Size (desktop / mobile) | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| `display` | Unbounded | 64 / 36 | 600 | 1.08 | −0.03em |
| `h1` | Unbounded | 56 / 34 | 600 | 1.10 | −0.03em |
| `h2` | Unbounded | 44 / 30 | 600 | 1.15 | −0.02em |
| `h3` | Unbounded | 28 / 24 | 500 | 1.25 | −0.02em |
| `h4` / card title | Unbounded | 20 / 18 | 500 | 1.35 | −0.01em |
| `stat` | Unbounded | 32 / 28 | 700 | 1.10 | −0.02em |
| `body-lg` | Inter | 18 / 17 | 400 | 1.55 | 0 |
| `body` | Inter | 16 / 16 | 400 | 1.60 | 0 |
| `body-sm` | Inter | 14 / 14 | 400 | 1.55 | 0 |
| `label` | Inter | 14 / 14 | 500 | 1.40 | 0.01em |
| `eyebrow` | Inter | 13 / 13 | 500 | 1.20 | 0.12em, uppercase |
| `caption` | Inter | 12 / 12 | 400 | 1.45 | 0.01em |
| `button` | Unbounded | 15 / 15 | 500 | 1.00 | −0.01em |
| `nav-link` | Inter | 16 / 16 | 400 (500 active) | 1.00 | 0 |

Fluid variants for the two largest steps:

```css
--fs-display: clamp(2.25rem, 1.35rem + 3.6vw, 4rem);   /* 36 → 64 */
--fs-h2:      clamp(1.875rem, 1.35rem + 2.1vw, 2.75rem); /* 30 → 44 */
```

### 3.3 Heading pattern

The source highlights **one phrase per heading** in the accent color, always the phrase naming the reader's problem or the subject's name:

> Feeling Stuck or Overwhelmed as a **Business Owner?**
> Meet **James David** — Your Business Growth Partner
> Trusted by **500+** Entrepreneurs

Reproduce this with `--accent-400` (`#52B788`), never `--accent-600` — see §2.3.

```html
<h2 class="h2">Меня зовут <span class="accent">Избасар Мәмыров</span></h2>
```

### 3.4 Measure

Body copy: **58–68 characters** per line (`max-width: 34rem` at 16px, `38rem` at 18px). Headings: **20–28 characters** per line, which with Unbounded means `max-width: 12ch–16ch` at display size.

---

## 4. Spacing & layout

### 4.1 Scale

8pt base, with 4px available for icon/label gaps.

```
4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 120 · 160
```

```css
--space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
--space-5: 20px;  --space-6: 24px;  --space-8: 32px;  --space-10: 40px;
--space-12: 48px; --space-16: 64px; --space-20: 80px; --space-24: 96px;
--space-30: 120px; --space-40: 160px;
```

### 4.2 Container & grid

| Token | Value |
| --- | --- |
| `--container-max` | `1200px` content, `1360px` for full-bleed panels |
| `--gutter` | `24px` mobile · `40px` tablet · `64px` desktop |
| Grid | 12 columns, `--space-8` (32px) gutter |
| Panel inset | Hero and CTA panels are inset `20px` from the viewport edge and clipped to `--radius-2xl` |

Recurring column splits from the source:

- **Hero:** text 6/12 left, portrait 6/12 right (portrait bleeds past the panel's top edge).
- **Problem / About:** copy 5/12, image 3/12, list 4/12.
- **Blog:** thumbnail 4/12, copy 8/12 inside each card.
- **Footer:** nav row full width, newsletter right-aligned 4/12.

### 4.3 Vertical rhythm

| Gap | Value |
| --- | --- |
| Section padding (desktop) | `120px` top / `120px` bottom |
| Section padding (mobile) | `72px` / `72px` |
| Heading → body | `20px` |
| Body → CTA | `32px` |
| Card grid gap | `24px` |
| Checklist item gap | `20px` |
| Eyebrow → heading | `16px` |

### 4.4 Breakpoints

```css
--bp-sm: 480px;   /* single column, 16px gutter */
--bp-md: 768px;   /* 2-col cards, portraits stack under copy */
--bp-lg: 1024px;  /* full 12-col grid engages */
--bp-xl: 1280px;  /* container hits max width */
```

---

## 5. Radius, borders, shadows

### 5.1 Radius

| Token | Value | Applied to |
| --- | --- | --- |
| `--radius-xs` | `8px` | Tags, small badges |
| `--radius-sm` | `12px` | Inputs, small thumbnails |
| `--radius-md` | `16px` | Blog-card thumbnails |
| `--radius-lg` | `24px` | Cards, image blocks |
| `--radius-xl` | `32px` | Large media, feature cards |
| `--radius-2xl` | `40px` | Hero panel, CTA panel |
| `--radius-full` | `999px` | All buttons, avatars, icon badges, inputs with trailing button |

### 5.2 Borders

Default `1px solid var(--border)`. On dark, a border is often replaced by a `--white-04` background wash — pick one, not both. Accent-bordered elements use `1px solid var(--accent-600)`.

### 5.3 Shadows

On a `#131516` canvas, shadows read as *depth*, not as edges. Keep them soft, large, and low-opacity.

```css
--shadow-sm:     0 2px 8px rgba(0,0,0,0.30);
--shadow-md:     0 8px 24px rgba(0,0,0,0.38);
--shadow-lg:     0 20px 48px rgba(0,0,0,0.45);
--shadow-accent: 0 8px 24px var(--accent-glow);   /* primary button hover only */
--shadow-inset:  inset 0 1px 0 rgba(255,255,255,0.06); /* top highlight on raised cards */
```

---

## 6. Iconography & imagery

**Icons.** 20×20 or 24×24, 1.75px stroke, rounded caps and joins (Lucide / Phosphor fit). Glyph color `--accent-400` on dark, `--text-primary` on inverted surfaces.

**Icon badge** (used beside each problem/benefit item): 44px circle, `--surface-2` fill, `1px solid var(--border)`, `--accent-400` glyph. On accent-filled panels: `rgba(255,255,255,0.12)` fill, white glyph.

**Check bullet:** 24px filled circle, `--accent-600` fill, white checkmark, `12px` gap to text, top-aligned with the first line.

**Photography.** Always people, always warm-lit, always in context (studio, office, session) — not cut-out stock. Treatment:

- Radius `--radius-lg` (24px) minimum; `--radius-xl` for hero and feature images.
- Portrait subjects may bleed **above** the panel they sit in; they never bleed below or outside the left/right panel edges.
- Any text over an image requires `--gradient-fade`.
- On dark, apply a subtle unify pass: `filter: saturate(0.95) contrast(1.02)` and a `--white-04` inner ring so edges do not disappear into the background.

**Decorative marks.** The source uses an oversized ghost wordmark (`JAMES DAVID`) at ~4% opacity behind the hero, and a low-opacity geometric glyph in the lower left. Dark-theme equivalents: `rgba(255,255,255,0.04)` for the ghost wordmark, `--accent-800` for the glyph.

---

## 7. Components

### 7.1 Navigation bar

Sits **inside** the hero panel, not above it. Transparent background, `24px` padding from the panel edge, `32px` gap between links.

| Part | Spec |
| --- | --- |
| Wordmark | Mark 28px + name in Unbounded 20/600, `--text-primary`, `12px` gap |
| Link | `nav-link` style, `--text-secondary`; active = `--text-primary` + 500 weight |
| Link hover | `--text-primary`, 160ms |
| CTA | Inverted pill (§7.2) at the right edge |
| Scrolled state | `--surface-1` at 80% + `backdrop-filter: blur(16px)`, `1px` bottom border `--border-subtle`, `--shadow-sm` |
| Mobile | Wordmark + hamburger; menu opens as a full-height `--surface-1` sheet, `--radius-2xl` on the top corners |

### 7.2 Buttons

All buttons are pills (`--radius-full`), label in Unbounded 15/500, height 48px desktop / 44px mobile, padding `0 28px`.

| Variant | Background | Label | Border | Notes |
| --- | --- | --- | --- | --- |
| **Primary** | `--accent-600` | `#FFFFFF` | none | The green replacement for the source's orange CTA. One per section. |
| **Inverted** | `--surface-inverse` | `--text-inverse` | none | The dark-pill-on-light of the source, flipped. Nav CTA, "Follow Me". |
| **Secondary** | `transparent` | `--text-primary` | `1px --border-strong` | "Watch More" — outlined pill. |
| **Ghost** | `--white-04` | `--text-primary` | none | On photographic or accent panels. |
| **Text link** | — | `--accent-400` | — | Underline on hover, 2px offset. |

States:

```
hover    Primary → --accent-500 + --shadow-accent · Inverted → #FFFFFF · Secondary → border --accent-400, label --accent-400
active   translateY(1px), Primary → --accent-700
focus    outline: 2px solid var(--focus-ring); outline-offset: 3px
disabled opacity .45, pointer-events none
```

**Trailing icon.** Primary and inverted CTAs carry a trailing arrow (`→`) or play glyph in a 32px circle, `16px` after the label:

- On primary (green fill): circle is `#FFFFFF`, glyph `--accent-600`.
- On inverted (light fill): circle is `--accent-600`, glyph white.
- The circle is inset — button right padding drops to `8px` when the circle is present.

**Icon-only button:** 48px circle, same variant rules, glyph centered.

**Play button** (over video/media): 56px circle, `#FFFFFF` fill, `--accent-900` triangle, `--shadow-md`; scales to `1.06` on hover.

### 7.3 Cards

**Media card** (blog / article row): `--surface-1`, `--radius-xl`, `20px` padding, `1px solid --border-subtle`.
Thumbnail 160×120 at `--radius-md`, `20px` gap to copy. Title `h4`, description `body-sm` in `--text-secondary` clamped to 3 lines, `Read More →` text link pinned to the bottom.
Hover: background → `--surface-2`, `translateY(-2px)`, `--shadow-md`, arrow shifts `4px` right. 220ms.

**Feature / problem item:** icon badge (§6), `16px` gap, `h4` title, `8px`, `body-sm` description in `--text-secondary`. No card chrome — these sit directly on the background, separated by `32px`.

**Stat block:** number in `stat` style `--text-primary`, label `body-sm` in `--text-muted` beneath with `4px` gap. Laid out in a row with `64px` gaps, optional `1px` `--border-subtle` divider between.

**Logo strip:** single row, logos at `--text-muted` equivalent opacity (`opacity: .55`, `filter: grayscale(1) brightness(1.8)` for dark), `48px` gaps, max height 28px, full opacity on hover. Marquee-scrolls on mobile.

### 7.4 Hero panel

The signature element. `--gradient-hero` background, `--radius-2xl`, inset `20px` from viewport, `min-height: 640px`, nav inside the top.

```
padding:        56px 56px 72px   (desktop)
headline:       display style, --text-primary, max 3 lines, 6/12 width
subhead:        body-lg, --text-secondary, 32rem max-width, 20px below headline
CTA:            48px below subhead — ghost pill with play circle
portrait:       right 6/12, bottom-aligned, bleeds above the panel's top edge
ghost wordmark: Unbounded 800, ~180px, rgba(255,255,255,0.04), behind the portrait
```

### 7.5 Inline CTA panel

Full-width `--radius-2xl` panel with `--gradient-panel`, portrait bleeding from the left, headline (`h2`, max 3 lines) and one inverted pill on the right. Vertical padding `80px`. This is the "Follow for proven tips…" block.

### 7.6 Forms

**Text input:** height 52px, `--surface-2`, `1px solid --border`, `--radius-full`, padding `0 20px`, `body` text `--text-primary`, placeholder `--text-muted`.
Focus: border `--accent-400` + `0 0 0 3px var(--focus-ring)`.
Error: border `--danger`, message in `caption` `--danger`, `8px` below.

**Input with trailing button** (newsletter): the submit is a 40px `--accent-600` circle with a white arrow, inset `6px` from the right edge; input right padding `56px`.

**Textarea:** same, `--radius-lg`, min-height 140px, padding `16px 20px`.

**Checkbox / radio:** 20px, `--radius-xs` / full, `--border` unchecked, `--accent-600` fill + white glyph checked.

### 7.7 Footer

`--bg` background, `1px` top border `--border-subtle`, `80px` top padding.
Row 1: newsletter block right-aligned, heading in `h4`.
Row 2: nav links spread edge to edge, `nav-link` style in `--text-secondary`.
Row 3: `1px --border-subtle` divider, then `caption` legal text in `--text-muted`, right-aligned.
An oversized ghost wordmark in `rgba(255,255,255,0.03)` may bleed off the bottom edge.

### 7.8 Section header

```
[eyebrow]  ——— About me        ← 32px rule in --border-strong + eyebrow in --text-muted
[heading]  h2, one phrase in --accent-400
[body]     body-lg, --text-secondary, 36rem max
[action]   optional secondary pill, right-aligned on desktop
```

---

## 8. Motion

```css
--ease-out:   cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--dur-fast:   140ms;   /* color, opacity */
--dur-base:   220ms;   /* hover lift, transform */
--dur-slow:   420ms;   /* panel/sheet entrance */
```

- Hover transitions: `--dur-base --ease-out`, transform + background only.
- Scroll reveal: `opacity 0→1`, `translateY(16px→0)`, `--dur-slow`, staggered `60ms` per sibling. Once, never on scroll-back.
- Never animate `width`/`height`/`top`/`left` — transform and opacity only.
- Honor `prefers-reduced-motion: reduce` by dropping transforms and stagger, keeping opacity fades at `--dur-fast`.

---

## 9. Accessibility rules

1. Body text ≥ 16px; `--text-secondary` is the floor for prose (8.5 : 1).
2. `--accent-600` is a fill color only. Accent *text* is `--accent-400` (7.4 : 1). Verified in §2.3.
3. Focus is always visible: `2px` `--focus-ring` outline at `3px` offset. Never `outline: none` without a replacement.
4. Interactive targets ≥ 44×44px, including the trailing icon circles.
5. Accent color never carries meaning alone — pair with an icon or label.
6. Text over photography requires `--gradient-fade`; re-verify 4.5 : 1 against the darkest scrim point.
7. Headings descend in order; the accent `<span>` inside a heading is decorative and must not break the heading's reading order.

---

## 10. Token implementation

```css
:root {
  /* ---- base & surfaces ---- */
  --bg: #131516;
  --surface-1: #1A1D1F;
  --surface-2: #212528;
  --surface-3: #282D30;
  --surface-inverse: #F2F5F4;
  --border-subtle: #23282A;
  --border: #2F3538;
  --border-strong: #3D4448;

  /* ---- text ---- */
  --text-primary: #F2F5F4;
  --text-secondary: #A9B3B0;
  --text-muted: #7E8A88;
  --text-on-accent: #FFFFFF;
  --text-inverse: #131516;

  /* ---- accent ---- */
  --accent-50:  #D8F3DC;
  --accent-100: #B7E4C7;
  --accent-200: #95D5B2;
  --accent-300: #74C69D;
  --accent-400: #52B788;
  --accent-500: #40916C;
  --accent-600: #2D6A4F;   /* brand */
  --accent-700: #255741;
  --accent-800: #1B4332;
  --accent-900: #081C15;
  --accent: var(--accent-600);
  --accent-ink: var(--accent-400);

  /* ---- status ---- */
  --success: #52B788;
  --warning: #FBBF24;
  --danger:  #F87171;
  --info:    #7DD3FC;

  /* ---- alpha ---- */
  --overlay-scrim: rgba(8,12,11,0.72);
  --white-04: rgba(255,255,255,0.04);
  --white-08: rgba(255,255,255,0.08);
  --accent-glow: rgba(45,106,79,0.35);
  --focus-ring: rgba(82,183,136,0.55);

  /* ---- gradients ---- */
  --gradient-hero:  linear-gradient(135deg, #2D6A4F 0%, #1B4332 48%, #101C18 100%);
  --gradient-panel: linear-gradient(160deg, #1B4332 0%, #16211C 70%, #131516 100%);
  --gradient-fade:  linear-gradient(180deg, rgba(19,21,22,0) 0%, #131516 85%);
  --gradient-sheen: linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,0) 60%);

  /* ---- type ---- */
  --font-display: 'Unbounded', 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --fs-display: clamp(2.25rem, 1.35rem + 3.6vw, 4rem);
  --fs-h1: clamp(2.125rem, 1.4rem + 2.9vw, 3.5rem);
  --fs-h2: clamp(1.875rem, 1.35rem + 2.1vw, 2.75rem);
  --fs-h3: 1.75rem;
  --fs-h4: 1.25rem;
  --fs-stat: 2rem;
  --fs-body-lg: 1.125rem;
  --fs-body: 1rem;
  --fs-sm: 0.875rem;
  --fs-eyebrow: 0.8125rem;
  --fs-caption: 0.75rem;

  /* ---- space ---- */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-10: 40px;
  --space-12: 48px; --space-16: 64px; --space-20: 80px; --space-24: 96px;
  --space-30: 120px; --space-40: 160px;

  /* ---- radius ---- */
  --radius-xs: 8px;   --radius-sm: 12px;  --radius-md: 16px;
  --radius-lg: 24px;  --radius-xl: 32px;  --radius-2xl: 40px;
  --radius-full: 999px;

  /* ---- shadow ---- */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.30);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.38);
  --shadow-lg: 0 20px 48px rgba(0,0,0,0.45);
  --shadow-accent: 0 8px 24px var(--accent-glow);
  --shadow-inset: inset 0 1px 0 rgba(255,255,255,0.06);

  /* ---- motion ---- */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-fast: 140ms; --dur-base: 220ms; --dur-slow: 420ms;

  /* ---- layout ---- */
  --container-max: 1200px;
  --panel-max: 1360px;
  --gutter: 24px;
}

@media (min-width: 1024px) { :root { --gutter: 64px; } }

body {
  background: var(--bg);
  color: var(--text-secondary);
  font-family: var(--font-body);
  font-size: var(--fs-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, .stat, .btn {
  font-family: var(--font-display);
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.accent { color: var(--accent-ink); }
```

### Tailwind mapping

```js
// tailwind.config.js — theme.extend
colors: {
  bg: '#131516',
  surface: { 1: '#1A1D1F', 2: '#212528', 3: '#282D30', inverse: '#F2F5F4' },
  ink: { DEFAULT: '#F2F5F4', secondary: '#A9B3B0', muted: '#7E8A88', inverse: '#131516' },
  accent: {
    50:'#D8F3DC',100:'#B7E4C7',200:'#95D5B2',300:'#74C69D',400:'#52B788',
    500:'#40916C',600:'#2D6A4F',700:'#255741',800:'#1B4332',900:'#081C15',
    DEFAULT:'#2D6A4F',
  },
  line: { subtle: '#23282A', DEFAULT: '#2F3538', strong: '#3D4448' },
},
fontFamily: {
  display: ['Unbounded', 'Inter', 'system-ui', 'sans-serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
},
borderRadius: { xs:'8px', sm:'12px', md:'16px', lg:'24px', xl:'32px', '2xl':'40px', full:'999px' },
```

---

## 11. Adaptation notes

Things that do **not** translate literally from the light source design and were deliberately re-specified:

| Source behavior | Why it breaks on dark | Resolution |
| --- | --- | --- |
| Orange used as both fill and heading ink | `#2D6A4F` as ink is 2.9 : 1 on `#131516` | Split into `--accent-600` (fill) and `--accent-400` (ink) |
| Dark pill button on light background | No longer contrasts | Inverted to a light pill (`--surface-inverse`) with dark label |
| Elevation via white cards on off-white page | Nothing is white anymore | Elevation via progressively lighter surfaces (`--surface-1/2/3`) |
| Peach hero gradient | Would glow against a near-black page | Deep-green `--gradient-hero`, same 135° 3-stop structure |
| Photos on white, no edge treatment | Dark photo edges vanish into `--bg` | `--white-04` inner ring + slight contrast lift |
| Grotesque headlines at 64px | Unbounded is ~18% wider | Display sizes trimmed ~10%, tracking to −0.03em, 3-line cap |
