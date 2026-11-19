import { ServiceScope } from './ServiceScope.jsx';
import { serviceIntegrationContent } from '../content/serviceIntegration.js';
import scope1 from '../assets/integration/scope-01.webp';
import scope2 from '../assets/integration/scope-02.webp';
import scope3 from '../assets/integration/scope-03.webp';
import scope4 from '../assets/integration/scope-04.webp';
import './service-integration-scope.css';

const scopeImages = [scope1, scope2, scope3, scope4];

export function ServiceIntegrationScope({ language }) {
  return (
    <div className="service-integration-scope">
      <ServiceScope content={serviceIntegrationContent[language]} scopeImages={scopeImages} />
    </div>
  );
}
