import { aboutContent } from '../content/about.js';
import { Reveal } from '../components/Reveal.jsx';
import { ServiceHero } from '../components/ServiceHero.jsx';
import './service-modernization.css';
import './about.css';

export function About({ language }) {
  const { title, purpose } = aboutContent[language];

  return (
    <>
      <ServiceHero title={title} id="about-title" className="about-hero" />
      <div className="about-purpose">
        <Reveal as="p">
          <span><strong>{purpose[0]}</strong>{purpose[1]}</span>{' '}
          <span>{purpose[2]}</span>
        </Reveal>
      </div>
    </>
  );
}
