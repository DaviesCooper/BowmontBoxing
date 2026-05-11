import type { MouseEvent } from 'react';
import { CLASS_SCHEDULE_WEEK } from '../data/classSchedule';
import { scrollElementBelowSiteHeader } from '../utils/scrollBelowSiteHeader';
import './ClassWeekSchedule.css';

function goToClassSection(e: MouseEvent<HTMLAnchorElement>, anchorId: string) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  const el = document.getElementById(anchorId);
  if (!el) return;
  e.preventDefault();
  window.history.replaceState(null, '', `#${anchorId}`);
  const motion =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touch = typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches;
  const behavior: ScrollBehavior = motion || touch ? 'auto' : 'smooth';
  scrollElementBelowSiteHeader(el, behavior);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.focus({ preventScroll: true });
    });
  });
}

export function ClassWeekSchedule() {
  return (
    <section className="class-week" aria-labelledby="class-week-heading">
      <div className="class-week__grid" role="list">
        {CLASS_SCHEDULE_WEEK.map((day) => (
          <div key={day.id} className="class-week__day" role="listitem">
            <div className="class-week__day-head">
              <span className="class-week__day-abbr" aria-hidden="true">
                {day.abbr}
              </span>
              <span className="class-week__day-full">{day.weekday}</span>
            </div>
            {day.slots.length === 0 ? (
              <p className="class-week__empty" aria-label="No classes scheduled">
                —
              </p>
            ) : (
              <ul className="class-week__slots">
                {day.slots.map((slot) => (
                  <li key={`${day.id}-${slot.time}-${slot.title}`} className="class-week__slot">
                    <a
                      className="class-week__slot-link"
                      href={`#${slot.anchorId}`}
                      onClick={(e) => goToClassSection(e, slot.anchorId)}
                    >
                      <span className="class-week__slot-time">{slot.time}</span>
                      <span className="class-week__slot-title">{slot.title}</span>
                      {slot.inviteOnly ? (
                        <span className="class-week__slot-tag">Invite only</span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
