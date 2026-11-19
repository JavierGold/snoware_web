import { Reveal } from '../components/Reveal.jsx';
import { serviceAutomationContent } from '../content/serviceAutomation.js';
import { ServiceHero } from '../components/ServiceHero.jsx';
import { homeContent } from '../content/home.js';
import './service-modernization.css';
import './service-automation.css';

export function ServiceAutomation({ language }) {
  const content = serviceAutomationContent[language];
  return (
    <div className="modernization-page automation-page">
      <ServiceHero title={homeContent[language].services.items[1].title} id="automation-title" className="automation-hero" />
      <div className="modernization-intro automation-intro flex items-center justify-center">
        <Reveal as="p">
          {content.intro.map((line, index) => <span key={line}>{index > 0 ? ' ' : ''}{line}</span>)}
        </Reveal>
      </div>
    </div>
  );
}
