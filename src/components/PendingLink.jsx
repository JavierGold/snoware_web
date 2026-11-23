export function PendingLink({ children, href }) {
  const Element = href ? 'a' : 'span';
  return (
    <Element className="phase-two-link inline-flex items-baseline gap-1.5" {...(href ? { href } : { role: 'link', 'aria-disabled': 'true' })}>
      {children}<span className="phase-two-link-arrow" aria-hidden="true" />
    </Element>
  );
}
