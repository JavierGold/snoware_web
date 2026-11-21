import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { experienceCases } from '../content/experienceCases.js';
import { experienceGalleryText } from '../content/experienceGallery.js';
import './experience-gallery.css';

const PAGE_SIZE = 6;
const DIALOG_CLOSE_MS = 200;
const caseArt = import.meta.glob('../assets/experience/cases/*.webp', {
  query: '?url',
  import: 'default',
  eager: true,
});

const imageFor = (id) => caseArt[`../assets/experience/cases/${id}.webp`];
const pageNumber = (value) => String(value).padStart(2, '0');

export function ExperienceGallery({ language }) {
  const text = experienceGalleryText[language];
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null);
  const galleryRef = useRef(null);
  const closeTimer = useRef();
  const dialogRef = useRef(null);
  const openerRef = useRef(null);
  const dialogTitle = useId();
  const totalPages = Math.ceil(experienceCases.length / PAGE_SIZE);
  const activeCase = selected?.[language];
  const visibleCases = experienceCases.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  function changePage(direction) {
    setPage(current => Math.min(totalPages - 1, Math.max(0, current + direction)));
  }

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
    observer.observe(gallery.querySelector('.experience-gallery-grid'));
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
    openerRef.current?.focus({ preventScroll: true });
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
      <ul className="experience-gallery-grid">
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
        <button type="button" onClick={() => changePage(-1)} aria-label={text.previous} aria-disabled={page === 0}>←</button>
        <output aria-live="polite">
          <span className="sr-only">{text.current(page + 1, totalPages)}</span>
          <span aria-hidden="true">{pageNumber(page + 1)} <span>/ {pageNumber(totalPages)}</span></span>
        </output>
        <button type="button" onClick={() => changePage(1)} aria-label={text.next} aria-disabled={page + 1 === totalPages}>→</button>
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
