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

const contact = {
  hover: {
    color: '#d4964b',
    transition: { ease: 'easeInOut', duration: 0.3 },
  },
  tap: { scale: 0.8, transition: { ease: 'easeIn' } },
};

const About = (): React.ReactElement => {
  TabTitle('analogue | About');

  const socials = [
    { path: 'https://twitter.com/hnsblnbrg', title: 'Twitter' },
    { path: 'https://instagram.com/hansi.brahimasi', title: 'Instagram' },
    { path: 'https://www.youtube.com/@hansibal', title: 'YouTube' },
    { path: 'https://letterboxd.com/hansibrahimasi/', title: 'Letterboxd' },
    { path: 'https://open.spotify.com/user/hansibal94', title: 'Spotify' },
  ];
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      exit='exit'
      className='about-container'
    >
      <div className='about-intro'>
        <motion.h1 variants={children}>Some backstory.</motion.h1>
        <motion.p variants={children}>
          I have been in the game for over 8 years now. From discontinued to
          expired, I have shot over 100 different rolls of film. For my 100th
          roll milestone, I wanted to make something different. This website is
          dedicated to the collective memories made over the years.
        </motion.p>
        <motion.p variants={children} className='italic'>
          Inspired by René Burri, Greg Girard and Sebastião Salgado, legends of
          the craft.
        </motion.p>
        <motion.h1 variants={children} className='social-title'>
          What I&apos;m up to?
        </motion.h1>
        <motion.div variants={children} className='social-icon'>
          {socials.map((link) => (
            <motion.a
              variants={contact}
              whileHover='hover'
              whileTap='tap'
              href={link.path}
              key={link.title}
              aria-label={link.title}
              target='_blank'
              rel='noopener noreferrer'
            >
              {link.title}↗
            </motion.a>
          ))}
        </motion.div>
      </div>
      <motion.img
        variants={children}
        src={require('@assets/images/loader/image-1.jpg')}
        alt='about-img-burial-ubahn'
      />
    </motion.div>
  );
};

export default About;
