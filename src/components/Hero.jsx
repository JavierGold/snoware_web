import { useEffect, useId, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import envelope from 'bootstrap-icons/icons/envelope.svg';

const durations = { enter: 700, hold: 2200, exit: 350 };

function advanceScene(scene) {
  if (scene.phase === 'enter') return { ...scene, phase: 'hold' };
  if (scene.phase === 'hold') return { ...scene, phase: scene.index === 2 ? 'ready' : 'exit' };
  if (scene.phase === 'exit') return { index: scene.index + 1, phase: 'enter' };
  return scene;
}

export function Hero({ headline, content }) {
  const titleId = useId();
  const inputId = useId();
  const section = useRef(null);
  const field = useRef(null);
  const inView = useInView(section, { amount: 'some' });
  const reduceMotion = useReducedMotion();
  const [scene, setScene] = useState({ index: 0, phase: 'enter' });
  const [paused, setPaused] = useState(false);
  const [tabVisible, setTabVisible] = useState(!document.hidden);
  const [message, setMessage] = useState('');
  const [sendAttempted, setSendAttempted] = useState(false);
  const [focusMessage, setFocusMessage] = useState(false);
  const ready = reduceMotion || scene.phase === 'ready';
  const stopped = paused || !inView || !tabVisible || reduceMotion;
  const titles = [headline, ...content.titles];
  const index = ready ? 2 : scene.index;

  useEffect(() => {
    const updateVisibility = () => setTabVisible(!document.hidden);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    if (stopped || ready) return;
    const timeout = window.setTimeout(() => setScene(advanceScene), durations[scene.phase]);
    return () => window.clearTimeout(timeout);
  }, [scene, stopped, ready]);

  useEffect(() => {
    if (ready && focusMessage) {
      field.current?.focus({ preventScroll: true });
      setFocusMessage(false);
    }
  }, [ready, focusMessage]);

  function showMessage() {
    setScene({ index: 2, phase: 'ready' });
    setFocusMessage(true);
  }

  function chooseSuggestion(value) {
    setMessage(value);
    field.current?.focus({ preventScroll: true });
  }

  return (
    <section
      ref={section}
      className="hero relative text-center"
      aria-labelledby={titleId}
      data-ready={ready}
      data-motion-paused={stopped}
    >
      <div className="hero-scenery" aria-hidden="true" />
      <div className="hero-mist" aria-hidden="true" />
      <div className="hero-content">
        <motion.div
          className="hero-title-shell"
          layout="position"
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 id={titleId} aria-label={headline}>
            <span
              key={index}
              className="hero-title-text"
              data-phase={ready ? 'ready' : scene.phase}
              aria-hidden="true"
            >{titles[index]}</span>
          </h1>
        </motion.div>

        {ready && (
          <motion.div
            className="hero-message"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.2 }}
          >
            <span className="hero-message-icon" aria-hidden="true">
              <img src={envelope} alt="" width="26" height="26" />
            </span>
            <label htmlFor={inputId}>{content.messageLabel}</label>
            <textarea
              ref={field}
              id={inputId}
              rows={3}
              maxLength={2000}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={content.messageExample}
              aria-describedby={inputId + '-notice ' + inputId + '-status'}
            />
            <div className="hero-suggestions" role="group" aria-label={content.suggestionsLabel}>
              {content.suggestions.map((suggestion) => (
                <button
                  key={suggestion.label}
                  type="button"
                  onClick={() => chooseSuggestion(suggestion.message)}
                >{suggestion.label}</button>
              ))}
            </div>
            <div className="hero-message-footer">
              <p id={inputId + '-notice'}>{content.footer}</p>
              <button
                type="button"
                disabled={!message.trim()}
                onClick={() => setSendAttempted(true)}
                aria-describedby={inputId + '-notice ' + inputId + '-status'}
              >{content.send}</button>
            </div>
            <p id={inputId + '-status'} className="hero-send-status" role="status">{sendAttempted ? content.sendUnavailable : ''}</p>
          </motion.div>
        )}
      </div>

      <div className="hero-playback">
        {!ready && <button type="button" onClick={showMessage}>{content.skip}</button>}
        {!reduceMotion && (
          <button type="button" aria-pressed={paused} onClick={() => setPaused((value) => !value)}>
            {paused ? content.resume : content.pause}
          </button>
        )}
      </div>
    </section>
  );
}
