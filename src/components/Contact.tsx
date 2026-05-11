import './Contact.css';

export function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <h1 id="contact-heading" className="section__heading">
        Say hello
      </h1>
      <p className="section__lead">
        Want to tour the room or ask what to bring your first night? Reach out—we answer
        the phone between rounds.
      </p>
      <div className="contact-card">
        <p>
          <span className="contact-label">Phone · </span>
          <a href="tel:+10000000000">(000) 000‑0000</a>
        </p>
        <p>
          <span className="contact-label">Email · </span>
          <a href="mailto:hello@bowmontboxing.example">hello@bowmontboxing.example</a>
        </p>
        <p style={{ marginBottom: 0, fontStyle: 'italic', color: 'var(--muted)' }}>
          Parking is street-side after 6—give yourself five minutes to wrap.
        </p>
      </div>
    </section>
  );
}
