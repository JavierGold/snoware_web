export function PendingLink({ children }) {
  return (
    <span className="phase-two-link inline-flex items-baseline gap-1.5" role="link" aria-disabled="true">
      {children}<span className="phase-two-link-arrow" aria-hidden="true" />
    </span>
  );
}
