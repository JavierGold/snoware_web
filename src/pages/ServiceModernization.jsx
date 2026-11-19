import { ServiceScope } from '../components/ServiceScope.jsx';
import { ServiceHero } from '../components/ServiceHero.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { serviceModernizationContent } from '../content/serviceModernization.js';
import scopeOne from '../assets/modernization/scope-01.webp';
import scopeTwo from '../assets/modernization/scope-02.webp';
import scopeThree from '../assets/modernization/scope-03.webp';
import scopeFour from '../assets/modernization/scope-04.webp';
import scopeFive from '../assets/modernization/scope-05.webp';
import scopeSix from '../assets/modernization/scope-06.webp';
import './service-modernization.css';

const scopeImages = [scopeOne, scopeTwo, scopeThree, scopeFour, scopeFive, scopeSix];

export function ServiceModernization({ language }) {
  const content = serviceModernizationContent[language] || serviceModernizationContent.es;

  return (
    <div className="modernization-page">
      <ServiceHero title={content.title} id="modernization-title" />
      <div className="modernization-intro flex items-center justify-center">
        <Reveal as="p">
          {content.intro.map((line, index) => <span key={line}>{index > 0 ? ' ' : ''}{line}</span>)}
        </Reveal>
      </div>
      <ServiceScope content={content} scopeImages={scopeImages} />
    </div>
  );
}
