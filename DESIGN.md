# Gypri Dílna design system

Design direction for the Gypri Dílna website. This file is the source of truth for
identity, dials and the concrete design system. The cleanup that brought the site back in
line with it is recorded in `anti-slop/audit-001-2026-09-10.md`.

## Design Read

> Reading this as: a school workshop site for students, parents and sponsors, in a warm
> industrial language built from the logo's hex nut, real photographs and one deliberately
> playful colour, dial **ENERGY 3 / RHYTHM 3 / MOTION 2**.

| Dial | Value | What that means here |
|---|---|---|
| **ENERGY** | 3 (Bold) | This is a workshop full of teenagers building things, not a consultancy. The display type is large, one warm colour is allowed to shout, and photographs of real students carry the page. |
| **RHYTHM** | 3 (Varied, asymmetric) | Sections deliberately do not share one composition: a full-bleed hero, a lead-plus-rows feature block, a stat band, a link list, an offset photo pair, a tilted photo strip. |
| **MOTION** | 2 (Balanced) | Scroll-triggered reveals, a section rule that draws itself in, hover lift, and a logo that turns on hover. Nothing runs on its own, and all of it is off under `prefers-reduced-motion`. |

### Why the dials went up

The first build read as bland and corporate. The cause was diagnosable: the site had no
real assets. It used one screenshot, three generic tool pictograms, and thumbnails pulled
from an old WordPress page. The CSS was not the problem, and adding more decoration would
not have fixed it.

Two things changed:

1. **Real photographs.** 232 images of the actual workshop were reviewed; 20 were selected.
   Real students at real benches replaced pictograms, and the orange Gypri whistles the
   workshop actually prints became a centrepiece instead of a sentence in a list.
2. **A whisker of play.** One warm colour, tilted photographs like snapshots pinned to a
   wall, rules that draw themselves in, and a logo that turns when you hover it.

The anti-slop record in `anti-slop/` still governs: everything added here is either real
content or a deliberate, documented gesture, not decoration for its own sake.

### What was tried and removed

An auto-scrolling marquee band was built, then cut. The impeccable detector flagged it,
correctly: it repeated the four disciplines already listed in the section right below it,
so it demanded attention without adding information. The review is in
`anti-slop/audit-003-2026-09-11.md`.



## Direction source

