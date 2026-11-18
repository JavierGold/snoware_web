import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue;
        target.dataset.scrollReveal = 'visible';
        observer.unobserve(target);
      }
    }, { threshold: 0.1 });

    for (const element of document.querySelectorAll('[data-scroll-reveal]')) {
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
}
