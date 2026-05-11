export type Coach = {
  name: string;
  image: string;
  role: string;
  bio: string;
};

/** Coach photos live in `public/coaches/`. Edit roles and bios anytime. */
export const COACHES: Coach[] = [
  {
    name: 'Doug',
    image: '/coaches/Doug.png',
    role: 'Coach',
    bio: 'On the floor with you for fundamentals, bag work, and the details that keep hands up late in the round.',
  },
  {
    name: 'Fidel',
    image: '/coaches/Fidel.png',
    role: 'Coach',
    bio: 'Pad rounds and conditioning with a steady eye on form—beginners and regulars welcome.',
  },
  {
    name: 'Greg',
    image: '/coaches/Greg.png',
    role: 'Coach',
    bio: 'Helps boxers build rhythm on the bags and confidence in the corner.',
  },
  {
    name: 'Gwyn',
    image: '/coaches/Gwyn.png',
    role: 'Coach',
    bio: 'Focused coaching in a room that rewards showing up and putting in honest work.',
  },
  {
    name: 'Jeff',
    image: '/coaches/Jeff.png',
    role: 'Coach',
    bio: 'Technical pointers, mitt work, and the kind of feedback you can use the same night.',
  },
  {
    name: 'Kendra',
    image: '/coaches/Kendra.png',
    role: 'Coach',
    bio: 'Youth and adult classes—clear instruction, respect for the sport, and a sharp timer.',
  },
  {
    name: 'Mike',
    image: '/coaches/Mike.png',
    role: 'Coach',
    bio: 'Old-school rounds: footwork first, power when you have earned the balance.',
  },
  {
    name: 'Neal',
    image: '/coaches/Neal.png',
    role: 'Coach',
    bio: 'Keeps the room organized, safe, and moving so everyone gets their work in.',
  },
  {
    name: 'Todd',
    image: '/coaches/Todd.png',
    role: 'Coach',
    bio: 'From first wraps to late sparring prep—meets you where you are and pushes the standard.',
  },
  {
    name: 'Ty',
    image: '/coaches/Ty.png',
    role: 'Coach',
    bio: 'Bag work, drills, and the small corrections that turn a swing into a punch.',
  },
];