Direction is not invented. It comes from **`Dilna Logo - brand guide.pdf`** ("Návod Brand
2025"), which fixes the palette, the typeface and the logo concept. Copy and facts come
from the brand guide, the kroužek flyer, the old WordPress site and the
`gypridilna-app-2.0` repository; the README lists which fact came from where.

Where the guide's prose hex values disagree with its own swatches and the shipped logo
files, the logo files win, so the site and the logo assets match exactly.

## Why each decision (R-31)

**Why these colours?** The three brand colours are the entire palette; nothing was added.

**Why is mint the accent?** It is the only chromatic brand colour, so it carries the
primary action, the current-page marker, focus, and selection, and nothing else.

**Why is the site dark?** The workshop is a technical space and the sibling project at
ikaroscansat.cz, which the owner named as the reference, is dark. Cloud Paper still does
real work here: it is the page's text colour, and it is the background of the sponsor
cards, which is required because most sponsor logos are dark artwork.

**Why Montserrat?** The brand guide mandates it. Not a default pick.

**Why this layout?** Each page is composed from what its content actually is: a process
reads as prose, parallel items read as a list, images read as a gallery.

**Why the tick divider?** A bench is ruled and measured. The divider is a hairline with
ticks and one mint mark, which puts a workshop's own instrument language into the page
rather than a generic ornament. It replaced an earlier hex-nut chain that repeated the logo
too literally.

**Why a 2px radius?** A workshop is a place of square edges and machined corners. A larger
radius would read as software, not as a bench.

---

## 1. Visual Theme & Atmosphere

A working workshop bench, not a software product page. Dark, quiet, and precise: one
display heading per page carries the energy, everything else defers to it. Surfaces are
flat hairlines rather than shadows, so nothing floats. The mood is technical and
understated, closer to a machined part than to a marketing page.

Because the audience is Czech students, parents and sponsors, the tone is plain and
concrete. No claims, no superlatives, no invented numbers. The one bold gesture is scale:
a page title at up to 120px, real photographs of real students, and one warm colour used
sparingly.

## 2. Color Palette & Roles

Three brand colours plus neutrals. Nothing else is added.

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Accent | Circuit Mint | `#3aa398` | The only accent. Primary action, current-page marker, focus ring, text selection, the eyebrow tick, the rule under a section heading, the key-phrase underline, the ruler mark, and the callout label. |
| Accent (hover) | Mint Bright | `#5cc9bd` | Hover state of the primary action. |
| Text | Cloud Paper | `#fafdff` | Headings, and the background of sponsor cards. |
| Text (body) | Body Grey | `#c3c8d2` | Paragraphs. 14.2:1 on the page background. |
| Text (muted) | Muted Grey | `#7f8798` | Meta text and captions. 5.5:1, passes AA. |
| Surface | Page | `#08090c` | Page background. |
| Surface (raised) | Well | `#14171c` | Media wells, so images sit on something darker than the page. |
| Border | Hairline | `rgba(250,253,255,.10)` | Dividers and section rules. |
| Border (hover) | Hairline Strong | `rgba(250,253,255,.28)` | Hover borders, the one rule that reads as deliberate. |

Graphite Core `#2f353e` is the second brand colour. It appears only as the raised surface,
darkened, because the brand value is too light to sit under a photograph.

**The accent budget: one colour.** Only one of the three brand colours is chromatic, so
Circuit Mint carries every accent: interaction (primary action, focus, current page) and
identity (the eyebrow tick, the rule under each section heading, the key-phrase underline,
the ruler mark, the callout label). There is no second accent.

**A wrong turn, recorded.** A later pass added a second accent, Whistle Orange `#ff6b35`,
reasoning that the workshop's orange products made it brand evidence. That was wrong twice
over: orange is a *product* colour and not a brand colour, and it broke the one-accent rule
this document already set. A "make it less bland" request is not a licence to invent brand
direction. Removed, and every gesture now draws in mint. If a future pass wants a second
colour, that is a change to the brand guidelines, not a styling decision.

## 3. Typography

One family: **Montserrat**, weights 300 to 900, loaded from Google Fonts. Uppercase is
reserved for headings and short labels; anything carrying a sentence is sentence case.

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page title | `clamp(2.6rem, 9.5vw, 7.5rem)` | 900 | 0.88 |
| H2 (section) | `clamp(1.6rem, 3.4vw, 2.75rem)` | 800 | 0.96 |
| H3 | `clamp(1.05rem, 1.9vw, 1.4rem)` | 800 | 0.96 |
| Contact row | `clamp(1.4rem, 5vw, 3.75rem)` | 900 | 1.3 |
| Lead paragraph | `clamp(1rem, 1.45vw, 1.2rem)` | 300 | 1.75 |
| Body | `1rem` | 300 | 1.75 |
| Descriptive meta | `0.75rem` | 500 | 1.9 |
| Functional label | `0.6875rem` | 600 | 1.9 |

Two size floors, both deliberate: functional UI text never goes below 11px, descriptive
prose never below 12px. Label tracking is capped at 0.1em.

## 4. Spacing & Layout

There is no rigid 4px grid. Spacing comes from a small set of named tokens, which keeps
the CSS honest at three breakpoints without inventing steps nothing uses.

- **Gutter**: `clamp(1.25rem, 5vw, 4.5rem)`, one horizontal rail for every page
- **Max content width**: `1360px`
- **Section vertical padding**: `clamp(3.5rem, 8vw, 7rem)`
- **Grid gap**: `1.25rem` between parallel items
- **Top bar height**: `74px`, `66px` on mobile
- **Radius**: `2px`, the only radius in the system
- **Easing**: `cubic-bezier(.2,.7,.3,1)`, the only curve
- **Breakpoints**: `1080px` (grids collapse), `860px` (nav collapses to the toggle), `520px` (single column)

## 5. Component Patterns

Nine components, and no more. Anything new should reuse one of these or justify itself
here.

- **Buttons**: `.btn` is an outline; `.btn--primary` is filled mint with near-black text.
  Both are sentence case, never pill-shaped, radius 2px.
- **Panels**: `.panel`, a hairline box for genuinely parallel items of equal weight.
- **Cards**: `.card`, a link-shaped panel with a title and a one-line description.
- **Media**: `.media`, a bordered well holding a photograph. `--tall` is 3:4, default 16:10.
- **Gallery**: `.gallery`, a four-up grid that drops to two then one.
- **Link list**: `.listlinks`, rows separated by hairlines, for items of equal weight that
  do not need boxes around them.
- **Callout**: `.callout`, a heightened surface for a single call to action.
- **Timeline**: `.timeline`, a four-up row of dated phases, used once on CanSat.
- **Data**: `.data` / `.data-label` / `.data-val`, for a real countable number and its
  caption. Never used to display a word or a symbol.

## 6. Iconography

There is no icon library and no icon font. The only marks are:

- **The logo mark** (`assets/logo-svetle.svg`), in the top bar and footer, and the hex-nut
  glyph cut from it as `assets/favicon.svg`.
- **The tick divider** (`.rule-ticks`), a measurement rule: a small inline SVG tick, a
  hairline, and one mint mark. This is the identity motif: a bench ruler.

The first build used three generic equipment pictograms. They were deleted when real
photographs of the same equipment became available, because a photo of the actual bench
beats a pictogram of a generic one.

No arrows, no sparkles, no generic glyphs, no emoji. If a concept needs a mark that does
not exist here, the label carries it instead.

## 7. Imagery Guidelines

Photographs come from the workshop's own library: the old WordPress site and the
`gypridilna-app-2.0` repository. No stock photography, no AI illustration, no hotlinking.

- Everything lives in `photo/` and is committed. A page must render from the repo alone.
- Long edge at most 1600px, WebP at quality 76 to 80. The folder totals about 1.9 MB.
- Always `loading="lazy"` and `decoding="async"`, except the ~1 KB logo SVG.
- Sponsor logos sit on a Cloud Paper card, because most are dark artwork that would
  disappear on the dark background. This is the one place the site goes light.
- Decorative images take `alt=""`; meaningful ones get a real description in Czech.

## 8. Do's and Don'ts

Guardrails earned during the build. The audit trail is in `anti-slop/`.

### Do

- Keep to the three brand colours, and keep mint to its five roles.
- Respect the two size floors: 11px for functional labels, 12px for descriptive prose.
- Vary section composition: a process reads as prose, parallel items as a list, images as
  a gallery.
- Write Czech copy with proper diacritics, in the workshop's own voice from the flyer.
- Cite a real source for every fact. The README lists where each claim comes from.
- Compress any new photo before committing it.
- Leave one `ponytail:` comment where you accept a known ceiling.

### Don't

- Don't add a dependency or a build step. Five pages do not need a bundler.
- Don't use the em dash character in copy.
- Don't set a sentence in uppercase, or track a label wider than 0.1em.
- Don't number sections. The headings carry the structure.
- Don't add a coloured left stripe, a decorative gradient, a background pattern, or a glow.
  Each was removed once already, with reasons recorded in `anti-slop/`.
- Don't animate a layout property, and don't add motion that runs on its own.
- Don't invent an opening time, a statistic, or a testimonial. An empty section beats a
  fabricated one.
- Don't hotlink an image or load a font other than Montserrat.
