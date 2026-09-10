# DESIGN.md

Design direction for the Gypri Dílna website. This file is the source of truth for
identity and dials; `anti-slop/audit-001-2026-09-10.md` records the cleanup that brought
the site back in line with it.

## Design Read

> Reading this as: a school workshop site for students, parents and sponsors, in an
> industrial hex-nut visual language drawn from the logo mark, dial
> **ENERGY 2 / RHYTHM 2 / MOTION 1**.

## Dials

| Dial | Value | What that means here |
|---|---|---|
| **ENERGY** | 2 (Balanced) | Large display type gives the pages presence, but the palette is restrained and there are no decorative effects competing with the content. |
| **RHYTHM** | 2 (Consistent, with a few breaks) | One shared section header pattern holds the site together. Composition varies underneath it: asymmetric feature block, stat grid with a photo, link list, gallery, split, callout. |
| **MOTION** | 1 (Calm) | Hover and focus transitions only. No scroll reveals, no looping background animation. A static informational site does not need choreography, and the previous reveal-on-everything plus drifting background canvas contradicted any calm dial. |

## Direction source (R-37)

Direction is not invented. It comes from **`Dilna Logo - brand guide.pdf`** ("Návod Brand
2025"), which fixes:

- **Palette:** Graphite Core, Circuit Mint, Cloud Paper, with the logo files carrying the
  final values used here (`#2f353e`, `#3aa398`, `#fafdff`).
- **Typography:** Montserrat.
- **Logo concept:** "Dvě funkční matice redefinovány do tiskacích znaků G a D" (two hex
  nuts forming the letters G and D).

Where the guide's prose hex values disagree with its own swatches and the shipped logo
files, the logo files win, so the site and the logo assets match exactly.

## Reasons (R-31)

One line each, for the decisions that matter.

**Why these colours?** The three brand colours are the entire palette; nothing was added.

**Why is mint the accent?** It is the only chromatic brand colour, so it carries the
primary action, the current-page marker, focus, and selection, and nothing else.

**Why is the site dark?** The workshop is a technical space and the sibling project at
ikaroscansat.cz, which the owner named as the reference, is dark. Cloud Paper still does
real work here: it is the page's text colour, and it is the background of the sponsor
cards, which is required because most sponsor logos are dark artwork.

**Why Montserrat?** The brand guide mandates it. Not a default pick.

**Why uppercase and letter-spacing?** Reserved for functional labels (nav, buttons, data
labels, small captions) where it aids scanning, not spread across headings and body text.

**Why this layout?** Each page is composed from what its content actually is: a process
reads as prose, parallel items read as a list, images read as a gallery.

**Why cards at all?** Only where items are genuinely parallel and equal weight. Where
items have different weight, the layout shows that difference instead of flattening it.

**Why the hex divider?** The logo is a hex nut, so the divider is the brand mark's own
geometry repeated. It is the site's identity motif, and the only decorative element kept.

**Why these three icons?** They are the workshop's own equipment assets, recoloured to
the text colour so they read as marks rather than decoration.

**Why a 2px radius?** A workshop is a place of square edges and machined corners. A
larger radius would read as software, not as a bench.

**Why one rail of whitespace?** A single gutter width holds every page, so the technical
frame reads as structure rather than as leftover space.
