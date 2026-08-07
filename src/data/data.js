/* ==========================================
   TechTron — Centralized Site Data
   ------------------------------------------
   Replace placeholder images below with the
   uploaded official assets whenever ready.
   In future, these arrays can be fetched from
   the Node.js + Express + MongoDB backend.
   ========================================== */

import memberPlaceholder from '../assets/images/placeholder-member.svg';

/* ---------------- Navigation ---------------- */
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Executive Committee', path: '/executive-committee' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

/* ---------------- Branding ---------------- */
export const brand = {
  name: 'TechTron',
  tagline: 'Innovate • Collaborate • Inspire',
  logo: '/logo.png',
  department: 'Department of Information Technology',
  college: 'Kings Engineering College',
  email: 'techtron@kingsengineeringcollege.edu.in',
  phone: '+91 98765 43210',
  address: 'Kings Engineering College, Irungattukottai, Sriperumbudur, Tamil Nadu 602117',
};

/* ---------------- Home ---------------- */
export const hero = {
  title: 'TechTron',
  subtitle: 'Information Technology Association',
  tagline: 'Innovate • Collaborate • Inspire',
  typingWords: ['Innovate.', 'Collaborate.', 'Inspire.', 'Code.'],
  description: `The official Information Technology Association of Kings Engineering College — where curious minds grow into skilled engineers, leaders, and creators of the future.`,
};

/* ---------------- About ---------------- */
export const about = {
  intro: `TechTron is the official Information Technology Association of Kings Engineering College. We are a community of passionate students, mentors, and innovators dedicated to exploring technology beyond the classroom — through workshops, hackathons, guest lectures, coding challenges, and impactful projects.`,
  vision: `The Vision of department of Information Technology is to inculcate technology in transforming the lives of future generation by fostering the skills necessary to succeed in an increasingly competitive world and to become innovative and reach the unreached in the domain of Information Technology.`,
  missionPoints: [
    `To empower students to be successful by developing basic knowledge in Science and Technology to excel in all technical strives.`,
    `To support in creating environments which encourage exploration, curiosity and creativity.`,
    `To create an arena in developing excellent managerial skills thereby inclining to articulate effectively and to face the upcoming challenges.`,
    `To discover new knowledge through innovative research that encourages entrepreneurship and economic development to benefit our global society.`,
    `To train and educate the graduates for interdisciplinary engineering research and advanced problem solving capabilities.`,
  ],
  objectives: [
    {
      icon: 'code',
      title: 'Skill Development',
      description:
        'Organize coding workshops, bootcamps, and hands-on sessions that sharpen technical and soft skills.',
    },
    {
      icon: 'rocket',
      title: 'Innovation',
      description:
        'Encourage students to ideate, prototype, and build real-world solutions through hackathons and projects.',
    },
    {
      icon: 'users',
      title: 'Community & Networking',
      description:
        'Connect students with industry experts, alumni, and peers through events, guest lectures, and meetups.',
    },
    {
      icon: 'trophy',
      title: 'Competitive Excellence',
      description:
        'Coach and support students to excel in national and international tech competitions and certifications.',
    },
  ],
};

