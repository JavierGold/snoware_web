import { useId, useRef, useState } from 'react';
import { ServiceHero } from '../components/ServiceHero.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { serviceModernizationContent } from '../content/serviceModernization.js';
import scopeOne from '../assets/modernization/scope-01.webp';
import scopeTwo from '../assets/modernization/scope-02.webp';
import scopeThree from '../assets/modernization/scope-03.webp';
import scopeFour from '../assets/modernization/scope-04.webp';
import scopeFive from '../assets/modernization/scope-05.webp';
import scopeSix from '../assets/modernization/scope-06.webp';
import './service-modernization.css';

const scopeImages = [scopeOne, scopeTwo, scopeThree, scopeFour, scopeFive, scopeSix];

function ModernizationScope({ content }) {
  const [activeArea, setActiveArea] = useState(0);
  const id = useId();
  const preparedImages = useRef(new Map());

  function prepareImage(index) {
    if (preparedImages.current.has(index)) return;
    const image = new Image();
    image.src = scopeImages[index];
    preparedImages.current.set(index, image);
  }

  function onTabKeyDown(event, index) {
    const last = content.areas.length - 1;
    let next;

    switch (event.key) {
      case 'ArrowUp':
        next = index === 0 ? last : index - 1;
        break;
      case 'ArrowDown':
        next = index === last ? 0 : index + 1;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = last;
        break;
      default:
        return;
    }

    event.preventDefault();
    const tabs = event.currentTarget.parentElement.children;
    tabs[next].focus();
    setActiveArea(next);
  }

  return (
    <section className="modernization-scope" aria-labelledby={`${id}-scope`}>
      <Reveal className="modernization-scope__card grid">
        <div className="modernization-scope__selection">
          <h2 className="modernization-scope__title" id={`${id}-scope`}>
            {content.scopeTitle[0]}<span>{content.scopeTitle[1]}</span>
          </h2>
          <p className="modernization-scope__instruction" id={`${id}-instruction`}>
            {content.instruction}
          </p>
          <div
            className="modernization-scope__tabs grid"
            role="tablist"
            aria-labelledby={`${id}-scope`}
            aria-describedby={`${id}-instruction`}
            aria-orientation="vertical"
          >
            {content.areas.map(({ label }, index) => (
              <button
                className="modernization-scope__tab grid items-center text-left"
                type="button"
                key={scopeImages[index]}
                role="tab"
                id={`${id}-tab-${index}`}
                aria-controls={`${id}-area-${index}`}
                aria-selected={index === activeArea}
                tabIndex={index === activeArea ? 0 : -1}
                onPointerEnter={() => prepareImage(index)}
                onFocus={() => prepareImage(index)}
                onClick={() => setActiveArea(index)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
              >
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="modernization-scope__details">
          {content.areas.map(({ description }, index) => (
            <div
              className="modernization-scope__panel"
              key={scopeImages[index]}
              role="tabpanel"
              id={`${id}-area-${index}`}
              aria-labelledby={`${id}-tab-${index}`}
              hidden={index !== activeArea}
              tabIndex={index === activeArea ? 0 : -1}
            >
              {index === activeArea && (
                <div className="modernization-scope__panel-content">
                  <img className="modernization-scope__art" src={scopeImages[index]} alt="" decoding="async" />
                  <p className="modernization-scope__description">
                    {description[0]}<span>{description[1]}</span>{description[2]}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function ServiceModernization({ language }) {
  const content = serviceModernizationContent[language] || serviceModernizationContent.es;

  return (
    <div className="modernization-page">
      <ServiceHero title={content.title} id="modernization-title" />
      <div className="modernization-intro flex items-center justify-center">
        <Reveal as="p">
          {content.intro.map((line, index) => <span key={line}>{index > 0 ? ' ' : ''}{line}</span>)}
        </Reveal>
      </div>
      <ModernizationScope content={content} />
    </div>
  );
}
