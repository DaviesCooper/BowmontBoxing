import { Link } from 'react-router-dom';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero hero--photo" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero__title">
        <Link className="hero__logo-link" to="/">
          <img
            className="hero__logo"
            src="/logo/Logo.png"
            alt="Bowmont Boxing Club"
            width={520}
            height={187}
            decoding="async"
            fetchPriority="high"
          />
        </Link>
      </h1>
      <p className="hero__intro">Your friendly neighbourhood boxing gym.</p>
      <p className="hero__copy">
        All of the Coaches at Bowmont are volunteers and we are grateful that we can share
        our passion for boxing with the community.
      </p>
      <p className="hero__copy">We appreciate you being part of Team Bowmont.</p>
    </section>
  );
}
