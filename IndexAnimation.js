/**
 * IndexAnimation.js - Bezpieczne animacje strony głównej (GSAP)
 * Używamy gsap.fromTo, aby zagwarantować pełną widoczność (opacity: 1)
 */

function runIndexAnimations() {
  if (typeof gsap === 'undefined') return;

  const introText = document.querySelector('.intro-text');
  const introImage = document.querySelector('.intro-image');

  if (!introText || !introImage) return;

  // Zatrzymujemy jakiekolwiek trwające animacje na tych elementach
  gsap.killTweensOf(['.intro-text', '.intro-subtitle', '.intro-cta', '.intro-image']);

  // Resetujemy style do bezpiecznego stanu bazowego przed animacją
  gsap.set(['.intro-text', '.intro-subtitle', '.intro-cta', '.intro-image'], {
    clearProps: 'all'
  });

  const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.out" } });

  tl.fromTo(introText,
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1 }
  )
  .fromTo('.intro-subtitle',
    { y: 15, opacity: 0 },
    { y: 0, opacity: 1 },
    "-=0.3"
  )
  .fromTo('.intro-cta',
    { y: 15, opacity: 0 },
    { y: 0, opacity: 1 },
    "-=0.25"
  )
  .fromTo(introImage,
    { x: 30, opacity: 0, scale: 0.96 },
    { x: 0, opacity: 1, scale: 1 },
    "-=0.4"
  );
}

// Udostępniamy funkcję globalnie dla Barba.js
window.runIndexAnimations = runIndexAnimations;