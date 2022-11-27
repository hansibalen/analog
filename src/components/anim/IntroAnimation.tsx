import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

// Section animation properties
const container = {
  hidden: { opacity: 0, y: 100, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const IntroAnimation = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.section
    className={className}
    variants={container}
    initial='hidden'
    animate='show'
    exit='exit'
  >
    {children}
  </motion.section>
);

// CTA behavior
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
