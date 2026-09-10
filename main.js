/* Gypri dílna — navigation, scroll reveals, background ambience.
   No dependencies. ~120 lines. */
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

  /* ------------------------------------------------ scroll reveals -- */

  var reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );

    Array.prototype.forEach.call(reveals, function (el) {
      var siblings = el.parentNode ? el.parentNode.children : [];
      var index = Array.prototype.indexOf.call(siblings, el);
      el.style.transitionDelay = Math.min(index, 3) * 80 + 'ms';
      observer.observe(el);
    });
  } else {
    Array.prototype.forEach.call(reveals, function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ------------------------------------------------ background ambience --
     Drifting hex-nut outlines, echoing the logo mark. Deliberately a plain
     2D canvas rather than the WebGL scene the reference site uses. */

  var canvas = document.getElementById('ambience');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (canvas && canvas.getContext && !reduced.matches && window.innerWidth > 860) {
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0;
    var H = 0;
    var glyphs = [];
    var COUNT = 24;
    var raf = null;

    var spawn = function (fromBottom) {
      return {
        x: Math.random() * W,
        y: fromBottom ? H + 60 * dpr : Math.random() * H,
        r: (12 + Math.random() * 30) * dpr,
        alpha: 0.05 + Math.random() * 0.12,
        speed: (0.1 + Math.random() * 0.35) * dpr,
        rot: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.0035
      };
    };

    var resize = function () {
      W = canvas.width = Math.floor(window.innerWidth * dpr);
      H = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };

    var drawNut = function (cx, cy, r, rot) {
      ctx.beginPath();
      for (var i = 0; i < 6; i++) {
        var angle = rot + (Math.PI / 3) * i;
        var px = cx + r * Math.cos(angle);
        var py = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.4, 0, Math.PI * 2);
      ctx.stroke();
    };

    var frame = function () {
      ctx.clearRect(0, 0, W, H);
      ctx.lineWidth = dpr;

      for (var i = 0; i < glyphs.length; i++) {
        var g = glyphs[i];
        g.y -= g.speed;
        g.rot += g.spin;

        if (g.y < -g.r * 1.6) glyphs[i] = g = spawn(true);

        ctx.strokeStyle = 'rgba(58, 163, 152, ' + g.alpha + ')';
        drawNut(g.x, g.y, g.r, g.rot);
      }

      raf = window.requestAnimationFrame(frame);
    };

    var start = function () {
      if (raf !== null) return;
      raf = window.requestAnimationFrame(frame);
    };

    var stop = function () {
      if (raf === null) return;
      window.cancelAnimationFrame(raf);
      raf = null;
    };

    resize();
    for (var i = 0; i < COUNT; i++) glyphs.push(spawn(false));

    var resizeTimer;
    window.addEventListener('resize', function () {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function () {
        resize();
        for (var j = 0; j < glyphs.length; j++) glyphs[j].x = Math.random() * W;
      }, 180);
    });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop();
      else start();
    });

    start();
  }
})();
