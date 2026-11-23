import { useEffect, useId, useRef, useState } from 'react';
import mark from '../snoware-mark.png';
import { homeContent } from '../content/home.js';
import { localizedUrl, serviceRoutes } from '../content/serviceNavigation.js';
import './services-menu.css';
import { LanguageSelector } from './LanguageSelector.jsx';

const mobileLayout = window.matchMedia('(width <= 760px)');
const menuItemClass = 'inline-flex min-h-11 items-center whitespace-nowrap';

export function SiteHeader({ brandRef, text, homeUrl, language, onLanguageChange, servicePage = false, aboutPage = false, experiencePage = false, contactPage = false, contactUrl = '/contacto', activeServiceIndex = 0 }) {
  const navId = useId();
  const servicesId = useId();
  const servicesRef = useRef(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const services = homeContent[language].services.items;
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(() => mobileLayout.matches);

  useEffect(() => {
    function handleLayoutChange(event) {
      setMobile(event.matches);
      setMenuOpen(false);
      setServicesOpen(false);
    }

    mobileLayout.addEventListener('change', handleLayoutChange);
    return () => mobileLayout.removeEventListener('change', handleLayoutChange);
  }, []);

  useEffect(() => {
    if (!menuOpen && !servicesOpen) return;

    function handleEscape(event) {
      if (event.key === 'Escape') {
        if (servicesOpen) {
          setServicesOpen(false);
          servicesRef.current.focus();
        } else {
          setMenuOpen(false);
          toggleRef.current.focus();
        }
      }
    }

    function handleOutsideClick(event) {
      if (!headerRef.current.contains(event.target)) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen, servicesOpen]);

  return (
    <header
      ref={headerRef}
      className="site-header absolute inset-x-0 top-0 z-[1] flex items-center justify-between gap-4"
      data-menu-open={menuOpen}
      data-service-page={servicePage || aboutPage || experiencePage || contactPage}
      data-experience-page={experiencePage}
      data-about-page={aboutPage}
      onBlur={(event) => {
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
          setServicesOpen(false);
          setMenuOpen(false);
        }
      }}
    >
      <a ref={brandRef} className="brand" href={homeUrl} aria-label={`Snoware — ${text.home}`}>
        <img src={mark} width="604" height="109" alt="" />
      </a>

      <div className="header-controls flex items-center">
        <button
          ref={toggleRef}
          className="menu-toggle cursor-pointer rounded-full"
          type="button"
          aria-expanded={menuOpen}
          aria-controls={navId}
          aria-label={menuOpen ? text.closeMenu : text.openMenu}
          onClick={() => { setMenuOpen((open) => !open); setServicesOpen(false); }}
        >
          <span aria-hidden="true" />
        </button>

        <nav id={navId} className="primary-nav" aria-label={text.navigation} inert={mobile && !menuOpen}>
          <ul className="flex items-center">
            <li><a className={menuItemClass} href={homeUrl} aria-current={!servicePage && !aboutPage && !experiencePage && !contactPage ? "page" : undefined}>{text.home}</a></li>
            <li className="services-nav-item">
              <button
                ref={servicesRef}
                className={`${menuItemClass} services-toggle`}
                type="button"
                aria-expanded={servicesOpen}
                aria-controls={servicesId}
                data-active={servicesOpen || servicePage}
                onClick={() => setServicesOpen((open) => !open)}
              >
                {text.services}<span className="chevron" aria-hidden="true" />
              </button>
              {servicesOpen && (
                <div className="services-menu" id={servicesId}>
                  <p className="services-menu-label">{text.services}</p>
                  <ol className="services-menu-list">
                    {services.map((service, index) => {
                      const href = serviceRoutes[index];
                      const children = <>
                        <span className="services-menu-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                        <span>{service.title}</span>
                        <span className="services-menu-arrow" aria-hidden="true">›</span>
                      </>;
                      return <li key={service.title}>
                        {href ? (
                          <a className="services-menu-link" href={localizedUrl(href, language)} aria-current={servicePage && index === activeServiceIndex ? 'page' : undefined}>
                            {children}
                          </a>
                        ) : (
                          <span className="services-menu-link" role="link" aria-disabled="true" title={language === 'en' ? 'Page coming soon' : 'Página pendiente'}>
                            {children}
                            <span className="sr-only">{language === 'en' ? ' (page coming soon)' : ' (página pendiente)'}</span>
                          </span>
                        )}
                      </li>;
                    })}
                  </ol>
                </div>
              )}
            </li>
            <li><a className={menuItemClass} href={localizedUrl('/nosotros', language)} aria-current={aboutPage ? "page" : undefined}>{text.about}</a></li>
            <li><a className={menuItemClass} href={localizedUrl('/experiencia', language)} aria-current={experiencePage ? "page" : undefined}>{text.experience}</a></li>
            <li>
              <a className={mobile ? menuItemClass : "contact inline-flex items-center rounded-full whitespace-nowrap"} href={contactUrl} aria-current={contactPage ? "page" : undefined}>
                {text.contact}
              </a>
            </li>
          </ul>
        </nav>

        <LanguageSelector label={text.language} language={language} onLanguageChange={onLanguageChange} />
      </div>
    </header>
  );
}
