/* ============================================================
   STAFED — landing hero interaction
   Rotates the highlighted letter and its expression line.
   ============================================================ */

(function () {
  'use strict';

  const hero = document.querySelector('.hero-stafed');
  if (!hero) return;

  const word = hero.querySelector('.stafed-word');
  const letters = Array.from(hero.querySelectorAll('.stafed-letter'));
  const expression = hero.querySelector('.hero-expression');
  if (!word || !letters.length || !expression) return;

  const ROTATE_MS = 2200;
  const FADE_MS = 200;
  const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const paused = { hover: false, focus: false, touch: false };

  let active = Math.max(0, letters.findIndex((letter) => letter.classList.contains('is-active')));
  let rotateTimer = 0;
  let fadeTimer = 0;

  function reducedMotion() {
    return reduceQuery.matches || document.documentElement.classList.contains('reduce-motion');
  }

  function expressionFor(letter) {
    return letter.getAttribute('data-expression') || '';
  }

  function clearFade() {
    window.clearTimeout(fadeTimer);
    fadeTimer = 0;
  }

  function paint(index, immediate) {
    letters.forEach((letter, i) => {
      letter.classList.toggle('is-active', i === index);
    });

    const next = expressionFor(letters[index]);
    clearFade();

    if (immediate || reducedMotion()) {
      expression.textContent = next;
      expression.classList.remove('is-swapping');
      return;
    }

    expression.classList.add('is-swapping');
    fadeTimer = window.setTimeout(() => {
      expression.textContent = next;
      // Flush the new text while it is still transparent, then fade it in.
      void expression.offsetWidth;
      expression.classList.remove('is-swapping');
      fadeTimer = 0;
    }, FADE_MS);
  }

  function setActive(index, immediate) {
    if (index < 0 || index >= letters.length) return;
    if (index === active && !immediate) return;
    active = index;
    paint(index, immediate);
  }

  function isPaused() {
    return paused.hover || paused.focus || paused.touch || document.hidden;
  }

  function stopRotation() {
    window.clearTimeout(rotateTimer);
    rotateTimer = 0;
  }

  function scheduleRotation() {
    stopRotation();
    if (reducedMotion() || isPaused()) return;
    rotateTimer = window.setTimeout(() => {
      setActive((active + 1) % letters.length);
      scheduleRotation();
    }, ROTATE_MS);
  }

  function pause(reason) {
    paused[reason] = true;
    stopRotation();
  }

  function resume(reason) {
    paused[reason] = false;
    scheduleRotation();
  }

  hero.addEventListener('pointerenter', (event) => {
    if (event.pointerType !== 'touch') pause('hover');
  });
  hero.addEventListener('pointerleave', (event) => {
    if (event.pointerType !== 'touch') resume('hover');
  });

  hero.addEventListener('focusin', () => pause('focus'));
  hero.addEventListener('focusout', (event) => {
    if (!hero.contains(event.relatedTarget)) resume('focus');
  });

  letters.forEach((letter, index) => {
    letter.addEventListener('pointerenter', () => setActive(index));
    letter.addEventListener('focus', () => setActive(index));
    letter.addEventListener('click', () => setActive(index));
  });

  hero.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse') return;
    pause('touch');
    const letter = event.target.closest('.stafed-letter');
    if (letter) setActive(letters.indexOf(letter));
  });

  document.addEventListener('pointerdown', (event) => {
    if (!hero.contains(event.target) && paused.touch) resume('touch');
  });

  reduceQuery.addEventListener('change', () => {
    if (reducedMotion()) {
      stopRotation();
      paint(active, true);
    } else {
      scheduleRotation();
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopRotation();
    else scheduleRotation();
  });

  hero.classList.add('is-ready');
  setActive(active, true);
  scheduleRotation();
})();
