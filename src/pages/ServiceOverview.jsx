import { Reveal } from '../components/Reveal.jsx';
import { ServiceHero } from '../components/ServiceHero.jsx';
import { homeContent } from '../content/home.js';
import './service-modernization.css';
import './service-overview.css';

// These pages contain their hero and decorative intro only; copy and further
// sections remain pending approval. Header, CTA and footer are shared by App.
export function ServiceOverview({ language, serviceIndex }) {
  return (
    <div className="modernization-page service-overview-page">
      <ServiceHero
        title={homeContent[language].services.items[serviceIndex].title}
        id={`service-${serviceIndex + 1}-title`}
        className={`service-overview-hero service-overview-hero--${serviceIndex + 1}`}
      />
      <Reveal
        className={`modernization-intro service-overview-intro service-overview-intro--${serviceIndex + 1}`}
        aria-hidden="true"
      />
    </div>
  );
}
