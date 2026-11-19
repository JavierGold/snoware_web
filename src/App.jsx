import { useEffect, useState } from 'react';
import { ContactCallout } from './components/ContactCallout.jsx';
import { SiteFooter } from './components/SiteFooter.jsx';
import { siteEnding } from './content/siteEnding.js';
import './home-phase-four.css';
import { AboutSnoware } from './components/AboutSnoware.jsx';
import { Services } from './components/Services.jsx';
import { homeContent } from './content/home.js';
import './home-phase-two.css';
import { Methodology } from './components/Methodology.jsx';
import { Solutions } from './components/Solutions.jsx';
import { phaseThreeContent } from './content/phaseThree.js';
import './home-phase-three.css';
import { Hero } from './components/Hero.jsx';
import { SiteHeader } from './components/SiteHeader.jsx';
import { ServiceAutomation } from './pages/ServiceAutomation.jsx';
import { ServiceModernization } from './pages/ServiceModernization.jsx';
import { localizedUrl, serviceRoutes } from './content/serviceNavigation.js';
import { translations } from './content/translations.js';

function getLanguage() {
  return new URL(location.href).searchParams.get('lang') === 'en' ? 'en' : 'es';
}


export function App() {
  const [language, setLanguage] = useState(getLanguage);
  const text = translations[language];
  const content = homeContent[language];
  const phaseThree = phaseThreeContent[language];
  const ending = siteEnding[language];
  const homeUrl = localizedUrl('/', language);
  const serviceIndex = serviceRoutes.indexOf(location.pathname.replace(/\/$/, ''));
  const servicePage = serviceIndex >= 0;

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = servicePage ? `${content.services.items[serviceIndex].title} | Snoware` : "Snoware";
  }, [language, servicePage, serviceIndex, content]);

  function changeLanguage(nextLanguage) {
    const url = new URL(location.href);
    if (nextLanguage === 'en') {
      url.searchParams.set('lang', 'en');
    } else {
      url.searchParams.delete('lang');
    }
    history.replaceState(history.state, '', url);
    setLanguage(nextLanguage);
  }

  return (
    <>
      <SiteHeader text={text} homeUrl={homeUrl} language={language} onLanguageChange={changeLanguage} servicePage={servicePage} activeServiceIndex={serviceIndex} />
      <main>
        {serviceIndex === 0 ? <ServiceModernization language={language} /> : serviceIndex === 1 ? <ServiceAutomation language={language} /> : <>
        <Hero headline={text.headline} content={text.hero} />
        <AboutSnoware content={content.about} />
        <Services content={content.services} language={language} />
        <Methodology content={phaseThree.methodology} />
        <Solutions content={phaseThree.solutions} />
        </>}
        <ContactCallout content={ending.cta} />
      </main>
      <SiteFooter content={ending.footer} navigation={text} homeUrl={homeUrl} isHome={!servicePage} />
    </>
  );
}
