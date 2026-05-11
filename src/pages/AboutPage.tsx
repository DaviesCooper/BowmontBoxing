import '../components/Hero.css';
import './AboutPage.css';

export function AboutPage() {
  return (
    <div className="about-page">
      <section
        className="hero hero--photo about-hero"
        aria-labelledby="about-heading"
      >
        <h1 id="about-heading" className="hero__title hero__title--text">
          About Bowmont
        </h1>
        <p className="hero__intro about-hero__tagline">
          A non-profit club in Bowness and Montgomery—here since 1983.
        </p>
      </section>
      <div className="about-page__body">
        <p>
          Bowmont Boxing Club was established in the communities of Bowness and Montgomery in
          1983. Founded on the belief that a boxing club is a family that everyone should have
          the opportunity to be a part of, Bowmont Boxing Club remains a non-profit organization
          to this day.
        </p>
        <p>
          All coaches at Bowmont Boxing are volunteers, ensuring the engagement and passion of our
          coaches is passed on to all members. Bowmont Boxing focuses on the basics of boxing,
          including footwork and agility, proper technique and an established jab, similar to the
          training of the Cuban national team. We have a slightly unconventional, yet recognizably
          old school method of training, which allows our boxers to achieve success at all levels.
        </p>
        <p>
          Bowmont Boxing caters to amateur competitors, as well as recreational boxers in it for
          the workout. The coaches at Bowmont do not offer any private lessons so we ask that all
          members take part in our classes. Class participation is part of the skill development
          process at Bowmont, and we know that you will enjoy your time at the gym!
        </p>
      </div>
    </div>
  );
}