/* ---------------- Executive Committee ---------------- */
export const committeeMembers = [
  {
    id: 1,
    name: 'Dr. P. Udhayasankaran',
    position: 'Staff Advisor — HOD, IT',
    photo: '/members/IMG-20260807-WA0009.jpg',
    social: {
      mail: 'mailto:your.email@example.com',
      linkedin: 'https://linkedin.com/in/your-username',
      github: 'https://github.com/your-username',
    },
  },
  {
    id: 2,
    name: 'Mrs. S. Adlin Stephi',
    position: 'Convenor — AP, IT',
    photo: '/members/IMG_20260805_140742.jpg',
    social: {
      mail: 'mailto:your.email@example.com',
      linkedin: 'https://linkedin.com/in/your-username',
      github: 'https://github.com/your-username',
    },
  },
  {
    id: 3,
    name: 'Mr. A. Vishnu',
    position: 'President',
    photo: '/members/ChatGPT Image Aug 4, 2026, 08_19_48 PM.png',
    social: {
      mail: 'mailto:vishnuashok2906@gmail.com',
      linkedin: 'https://www.linkedin.com/in/vishnu-a-ab3195356?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github: 'https://github.com/vishnuashok2906-svg',
    },
  },
  {
    id: 4,
    name: 'Mr. M. Ajith',
    position: 'Vice President',
    photo: '/members/IMG_20260804_144433.png',
    social: {
      mail: 'mailto:arunajith4544@gmail.com',
      linkedin: 'https://www.linkedin.com/in/ajith-m-914885355?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github: 'https://github.com/Ajith1303',
    },
  },
  {
    id: 5,
    name: 'Ms. S. Snejana',
    position: 'Secretary',
    photo: '/members/ChatGPT Image Aug 4, 2026, 07_50_23 PM.png',
    social: {
      mail: 'mailto:snejanaselvam06@gmail.com',
      linkedin: 'https://in.linkedin.com/in/snejana-s-266885355',
      github: 'https://github.com/snejana13',
    },
  },
  {
    id: 6,
    name: 'Ms. Y. Abihail Nans Kuiper',
    position: 'Joint Secretary',
    photo: '/members/IMG-20260804-WA0070.jpg',
    social: {
      mail: 'mailto:abihailnans@gmail.com',
      linkedin: 'https://www.linkedin.com/in/nancy29052007',
      github: 'https://github.com/nansabi',
    },
  },
  {
    id: 7,
    name: 'Ms. M. Loyce Rebecca',
    position: 'Treasurer',
    photo: '/members/IMG-20260804-WA0032.jpg',
    social: {
      mail: 'mailto:rebeccaloyce401@gmail.com ',
      linkedin: 'https://www.linkedin.com/in/loyce-rebecca-2a3965355?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github: 'http://github.com/loyce44',
    },
  },
  {
    id: 8,
    name: 'Ms. PG. Tharani',
    position: 'Technical Lead',
    photo: '/members/ChatGPT Image Aug 4, 2026, 07_45_36 PM.png',
    social: {
      mail: 'mailto:your.email@example.com',
      linkedin: 'https://linkedin.com/in/your-username',
      github: 'https://github.com/your-username',
    },
  },
  {
    id: 9,
    name: 'Ms. F. Clara Arolin Victoria',
    position: 'Events Coordinator',
    photo: '/members/IMG-20260804-WA0036.jpg',
    social: {
      mail: 'mailto:claraxavierkec2428@gmail.com',
      linkedin: 'https://www.linkedin.com/in/clara-arolin-victoria-f-7807a83a4/',
      github: 'https://github.com/Claraxavi',
    },
  },
  {
    id: 10,
    name: 'Mr. S. Roshan Tiwari',
    position: 'Creative & Design Head',
    photo: '/members/ChatGPT Image Aug 4, 2026, 08_16_44 PM.png',
    social: {
      mail: 'mailto:roshanofficial2411@gmail.com',
      linkedin: 'https://www.linkedin.com/in/roshan-tiwari-807631428?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github: 'https://github.com/roshanofficial2411-rgb',
    },
  },
  {
    id: 11,
    name: 'Ms. S. Abinaya',
    position: 'Documentation Head',
    photo: '/members/IMG-20260804-WA0074.jpg',
    social: {
      mail: 'mailto:a24083491@gmail.com',
      linkedin: 'https://www.linkedin.com/in/abinaya-s-a13909427?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github: 'https://github.com/your-username',
    },
  },
  {
    id: 12,
    name: 'Ms. Y C. Judy Cheryl Mahima',
    position: 'Marketing Head',
    photo: '/members/IMG-20260804-WA0039.jpg',
    social: {
      mail: 'mailto:jujutsujudy25@gmail.com',
      linkedin: 'https://www.linkedin.com/in/judy-cheryl-mahima-y-c?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github: 'https://github.com/cjmahima-hub',
    },
  },
  {
    id: 13,
    name: 'Mr. S. Vishwa Hemanathan',
    position: 'Web & Media Coordinator',
    photo: '/members/file_0000000057548230b31877efc937aa5c.png',
    social: {
      mail: 'mailto:vishvapro97@gmail.com',
      linkedin: 'https://www.linkedin.com/in/vishwa-hemanathan-s-897226395?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github: 'https://github.com/vishva420',
    },
  },
  {
    id: 14,
    name: 'Mr. G. Sam',
    position: 'Student Activity Coordinator',
    photo: '/members/file_000000007768820885dc0fdf042e3861.png',
    social: {
      mail: 'mailto:samjefferin@gmail.com',
      linkedin: 'https://www.linkedin.com/in/sam-jefferin-018883355?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github: 'https://github.com/samjeffrin1418',
    },
  },
  
];

