import { Fragment } from 'react';
import { languages } from '../content/translations.js';

export function LanguageSelector({ label, language, onLanguageChange, mobile = false }) {
  return (
    <div className={mobile ? 'language language-mobile flex items-center' : 'language flex items-center rounded-full'} role="group" aria-label={label}>
      {languages.map(({ code, label: languageName }, index) => (
        <Fragment key={code}>
          {mobile && index > 0 && <span className="language-mobile-separator" aria-hidden="true">/</span>}
          <button
            className="cursor-pointer rounded-full motion-safe:transition-colors motion-safe:duration-[180ms]"
            type="button"
            lang={code}
            aria-label={languageName}
            aria-pressed={language === code}
            onClick={() => onLanguageChange(code)}
          >
            {code.toUpperCase()}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
