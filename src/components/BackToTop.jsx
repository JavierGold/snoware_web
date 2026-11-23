import { useEffect, useState } from 'react';
import './back-to-top.css';

export function BackToTop({ label, startRef }) {
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      const threshold = Math.min(560, Math.max(240, window.innerHeight * .65));
      setVisible(window.scrollY >= threshold);
    }

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);
    window.addEventListener('pageshow', updateVisibility);
    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
      window.removeEventListener('pageshow', updateVisibility);
    };
  }, []);

  if (!visible && !focused) return null;

  function goToTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    startRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, left: 0, behavior: reduceMotion ? 'instant' : 'smooth' });
  }

  return (
    <button type="button" className="back-to-top" aria-label={label} title={label}
      onClick={goToTop} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
        <path d="M12 19V5m-5 5 5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
