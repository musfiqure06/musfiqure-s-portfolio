/**
 * Reusable animation trigger utility.
 * Adds "animate" class to all elements with specific animation classes 
 * when they enter the viewport.
 */

const animationClasses = [
    'fade-in', 'slide-in-left', 'slide-in-right',
    'slide-in-up', 'slide-in-down', 'zoom-in', 'bounce-in'
  ];
  
  // Setup observer
  const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
  });
  
  // Observe all animated elements
  animationClasses.forEach(animClass => {
    document.querySelectorAll(`.${animClass}`).forEach(el => {
      animationObserver.observe(el);
    });
  });
  