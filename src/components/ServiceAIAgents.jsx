import { Reveal } from './Reveal.jsx';
import { serviceAIContent } from '../content/serviceAI.js';
import snowyTeam from '../assets/ai/snowy-team.webp';
import './service-ai-agents.css';

export function ServiceAIAgents({ language }) {
  return (
    <section className="service-ai-agents" aria-labelledby="service-ai-agents-title">
      <Reveal>
        <h2 id="service-ai-agents-title">{serviceAIContent[language].title}</h2>
        <img src={snowyTeam} alt="" width="1921" height="679" loading="lazy" decoding="async" />
      </Reveal>
    </section>
  );
}
