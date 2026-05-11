import { COACHES } from '../data/coaches';

export function CoachesPage() {
  return (
    <section className="section" aria-labelledby="coaches-heading">
      <h1 id="coaches-heading" className="section__heading">
        Corner crew
      </h1>
      <p className="section__lead">
        Everyone on the floor is first aid certified and cleared to hold pads—no random
        volunteers in the ring. Bios are starter copy; swap in titles and backgrounds that
        match your club.
      </p>
      <div className="card-grid card-grid--coaches">
        {COACHES.map((c) => (
          <article key={c.name} className="card coach-card">
            <div className="coach-card__photo-wrap">
              <img
                className="coach-card__photo"
                src={c.image}
                alt=""
                width={400}
                height={500}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="coach-card__body">
              <h3 className="card__title coach-card__name">{c.name}</h3>
              <p className="coach-role">{c.role}</p>
              <p>{c.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
