import { TabTitle } from '../../utils/GeneralFunctions';
import { motion } from 'framer-motion';
import React from 'react';

const container = {
  initial: { opacity: 0, y: 300 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 5.4,
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
  exit: { opacity: 0, y: 300, transition: { duration: 0.5 } },
};

const About = (): React.ReactElement => {
  TabTitle('HB Analogue - About');
  return (
    <motion.div
      variants={container}
      initial='initial'
      animate='animate'
      exit='exit'
      className='about-container'
    >
      <h1>Hey there!</h1>
      <motion.div className='about-intro'>
        <p>
          I&apos;m Hansi, an analogue photography enthusiast, going for over 8
          years now.
        </p>
      </motion.div>
      <motion.div className='about-intro right'>
        <p>
          Inspired by René Burri, Greg Girard and Sebastião Salgado, legends of
          the craft.
        </p>
      </motion.div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius
        nesciunt magni. Ipsum asperiores dolore cupiditate quisquam qui eos, non
        necessitatibus, debitis est atque, beatae tempore at doloribus quo
        incidunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
        eius nesciunt magni. Ipsum asperiores dolore cupiditate quisquam qui
        eos, non necessitatibus, debitis est atque, beatae tempore at doloribus
        quo incidunt.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Est eius nesciunt magni. Ipsum asperiores dolore cupiditate quisquam qui
        eos, non necessitatibus, debitis est atque, beatae tempore at doloribus
        quo incidunt.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Est eius nesciunt magni. Ipsum asperiores dolore cupiditate quisquam qui
        eos, non necessitatibus, debitis est atque, beatae tempore at doloribus
        quo incidunt.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Est eius nesciunt magni. Ipsum asperiores dolore cupiditate quisquam qui
        eos, non necessitatibus, debitis est atque, beatae tempore at doloribus
        quo incidunt.
      </p>
    </motion.div>
  );
};

export default About;
