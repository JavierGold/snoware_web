import { Reveal } from './Reveal.jsx';
import landscape from '../assets/snoware-landscape.webp';
import { PendingLink } from './PendingLink.jsx';

export function AboutSnoware({ content }) {
  return (
    <section className="about-snoware" aria-labelledby="about-snoware-title">
      <Reveal className="about-snoware-container mx-auto">
        <p className="about-snoware-label">{content.label}</p>
        <div className="about-snoware-panel grid overflow-hidden">
          <img className="about-snoware-image size-full object-cover" src={landscape} alt="" loading="lazy" />
          <div className="about-snoware-copy flex flex-col items-start">
            <h2 id="about-snoware-title">{content.title}</h2>
            <p>{content.description}</p>
            <PendingLink>{content.link}</PendingLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
