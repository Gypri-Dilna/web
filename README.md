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
main.js             mobile navigation only (no dependencies)
DESIGN.md           direction, dials, and the reason for each major decision
assets/             logo variants, hex-nut glyphs, favicon
photo/              photographs and sponsor logos (all local, pre-optimised)
```

Header and footer markup is repeated in each page on purpose, so the site needs no
templating and no build step. Change navigation in all five files.

## Preview locally

Any static server works:

```bash
npx serve .
```

Opening `index.html` directly over `file://` also works.

## Editing content

- **Text** lives in the HTML. Section headings pair `<span class="idx">01</span>` with an
  `<h2>`, so renumber if you add or remove a section.
- **Photos** go in `photo/`. Keep them around 1600 px on the long edge and compressed.
  The whole folder is about 1.9 MB.
- **Sponsors**: add an `<a class="sponsor">` block in `sponzori.html`. Logos sit on a
  Cloud Paper card because most sponsor logos are dark artwork that would disappear on
  the dark background.
- **Mark the current page** with `aria-current="page"` on the matching nav link. One per
  page; it drives the underline.

## Design system

Tokens at the top of `styles.css`:

| Token | Value | Name in the brand guide |
| --- | --- | --- |
| `--mint` | `#3aa398` | Circuit Mint |
| `--surface` | `#14171c` | Graphite Core, darkened for media wells |
| `--paper` | `#fafdff` | Cloud Paper |

Typography is **Montserrat** throughout, as the brand guide specifies. The technical
reading comes from uppercase on functional labels, not from a monospace face.

**The accent is deliberately narrow.** Mint appears in five roles only: the primary
action, the current-page marker, the focus ring, the text selection colour, and the hex
divider. Adding it elsewhere is what made the first version read as decorated rather
than designed. If you want more mint, take it from one of those five first.

> **Note on the brand guide's hex values.** Page 7 lists the palette names with
> `#343840`, `#67A498` and `#FAFCFE` in the prose, but the swatches on that same page read
> `#2F353E`, `#3AA69A`, `#FAFDFF`, and the shipped logo files use `#2f353e`, `#3aa398`,
> `#fafdff`. This site uses the logo values so the site and the logo assets match. If the
> prose values are the intended ones, update the three tokens and re-tint
> `photo/icon-*.png` and `assets/favicon.svg`.

The `assets/divider-glyph-chain.svg` is a row of the logo's hex nuts (cropped out of the
repo's `bolt glyph chain.svg`, white background removed) used as a section divider.

## Accessibility and behaviour

- `prefers-reduced-motion: reduce` removes all transitions.
- Focus rings are visible (`:focus-visible`, brand mint).
- The mobile nav is keyboard reachable and closes on `Esc`.
- There is no animated background: motion is hover and focus only.

## Before you go live

1. **Contact details.** `dilna@gypri.cz` and `+420 605 089 399`, both from the kroužek
   flyer. Confirm the phone number is the one you want public.
2. **Kroužek schedule.** The site says the club meets every 2nd to 3rd Wednesday, at least
   once a month. That comes from the flyer, which is a dated document, so check it still
   matches the current school year.
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
