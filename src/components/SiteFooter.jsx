import facebook from 'bootstrap-icons/icons/facebook.svg';
import instagram from 'bootstrap-icons/icons/instagram.svg';
import linkedin from 'bootstrap-icons/icons/linkedin.svg';
import telephone from 'bootstrap-icons/icons/telephone.svg';
import tiktok from 'bootstrap-icons/icons/tiktok.svg';
import youtube from 'bootstrap-icons/icons/youtube.svg';
import mark from '../snoware-mark.png';
import { contactPhone } from '../content/siteEnding.js';

const socialNetworks = [
  ['Facebook', facebook],
  ['Instagram', instagram],
  ['TikTok', tiktok],
  ['LinkedIn', linkedin],
  ['YouTube', youtube],
];
const pendingPages = ['services', 'about', 'contact'];

export function SiteFooter({ content, navigation, homeUrl, isHome = true, aboutPage = false, aboutUrl = '/nosotros' }) {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner mx-auto">
        <div className="site-footer-grid grid">
          <div className="footer-brand">
            <img src={mark} alt="Snoware" width="604" height="109" loading="lazy" />
            <p>{content.tagline}</p>
          </div>

          <nav aria-label={content.navigation}>
            <h2>{content.explore}</h2>
            <ul className="footer-menu">
              <li><a href={homeUrl} aria-current={isHome ? "page" : undefined}>{navigation.home}</a></li>
              {pendingPages.map((page) => (
                <li key={page}>{page === 'about' ? <a href={aboutUrl} aria-current={aboutPage ? "page" : undefined}>{navigation[page]}</a> : <span role="link" aria-disabled="true">{navigation[page]}</span>}</li>
              ))}
            </ul>
          </nav>

          <div>
            <h2>{navigation.contact}</h2>
            <a className="footer-phone inline-flex items-center" href={contactPhone.href}>
              <img src={telephone} width="20" height="20" alt="" />
              {contactPhone.label}
            </a>
          </div>

          <div>
            <h2>{content.follow}</h2>
            <ul className="footer-social flex">
              {socialNetworks.map(([name, icon]) => (
                <li key={name}>
                  <span role="link" aria-label={name} aria-disabled="true">
                    <img src={icon} width="24" height="24" alt="" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="footer-copyright">© Snoware</p>
      </div>
    </footer>
  );
}
