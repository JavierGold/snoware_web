import { Reveal } from './Reveal.jsx';
import { useEffect, useId, useRef, useState } from 'react';
import { useAnimate, useReducedMotion } from 'motion/react';
import { flushSync } from 'react-dom';
import { PendingLink } from './PendingLink.jsx';

const figures = Object.entries(import.meta.glob('../assets/solutions/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})).sort(([left], [right]) => left.localeCompare(right)).map(([, url]) => url);

// Warm only the figure the visitor points to or focuses, never all 12 on mount.
const warmedFigures = new Map();
function warmFigure(index) {
  const url = figures[index];
  if (!url || warmedFigures.has(url)) return;
  const image = new Image();
  image.fetchPriority = 'low';
  image.src = url;
  warmedFigures.set(url, image);
  image.decode().catch(() => warmedFigures.delete(url));
}

export function Solutions({ content }) {
  const id = useId();
  const [dialog, animate] = useAnimate();
  const reduceMotion = useReducedMotion();
  const closing = useRef(false);
  const animation = useRef(null);
  const trigger = useRef(null);
  const figure = useRef(null);
  const opening = useRef(0);
  const [figureReady, setFigureReady] = useState(false);
  useEffect(() => () => { opening.current += 1; }, []);
  const [selected, setSelected] = useState(null);
  const solution = content.items[selected];

  async function openSolution(index, button) {
    if (dialog.current?.open) return;
    const request = ++opening.current;
    trigger.current = button;
    flushSync(() => {
      setFigureReady(false);
      setSelected(index);
    });
    // Decode the actual rendered image before revealing it, including cache hits.
    const decoded = figure.current.decode().then(() => {
      if (request === opening.current && !closing.current) setFigureReady(true);
    }).catch(() => {
      // Decorative image failures must not block the solution or show a broken icon.
    });
    let timeout;
    await Promise.race([
      decoded,
      new Promise((resolve) => { timeout = window.setTimeout(resolve, 250); }),
    ]);
    window.clearTimeout(timeout);
    if (request !== opening.current || !dialog.current || dialog.current.open) return;
    const element = dialog.current;
    closing.current = false;
    element.style.opacity = reduceMotion ? '1' : '0';
    element.dataset.modalState = 'opening';
    element.showModal();
    animation.current = animate(element, {
      opacity: [reduceMotion ? 1 : 0, 1],
      y: [reduceMotion ? 0 : 18, 0],
      scale: [reduceMotion ? 1 : 0.98, 1],
    }, { duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] });
  }

  async function requestClose(event) {
    event.preventDefault();
    const element = dialog.current;
    if (closing.current || !element?.open) return;
    closing.current = true;
    opening.current += 1;
    // Capture the current backdrop opacity if Escape interrupts its entrance.
    const backdropOpacity = getComputedStyle(element, '::backdrop').opacity;
    element.style.setProperty('--backdrop-exit-opacity', backdropOpacity);
    element.dataset.modalState = 'closing';
    animation.current?.stop();

    if (!reduceMotion) {
      animation.current = animate(element, { opacity: 0, y: 10, scale: 0.99 }, {
        // Backdrop takes 450 ms; keep the native top layer until both have faded.
        duration: 0.5, ease: [0.22, 0.61, 0.36, 1],
      });
      await animation.current;
    }
    if (element === dialog.current && element.open) element.close();
  }

  function handleClose() {
    opening.current += 1;
    animation.current?.stop();
    closing.current = false;
    setSelected(null);
    if (trigger.current?.isConnected) trigger.current.focus({ preventScroll: true });
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
              onPointerEnter={() => warmFigure(index)}
              onFocus={() => warmFigure(index)}
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
          {solution && <img ref={figure} key={selected} className="solution-figure" data-ready={figureReady} decoding="async" src={figures[selected]} alt="" width="460" height="460" />}
        </div>
      </dialog>
    </section>
  );
}
