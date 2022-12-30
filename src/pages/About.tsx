import React from 'react';
import { motion } from 'framer-motion';
import { TabTitle, socials } from '../../utils/GeneralFunctions';
import { IntroAnimation } from '@src/components/anim/IntroAnimation';
import { children, contact } from '@src/components/anim/AnimValues';

const About = (): React.ReactElement => {
  TabTitle('analog | About');

  return (
    <IntroAnimation className='about-container'>
      <div className='about-intro'>
        <div className='about-text'>
          <motion.h1 variants={children}>Some backstory.</motion.h1>
          <motion.p variants={children}>
            This is home to a decade long exploratory journey, translating life
            through the lens of film photography. Cycling through expired to
            discontinued brands, I have reached my 100th film roll. A milestone
            that has been commemorated into a virtual memory box.
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
    </IntroAnimation>
  );
};

export default About;
