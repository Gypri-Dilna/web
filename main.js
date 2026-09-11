/* Gypri dílna navigation and scroll reveals.
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

  /* ------------------------------------------------ mobile navigation -- */

  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  if (toggle && nav) {
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
  }

  /* -------------------------------------- reveals and section rules --
     Adds .is-visible when an element scrolls into view. .reveal fades and lifts;
     .section-head uses the same hook to draw its mint rule in. */

  var watched = document.querySelectorAll('.reveal, .section-head');

  if (!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(watched, function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  Array.prototype.forEach.call(watched, function (el) {
    // stagger siblings so a row of items arrives as a row, not one slab
    if (el.classList.contains('reveal')) {
      var siblings = el.parentNode ? el.parentNode.children : [];
      var index = Array.prototype.indexOf.call(siblings, el);
      if (index > 0) el.style.transitionDelay = Math.min(index, 4) * 70 + 'ms';
    }
    observer.observe(el);
  });
})();
