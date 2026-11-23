import { useEffect, useId, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react';
import { experienceCases } from '../content/experienceCases.js';
import { experienceGalleryText } from '../content/experienceGallery.js';
import './experience-gallery.css';

const WIDE_PAGE_SIZE = 6;
const MOBILE_PAGE_SIZE = 2;
const mobileLayout = window.matchMedia('(width <= 560px)');
const getMobileLayout = () => mobileLayout.matches;
function subscribeMobileLayout(listener) {
  mobileLayout.addEventListener('change', listener);
  return () => mobileLayout.removeEventListener('change', listener);
}
const DIALOG_CLOSE_MS = 200;
const caseArt = import.meta.glob('../assets/experience/cases/*.webp', {
  query: '?url',
  import: 'default',
  eager: true,
});

const imageFor = (id) => caseArt[`../assets/experience/cases/${id}.webp`];

export function ExperienceGallery({ language }) {
  const text = experienceGalleryText[language];
  const mobile = useSyncExternalStore(subscribeMobileLayout, getMobileLayout);
  const pageSize = mobile ? MOBILE_PAGE_SIZE : WIDE_PAGE_SIZE;
  const [activeIndex, setActiveIndex] = useState(0);
  const page = Math.floor(activeIndex / pageSize);
  const pageStart = page * pageSize;
  const [selected, setSelected] = useState(null);
  const galleryRef = useRef(null);
  const gridRef = useRef(null);
  const pendingScrollRef = useRef(null);
  const closeTimer = useRef();
  const dialogRef = useRef(null);
  const openerRef = useRef(null);
  const dialogTitle = useId();
  const totalPages = Math.ceil(experienceCases.length / pageSize);
  const activeCase = selected?.[language];
  const visibleCases = experienceCases.slice(pageStart, pageStart + pageSize);

  function changePage(direction, event) {
    const nextPage = Math.min(totalPages - 1, Math.max(0, page + direction));
    if (nextPage === page) return;
    const nextIndex = nextPage * pageSize;
    pendingScrollRef.current = mobile ? { index: nextIndex, moveFocus: event.detail === 0 } : null;
    setActiveIndex(nextIndex);
  }

  useLayoutEffect(() => {
    const request = pendingScrollRef.current;
    pendingScrollRef.current = null;
    if (!getMobileLayout() || !mobile || request?.index !== activeIndex) return;
    const firstCard = gridRef.current?.firstElementChild;
    if (request.moveFocus) firstCard?.querySelector('button')?.focus({ preventScroll: true });
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    firstCard?.scrollIntoView({ block: 'start', inline: 'nearest', behavior: reducedMotion ? 'instant' : 'smooth' });
  }, [activeIndex, mobile]);

  function openCase(item, opener) {
    openerRef.current = opener;
    setSelected({ ...item });
  }

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!selected || dialog.open) return;
    dialog.showModal();
    dialog.scrollTop = 0;
    dialog.querySelector('button')?.focus({ preventScroll: true });
  }, [selected]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (typeof window.IntersectionObserver !== 'function') {
      gallery.dataset.entered = 'true';
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      gallery.dataset.entered = 'true';
      observer.disconnect();
    });
    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  function closeCase() {
    const dialog = dialogRef.current;
    if (!dialog.open || dialog.hasAttribute('data-closing')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      dialog.close();
      return;
    }
    dialog.setAttribute('data-closing', '');
    closeTimer.current = window.setTimeout(() => dialog.close(), DIALOG_CLOSE_MS);
  }

  function restoreFocus() {
    window.clearTimeout(closeTimer.current);
    dialogRef.current.removeAttribute('data-closing');
    setSelected(null);
    const opener = openerRef.current;
    const focusTarget = opener?.isConnected ? opener : gridRef.current?.querySelector('button');
    focusTarget?.focus({ preventScroll: true });
    openerRef.current = null;
  }

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX >= rect.right ||
        event.clientY < rect.top || event.clientY >= rect.bottom) closeCase();
  }

  return (
    <section className="experience-gallery" aria-label={text.gallery} ref={galleryRef}>
      <ul className="experience-gallery-grid" ref={gridRef}>
        {visibleCases.map((item) => (
          <li key={item.id} className="experience-gallery-card">
            <button type="button" onClick={(event) => openCase(item, event.currentTarget)} aria-haspopup="dialog">
              <span className="experience-gallery-art"><img src={imageFor(item.id)} alt="" loading="lazy" decoding="async" /></span>
              <span className="experience-gallery-caption">
                <span>{item[language].title}</span>
                <span className="experience-gallery-more">{text.more} <span aria-hidden="true">↗</span></span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <nav className="experience-gallery-pager" aria-label={text.pages}>
        <button type="button" onClick={(event) => changePage(-1, event)} aria-label={text.previous} aria-disabled={page === 0}>←</button>
        <output className="sr-only" aria-live="polite" aria-atomic="true">
          {text.current(page + 1, totalPages)}
        </output>
        <button type="button" onClick={(event) => changePage(1, event)} aria-label={text.next} aria-disabled={page + 1 === totalPages}>→</button>
      </nav>
      <dialog className="experience-case-dialog" aria-labelledby={dialogTitle} ref={dialogRef}
        onClose={restoreFocus} onClick={closeOnBackdrop}
        onCancel={(event) => { event.preventDefault(); closeCase(); }}>
        <div className="experience-case-panel">
          <button type="button" onClick={closeCase} className="experience-case-close" aria-label={text.close}>×</button>
          {activeCase && <>
            <img src={imageFor(selected.id)} alt="" decoding="async" />
            <div className="experience-case-copy">
              <h2 id={dialogTitle}>{activeCase.title}</h2>
              <p className="experience-case-industry">{activeCase.industry}</p>
              <h3>{text.problem}</h3>
              <p>{activeCase.problem}</p>
              <h3>{text.solution}</h3>
              <p>{activeCase.solution}</p>
            </div>
          </>}
        </div>
      </dialog>
    </section>
  );
}
