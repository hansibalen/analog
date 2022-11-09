import { TabTitle } from '../../utils/GeneralFunctions';
import { motion } from 'framer-motion';
import React from 'react';

const container = {
  hidden: { opacity: 0, y: 300, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
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
    y: 300,
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
  TabTitle('HB Analogue - About');
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      exit='exit'
      className='about-container'
    >
      <motion.div variants={children}>
        <h1>Hey there!</h1>
      </motion.div>
      <motion.div variants={children} className='about-intro'>
        <p>
          I&apos;m Hansi, an analogue photography enthusiast, going for over 8
          years now.
        </p>
      </motion.div>
      <motion.div variants={children} className='about-intro right'>
        <p>
          Inspired by René Burri, Greg Girard and Sebastião Salgado, legends of
          the craft.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
