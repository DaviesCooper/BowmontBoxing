import './PricingPage.css';

const tiers = [
  {
    name: 'Drop-in',
    price: '$20',
    detail: 'Single class or open gym block. First visit includes a quick orientation.',
  },
  {
    name: 'Monthly unlimited',
    price: '$95',
    detail: 'All scheduled classes plus open gym during lobby hours. Autopay optional.',
  },
  {
    name: '10-class card',
    price: '$160',
    detail: 'Punch card, no expiry stress—good for folks on shift work.',
  },
  {
    name: 'Youth (under 16)',
    price: '$65 / mo',
    detail: 'Fundamentals and family hour included. Mouthguard required for any contact.',
  },
];

export function PricingPage() {
  return (
    <section className="section" aria-labelledby="pricing-heading">
      <h1 id="pricing-heading" className="section__heading">
        Rates
      </h1>
      <p className="section__lead">
        Numbers below are placeholders—swap in your real fees, family discounts, and
        any tournament or locker fees. HST or sales tax may apply depending on your
        province or state.
      </p>
      <div className="pricing-grid">
        {tiers.map((t) => (
          <article key={t.name} className="pricing-card">
            <h3 className="pricing-card__title">{t.name}</h3>
            <p className="pricing-card__price">{t.price}</p>
            <p className="pricing-card__detail">{t.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
