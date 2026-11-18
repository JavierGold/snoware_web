import { Reveal } from './Reveal.jsx';
import { useId, useRef, useState } from 'react';
import { useAnimate, useReducedMotion } from 'motion/react';
import { flushSync } from 'react-dom';
import { PendingLink } from './PendingLink.jsx';

const figures = Object.entries(import.meta.glob('../assets/solutions/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})).sort(([left], [right]) => left.localeCompare(right)).map(([, url]) => url);

export function Solutions({ content }) {
  const id = useId();
  const [dialog, animate] = useAnimate();
  const reduceMotion = useReducedMotion();
  const closing = useRef(false);
  const trigger = useRef(null);
  const [selected, setSelected] = useState(null);
  const solution = content.items[selected];

  function openSolution(index, button) {
    trigger.current = button;
    flushSync(() => setSelected(index));
    closing.current = false;
    dialog.current.showModal();
    animate(dialog.current, {
      opacity: [0, 1],
      y: [reduceMotion ? 0 : 14, 0],
      scale: [reduceMotion ? 1 : 0.975, 1],
    }, { duration: reduceMotion ? 0 : 0.48, ease: [0.22, 1, 0.36, 1] });
  }

  async function requestClose(event) {
    event.preventDefault();
    if (closing.current || !dialog.current?.open) return;
    closing.current = true;
    await animate(dialog.current, {
      opacity: 0, y: reduceMotion ? 0 : 6, scale: reduceMotion ? 1 : 0.99,
    }, { duration: reduceMotion ? 0 : 0.18, ease: [0.4, 0, 1, 1] });
    dialog.current?.close();
  }

  function handleClose() {
    setSelected(null);
    trigger.current?.focus({ preventScroll: true });
  }

  return (
    <section className="home-solutions text-center" aria-labelledby={`${id}-title`}>
      <Reveal as="h2" id={`${id}-title`}>{content.title}</Reveal>
      <Reveal as="p" className="solutions-intro mx-auto" delay={0.06}>{content.introduction}</Reveal>
      <Reveal as="ul" className="solutions-list mx-auto grid" delay={0.12}>
        {content.items.map((item, index) => (
          <li key={figures[index]}>
            <button
              type="button"
              className="solution-trigger"
              aria-haspopup="dialog"
              onClick={(event) => openSolution(index, event.currentTarget)}
            >
              {item.title}
            </button>
          </li>
        ))}
      </Reveal>

      <dialog
        ref={dialog}
        className="solution-dialog"
        aria-labelledby={`${id}-dialog-title`}
        aria-describedby={`${id}-description`}
        onClose={handleClose}
        onCancel={requestClose}
      >
        <div className="solution-dialog-layout relative flex min-w-0 flex-col items-start text-left">
          <form method="dialog" className="solution-close" onSubmit={requestClose}>
            <button type="submit" aria-label={content.close} autoFocus>×</button>
          </form>
          <h3 id={`${id}-dialog-title`}>{solution?.title}</h3>
          <p id={`${id}-description`}>{solution?.description}</p>
          <div className="solution-contact"><PendingLink>{content.contact}</PendingLink></div>
          {solution && <img className="solution-figure" src={figures[selected]} alt="" width="460" height="460" />}
        </div>
      </dialog>
    </section>
  );
}
