import { useEffect, useRef, useState } from 'react';

const duration = 650;
const motionQuery = '(prefers-reduced-motion: reduce)';
const formatNumber = new Intl.NumberFormat('en-US');

function canAnimate() {
  return typeof window.IntersectionObserver === 'function' && !window.matchMedia(motionQuery).matches;
}

export function AboutEditorial({ content }) {
  const statsRef = useRef(null);
  const played = useRef(false);
  const [progress, setProgress] = useState(() => canAnimate() ? 0 : 1);

  useEffect(() => {
    if (!canAnimate()) {
      setProgress(1);
      return;
    }
    if (played.current) return;

    const preference = window.matchMedia(motionQuery);
    let frame;
    let start;
    const tick = (now) => {
      start ??= now;
      const elapsed = Math.min((now - start) / duration, 1);
      setProgress(1 - (1 - elapsed) ** 2);
      if (elapsed < 1) frame = window.requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver((entries) => {
      if (played.current || !entries.some((entry) => entry.isIntersecting)) return;
      played.current = true;
      observer.disconnect();
      frame = window.requestAnimationFrame(tick);
    }, { threshold: 0.3 });
    function onPreferenceChange(event) {
      if (!event.matches) return;
      played.current = true;
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      setProgress(1);
    }
    observer.observe(statsRef.current);
    preference.addEventListener('change', onPreferenceChange);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      preference.removeEventListener('change', onPreferenceChange);
    };
  }, []);

  return (
    <div className="about-editorial">
      <p className="about-editorial-intro">{content.intro} <span>{content.accent}</span></p>
      <p className="about-editorial-description">{content.description}</p>
      <dl ref={statsRef} className="about-editorial-stats grid">
        {content.stats.map(([value, label]) => {
          const finalValue = formatNumber.format(value) + '+';
          return (
            <div className="about-editorial-stat" key={value}>
              <dt>{label}</dt>
              <dd>
                <span className="sr-only">{finalValue}</span>
                <span className="about-editorial-number" aria-hidden="true">
                  <span>{finalValue}</span>
                  <span data-count>{progress === 1 ? finalValue : formatNumber.format(Math.floor(value * progress))}</span>
                </span>
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
