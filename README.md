# Gypri Dílna website

Static website for the Gypri Dílna workshop at Masarykovo gymnázium, Příbor.

No build step, no framework, no external image dependencies. Five hand-written HTML
pages, one stylesheet, one small script. Drop the folder on any static host.

Design direction and dials: **[DESIGN.md](DESIGN.md)**.
Anti-slop audit and cleanup record: **[anti-slop/audit-001-2026-09-10.md](anti-slop/audit-001-2026-09-10.md)**.

---

## Files

```
index.html          Domů
nase-prace.html     Naše práce
cansat.html         CanSat
sponzori.html       Sponzoři
kontakt.html        Kontakt
styles.css          the entire design system
main.js             navigation, photo dialog and reveals (no dependencies)
DESIGN.md           direction, dials, and the reason for each major decision
assets/             the two files the site references: logo, favicon
photo/              photographs and sponsor logos (all local, pre-optimised)
```

Header and footer markup is repeated in each page on purpose, so the site needs no
templating and no build step.

<!-- ponytail: duplicated chrome. Changing one nav item means editing five files, and
     nothing catches a missed one. Ceiling accepted because the alternative is a build
     step or a component layer, which costs more than it saves at five pages. Upgrade
     path: if the page count passes roughly ten, generate the pages from one template. -->

`AGENTS.md` is the ponytail ruleset (lazy-senior-dev code minimalism). It is the
instruction-only install: one file, no plugin, no hooks, no dependency. The deliberate
ceiling for duplicated page chrome is marked with a `ponytail:` comment above.

## Preview locally

Any static server works:

```bash
npx serve .
```

Opening `index.html` directly over `file://` also works.

## Editing content

- **Text** lives in the HTML. If you add or remove a figure on a page, renumber that
  page's `Obr. 01` … captions by hand; there is no templating and no build step.
- **Photos** go in `photo/`. Keep them around 1600 px on the long edge and compressed.
  The whole folder is about 3.5 MB.
- **Sponsors**: add an `<a class="sponsor">` block in `sponzori.html`. Logos sit on a
  uniform 3:2 Cloud Paper card, with contained logos that keep their original proportions,
  because most sponsor logos are dark artwork that would disappear on the dark background.
- **Mark the current page** with `aria-current="page"` on the matching nav link. One per
  page; it drives the underline.
- **Shared asset versions**: keep the stylesheet and script query versions in sync across
  all five pages when changing shared behavior, so cached assets cannot mix implementations.

## Design system

Tokens at the top of `styles.css`:

| Token | Value | Name in the brand guide |
| --- | --- | --- |
| `--mint` | `#3aa398` | Circuit Mint |
| `--surface` | `#14171c` | Graphite Core, darkened for media wells |
| `--paper` | `#fafdff` | Cloud Paper |

Typography is **Montserrat** throughout, as the brand guide specifies. A system monospace
stack (`--mono`, nothing downloaded) is used for measured values and plate labels only:
datasheet values, readout numbers, and the `Obr. 01` figure numbers. The test is whether a
value could be read aloud as part of a sentence. If it could, it stays in Montserrat.

**The accent is deliberately narrow.** Mint carries every accent, in two groups. Interaction:
the primary action, the current-page marker, the focus ring, the hovered sponsor frame, and
the text selection colour. Identity: the eyebrow tick, the rule under each section heading,
the bold mint emphasis, the callout label, and the plate number on a figure. There is no
second colour. Adding one is what made an earlier version read as decorated rather than
designed.

**Direction follows the instrumentation lane.** The owner asked for the site to feel like
Teenage Engineering or Nothing, so the page is built as a datasheet for a real workshop:
square corners, strictly aligned photographs, numbered figures, and countable facts in a
spec sheet. What was adopted and, more importantly, what was refused (their palettes, their
licensed typefaces) is recorded in `DESIGN.md`.

> **Note on the brand guide's hex values.** Page 7 lists the palette names with
> `#343840`, `#67A498` and `#FAFCFE` in the prose, but the swatches on that same page read
> `#2F353E`, `#3AA69A`, `#FAFDFF`, and the shipped logo files use `#2f353e`, `#3aa398`,
> `#fafdff`. This site uses the logo values so the site and the logo assets match. If the
> prose values are the intended ones, update the three tokens and re-tint
> `assets/favicon.svg`.

The section divider is `.rule-ticks`, a measurement rule drawn entirely in CSS: a hairline
with drawn ticks and nothing else. It replaced a hex-nut chain that repeated the logo too
literally, and the mint mark it carried was removed because it read as a stray coloured bar
under whatever sat above it.

`assets/favicon.svg` is the logo glyph itself, in mint on a transparent background, so it
reads on both light and dark browser chrome.

`assets/` holds only what is referenced: `logo-svetle.svg` and `favicon.svg`. The other
brand logo variants (all-white, and the dark version for light backgrounds) are not used by
any page and were removed; they live in `gypridilna-app-2.0/LOGOS/` and in this repo's git
history if you need them.

## Where the photographs came from

