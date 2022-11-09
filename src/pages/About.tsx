import { TabTitle } from '../../utils/GeneralFunctions';
import { motion } from 'framer-motion';
import React from 'react';

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

const children = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const About = (): React.ReactElement => {
  TabTitle('analogue | About');
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      exit='exit'
      className='about-container'
    >
      <motion.h1 variants={children}>A bit of a backstory.</motion.h1>
      <motion.p variants={children} className='about-intro italic'>
        Inspired by René Burri, Greg Girard and Sebastião Salgado, legends of
        the craft.
      </motion.p>
      <motion.p variants={children}>
        I have been in the game for over 8 years now. From discontinued to
        expired, I have shot over 100 different rolls of film.
      </motion.p>
      <motion.p variants={children}>
        For my 100th roll milestone, I wanted to make something different.
      </motion.p>
      <motion.p variants={children}>
        This website is dedicated to the collective memories made over the
        years.
      </motion.p>
    </motion.div>
  );
};

export default About;
