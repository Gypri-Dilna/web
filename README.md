# Gypri Dílna — website

Static website for the Gypri Dílna workshop at Masarykovo gymnázium, Příbor.

**No build step, no framework, no external image dependencies.** Five hand-written
HTML pages, one stylesheet, one small script. Drop the folder on any static host.

---

## Files

```
index.html          Domů
nase-prace.html     Naše práce
cansat.html         CanSat
sponzori.html       Sponzoři
kontakt.html        Kontakt
styles.css          the entire design system
main.js             nav toggle, scroll reveals, background ambience (~120 lines)
assets/             logo variants, hex-nut glyphs, favicon
photo/              photographs and sponsor logos (all local, pre-optimised)
```

The header and footer markup is repeated in each page — that is deliberate, so the
site needs no templating or build step. If you change navigation, change it in all
five files.

## Preview locally

Any static server works. For example:

```bash
npx serve .          # then open the printed localhost URL
```

Opening `index.html` directly with `file://` also works, except the background
ambience canvas and the CSS mask on the glyph divider behave best over HTTP.

## Editing content

- **Text** lives directly in the HTML. Section headings use `<span class="idx">[ 01 ]</span>`
  next to an `<h2>`, so renumber them if you add or remove a section.
- **Photos** go in `photo/`. Keep them around 1600 px on the long edge and
  compressed — the whole folder is currently ~1.9 MB.
- **Sponsors**: add an `<a class="sponsor reveal">` block in `sponzori.html`. Logos are
  shown on a light "Cloud Paper" card, because most sponsor logos are dark artwork that
  would disappear on the dark background.
- **Mark the current page** with `aria-current="page"` on the matching nav link — the
  exact count matters (one per page), it drives the active-state underline.

## Design system

Everything is driven by custom properties at the top of `styles.css`:

| Token | Value | Name in the brand guide |
| --- | --- | --- |
| `--graphite` | `#2f353e` | Graphite Core |
| `--mint` | `#3aa398` | Circuit Mint |
| `--paper` | `#fafdff` | Cloud Paper |

Typography is **Montserrat** throughout, as specified in the brand guide (weights
300–900). The "technical readout" look is achieved with uppercase + wide
`letter-spacing` rather than a monospace face, to stay on-brand.

> **Note on the brand guide's hex values.** Page 7 of *Návod Brand 2025* lists the
> palette names with `#343840`, `#67A498` and `#FAFCFE` in the prose, but the colour
> swatches on the same page read `#2F353E`, `#3AA69A`, `#FAFDFF`. The shipped logo
> files use `#2f353e`, `#3aa398` and `#fafdff`. This site uses the values from the
> **logo files**, so the site and the logo assets match exactly. If the prose values
> are the intended ones, update the three tokens at the top of `styles.css` and
> re-tint `photo/icon-*.png` and `assets/favicon.svg` (they are baked mint).

The logo mark is the "two hex nuts forming G and D" from the brand guide. The
`assets/divider-glyph-chain.svg` is a row of those nuts (cropped out of the repo's
`bolt glyph chain.svg` and stripped of its white background) used as a section divider.

## Accessibility / behaviour

- `prefers-reduced-motion: reduce` disables the ambience canvas and all reveals.
- Focus rings are visible (`:focus-visible`, brand mint).
- The mobile nav is keyboard-reachable and closes on `Esc`.
- The ambience canvas is skipped entirely on mobile and for reduced-motion users.

## Before you go live — things to confirm

1. **Access System URL.** The site links to `http://sshdilna.playit.plus:1226/` in the
   top bar, the footer and `kontakt.html`. That is a temporary tunnel address — check it
   is still current, or remove the links.
2. **Contact e-mail.** `dilna@gypri.cz`, taken from page 8 of the brand guide. Confirm
   it is the address you want public.
3. **Opening hours.** `kontakt.html` says the workshop is open during the club and by
   arrangement — there are no fixed hours published, so write it in if you have them.
4. **Photo credits.** All photos were pulled from the old WordPress site and the
   `gypridilna-app-2.0` repo. They are the workshop's own images, but check you are
   happy with each one — they could not be visually reviewed during the build.
