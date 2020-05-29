module.exports = {
  siteTitle: 'Charlou Aredidon | Mobile Programmer',
  siteDescription:
    'Charlou Aredidon is a computer programmerfrom Philippines who specializes in building (and occasionally designing) flutter mobile apps and flutter libraries.',
  siteKeywords:
    'Charlou Aredidon, Charlou, Aredidon, xamantra, software engineer, front-end engineer, web developer, javascript, northeastern',
  siteUrl: 'https://xamantra.github.io',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Charlou Aredidon',
  location: 'Davao City, PH',
  email: 'xamantra.dev@gmail.com',
  github: 'https://github.com/xamantra',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/xamantra',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
