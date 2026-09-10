/* Gypri dílna navigation only.
   No dependencies. Direction and dials live in DESIGN.md. */
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
