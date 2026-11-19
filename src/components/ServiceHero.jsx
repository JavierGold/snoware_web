// Shared geometry and motion; service-specific artwork is scoped by className.
export function ServiceHero({ title, id = 'service-title', className = '' }) {
  return (
    <section className={`modernization-hero flex items-end justify-center ${className}`.trim()} aria-labelledby={id}>
      <h1 id={id}>{title}</h1>
    </section>
  );
}
