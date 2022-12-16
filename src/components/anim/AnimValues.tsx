// Main loader values
export const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

export const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

// Navbar anim values
export const mobile = {
  open: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

export const highlight = {
  scale: 0.8,
  transition: { ease: 'easeIn' },
};

// CTA anim values
export const whileInView = {
  initial: { opacity: 0, y: 20 },
  view: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeInOut', duration: 0.5, delay: 0.3 },
  },
  exit: { opacity: 0 },
};

export const behavior = {
  hover: {
    color: '#d4964b',
    backgroundColor: '#24242a',
    transition: { ease: 'easeInOut', duration: 0.3 },
  },
  tap: { scale: 0.8, transition: { ease: 'easeIn' } },
};

//Gallery anim values
export const imageAnim = {
  initial: { opacity: 0, y: 50 },
  view: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeIn', duration: 0.3, delay: 0.2 },
  },
};

export const loader = {
  loading: {
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
  hide: {
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

// About anim values
export const children = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const contact = {
  hover: {
    color: '#d4964b',
    transition: { ease: 'easeInOut', duration: 0.3 },
  },
  tap: { scale: 0.8, transition: { ease: 'easeIn' } },
};

// 404 page anim values
export const notfoundvariants = {
  hidden: { opacity: 0, transition: { duration: 0.8 } },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
