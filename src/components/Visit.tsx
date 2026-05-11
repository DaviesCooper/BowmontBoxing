export function Visit() {
  return (
    <section id="visit" className="section" aria-labelledby="visit-heading">
      <h2 id="visit-heading" className="section__heading">
        Pull up to the gym
      </h2>
      <p className="section__lead">
        Basement steps, peeling paint that we keep meaning to fix, and posters from
        cards that rolled through town twenty years ago. You will hear us before you
        see the sign.
      </p>
      <div className="visit-panel">
        <aside>
          <address className="visit-address">
            <dl style={{ margin: 0 }}>
              <dt>Address</dt>
              <dd>
                Replace with your street, unit, city, postal code
                <br />
                {/* Placeholder neighbourhood name for flair */}
                Bowmont neighbourhood
              </dd>
            </dl>
          </address>
        </aside>
        <div>
          <h3 className="panel-label">Lobby hours (approx.)</h3>
          <ul className="hours-list">
            <li>
              <strong>Mon–Thu</strong>
              <span>5:00 a.m. – 9:30 p.m.</span>
            </li>
            <li>
              <strong>Fri</strong>
              <span>5:00 a.m. – 8:00 p.m.</span>
            </li>
            <li>
              <strong>Sat</strong>
              <span>8:00 a.m. – 3:00 p.m.</span>
            </li>
            <li>
              <strong>Sun</strong>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
