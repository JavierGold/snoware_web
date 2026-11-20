import { motion, useReducedMotion } from 'motion/react';

const visible = { opacity: 1, y: 0, scale: 1 };
const hidden = { opacity: 0, y: 18, scale: 0.992 };

// Animate the existing element, without adding wrappers or changing its layout.
export function Reveal({ as = 'div', delay = 0, children, ...props }) {
  const reduceMotion = useReducedMotion();
  const Element = motion[as];
  const canObserve = typeof window.IntersectionObserver === 'function';

  return (
    <Element
      {...props}
      data-reveal
      initial={reduceMotion || !canObserve ? false : hidden}
      whileInView={canObserve ? visible : undefined}
      whileFocus={visible}
      viewport={{ once: true, amount: 'some', margin: '0px 0px -40px 0px' }}
      transition={{ duration: reduceMotion ? 0 : 0.85, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Element>
  );
}
