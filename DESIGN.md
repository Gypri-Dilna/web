# Gypri Dílna design system

Design direction for the Gypri Dílna website. This file is the source of truth for
identity, dials and the concrete design system. The cleanup that brought the site back in
line with it is recorded in `anti-slop/audit-001-2026-09-10.md`.

## Design Read

> Reading this as: a school workshop site for students, parents and sponsors, in the
> **instrumentation lane**. The page is a datasheet for a real workshop: industrial
> language built from the logo's hex nut, real photographs of the actual benches, one
> accent, and measured values set in a monospace face, dial
> **ENERGY 3 / RHYTHM 3 / MOTION 2**.

### The idea: Dveře 64

The site is not a brochure about a workshop. It is a walk into one.

There is a real door, numbered 64, in the basement of a real school, and most of the
building has never been through it. On the other side is a room that manufactures
things the school quietly depends on: the evacuation whistles behind safety glass in
every classroom, spare parts nobody sells, and a satellite built by teenagers.

That is the whole site. You arrive at the door, you go down one floor, you find out
what is in the room, and then you find out the room is not a hobby.

#### Why the page is ordered the way it is

The previous version was a well-executed brochure: hero, what we do, proof, equipment,
contact. Every section answered a question the visitor had not asked, so there was no
reason to read past the first screen. Reordering it around one fact fixed that.

The arc, and what holds each step:

| Beat | Section | What keeps you reading |
|---|---|---|
| Arrive | The threshold: type, no photograph | A door number and no explanation. The gap opens before any image loads. |
| See the place | Arrival plate, `Obr. 01` | The building the door is in. Concrete, and it makes the door real. |
| Go down | `−1 SUTERÉN` | The floor changes. One line, then the room. |
| Look around | `Co tu stojí`, the inventory | Objects with terse facts. Withholding: it does not explain why they matter yet. |
| The turn | `Něco z téhle místnosti visí v každé třídě v budově.` | The realisation that the room is load-bearing for the whole building. |
| The thread left open | `A pak postavili satelit` | Deliberately unresolved here. It closes on the CanSat page. |
| Invitation | `Dveře jsou otevřené` | The door is not locked. Nothing here is gated. |

Two rules follow from this and are checked in the build verification:

- **The gap is opened before the payoff, and it is opened with enough context to itch.**
  Loewenstein's information gap theory only works when the reader knows enough to notice
  what is missing. "Dveře 64" works because the next line says which building and which
  floor. A hook with no context is just noise.
- **Every promise is kept.** The door number is real, the floor is real, the whistles are
  really in every classroom, the satellite is really being built. Nothing is teased that
  the site does not then deliver, on this page or the next one. A gap that never closes is
  clickbait, and this is a school, not a content farm.

#### What makes it feel unfamiliar

- **Type before photographs.** The first viewport is a dark field with a title on it. Almost
  every other site on the internet opens with a big image. This one opens with the question
  and earns the image a moment later.
- **A door number set in the instrumentation face.** "Dveře" in Montserrat and "64" in
  monospace, on the same baseline at display size. A human sign and a machine number on
  one line is the whole site in a single move.
- **A depth datum instead of a section number.** `±0` and `−1` are the two floors this
  building really has. It is a place marker, not a step counter, and it is used exactly
  twice so it never becomes decoration.
- **An inventory that behaves like labels on drawers.** Large object names and one terse
  factual line each. It reads as the room rather than as a services page.
- **Withholding.** The room is described before it is explained. The reader leans in
  because the reason has not been given yet.

#### What it deliberately is not

Scrollytelling was researched and mostly rejected. No sticky graphic panels, no parallax
layers, no scroll-linked animation, no progress bar, no scroll cue pulse, no counters
ticking up. Those are the standard machinery of the genre and they would have cost page
weight, broken under `prefers-reduced-motion`, and needed JavaScript to say what one
`<span>` says now. The pacing comes from the order of the sections and from how much
space each beat gets, which needs no script at all.

### The lane, and where it came from

