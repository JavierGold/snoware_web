import { Reveal } from './Reveal.jsx';
import { useId } from 'react';
import snowy from '../assets/snowy-cta.webp';

export function ContactCallout({ content, href }) {
  const id = useId();
  const action = <>{content.action}<span className="phase-two-link-arrow" aria-hidden="true" /></>;

  return (
    <section className="contact-callout relative flex items-center overflow-hidden" aria-labelledby={id}>
      <Reveal className="contact-callout-inner relative z-[1] mx-auto">
        <h2 id={id}>{content.title}</h2>
        {href ? (
          <a className="contact-callout-action" href={href}>{action}</a>
        ) : (
          <span className="contact-callout-action" role="link" aria-disabled="true">{action}</span>
        )}
      </Reveal>
      <img className="contact-callout-snowy absolute" src={snowy} alt="" width="820" height="549" loading="lazy" />
    </section>
  );
}
