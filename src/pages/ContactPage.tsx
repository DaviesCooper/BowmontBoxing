import { Link } from 'react-router-dom';
import '../components/Hero.css';
import './AboutPage.css';
import './ContactPage.css';
import { SITE_ADDRESS, SITE_CONTACT_EMAIL } from '../config/site';

const GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps?q=' +
  encodeURIComponent(SITE_ADDRESS.singleLine) +
  '&z=16&output=embed';

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(SITE_ADDRESS.singleLine);

export function ContactPage() {
  return (
    <div className="contact-page">
      <section
        className="hero hero--photo about-hero"
        aria-labelledby="contact-heading"
      >
        <h1 id="contact-heading" className="hero__title hero__title--text">
          Contact
        </h1>
        <p className="hero__intro about-hero__tagline">
          Directions, questions before your first class, or anything else we can help with.
        </p>
      </section>

      <div className="about-page__body contact-page__body">
        <div className="contact-page__panel">
          <section aria-labelledby="contact-visit-heading">
            <h2 id="contact-visit-heading" className="contact-page__section-title">
              Visit us
            </h2>
            <p className="contact-page__section-lead">
              Basement steps, peeling paint we keep meaning to fix, and posters from cards that
              rolled through town years ago. You will hear us before you see the sign.
            </p>
            <address className="contact-page__address">
              <span className="contact-page__address-label">Address</span>
              <span className="contact-page__address-lines">
                {SITE_ADDRESS.lines[0]}
                <br />
                {SITE_ADDRESS.lines[1]}
              </span>
            </address>
            <p className="contact-page__email-row">
              <span className="contact-page__address-label">Email</span>{' '}
              <a href={`mailto:${SITE_CONTACT_EMAIL}`}>{SITE_CONTACT_EMAIL}</a>
            </p>
            <p className="contact-page__no-phone">We do not publish a phone number; please use email.</p>
          </section>

          <section className="contact-page__hours" aria-labelledby="contact-hours-heading">
            <h2 id="contact-hours-heading" className="contact-page__section-title">
              Hours
            </h2>
            <p className="contact-page__section-lead">
              Bowmont is a not-for-profit club: everyone who is there is a volunteer. This is not
              a staffed business, so there are no fixed opening hours outside of scheduled classes.
              See the <Link to="/schedule">class schedule</Link> for when the gym is open for
              training.
            </p>
          </section>
        </div>

        <section className="contact-page__map-section" aria-labelledby="contact-map-heading">
          <h2 id="contact-map-heading" className="contact-page__section-title">
            Map
          </h2>
          <div className="contact-page__map">
            <iframe
              title="Google Map: Bowmont Boxing Club at 1515 Home Rd NW, Calgary"
              src={GOOGLE_MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="contact-page__map-link-wrap">
            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer">
              Open this location in Google Maps
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
