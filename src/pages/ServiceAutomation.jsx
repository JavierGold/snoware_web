import { ServiceHero } from '../components/ServiceHero.jsx';
import { homeContent } from '../content/home.js';
import './service-modernization.css';
import './service-automation.css';

export function ServiceAutomation({ language }) {
  return (
    <div className="modernization-page automation-page">
      <ServiceHero title={homeContent[language].services.items[1].title} id="automation-title" className="automation-hero" />
    </div>
  );
}
