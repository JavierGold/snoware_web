import { ServiceHero } from '../components/ServiceHero.jsx';
import { homeContent } from '../content/home.js';
import './service-modernization.css';
import './service-overview.css';

// These pages intentionally contain only their approved hero until more
// sections are approved. Header, CTA and footer are shared by App.
export function ServiceOverview({ language, serviceIndex }) {
  return (
    <div className="modernization-page">
      <ServiceHero
        title={homeContent[language].services.items[serviceIndex].title}
        id={`service-${serviceIndex + 1}-title`}
        className={`service-overview-hero service-overview-hero--${serviceIndex + 1}`}
      />
    </div>
  );
}
