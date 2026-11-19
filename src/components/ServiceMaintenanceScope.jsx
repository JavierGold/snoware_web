import { ServiceScope } from './ServiceScope.jsx';
import { serviceMaintenanceContent } from '../content/serviceMaintenance.js';
import scope1 from '../assets/maintenance/scope-01.webp';
import scope2 from '../assets/maintenance/scope-02.webp';
import scope3 from '../assets/maintenance/scope-03.webp';
import './service-maintenance-scope.css';

const scopeImages = [scope1, scope2, scope3];

export function ServiceMaintenanceScope({ language }) {
  return (
    <div className="service-maintenance-scope">
      <ServiceScope content={serviceMaintenanceContent[language]} scopeImages={scopeImages} />
    </div>
  );
}
