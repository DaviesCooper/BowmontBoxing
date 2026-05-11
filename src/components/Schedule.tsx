const rows: { day: string; detail: string }[] = [
  { day: 'Monday', detail: 'Youth fundamentals — 5:00–6:15 p.m. · Adult technique — 6:30–8:00 p.m.' },
  { day: 'Tuesday', detail: 'Open gym · 12:00–2:00 p.m. · Bag rounds — 5:45–7:30 p.m.' },
  { day: 'Wednesday', detail: 'Coach mitts — 6:00–7:45 p.m. · Beginners welcome first hour.' },
  { day: 'Thursday', detail: 'Strength & skipping — 5:30–6:45 p.m. · Sparring (invite) — 7:00–8:30 p.m.' },
  { day: 'Friday', detail: 'Open gym — 11:00 a.m.–3:00 p.m. · Fight-prep drills — 5:30–7:00 p.m.' },
  { day: 'Saturday', detail: 'Family hour — 9:00–10:00 a.m. · Drop-in rounds — 10:30 a.m.–12:30 p.m.' },
  { day: 'Sunday', detail: 'Closed · Rest, ice, stretch, repeat Monday.' },
];

export function Schedule() {
  return (
    <section id="schedule" className="section" aria-labelledby="schedule-heading">
      <h2 id="schedule-heading" className="section__heading">
        Weekly rhythm
      </h2>
      <p className="section__lead">
        Hours shift with tournaments and seasons. Call ahead if you are making a long
        drive—confirmation beats a locked door.
      </p>
      <div className="schedule">
        {rows.map((row) => (
          <div key={row.day} className="schedule-row">
            <span className="schedule-day">{row.day}</span>
            <p className="schedule-times">{row.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
