import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';

export function HomePage() {
  return (
    <>
      <Hero />
      <div className="gym-strip" role="presentation">
        <img
          src="/gym/Banner3.png"
          alt=""
          width={1600}
          height={400}
          loading="lazy"
          decoding="async"
        />
      </div>
      <section className="section home-teaser" aria-labelledby="home-teaser-heading">
        <h2 id="home-teaser-heading" className="section__heading">
          Same room, new week
        </h2>
        <p className="section__lead">
          Whether you are learning your first jab or polishing your exits, the door is
          open when the schedule says so. Read about the club, meet the coaches, and
          check class blocks before you lace up.
        </p>
        <p className="home-teaser__links">
          <Link to="/about">About the gym</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/classes">Classes &amp; hours</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/pricing">Rates</Link>
        </p>
      </section>
    </>
  );
}
