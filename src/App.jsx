import { useEffect, useState } from 'react';
import { useScrollReveal } from './useScrollReveal.js';
import './scroll-reveal.css';
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
import { translations } from './content/translations.js';

function getLanguage() {
  return new URL(location.href).searchParams.get('lang') === 'en' ? 'en' : 'es';
}

export function App() {
  useScrollReveal();
  const [language, setLanguage] = useState(getLanguage);
  const text = translations[language];
  const content = homeContent[language];
  const phaseThree = phaseThreeContent[language];
  const ending = siteEnding[language];
  const homeUrl = language === 'en' ? './?lang=en' : './';

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

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
      <SiteHeader text={text} homeUrl={homeUrl} language={language} onLanguageChange={changeLanguage} />
      <main>
        <Hero headline={text.headline} />
        <AboutSnoware content={content.about} />
        <Services content={content.services} />
        <Methodology content={phaseThree.methodology} />
        <Solutions content={phaseThree.solutions} />
        <ContactCallout content={ending.cta} />
      </main>
      <SiteFooter content={ending.footer} navigation={text} homeUrl={homeUrl} />
    </>
  );
}
