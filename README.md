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

1. **Contact e-mail.** `dilna@gypri.cz`, from page 8 of the brand guide. Confirm it is the
   address you want public.
2. **Opening hours.** The site deliberately states none, because there is no source for
   any. If you have real hours, add them to `kontakt.html`.
3. **Access System.** The link was removed because `sshdilna.playit.plus:1226` stopped
   resolving (DNS failure), and a dead control on five pages is worse than no control.
   When the tunnel is running again, add it back in two places per page: a nav item in
   `<nav class="nav">` and a link in `<nav class="footer-nav">`, plus a row in
   `kontakt.html`.
4. **Photo credits.** All photos came from the old WordPress site and the
   `gypridilna-app-2.0` repo, so they are the workshop's own images. They were verified as
   valid files but never reviewed by eye.
