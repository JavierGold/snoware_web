import { ServiceMaintenanceScope } from '../components/ServiceMaintenanceScope.jsx';
import { ServiceSecurityScope } from '../components/ServiceSecurityScope.jsx';
import { ServiceCloudScope } from '../components/ServiceCloudScope.jsx';
import { ServiceCustomDevelopmentScope } from '../components/ServiceCustomDevelopmentScope.jsx';
import { ServiceIntegrationScope } from '../components/ServiceIntegrationScope.jsx';
import { ServiceAIScope } from '../components/ServiceAIScope.jsx';
import { ServiceAIAgents } from '../components/ServiceAIAgents.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { ServiceHero } from '../components/ServiceHero.jsx';
import { serviceIntros } from '../content/serviceIntros.js';
import { homeContent } from '../content/home.js';
import './service-modernization.css';
import './service-overview.css';

// These pages contain their approved hero and intro, plus the approved
// scope on Services 03/04/05/07/08 and Snowy/scope sections on Service 06. Other sections remain pending approval. Header, CTA and footer are shared by App.
export function ServiceOverview({ language, serviceIndex }) {
  return (
    <div className="modernization-page service-overview-page">
      <ServiceHero
        title={homeContent[language].services.items[serviceIndex].title}
        id={`service-${serviceIndex + 1}-title`}
        className={`service-overview-hero service-overview-hero--${serviceIndex + 1}`}
      />
      <Reveal
        className={`modernization-intro service-overview-intro service-overview-intro--${serviceIndex + 1} flex items-center justify-center`}
      >
        <p>{serviceIntros[language][serviceIndex - 2]}</p>
      </Reveal>
      {serviceIndex === 2 && <ServiceIntegrationScope language={language} />}
      {serviceIndex === 3 && <ServiceCustomDevelopmentScope language={language} />}
      {serviceIndex === 4 && <ServiceCloudScope language={language} />}
      {serviceIndex === 6 && <ServiceSecurityScope language={language} />}
      {serviceIndex === 7 && <ServiceMaintenanceScope language={language} />}
      {serviceIndex === 5 && <>
        <ServiceAIAgents language={language} />
        <ServiceAIScope language={language} />
      </>}
    </div>
  );
}
