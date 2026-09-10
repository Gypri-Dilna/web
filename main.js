/* Gypri dílna navigation only.
   No dependencies. Direction and dials live in DESIGN.md.

   ponytail: JS-gated disclosure. With JS off, the collapsed mobile nav cannot
   open, so a small-screen visitor has no way to navigate. Ceiling accepted
   because the alternatives were worse: native <details> needs CSS that fights
   the UA stylesheet to stay open on desktop, and the checkbox hack needs a
   <label> plus :checked plumbing for the same result. Upgrade path: if no-JS
   mobile traffic ever matters, drop the collapse below 860px and let the links
   wrap, which needs no script at all. */
(function () {
  'use strict';

  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  if (!toggle || !nav) return;

  var setNav = function (open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Zavřít menu' : 'Otevřít menu');
  };

  toggle.addEventListener('click', function () {
    setNav(!nav.classList.contains('is-open'));
  });

  nav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') setNav(false);
  });

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setNav(false);
      toggle.focus();
    }
  });
})();
