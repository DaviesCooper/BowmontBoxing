export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <h1 id="about-heading" className="section__heading">
        The club
      </h1>
      <p className="section__lead">
        We are a small room with heavy bags, a ring, and people who show up. No
        gimmicks—just coaching, conditioning, and respect for the craft.
      </p>
      <figure className="media-banner">
        <img
          src="/gym/Banner2.jpg"
          alt="Training floor at Bowmont Boxing Club"
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
        />
      </figure>
      <div className="copy-columns">
        <div>
          <h3>What to expect</h3>
          <p>
            Wraps, gloves, and mouthguards when you need them. Skipping rope in the
            corner, timer on the wall, and the steady thud of the speed bag. First
            timers get walked through stance, guard, and basic punches before they
            touch a bag.
          </p>
        </div>
        <div>
          <h3>Who trains here</h3>
          <p>
            Kids learning discipline, adults blowing off steam, amateurs chasing
            corners, and anyone who wants to move better. You do not need a
            background in sport—just clean shoes, a water bottle, and a willingness
            to listen.
          </p>
        </div>
      </div>
    </section>
  );
}
