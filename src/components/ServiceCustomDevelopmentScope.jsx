import { ServiceScope } from './ServiceScope.jsx';
import { serviceCustomDevelopmentContent } from '../content/serviceCustomDevelopment.js';
import scope1 from '../assets/custom-development/scope-01.webp';
import scope2 from '../assets/custom-development/scope-02.webp';
import scope3 from '../assets/custom-development/scope-03.webp';
import scope4 from '../assets/custom-development/scope-04.webp';
import './service-custom-development-scope.css';

const scopeImages = [scope1, scope2, scope3, scope4];

export function ServiceCustomDevelopmentScope({ language }) {
  return (
    <div className="service-custom-development-scope">
      <ServiceScope content={serviceCustomDevelopmentContent[language]} scopeImages={scopeImages} />
    </div>
  );
}
