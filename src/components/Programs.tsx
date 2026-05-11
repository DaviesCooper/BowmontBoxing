const programs = [
  {
    title: 'Fundamentals',
    body: 'Stance, footwork, the jab-cross-hook-uppercut ladder, and defense that holds up when you are tired.',
  },
  {
    title: 'Bag & pad rounds',
    body: 'Timed work on heavy bags, double-ends, and mitts with coaches who call honest combinations.',
  },
  {
    title: 'Conditioning',
    body: 'Old-school circuits: rope, calisthenics, and core so your hands stay up in the late rounds.',
  },
  {
    title: 'Open gym',
    body: 'Room to shadow, hit the bags, or hop in for light sparring when cleared by coaching staff.',
  },
];

export function Programs() {
  return (
    <section id="training" className="section" aria-labelledby="training-heading">
      <h2 id="training-heading" className="section__heading">
        On the floor
      </h2>
      <p className="section__lead">
        Training blocks rotate through the week. Drop in for a class or use open gym
        hours when the lights are on and the door is unlocked.
      </p>
      <div className="card-grid">
        {programs.map((item) => (
          <article key={item.title} className="card">
            <h3 className="card__title">{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
