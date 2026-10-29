/* Gypri dílna navigation, native photo dialog and scroll reveals.
   No dependencies. Direction and dials live in DESIGN.md. */
(function () {
  'use strict';

  /* ------------------------------------------------ mobile navigation -- */

  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  if (toggle && nav) {
    var mobileNav = window.matchMedia('(max-width: 53.75em)');
    var setNav = function (open) {
      nav.classList.toggle('is-open', open);
      nav.inert = mobileNav.matches && !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Zavřít menu' : 'Otevřít menu');
    };

    mobileNav.addEventListener('change', function () { setNav(false); });

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

  /* ------------------------------------------------ image lightbox -- */

  function initLightbox() {
    var mediaImgs = Array.prototype.slice.call(document.querySelectorAll('.media img'));
    if (!mediaImgs.length) return;

    var lightboxEl = null;
    var lightboxImg = null;
    var lightboxCaption = null;
    var lightboxCounter = null;
    var prevBtn = null;
    var nextBtn = null;
    var currentIndex = 0;
    var lastFocusedEl = null;

    function buildLightboxDOM() {
      lightboxEl = document.createElement('dialog');
      lightboxEl.className = 'lightbox';
      lightboxEl.setAttribute('aria-label', 'Detail obrázku');

      lightboxEl.innerHTML =
        '<div class="lightbox-backdrop"></div>' +
        '<div class="lightbox-dialog">' +
          '<button class="lightbox-close" aria-label="Zavřít detail (Esc)">' +
            '<span aria-hidden="true">&times;</span>' +
            '<span>Zavřít</span>' +
          '</button>' +
          '<button class="lightbox-nav lightbox-prev" aria-label="Předchozí obrázek (šipka vlevo)">&lsaquo;</button>' +
          '<button class="lightbox-nav lightbox-next" aria-label="Následující obrázek (šipka vpravo)">&rsaquo;</button>' +
          '<figure class="lightbox-figure">' +
            '<figcaption class="lightbox-caption"></figcaption>' +
          '</figure>' +
          '<div class="lightbox-counter" aria-live="polite"></div>' +
        '</div>';

      document.body.appendChild(lightboxEl);

      lightboxImg = new Image();
      lightboxImg.className = 'lightbox-img';
      lightboxEl.querySelector('.lightbox-figure').prepend(lightboxImg);
      lightboxCaption = lightboxEl.querySelector('.lightbox-caption');
      lightboxCounter = lightboxEl.querySelector('.lightbox-counter');
      prevBtn = lightboxEl.querySelector('.lightbox-prev');
      nextBtn = lightboxEl.querySelector('.lightbox-next');

      var closeBtn = lightboxEl.querySelector('.lightbox-close');
      var backdrop = lightboxEl.querySelector('.lightbox-backdrop');

      closeBtn.addEventListener('click', closeLightbox);
      backdrop.addEventListener('click', closeLightbox);
      lightboxEl.addEventListener('cancel', function (event) {
        event.preventDefault();
        closeLightbox();
      });

      prevBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        showImage((currentIndex - 1 + mediaImgs.length) % mediaImgs.length);
      });

      nextBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        showImage((currentIndex + 1) % mediaImgs.length);
      });

      lightboxEl.addEventListener('keydown', function (e) {
        if (!lightboxEl.open) return;

        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          showImage((currentIndex - 1 + mediaImgs.length) % mediaImgs.length);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          showImage((currentIndex + 1) % mediaImgs.length);
        }
      });
    }

    function getCaptionForImg(img) {
      var figure = img.closest('figure');
      if (figure) {
        var captionEl = figure.querySelector('.media-caption');
        if (captionEl) return captionEl.innerHTML;
      }
      return img.alt ? img.alt : '';
    }

    function showImage(index) {
      currentIndex = index;
      var img = mediaImgs[index];
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt || 'Detail obrázku';

      var captionHTML = getCaptionForImg(img);
      lightboxCaption.innerHTML = captionHTML;

      if (mediaImgs.length > 1) {
        lightboxCounter.textContent = (currentIndex + 1) + ' / ' + mediaImgs.length;
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
      } else {
        lightboxCounter.textContent = '';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
      }
    }

    function openLightbox(index) {
      if (!lightboxEl) buildLightboxDOM();
      lastFocusedEl = mediaImgs[index];
      showImage(index);
      lightboxEl.showModal();
      document.body.style.overflow = 'hidden';

      var closeBtn = lightboxEl.querySelector('.lightbox-close');
      if (closeBtn) closeBtn.focus();
    }

    function closeLightbox() {
      if (!lightboxEl) return;
      lightboxEl.close();
      document.body.style.overflow = '';
      if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
        lastFocusedEl.focus({ preventScroll: true });
      }
    }

    mediaImgs.forEach(function (img, index) {
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      var altText = img.alt ? ': ' + img.alt : '';
      img.setAttribute('aria-label', 'Zvětšit obrázek' + altText);

      img.addEventListener('click', function () {
        openLightbox(index);
      });

      img.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });
    });
  }

  initLightbox();

  /* -------------------------------------- reveals and section rules --
     Adds .is-visible when an element scrolls into view. .reveal fades and lifts;
     .section-head uses the same hook to draw its mint rule in. */

  var watched = document.querySelectorAll('.reveal, .section-head');

  if (!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(watched, function (el) {
      el.classList.add('is-visible');
    });
    document.documentElement.classList.add('js');
    if (toggle && nav) setNav(false);
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
    observer.observe(el);
  });

  // Opt in only after setup succeeds; a missing script leaves content usable.
  document.documentElement.classList.add('js');
  if (toggle && nav) setNav(false);
})();

