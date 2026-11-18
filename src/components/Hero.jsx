import { useId } from 'react';

export function Hero({ headline }) {
  const titleId = useId();

  return (
    <section className="hero relative grid place-items-center text-center" aria-labelledby={titleId}>
      <h1 id={titleId}>{headline}</h1>
    </section>
  );
}
