import { useEffect, useId, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import envelope from 'bootstrap-icons/icons/envelope.svg';

const durations = { enter: 700, hold: 2000, exit: 350 };
const wordStagger = 900;
const wordDuration = 1000;

function sceneDuration(scene) {
  if (scene.index === 1 && scene.phase === 'hold') return 1400;
  if (scene.index === 2 && scene.phase === 'hold') return 100;
  if (scene.index === 2 && scene.phase === 'enter') return wordDuration + wordStagger;
  return durations[scene.phase];
}

function WordTitle({ text }) {
  const words = text.split(' ');
  return words.map((word, index) => (
    <span key={index}>
      {index > 0 && ' '}
      <span
        className="hero-title-word"
        style={{ '--word-delay': `${index / Math.max(words.length - 1, 1) * wordStagger}ms` }}
      >{word}</span>
    </span>
  ));
}

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
    const timeout = window.setTimeout(() => setScene(advanceScene), sceneDuration(scene));
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
      <div className="hero-scenery hero-scenery-next" aria-hidden="true" />
      <div className="hero-mist" aria-hidden="true" />
      <div className="hero-mist hero-mist-back" aria-hidden="true" />
      <motion.div
        className="hero-content"
        initial={false}
        animate={{ paddingTop: ready ? '2rem' : '0rem', paddingBottom: ready ? '4rem' : '0rem' }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-title-shell">
          <h1 id={titleId} aria-label={headline}>
            <span
              key={index}
              className="hero-title-text"
              data-words={index === 2}
              data-word-motion={index === 2 && !ready}
              data-phase={ready ? 'ready' : scene.phase}
              aria-hidden="true"
            >{index === 2 ? <WordTitle text={titles[index]} /> : titles[index]}</span>
          </h1>
        </div>

        {ready && (
          <motion.div
            className="hero-message-reveal"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-message">
            <span className="hero-message-icon" aria-hidden="true">
              <img src={envelope} alt="" width="26" height="26" />
            </span>
            <label className="sr-only" htmlFor={inputId}>{content.messageLabel}</label>
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
            </div>
          </motion.div>
        )}
      </motion.div>

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
