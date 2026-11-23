import { useId, useState } from 'react';
import { contactContent } from '../content/contact.js';
import './contact.css';

const fields = [
  ['firstName', 'text', 'given-name', 100],
  ['lastName', 'text', 'family-name', 100],
  ['email', 'email', 'email', 254],
  ['company', 'text', 'organization', 160],
  ['jobTitle', 'text', 'organization-title', 160],
  ['telephone', 'tel', 'tel', 40],
];

function RequiredMark() {
  return <span aria-hidden="true"> *</span>;
}

export function Contact({ language }) {
  const text = contactContent[language];
  const id = useId();
  const [showUnavailable, setShowUnavailable] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const description = event.currentTarget.elements.description;
    if (!description.value.trim()) {
      description.setCustomValidity(text.descriptionRequired);
      description.reportValidity();
      return;
    }
    // Delivery has no configured backend. Do not transmit or store form data.
    setShowUnavailable(true);
  }

  return (
    <section className="contact-page" aria-labelledby={`${id}-title`}>
      <div className="contact-page-inner">
        <div className="contact-page-intro">
          <h1 id={`${id}-title`}>{text.title}</h1>
          <p>{text.intro}</p>
        </div>
        <form className="contact-page-form" onSubmit={handleSubmit} method="post" aria-describedby={`${id}-required`}>
          <p id={`${id}-required`} className="contact-page-required">{text.required}</p>
          <div className="contact-page-fields">
            {fields.map(([name, type, autoComplete, maxLength]) => {
              const required = name !== 'telephone';
              const fieldId = `${id}-${name}`;
              return (
                <div className="contact-page-field" key={name}>
                  <input id={fieldId} name={name} type={type} autoComplete={autoComplete}
                    placeholder=" " required={required} maxLength={maxLength}
                    pattern={type === 'text' ? '.*\\S.*' : undefined} />
                  <label htmlFor={fieldId}>{text[name]}{required && <RequiredMark />}</label>
                </div>
              );
            })}
          </div>
          <div className="contact-page-description">
            <label htmlFor={`${id}-description`}>{text.description}<RequiredMark /></label>
            <textarea id={`${id}-description`} name="description" rows="4" required maxLength={3000}
              onInput={(event) => event.currentTarget.setCustomValidity('')} />
          </div>
          <button className="contact-page-submit" type="submit">
            {text.submit}
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" aria-hidden="true">
              <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p className="contact-page-status" role="status">{showUnavailable ? text.unavailable : ''}</p>
        </form>
      </div>
    </section>
  );
}
