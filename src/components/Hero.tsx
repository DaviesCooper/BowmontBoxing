import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="hero hero--photo" aria-labelledby="hero-title">
      <p className="hero__ribbon">Local · No frills · Real work</p>
      <h1 id="hero-title" className="hero__title">
        Bowmont Boxing Club
      </h1>
      <p className="hero__subtitle">
        An old-school gym for footwork, fundamentals, and honest rounds on the bag.
      </p>
      <div className="hero-actions">
        <Link className="button button--primary" to="/contact">
          Find us
        </Link>
        <Link className="button button--ghost" to="/classes">
          Class times
        </Link>
      </div>
    </section>
  );
}
