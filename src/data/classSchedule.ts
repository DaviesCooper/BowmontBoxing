export type ClassScheduleSlot = {
  time: string;
  title: string;
  /** Matches `id` on the class detail card (same page). */
  anchorId: string;
  inviteOnly?: boolean;
};

export type ClassScheduleDay = {
  id: string;
  weekday: string;
  abbr: string;
  slots: ClassScheduleSlot[];
};

/** Weekly recurring class blocks, sorted by start time within each day. */
export const CLASS_SCHEDULE_WEEK: ClassScheduleDay[] = [
  {
    id: 'mon',
    weekday: 'Monday',
    abbr: 'Mon',
    slots: [
      { time: '6:00–7:30 p.m.', title: 'Fighter Fitness Class', anchorId: 'fighter-fitness' },
      { time: '7:45–8:30 p.m.', title: 'Intro to Bowmont Boxing', anchorId: 'intro-to-bowmont' },
    ],
  },
  {
    id: 'tue',
    weekday: 'Tuesday',
    abbr: 'Tue',
    slots: [
      {
        time: '6:00–7:30 p.m.',
        title: 'Competitive Boxing Class',
        anchorId: 'competitive-boxing',
        inviteOnly: true,
      },
      { time: '7:30–8:45 p.m.', title: 'Boxing Fundamentals Class', anchorId: 'boxing-fundamentals' },
    ],
  },
  {
    id: 'wed',
    weekday: 'Wednesday',
    abbr: 'Wed',
    slots: [
      { time: '6:00–7:30 p.m.', title: 'Fighter Fitness Class', anchorId: 'fighter-fitness' },
      {
        time: '7:45–9:00 p.m.',
        title: 'Technical Sparring',
        anchorId: 'technical-sparring',
        inviteOnly: true,
      },
    ],
  },
  {
    id: 'thu',
    weekday: 'Thursday',
    abbr: 'Thu',
    slots: [
      {
        time: '6:00–7:30 p.m.',
        title: 'Competitive Boxing Class',
        anchorId: 'competitive-boxing',
        inviteOnly: true,
      },
      { time: '7:30–8:45 p.m.', title: 'Boxing Fundamentals Class', anchorId: 'boxing-fundamentals' },
    ],
  },
  {
    id: 'fri',
    weekday: 'Friday',
    abbr: 'Fri',
    slots: [],
  },
  {
    id: 'sat',
    weekday: 'Saturday',
    abbr: 'Sat',
    slots: [{ time: '11:00 a.m.–1:00 p.m.', title: 'Open Gym', anchorId: 'open-gym' }],
  },
  {
    id: 'sun',
    weekday: 'Sunday',
    abbr: 'Sun',
    slots: [],
  },
];
