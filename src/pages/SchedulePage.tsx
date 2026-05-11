import { useEffect } from 'react';
import { ClassWeekSchedule } from '../components/ClassWeekSchedule';
import { SITE_SOCIAL } from '../config/site';
import { scrollElementBelowSiteHeader } from '../utils/scrollBelowSiteHeader';
import '../components/Hero.css';
import '../components/CardGrid.css';
import './AboutPage.css';
import './SchedulePage.css';

export function SchedulePage() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    const run = () => {
      scrollElementBelowSiteHeader(el, 'auto');
      requestAnimationFrame(() => {
        el.focus({ preventScroll: true });
      });
    };
    const id = window.requestAnimationFrame(run);
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div className="schedule-page">
      <section
        className="hero hero--photo about-hero"
        aria-labelledby="schedule-heading"
      >
        <h1 id="schedule-heading" className="hero__title hero__title--text">
          Schedule
        </h1>
        <p className="hero__intro about-hero__tagline">
          Weekly calendar, first visits, and what each offering on the floor is about.
        </p>
      </section>

      <div className="about-page__body">
        <ClassWeekSchedule />
        <div className="card-grid card-grid--schedule">
          <article id="intro-to-bowmont" className="card card--solid" tabIndex={-1}>
            <h2 id="first-time-at-bowmont" className="card__title" tabIndex={-1}>
              Intro to Bowmont Boxing
            </h2>
            <p className="class-card__meta">Welcome to the Bowmont Boxing Club</p>
            <p className="class-card__times">
              Mondays 7:45 p.m. – 8:30 p.m.
            </p>
            <h3 className="class-card__subhead">Where to start?</h3>
            <p>
              Whether you&rsquo;ve boxed before, done any type of MMA training, or this is your first
              time trying combat sports training, your first session at Bowmont Boxing is going to be
              an introduction to the club.
            </p>
            
            <p>
              This is an active orientation, not a fitness class.
            </p>

            <h3 className="class-card__subhead">What to expect?</h3>
            <ul className="class-card__list">
              <li>Intro to the rules of the gym</li>
              <li>Signing our waiver</li>
              <li>Intro to hand-wrapping</li>
              <li>Orientation to our Boxing Fundamentals drills</li>
              <li>
                Instructions for registration with us, Boxing Alberta &amp; Boxing Canada
              </li>
              <li>
                Info about our other classes (Fighter Fitness, Boxing Fundamentals, Technical
                Sparring, Competitive training, Open gym) and Q &amp; A
              </li>
            </ul>

            <h3 className="class-card__subhead">Who can come?</h3>
            <p>
              Our classes are available for anyone aged 12 and up who is mature enough to be in a class
              integrated with adults.
            </p>
            <p>Boxers under 18 must have a parent or guardian&rsquo;s signature.</p>

            <h3 className="class-card__subhead">What you need to bring?</h3>
            <p>Wear comfortable clothes and indoor shoes.</p>
            <p>
              No need for hand wraps your first class, but you can bring your own if you have them.
            </p>

            <h3 className="class-card__subhead">Additional information / links</h3>
            <p>
              You do not need to register before you attend your first class.
              However, please fill out your contact information on the{' '}
              <a href={SITE_SOCIAL.mindbodyJoin} target="_blank" rel="noopener noreferrer">
                MindBody website or mobile app
              </a>{' '}
              prior to attending your first class.
            </p>
            <p>
              Upon finishing your trial period, boxers are required to register with CABA and purchase
              a gym membership if they wish to continue training.
            </p>
          </article>

          <aside
            className="schedule-mandatory-notice"
            aria-label="Very important: Intro to Bowmont Boxing is mandatory before attending any other classes."
          >
            <p className="schedule-mandatory-notice__body">
              <span className="schedule-mandatory-notice__label">Very important —{' '}</span>
              Intro to Bowmont Boxing is mandatory before attending any other classes.
            </p>
          </aside>

          <article id="boxing-fundamentals" className="card" tabIndex={-1}>
            <h2 className="card__title">Boxing Fundamentals Class</h2>
            <p className="class-card__meta">All skill levels welcome</p>
            <p className="class-card__times">Tuesdays &amp; Thursdays 7:30 p.m. – 8:45 p.m.</p>
            <p>
              Specific boxing skills developed through bag drills, footwork drills, non-contact, and
              contact sparring.
            </p>
            <p>
              Sparring is not required for any member uncomfortable with contact. Most members do
              not spar, so please do not feel pressured.
            </p>
            <p>Safety is the number one priority for all members.</p>
            <p>
              All skill levels are welcome. We ask that all participants are at least ages 12+ (with
              the maturity to be in a class integrated with adults).
            </p>
          </article>

          <article id="fighter-fitness" className="card" tabIndex={-1}>
            <h2 className="card__title">Fighter Fitness Class</h2>
            <p className="class-card__meta">All skill levels welcome</p>
            <p className="class-card__times">Mondays &amp; Wednesdays 6:00 p.m. – 7:30 p.m.</p>
            <p>
              Get in fight shape. Classes combine cardio and bodyweight training through boxing
              techniques to develop fighter fitness. Ages 12+ (with maturity) and all skill levels
              are welcome.
            </p>
          </article>

          <article id="competitive-boxing" className="card" tabIndex={-1}>
            <h2 className="card__title">Competitive Boxing Class</h2>
            <p className="class-card__meta">Invite only</p>
            <p className="class-card__times">Tuesdays &amp; Thursdays 6:00 p.m. – 7:30 p.m.</p>
            <p>
              This class is invite only and intended for those who wish to compete. It is similar to
              the Fundamental Boxing Class in structure. There is an expectation that a foundation of
              fundamental skills has been developed prior to attendance, as this class builds upon
              those abilities. These skills include: proper footwork, good offence, efficient defence,
              proper punching technique, and maturity.
            </p>
            <p>
              The sparring in this class is full contact and much higher intensity than both the
              Fundamental class and Technical Sparring class. Participation in this class means you
              have been medically cleared, registered as competitive CABA members (including CABA fees
              being paid), and have been approved to attend by a coach.
            </p>
          </article>

          <article id="technical-sparring" className="card" tabIndex={-1}>
            <h2 className="card__title">Technical Sparring</h2>
            <p className="class-card__meta">Invite only</p>
            <p className="class-card__times">Wednesdays 7:45 p.m. – 9:00 p.m.</p>
            <p>
              This class is an introduction to competitive sparring that builds on what is taught in
              the fundamentals class; it teaches fundamental offensive and defensive movements. You
              must attend fundamental classes until a coach invites you to attend this class.
            </p>
            <p>
              Additionally, only students who have been medically cleared, registered as competitive
              CABA members, and have been approved by a coach will have the opportunity to spar and
              attend this class.
            </p>
            <p>Head gear, a mouthguard, and 16 oz gloves are required for all sparring.</p>
          </article>

          <article id="open-gym" className="card" tabIndex={-1}>
            <h2 className="card__title">Open Gym</h2>
            <p className="class-card__times">Saturdays 11:00 a.m. – 1:00 p.m.</p>
            <p>
              Drop in during Saturday open gym hours for bag work, shadow boxing, or your own
              routine when the gym is open.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
