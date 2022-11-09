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
  TabTitle('HB Analogue - About');
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      exit='exit'
      className='about-container'
    >
      <motion.h1 variants={children}>Hey there.</motion.h1>
      <motion.p variants={children} className='about-intro'>
        I&apos;m Hansi, an analogue photography enthusiast, and have been so for
        the last 8 years now.
      </motion.p>
      <motion.p variants={children} className='about-intro italic'>
        Inspired by René Burri, Greg Girard and Sebastião Salgado, legends of
        the craft.
      </motion.p>
      <motion.p variants={children}>
        From discontinued to expired, I have shot over 100 different rolls of
        film. This site is a celebration of the collective memories from the
        first 100th.
      </motion.p>
      <motion.div variants={children}>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { ease: 'easeInOut', duration: 0.5 },
          }}
        >
          Dedicated to you. The people.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
