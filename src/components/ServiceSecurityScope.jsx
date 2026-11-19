import { ServiceScope } from './ServiceScope.jsx';
import { serviceSecurityContent } from '../content/serviceSecurity.js';
import scope1 from '../assets/security/scope-01.webp';
import scope2 from '../assets/security/scope-02.webp';
import scope3 from '../assets/security/scope-03.webp';
import scope4 from '../assets/security/scope-04.webp';
import scope5 from '../assets/security/scope-05.webp';
import './service-security-scope.css';

const scopeImages = [scope1, scope2, scope3, scope4, scope5];

export function ServiceSecurityScope({ language }) {
  return (
    <div className="service-security-scope">
      <ServiceScope content={serviceSecurityContent[language]} scopeImages={scopeImages} />
    </div>
  );
}