/* ---------------- Events ---------------- */
export const events = [
  {
    id: 1,
    type: 'Inauguration',
    name: 'TechTron Inauguration',
    date: '2026-08-21T09:00:00+05:30',
    time: '9:00 AM IST',
    venue: 'Main Auditorium, Kings Engineering College',
    description: `The grand inauguration of TechTron, the Information Technology Association of Kings Engineering College. Join us as we officially launch a new era of innovation, collaboration, and technical excellence. The ceremony features the Chief Guest address, Association flag unveiling, faculty introductions, and a preview of the exciting events planned for the academic year.`,
    highlights: [
      'Chief Guest Address',
      'Flag & Logo Unveiling',
      'Board Member Introduction',
      'Annual Event Roadmap Reveal',
      'Refreshments & Networking',
    ],
    registerLink: '#',
  },
];

/* ---------------- Gallery ---------------- */
export const galleryImages = [
  {
    id: 1,
    src: '/gallery/guest-lecture.svg',
    category: 'Campus Events',
    title: 'Event Moment',
  },
  {
    id: 2,
    src: '/gallery/workshop.svg',
    category: 'Workshops',
    title: 'Hands-on Workshop',
  },
  {
    id: 3,
    src: '/gallery/hackathon.svg',
    category: 'Hackathons',
    title: 'Annual Hackathon',
  },
  {
    id: 4,
    src: '/gallery/techfest.svg',
    category: 'Tech Fest',
    title: 'TechTron Tech Fest',
  },
  {
    id: 5,
    src: '/gallery/guest-lecture.svg',
    category: 'Guest Lectures',
    title: 'Industry Guest Lecture',
  },
  {
    id: 6,
    src: '/gallery/coding-night.svg',
    category: 'Coding Events',
    title: 'Midnight Coding Night',
  },
  {
    id: 7,
    src: '/gallery/alumni.svg',
    category: 'Meetups',
    title: 'Alumni Meetup',
  },
];

/* ---------------- Contact ---------------- */
export const contact = {
  department: 'Department of Information Technology',
  college: 'Kings Engineering College',
  email: 'techtron@kingsengineeringcollege.edu.in',
  phone: '+91 98765 43210',
  addressLines: [
    'Department of Information Technology,',
    'Kings Engineering College, Irungattukottai,',
    'Sriperumbudur, Tamil Nadu 602117, India',
  ],
  mapEmbedUrl:
    'https://www.google.com/maps?q=Kings+Engineering+College+Irungattukottai&output=embed',
  social: [
    {
      name: 'Instagram',
      icon: 'instagram',
      url: 'https://www.instagram.com/techtron_squard',
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://linkedin.com/company/techtron-kec',
    },
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/Ajith1303',
    },
    {
      name: 'YouTube',
      icon: 'youtube',
      url: 'https://youtube.com/@techtron-kec',
    },
    {
      name: 'X (Twitter)',
      icon: 'twitter',
      url: 'https://x.com/techtron_kec',
    },
  ],
};

/* ---------------- Footer ---------------- */
export const footer = {
  description:
    'The Information Technology Association of Kings Engineering College. Fostering innovation, collaboration, and technical excellence among students.',
  quickLinks: navLinks,
};