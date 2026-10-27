/* Les éléments restent visibles : l'animation est une amélioration facultative. */
(function () {
  'use strict';
  var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;
  document.documentElement.classList.add('js');
  var animations = [];
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      if (!motion.matches) animations.push(entry.target.animate([
        { transform: 'translateY(12px)' },
        { transform: 'translateY(0)' }
      ], { duration: 500, easing: 'cubic-bezier(.2,.7,.3,1)' }));
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach(function (element) { observer.observe(element); });
  function stopMotion(event) {
    if (!event.matches) return;
    observer.disconnect();
    animations.forEach(function (animation) { animation.cancel(); });
  }
  if (motion.addEventListener) motion.addEventListener('change', stopMotion);
  else if (motion.addListener) motion.addListener(stopMotion);
})();
