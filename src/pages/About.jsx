import { AboutEditorial } from '../components/AboutEditorial.jsx';
import { aboutContent } from '../content/about.js';
import { Reveal } from '../components/Reveal.jsx';
import { ServiceHero } from '../components/ServiceHero.jsx';
import snowyClosing from '../assets/about/snowy-closing.webp';
import './service-modernization.css';
import './about.css';

export function About({ language }) {
  const { title, purpose, videoPending, editorial } = aboutContent[language];

  return (
    <div className="about-page">
      <ServiceHero title={title} id="about-title" className="about-hero" />
      <div className="about-purpose">
        <Reveal as="p">
          <span><strong>{purpose[0]}</strong>{purpose[1]}</span>{' '}
          <span>{purpose[2]}</span>
        </Reveal>
      </div>
      <div className="about-video">
        <p>{videoPending}</p>
      </div>
      <AboutEditorial content={editorial} />
      <div className="about-snowy-closing">
        <img src={snowyClosing} alt="" width="800" height="800" loading="lazy" decoding="async" />
      </div>
    </div>
  );
}
