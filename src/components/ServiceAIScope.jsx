import { ServiceScope } from './ServiceScope.jsx';
import { serviceAIScopeContent } from '../content/serviceAIScope.js';
import scope1 from '../assets/ai/scope/scope-01.webp';
import scope2 from '../assets/ai/scope/scope-02.webp';
import scope3 from '../assets/ai/scope/scope-03.webp';
import scope4 from '../assets/ai/scope/scope-04.webp';
import scope5 from '../assets/ai/scope/scope-05.webp';
import './service-ai-scope.css';

const scopeImages = [scope1, scope2, scope3, scope4, scope5];

export function ServiceAIScope({ language }) {
  return (
    <div className="service-ai-scope">
      <ServiceScope content={serviceAIScopeContent[language]} scopeImages={scopeImages} />
    </div>
  );
}
