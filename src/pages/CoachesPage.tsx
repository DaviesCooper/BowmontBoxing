import { useEffect, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import '../components/Hero.css';
import './AboutPage.css';
import '../components/CardGrid.css';
import { COACHES, type Coach } from '../data/coaches';
import './CoachesPage.css';

const MOBILE_COACH_PHOTO_MQ = '(max-width: 639px)';

function useMobileCoachPhotoLightbox() {
  return useSyncExternalStore(
    (onChange) => {
      if (typeof window === 'undefined') return () => {};
      const mq = window.matchMedia(MOBILE_COACH_PHOTO_MQ);
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    },
    () =>
      typeof window !== 'undefined' ? window.matchMedia(MOBILE_COACH_PHOTO_MQ).matches : false,
    () => false,
  );
}

export function CoachesPage() {
  const isMobileCoachGrid = useMobileCoachPhotoLightbox();
  const [expandedCoach, setExpandedCoach] = useState<Coach | null>(null);

  useEffect(() => {
    if (!isMobileCoachGrid) {
      setExpandedCoach(null);
    }
  }, [isMobileCoachGrid]);

  useEffect(() => {
    if (!expandedCoach) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpandedCoach(null);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [expandedCoach]);

  const lightbox =
    expandedCoach &&
    createPortal(
      <div
        className="coach-photo-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={`Full-screen photo of ${expandedCoach.name}`}
        onClick={() => setExpandedCoach(null)}
      >
        <img
          className="coach-photo-lightbox__img"
          src={expandedCoach.image}
          alt=""
          width={800}
          height={1000}
          decoding="async"
          onClick={() => setExpandedCoach(null)}
        />
      </div>,
      document.body,
    );

  return (
    <div className="coaches-page">
      {lightbox}
      <section
        className="hero hero--photo about-hero"
        aria-labelledby="coaches-heading"
      >
        <h1 id="coaches-heading" className="hero__title hero__title--text coaches-page__hero-title">
          Coaches
        </h1>
        <p className="hero__intro about-hero__tagline">
          Everyone on the floor is a certified coach and cleared to hold pads.
        </p>
      </section>
      <section className="section coaches-page__roster" aria-label="Coach profiles">
        <div className="card-grid card-grid--coaches">
          {COACHES.map((c) => {
            const img = (
              <img
                className="coach-card__photo"
                src={c.image}
                alt=""
                width={400}
                height={500}
                loading="lazy"
                decoding="async"
                style={
                  c.photoObjectPosition ? { objectPosition: c.photoObjectPosition } : undefined
                }
              />
            );

            return (
              <article key={c.name} className="card coach-card">
                {isMobileCoachGrid ? (
                  <button
                    type="button"
                    className="coach-card__photo-wrap coach-card__photo-wrap--tap"
                    onClick={() => setExpandedCoach(c)}
                    aria-label={`View full-screen photo of ${c.name}. Tap again when enlarged to close.`}
                  >
                    {img}
                  </button>
                ) : (
                  <div className="coach-card__photo-wrap">{img}</div>
                )}
                <div className="coach-card__body">
                  <h3 className="card__title coach-card__name">{c.name}</h3>
                  <p className="coach-role">{c.role}</p>
                  {c.bio.trim() ? <p>{c.bio}</p> : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
