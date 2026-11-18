import { useEffect, useId, useRef, useState } from 'react';
import mark from '../snoware-mark.png';
import { LanguageSelector } from './LanguageSelector.jsx';

const mobileLayout = window.matchMedia('(width <= 760px)');
const menuItemClass = 'inline-flex min-h-11 items-center whitespace-nowrap';

export function SiteHeader({ text, homeUrl, language, onLanguageChange }) {
  const navId = useId();
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(() => mobileLayout.matches);

  useEffect(() => {
    function handleLayoutChange(event) {
      setMobile(event.matches);
      setMenuOpen(false);
    }

    mobileLayout.addEventListener('change', handleLayoutChange);
    return () => mobileLayout.removeEventListener('change', handleLayoutChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current.focus();
      }
    }

    function handleOutsideClick(event) {
      if (!headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="site-header absolute inset-x-0 top-0 z-[1] flex items-center justify-between gap-4"
      data-menu-open={menuOpen}
    >
      <a className="brand" href={homeUrl} aria-label={`Snoware — ${text.home}`}>
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
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
        </button>

        <nav id={navId} className="primary-nav" aria-label={text.navigation} inert={mobile && !menuOpen}>
          <ul className="flex items-center">
            <li><a className={menuItemClass} href={homeUrl} aria-current="page">{text.home}</a></li>
            <li>
              <span className={`${menuItemClass} pending`} aria-disabled="true">
                {text.services}<span className="chevron" aria-hidden="true" />
              </span>
            </li>
            <li><span className={`${menuItemClass} pending`} aria-disabled="true">{text.about}</span></li>
            <li>
              <span className="contact inline-flex items-center rounded-full whitespace-nowrap" aria-disabled="true">
                {text.contact}
              </span>
            </li>
          </ul>
        </nav>

        <LanguageSelector label={text.language} language={language} onLanguageChange={onLanguageChange} />
      </div>
    </header>
  );
}
