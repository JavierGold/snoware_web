import { Experience, experienceContent } from './pages/Experience.jsx';
import { Contact } from './pages/Contact.jsx';
import { contactContent } from './content/contact.js';
import { About } from './pages/About.jsx';
import { aboutContent } from './content/about.js';
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
import { ServiceOverview } from './pages/ServiceOverview.jsx';
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
  const contactUrl = localizedUrl('/contacto', language);
  const contactPage = location.pathname.replace(/\/$/, '') === '/contacto';
  const serviceIndex = serviceRoutes.indexOf(location.pathname.replace(/\/$/, ''));
  const servicePage = serviceIndex >= 0;
  const experiencePage = location.pathname.replace(/\/$/, '') === '/experiencia';
  const aboutPage = location.pathname.replace(/\/$/, '') === '/nosotros';

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = contactPage ? contactContent[language].pageTitle : experiencePage ? experienceContent[language].pageTitle : aboutPage ? aboutContent[language].pageTitle : servicePage ? `${content.services.items[serviceIndex].title} | Snoware` : "Snoware";
  }, [language, servicePage, serviceIndex, content, aboutPage, experiencePage, contactPage]);

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
      <SiteHeader text={text} homeUrl={homeUrl} language={language} onLanguageChange={changeLanguage} servicePage={servicePage} aboutPage={aboutPage} experiencePage={experiencePage} contactPage={contactPage} contactUrl={contactUrl} activeServiceIndex={serviceIndex} />
      <main>
        {contactPage ? <Contact language={language} /> : experiencePage ? <Experience language={language} /> : aboutPage ? <About language={language} /> : serviceIndex === 0 ? <ServiceModernization language={language} /> : serviceIndex === 1 ? <ServiceAutomation language={language} /> : servicePage ? <ServiceOverview language={language} serviceIndex={serviceIndex} /> : <>
        <Hero headline={text.headline} content={text.hero} />
        <AboutSnoware content={content.about} />
        <Services content={content.services} language={language} />
        <Methodology content={phaseThree.methodology} />
        <Solutions content={phaseThree.solutions} contactUrl={contactUrl} />
        </>}
        {!aboutPage && !experiencePage && !contactPage && <ContactCallout content={ending.cta} href={contactUrl} />}
      </main>
      <SiteFooter content={ending.footer} navigation={text} homeUrl={homeUrl} isHome={!servicePage && !aboutPage && !experiencePage && !contactPage} contactPage={contactPage} contactUrl={contactUrl} aboutPage={aboutPage} aboutUrl={localizedUrl('/nosotros', language)} />
    </>
  );
}