The owner asked for the site to feel like **Teenage Engineering** or **Nothing**. Those are
two different companies with one shared position, and it is not "dark mode with mono type".
Both refuse to hide the engineering:

- **Teenage Engineering** treats constraint as the aesthetic. Exposed screws, monospaced
  type throughout, tabular alignment for free, specs laid out in a grid of cells, and
  **radius explicitly zero, not a default**. Their palette is deliberately tiny. Play is
  allowed, but it lives in behaviour and content, never in wobbly decoration.
- **Nothing** works in "technical warmth": mechanical type used with strict, non-overlapping
  jobs, a defined column grid with a computed margin, and an explicit refusal list (no
  gradients, no drop shadows, no colour fills on graphic elements, no altering the grid).

What transferred, and what did not:

| Adopted | Why it fits |
|---|---|
| Mono for measured values only | A spec readout is instrumentation, not brand voice. This is the single biggest lever. |
| Numbered figures | Photographs become plates (`Obr. 01`), which is documentation language rather than decoration. |
| A real datasheet component | Turns countable facts into a spec sheet instead of a row of marketing stat cards. |
| Radius 0 | A machined panel has no radius. Was 2px, which reads as software chrome. |
| Strictly aligned photographs | Both brands are precisely aligned. The previous tilt read as scrapbook. |
| Nothing self-runs | TE motion is an instrument responding to you, not an ambient loop. |

**Not adopted, deliberately:**

- **Their palettes.** Teenage Engineering's identity colour is orange and Nothing's accents
  are red, blue and yellow. The brand guidelines name three colours and only one is
  chromatic, so mint carries everything. Copying a reference brand's colour is not
  applying its philosophy, it is wearing its clothes.
- **A downloaded technical face.** Nothing ships NType82 and NDot55; TE ships its own.
  Typefaces are licensed brand assets and this project has one mandated face. The
  instrumentation voice is carried by a system monospace stack instead: nothing to
  download, nothing to licence, nothing to break offline.
- **Replacing Montserrat.** The brand guide mandates it and it remains the voice for
  headings, prose, navigation and buttons. Only measured values changed face.

**Reference material consulted** (September 2026):

