import '../components/Hero.css';
import './AboutPage.css';
import './PricingPage.css';

const tiers = [
  {
    name: 'Monthly — adults',
    price: '$90/month',
    detail: 'Ages 17 and older. Group training.',
  },
  {
    name: 'Monthly — youth',
    price: '$60/month',
    detail: 'Ages 16 and under. Group training.',
  },
  {
    name: '10-class punch — adults',
    price: '$120',
    detail: 'Ten classes. Ages 17 and older.',
  },
  {
    name: '10-class punch — youth',
    price: '$100',
    detail: 'Ten classes. Ages 16 and under.',
  },
] as const;

export function PricingPage() {
  return (
    <div className="pricing-page">
      <section
        className="hero hero--photo about-hero"
        aria-labelledby="pricing-heading"
      >
        <h1 id="pricing-heading" className="hero__title hero__title--text">
          Pricing
        </h1>
        <p className="hero__intro about-hero__tagline">
          Fees below.
        </p>
      </section>

      <div className="about-page__body pricing-page__body">
        <p>
          All of our coaches are volunteers and do not offer private training.
        </p>

        <p>Prices for our group training are listed below.</p>
        <div className="pricing-grid">
          {tiers.map((t) => (
            <article key={t.name} className="pricing-card">
              <h3 className="pricing-card__title">{t.name}</h3>
              <p className="pricing-card__price">{t.price}</p>
              <p className="pricing-card__detail">{t.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
