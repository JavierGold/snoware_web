import { Reveal } from './Reveal.jsx';
import { useInView } from 'motion/react';
import { useEffect, useId, useRef, useState } from 'react';
import mountain from '../assets/methodology-mountain.webp';

export function Methodology({ content }) {
  const id = useId();
  const tabs = useRef(null);
  const section = useRef(null);
  const sectionInView = useInView(section, { amount: 'some' });
  const [selected, setSelected] = useState(0);
  const count = content.steps.length;

  useEffect(() => {
    // Reset only after the whole section (including its image) leaves the viewport.
    if (!sectionInView) setSelected(0);
  }, [sectionInView]);

  function handleKeyDown(event) {
    const targets = {
      ArrowUp: (selected + count - 1) % count,
      ArrowDown: (selected + 1) % count,
      Home: 0,
      End: count - 1,
    };
    if (!Object.hasOwn(targets, event.key)) return;

    event.preventDefault();
    const next = targets[event.key];
    setSelected(next);
    tabs.current.children[next].focus();
  }

  return (
    <section ref={section} className="methodology" aria-labelledby={`${id}-title`}>
      <Reveal className="methodology-frame mx-auto grid">
        <div className="methodology-controls">
          <h2 id={`${id}-title`}>{content.lead}{' '}<span className="block">{content.accent}</span></h2>
          <p>{content.introduction}</p>

          <div ref={tabs} role="tablist" aria-labelledby={`${id}-title`} aria-orientation="vertical" onKeyDown={handleKeyDown}>
            {content.steps.map((step, index) => (
              <button
                key={index}
                className="methodology-tab relative flex w-full items-center text-left"
                id={`${id}-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={selected === index}
                aria-controls={`${id}-panel-${index}`}
                tabIndex={selected === index ? 0 : -1}
                onClick={() => setSelected(index)}
              >
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                {step.title}
              </button>
            ))}
          </div>
        </div>

        {content.steps.map((step, index) => (
          <div
            key={index}
            className="methodology-panel"
            id={`${id}-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${index}`}
            tabIndex={0}
            hidden={selected !== index}
          >
            <div className="methodology-panel-copy">
              <p>{step.description}</p>
              <ul>
                {step.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </Reveal>
      <img className="methodology-mountain block w-full" src={mountain} width="2172" height="300" alt="" loading="lazy" />
    </section>
  );
}
