export type Coach = {
  name: string;
  image: string;
  role: string;
  bio: string;
  /** Overrides `object-position` for this coach’s crop (e.g. `center 72%` weights focus toward the lower part of the photo). */
  photoObjectPosition?: string;
};

/** Coach photos live in `public/coaches/`. File names use first names. */
export const COACHES: Coach[] = [
  {
    name: 'Gwyn Lewis',
    image: '/coaches/Gwyn.png',
    role: 'Head coach · Level 2 coach',
    bio: 'Gwyn is the head coach. He runs the Fighter Fitness classes and competition classes.',
  },
  {
    name: 'Todd Hill',
    image: '/coaches/Todd.png',
    role: 'Level 2 coach',
    bio: '',
  },
  {
    name: 'Jeff Lecuyer',
    image: '/coaches/Jeff.png',
    role: 'Level 1 coach',
    bio: '',
  },
  {
    name: 'Greg Shymanski',
    image: '/coaches/Greg.png',
    role: 'Level 1 coach',
    bio: '',
  },
  {
    name: 'Ty Pachenko',
    image: '/coaches/Ty.png',
    role: 'Level 1 coach',
    bio: '',
    photoObjectPosition: 'center 30%',
  },
  {
    name: 'Fidel Heho',
    image: '/coaches/Fidel.png',
    role: 'Active fighter / coach',
    bio: '',
  },
  {
    name: 'Neal Greaney',
    image: '/coaches/Neal.png',
    role: 'Level 2 coach',
    bio: '',
  },
  {
    name: 'Doug Harder',
    image: '/coaches/Doug.png',
    role: 'Legacy coach · Level 4 coach',
    bio: '',
  },
  {
    name: 'Mike Short',
    image: '/coaches/Mike.png',
    role: 'Legacy coach · Level 3 coach',
    bio: '',
  },
  {
    name: 'Kendra Mogck',
    image: '/coaches/Kendra.png',
    role: 'Legacy coach · Level 2 coach',
    bio: '',
  },
];
