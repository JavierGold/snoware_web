import { Reveal } from './Reveal.jsx';
import { useEffect, useState } from 'react';
import { PendingLink } from './PendingLink.jsx';

const images = Object.values(import.meta.glob('../assets/services/servicio-*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}));
const desktop = window.matchMedia('(width >= 1024px)');
const tablet = window.matchMedia('(width >= 640px)');

function getVisibleCount() {
  if (desktop.matches) return 3;
  return tablet.matches ? 2 : 1;
}

function useVisibleCount() {
  const [count, setCount] = useState(getVisibleCount);

  useEffect(() => {
    const update = () => setCount(getVisibleCount());
    desktop.addEventListener('change', update);
    tablet.addEventListener('change', update);
    return () => {
      desktop.removeEventListener('change', update);
      tablet.removeEventListener('change', update);
    };
  }, []);

  return count;
}

function ServiceCard({ item, image, visible, link }) {
  return (
    <li className="service-card min-w-0" aria-hidden={!visible}>
      <img className="service-art block w-full object-cover" src={image} alt="" loading="lazy" />
      <div className="service-card-copy flex flex-col items-start">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <PendingLink>{link}</PendingLink>
      </div>
    </li>
  );
}

export function Services({ content }) {
  const count = useVisibleCount();
  const [position, setPosition] = useState(0);
  const total = content.items.length;
  const lastStart = Math.max(0, total - count);
  const start = Math.min(position, lastStart);
  const previous = Math.max(0, start - 1);
  const next = Math.min(lastStart, start + 1);
  const range = (index) => content.range(index + 1, index + count, total);

  return (
    <section className="home-services" aria-labelledby="home-services-title">
      <Reveal className="home-services-heading mx-auto text-center">
        <h2 id="home-services-title">
          {content.titleLead} <span>{content.titleAccent}</span>
        </h2>
        <p>{content.description}</p>
      </Reveal>

      <Reveal delay={0.12} className="services-carousel relative mx-auto" data-at-end={start === lastStart}>
        <div className="services-viewport overflow-hidden" id="services-track">
          <ul className="services-track grid" style={{ '--start': start, '--visible-count': count }}>
            {content.items.map((item, index) => (
              <ServiceCard
                key={images[index]}
                item={item}
                image={images[index]}
                visible={index >= start && index < start + count}
                link={content.link}
              />
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="services-arrow services-previous grid place-items-center rounded-full"
          aria-label={content.previous}
          aria-controls="services-track"
          disabled={start === 0}
          onClick={() => setPosition(previous)}
        >
          <span aria-hidden="true" />
        </button>
        <button
          type="button"
          className="services-arrow services-next grid place-items-center rounded-full"
          aria-label={content.next}
          aria-controls="services-track"
          disabled={start === lastStart}
          onClick={() => setPosition(next)}
        >
          <span aria-hidden="true" />
        </button>

        <div className="services-pagination flex flex-wrap items-center justify-center">
          <span className="sr-only" aria-live="polite" aria-atomic="true">{range(start)}</span>
          <div className="flex">
            {Array.from({ length: lastStart + 1 }, (_, index) => (
              <button
                key={index}
                type="button"
                className="services-dot grid place-items-center rounded-full"
                aria-label={content.showRange(range(index))}
                aria-controls="services-track"
                aria-current={start === index ? 'true' : undefined}
                data-complete={index <= start}
                onClick={() => setPosition(index)}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