The workshop's own photo archive was provided: 232 images, reviewed one by one as labelled
contact sheets. Nineteen are committed to `photo/` as optimised WebP; the two that stopped
being used were deleted rather than left orphaned (they are in git history).

They were chosen for one reason: the first build had no real assets, and that was why it
read as bland and corporate. Real students at real benches, the orange Gypri whistles the
workshop prints, and drone shots of the school carry the site now.

When adding a photo: keep the long edge at or under 1600px, use WebP around quality 80, and
give it a real Czech `alt`. Decorative images take `alt=""`.

## Accessibility and behaviour

- `prefers-reduced-motion: reduce` removes all transitions.
- Focus rings are visible (`:focus-visible`, brand mint). Photo rings sit inside the
  image frame so clipping cannot hide them.
- The closed mobile nav is inert; opening it makes its links keyboard reachable.
  `Esc` closes it and restores focus. The menu stays scrollable on short screens.
- Photos open in a native modal `<dialog>`: background content is inert, `Esc` closes
  the viewer, and focus returns to the source photo. All viewer controls are at least 44px.
- Reduced transparency or increased contrast makes the top bar and photo backdrop solid.
- Type and header spacing scale with the browser's default text size. Contact handles
  wrap when enlarged, and team portrait widths scale with their captions.
- Enhancement is enabled only after script setup succeeds. Without scripts, navigation
  remains in the document flow and reveal content stays visible.
- There is no animated background. Reveals last 400ms without stagger delays; press
  feedback is immediate, and the menu uses only opacity/transform transitions.
- Two size floors: functional labels never below 11px, descriptive prose never below 12px.
- Every text/surface pair in `styles.css` passes WCAG AA. Callouts use the page
  background; inline emphasis uses bold Circuit Mint.

## Tooling

Three rulesets apply to this repo. None of them is a dependency: they are instructions and
checks, never something the site loads at runtime.

| Tool | What it is | How to run it |
|---|---|---|
| `AGENTS.md` | [ponytail](https://github.com/DietrichGebert/ponytail), lazy-senior-dev code minimalism. Instruction-only install: one file, no plugin, no hooks. | Loaded by the agent; nothing to run. |
| [impeccable](https://github.com/pbakaus/impeccable) | 61 deterministic design detectors. No LLM, no API key. | `npx impeccable detect .` |
| [design-guard](https://github.com/FReptar0/design-guard) | Anti-slop lint for HTML against `DESIGN.md`, plus a design-system scorer. | `npx design-guard lint .` |

Current design-guard state: **5/5 pages at 100/100**, `DESIGN.md` 85/100.
The live impeccable scan reports the existing `kicker-above-heading` finding for
“Kroužek probíhá”, which is retained as the club status label. The interaction
review adds no new findings; `text-wrap: pretty` resolves the paragraph straggler advisory.

### The waived detector rule

The padding waiver is recorded in `.impeccable/config.json`.

**`cramped-padding` is a false positive.** The detector resolves `clamp()` for font-size
but not for padding, so clamp-based padding reads as zero. Measured in a browser: `.section`
has `padding-top: 101.12px` with a 102px real gap to its first child. Callouts now
use only top padding beneath a divider, with their text aligned to the content rail. Worth reporting to the impeccable repo.

### Interaction check

Serve the repo with any static server, then open `/checks/interactions.html` in a
browser. It reports pass/fail for mobile menu focus and resizing, interrupted menu
changes, modal focus containment, photo navigation, closing, rapid reopening and the
script-free navigation/content fallback.
It uses the actual homepage in an iframe and needs no test dependency.

### What we do not use from design-guard

Its generator pipeline (`dg discover`, `dg generate`, `dg build`) produces new screens via
Google Stitch MCP. This site is hand-built from the brand guide and already exists, so that
half of the tool is not applicable. Only the linter is used. `DESIGN.md` deliberately
follows its eight-section structure, because that structure is clear and makes the document
legible to the tool, but the content is this project's own.

## Before you go live

1. **Contact details.** `dilna@gypri.cz` and `+420 605 089 399`, both from the kroužek
   flyer. Confirm the phone number is the one you want public.
2. **Kroužek schedule.** The contact page now follows the current homepage: usually
   twice a month on Wednesdays from 14:00. Confirm any future changes on both pages.
   The older flyer has a different schedule.
3. **Door number.** The flyer says door no. 64, next to the art room. Confirm this is
   still correct.
4. **Photo credits.** All photos came from the old WordPress site and the
   `gypridilna-app-2.0` repo, so they are the workshop's own images. They were verified as
   valid files but never reviewed by eye.

## Sources

Copy and facts on this site come from, in order of authority:

1. `Dilna Logo - brand guide.pdf` (Návod Brand 2025): palette, typeface, logo concept, and
   the contact e-mail on page 8.
2. `Dílna kroužek leták A4.pdf` (the kroužek flyer): phone number, meeting schedule, door
   number, and the wording of the mission lines.
3. The old WordPress site at gypridilna.cz: equipment counts, project descriptions,
   sponsor list, address.
4. The `gypridilna-app-2.0` repo: logo glyphs and workshop photographs.

If a fact is not in one of those, it is not on the site. That is deliberate.
