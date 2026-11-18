import { languages } from '../content/translations.js';

export function LanguageSelector({ label, language, onLanguageChange }) {
  return (
    <div className="language flex items-center rounded-full" role="group" aria-label={label}>
      {languages.map(({ code, label: languageName }) => (
        <button
          key={code}
          className="cursor-pointer rounded-full motion-safe:transition-colors motion-safe:duration-[180ms]"
          type="button"
          lang={code}
          aria-label={languageName}
          aria-pressed={language === code}
          onClick={() => onLanguageChange(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
