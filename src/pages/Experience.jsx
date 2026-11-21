import { ServiceHero } from '../components/ServiceHero.jsx';
import './service-modernization.css';
import './about.css';
import './experience.css';

export const experienceContent = {
  es: { title: 'Soluciones Digitales implementadas', pageTitle: 'Experiencia | Snoware' },
  en: { title: 'Digital Solutions Delivered', pageTitle: 'Experience | Snoware' },
};

export function Experience({ language }) {
  return <ServiceHero title={experienceContent[language].title} id="experience-title" className="about-hero experience-hero" />;
}
