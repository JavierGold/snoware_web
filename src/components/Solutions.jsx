import { useId, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { PendingLink } from './PendingLink.jsx';

const figures = Object.entries(import.meta.glob('../assets/solutions/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})).sort(([left], [right]) => left.localeCompare(right)).map(([, url]) => url);

export function Solutions({ content }) {
  const id = useId();
  const dialog = useRef(null);
  const trigger = useRef(null);
  const [selected, setSelected] = useState(null);
  const solution = content.items[selected];

  function openSolution(index, button) {
    trigger.current = button;
    flushSync(() => setSelected(index));
    dialog.current.showModal();
  }

  function handleClose() {
    setSelected(null);
    trigger.current?.focus({ preventScroll: true });
  }

  return (
    <section className="home-solutions text-center" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{content.title}</h2>
      <p className="solutions-intro mx-auto" data-scroll-reveal>{content.introduction}</p>
      <ul className="solutions-list mx-auto grid">
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
      </ul>

      <dialog
        ref={dialog}
        className="solution-dialog"
        aria-labelledby={`${id}-dialog-title`}
        aria-describedby={`${id}-description`}
        onClose={handleClose}
      >
        <div className="solution-dialog-layout relative flex min-w-0 flex-col items-start text-left">
          <form method="dialog" className="solution-close">
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
