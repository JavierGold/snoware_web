import { aboutContent } from '../content/about.js';
import { ServiceHero } from '../components/ServiceHero.jsx';
import './service-modernization.css';
import './about.css';

export function About({ language }) {
  return <ServiceHero title={aboutContent[language].title} id="about-title" className="about-hero" />;
}
