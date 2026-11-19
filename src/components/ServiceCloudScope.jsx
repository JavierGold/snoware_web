import { ServiceScope } from './ServiceScope.jsx';
import { serviceCloudContent } from '../content/serviceCloud.js';
import scope1 from '../assets/cloud/scope-01.webp';
import scope2 from '../assets/cloud/scope-02.webp';
import scope3 from '../assets/cloud/scope-03.webp';
import scope4 from '../assets/cloud/scope-04.webp';
import './service-cloud-scope.css';

const scopeImages = [scope1, scope2, scope3, scope4];

export function ServiceCloudScope({ language }) {
  return (
    <div className="service-cloud-scope">
      <ServiceScope content={serviceCloudContent[language]} scopeImages={scopeImages} />
    </div>
  );
}