- teenage.engineering, for the product and typographic system in use
- [Teenage Engineering: Constraints as Aesthetic](https://blakecrosley.com/guides/design/teenage-engineering),
  for the reasoning behind the mono-only voice, the radius-0 choice, and the grid-of-specs
  pattern
- [Nothing brand reference](https://nothing.wiki/nothing/brand_reference), an unofficial
  community condensation of Nothing's released brand guidelines, for the typeface job
  separation, the size-based tracking and leading table, the grid and margin rule, and the
  graphics refusal list (no colour fills, no drop shadows, no gradients)
- [The Curiosity Gap](https://datafield.dev/why-they-watch/part-01/chapter-05/), for
  Loewenstein's information gap theory, the Zeigarnik effect and open loops, and the
  distinction between genuine curiosity and clickbait. This is the source of the two rules
  in "The idea: Dveře 64": give enough context for the gap to itch, and keep every promise.
- [Scrollytelling design reference](https://chrislemke.github.io/website_designs/designs/Scrollytelling.html),
  read and then mostly declined. It is a good account of the genre, and it is the reason
  this page has no sticky graphic panels, no parallax and no scroll cue. Its one adopted
  principle is "show, then tell", which is why the photograph follows the question.

All of the above are consulted as *philosophy*. No asset, font or colour is taken from any
of them, and nothing here is a copy of another company's identity.

**Read and not used as a source.** A widely-shared listicle on tech website design was
provided and read in full. Its concrete advice is a clear value proposition in the hero,
ample white space, subtle animations and social proof, which describes the median polished
technology site. That is the look this project was asked to move away from, so nothing was
taken from it beyond confirming the direction to avoid. It is recorded here so a later pass
does not re-adopt it as a reference.

| Dial | Value | What that means here |
|---|---|---|
| **ENERGY** | 3 (Bold) | A workshop full of teenagers building things, not a consultancy. Display type is large, the page title carries the page, and photographs of real students do the work. The energy is now in scale and precision rather than in decoration. |
| **RHYTHM** | 3 (Varied, asymmetric) | Sections deliberately do not share one composition: a full-bleed hero, a lead-plus-rows feature block, a readout band, a datasheet, a numbered figure strip. |
| **MOTION** | 2 (Balanced) | Scroll-triggered reveals, a section rule that draws itself in, a hairline that answers the cursor, a plate number that turns mint, a sponsor logo that lifts and comes up to colour, and a mobile menu whose links arrive one after another. Nothing runs on its own, and all of it is off under `prefers-reduced-motion`. |

### Why the dials went up

The first build read as bland and corporate. The cause was diagnosable: the site had no
real assets. It used one screenshot, three generic tool pictograms, and thumbnails pulled
from an old WordPress page. The CSS was not the problem, and adding more decoration would
not have fixed it.

Two things changed:

1. **Real photographs.** 232 images of the actual workshop were reviewed; 20 were selected.
   Real students at real benches replaced pictograms, and the orange Gypri whistles the
   workshop actually prints became a centrepiece instead of a sentence in a list.
2. **A whisker of play.** Rules that draw themselves in, a logo that turned on hover, one
   warm colour, and photographs tilted like snapshots pinned to a wall. Only the rules
   survive: the colour was reverted (section 2), the tilt was straightened in the
   instrumentation pass (section 7), and the logo turn was cut later as a moving part with
   no job.

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
ticks, which puts a workshop's own instrument language into the page rather than a generic
ornament. It replaced an earlier hex-nut chain that repeated the logo too literally.

**Why square corners?** A workshop is a place of square edges and machined corners. Any
radius reads as software, not as a bench, so the value is a deliberate `0` everywhere and
not the browser default.

---

## 1. Visual Theme & Atmosphere

A working workshop bench, not a software product page. Dark, quiet, and precise: one
display heading per page carries the energy, everything else defers to it. Surfaces are
flat hairlines rather than shadows, so nothing floats. The mood is technical and
understated, closer to a machined part than to a marketing page.

Because the audience is Czech students, parents and sponsors, the tone is plain and
concrete. No claims, no superlatives, no invented numbers. The one bold gesture is scale:
a page title that reaches 120px and keeps growing on a wide display, real photographs of
real students, and one accent colour used sparingly.

## 2. Color Palette & Roles

Three brand colours plus neutrals. Nothing else is added.

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Accent | Circuit Mint | `#3aa398` | The only accent. Primary action, current-page marker, focus ring, text selection, the eyebrow tick, the rule under a section heading, the key-phrase underline, the sponsor frame on hover, and the callout label. |
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
Circuit Mint carries every accent: interaction (primary action, focus, current page, the
hovered sponsor frame) and identity (the eyebrow tick, the rule under each section heading,
the key-phrase underline, the callout label). There is no second accent.

**A wrong turn, recorded.** A later pass added a second accent, Whistle Orange `#ff6b35`,
reasoning that the workshop's orange products made it brand evidence. That was wrong twice
over: orange is a *product* colour and not a brand colour, and it broke the one-accent rule
this document already set. A "make it less bland" request is not a licence to invent brand
direction. Removed, and every gesture now draws in mint. If a future pass wants a second
colour, that is a change to the brand guidelines, not a styling decision.

## 3. Typography

Two faces, with jobs that never overlap. This is the one place the reference brands
changed the system, and it is deliberately narrow.

**Montserrat** is the brand voice and the only downloaded font. Weights 300 to 900, from
Google Fonts. Everything a person reads as the workshop speaking: headings, prose,
navigation, buttons, captions that carry a sentence. Uppercase is reserved for headings
and short labels; anything carrying a sentence is sentence case.

**A system monospace stack** (`--mono`) is the instrumentation voice, used *only* for
measured values and plate labels: datasheet values, readout numbers, the figure numbers on
photographs, and the small uppercase labels directly above a measurement. It is
`ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace`,
so nothing is downloaded, nothing is licensed, and nothing breaks offline. It never sets
prose.

The split follows the test: if a value could be read aloud as part of a sentence, it stays
in Montserrat. If it is a reading off an instrument, it goes in mono.

| Element | Size | Treatment |
|---------|------|-----------|
| Page title | `clamp(2.6rem, 9.5vw, 7.5rem)` | 900, leading 0.88, Montserrat |
| H2 (section) | `clamp(1.6rem, 3.4vw, 2.75rem)` | 800, leading 0.96, Montserrat |
| H3 | `clamp(1.05rem, 1.9vw, 1.4rem)` | 800, leading 0.96, Montserrat |
| Contact row | `clamp(1.4rem, 5vw, 3.75rem)` | 900, leading 1.3, Montserrat |
| Lead paragraph | `clamp(1rem, 1.45vw, 1.2rem)` | 300, leading 1.75, Montserrat |
| Body | `1rem` | 300, leading 1.75, Montserrat |
| Descriptive meta | `0.75rem` | 500, leading 1.9, Montserrat |
| Functional label | `0.6875rem` | 600, leading 1.9, Montserrat |
| Data readout | `clamp(1.5rem, 3vw, 2.25rem)` | 600, leading 1, mono |
| Datasheet value | `1.05rem` | 600, mono |
| Datasheet label | `0.6875rem` | 400, uppercase, tracked 0.1em, mono |
| Datasheet note | `0.75rem` | 400, mono |
| Figure number | `0.75rem` | 400, leading 1.5, mono |

Four size floors, all deliberate: functional UI text never below 11px, descriptive prose
never below 12px, datasheet notes never below 12px, figure captions never below 12px.
Label tracking is capped at 0.1em.

## 4. Spacing & Layout

There is no rigid 4px grid. Spacing comes from a small set of named tokens, which keeps
the CSS honest at three breakpoints without inventing steps nothing uses.

- **Gutter**: `clamp(1.25rem, 5vw, 4.5rem)`, one horizontal rail for every page
- **Max content width**: `1360px`, `1720px` above 1600px, where the root font-size also
  begins to grow so the type scales with the wider column
- **Section vertical padding**: `clamp(3.5rem, 8vw, 7rem)`
- **Grid gap**: `1.25rem` between parallel items
- **Top bar height**: `74px`, `66px` on mobile
- **Radius**: `0`, everywhere. A machined panel has no radius and a rounded one reads as
  software chrome. This was `2px`; it became a deliberate zero after the reference study.
- **Easing**: `cubic-bezier(.2,.7,.3,1)`, the only curve
- **Breakpoints**: `1080px` (grids collapse), `860px` (nav collapses to the toggle),
  `560px` (datasheet rows stack), `520px` (single column)

## 5. Component Patterns

The components, and no more. Anything new should reuse one of these or justify itself here.
The dead-CSS check in the build verification fails if a component is declared with no markup
using it, so this list and the stylesheet cannot drift apart.

The system, shared by every page:

- **Buttons**: `.btn` is an outline; `.btn--primary` is filled mint with near-black text.
  Both are sentence case, never pill-shaped, radius 0.
- **Panels**: `.panel`, a hairline box for genuinely parallel items of equal weight.
- **Cards**: `.card`, a link-shaped panel with a title and a one-line description.
- **Media**: `.media`, a bordered well holding a photograph. `--tall` is 3:4, default 16:10.
  Photographs sit square and never zoom; the frame hairline answers the cursor instead.
- **Figure caption**: `.media-caption` with a `.fig-num` plate number, set in mono. Hovering
  the frame turns the number mint. Every photograph on the site is a numbered figure.
- **Callout**: `.callout`, a heightened surface for a single call to action.
- **Timeline**: `.timeline`, a four-up row of dated phases, used once on CanSat.
- **Spec sheet**: `.specs`, the datasheet. A `<dl>` of `.specs-row`, each row a
  `.specs-label` (`<dt>`) with a `.specs-val` and `.specs-note` (`<dd>`) stacked beside it,
  hairline separated. Used for facts that are genuinely countable or genuinely enumerated.
  Rows stack below 560px.

The descent, the components that carry the idea described in "The idea: Dveře 64":

- **Threshold**: `.threshold` / `.threshold-title` / `.threshold-num`, the opening. Type on
  dark with no photograph, so the question arrives before the building does. The numeral
  inside the title is set in mono at display size.
- **Depth datum**: `.depth`, a mono floor marker with a trailing hairline. Used exactly
  twice, at `±0` and `−1`, because those are the two floors this building has.
- **Arrival**: `.arrival`, the school photograph as a contained plate at 2:1 with a
  numbered caption. It replaced a full-bleed scrim hero that ran on three pages at once.
- **Descent**: `.descent`, the one full-bleed break in the page, on the raised surface. It
  is the moment the floor changes.
- **Inventory**: `.ledge`, the objects in the room. A `<ul>`; each row is a `.ledge-name`
  and a `.ledge-note`. Counts live inside the name as words ("Sedm tiskáren"), not repeated
  as a mono figure beside it.
- **Statement**: `.statement`, a large sentence-case line for the turn of the story. Leading
  is 1.3 because it wraps and has to be read, unlike the display headings.

**Removed when the homepage was reordered around the story**, and not to be reintroduced
without markup to match: `.feature-split`, `.feature-lead`, `.feature-rest`, `.feature-item`,
`.listlinks` and its parts, `.data` and its parts, `.hero-photo`, and `.gallery`.

## 6. Iconography

There is no icon library and no icon font. The only marks are:

- **The logo mark** (`assets/logo-svetle.svg`), in the top bar and footer, and the same
  glyph as `assets/favicon.svg`, drawn in mint on a transparent background so it reads on
  both light and dark browser chrome.
- **The tick divider** (`.rule-ticks`), a measurement rule: a small inline SVG tick on a
  hairline. This is the identity motif: a bench ruler. It carried a mint mark until that
  read as a stray coloured bar under whatever sat above it, and it was removed.
- **The plate number** (`.fig-num`), the `Obr. 01` prefix on a figure caption. It borrows
  documentation convention rather than drawing a glyph.

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
- **Every photograph is a numbered figure.** Its caption opens with `.fig-num` (`Obr. 01`),
  numbered per page from 01. Photographs sit square: no rotation, no zoom on hover. The
  tilt was removed in the reference pass because precision is the whole point of the lane.

## 8. Do's and Don'ts

Guardrails earned during the build. The audit trail is in `anti-slop/`.

### Do

- Keep to the three brand colours, and keep mint to its multiple roles.
- Use mono for measured values and plate labels only, and Montserrat for everything read as
  a sentence. See the test in section 3.
- Respect the size floors: 11px for functional labels, 12px for descriptive prose,
  datasheet notes and figure captions.
- Vary section composition: a process reads as prose, parallel items as a list, countable
  facts as a datasheet, images as numbered figures.
- Write Czech copy with proper diacritics, in the workshop's own voice from the flyer.
- Cite a real source for every fact. The README lists where each claim comes from.
- Compress any new photo before committing it.
- Leave one `ponytail:` comment where you accept a known ceiling.

### Don't

- Don't let mono set prose. It is instrumentation, not a voice.
- Don't download a second font. The instrumentation face is a system stack on purpose.
- Don't copy a reference brand's colour. Mint carries the accent; see section 2.
- Don't add a dependency or a build step. Five pages do not need a bundler.
- Don't use the em dash character in copy.
- Don't set a sentence in uppercase, or track a label wider than 0.1em.
- Don't number sections. The headings carry the structure. Numbered *figures* are the one
  exception, because a datasheet genuinely refers to its plates.
- Don't add a coloured left stripe, a decorative gradient, a background pattern, or a glow.
  Each was removed once already, with reasons recorded in `anti-slop/`.
- Don't add a drop shadow or a gradient to a graphic element. Nothing's guidelines forbid
  both, and this site agrees.
- Don't rotate or tilt a photograph, and don't animate a layout property.
- Don't add motion that runs on its own.
- Don't invent an opening time, a statistic, or a testimonial, and don't put an invented
  number in a datasheet. A row with no note beats a padded one.
- Don't hotlink an image.
