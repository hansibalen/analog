import React from 'react';
import { motion } from 'framer-motion';
import { TabTitle } from '../../utils/GeneralFunctions';

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
      <motion.img
        variants={children}
        src={require('@assets/images/meta.jpg')}
        alt='about-img-burial-ubahn'
      />
      <div className='about-intro'>
        <div className='about-text'>
          <motion.h1 variants={children}>Some backstory.</motion.h1>
          <motion.p variants={children}>
            I have been a film photography enthusiast for the better part of 8
            years now. Throughout this time frame, I have had the opportunity to
            shoot a variety of rolls, from expired to discontinued brands.
            Recently I shot my 100th film roll. So, to celebrate the milestone,
            I built this website.
          </motion.p>
          <motion.p variants={children} className='italic'>
            Inspired by René Burri, Greg Girard & Sebastião Salgado, legends of
            the craft.
          </motion.p>
        </div>
        <div className='about-text'>
          <motion.h1 variants={children}>What I&apos;m up to?</motion.h1>
          <motion.ul variants={children}>
            {socials.map((link) => (
              <li key={link.title}>
                <motion.a
                  variants={contact}
                  whileHover='hover'
                  whileTap='tap'
                  href={link.path}
                  aria-label={link.title}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {link.title}
                </motion.a>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
