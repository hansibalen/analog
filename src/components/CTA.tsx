import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IntroAnimation } from './anim/IntroAnimation';
import { whileInView, behavior } from './anim/AnimValues';

const CTA = (): React.ReactElement => {
  return (
    <IntroAnimation className='transition-image final'>
      <picture>
        <source
          media='(max-width: 481px)'
          srcSet={require('@assets/images/loader/image-2-m.webp')}
        />
        <source
          media='(min-width: 768px)'
          srcSet={require('@assets/images/loader/image-2.jpg')}
        />
        <motion.img
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
          src={require('@assets/images/loader/image-2.jpg')}
          layoutId='main-image-1'
          alt='transition hero image'
        />
      </picture>

      <motion.div
        className='cta'
        variants={whileInView}
        initial='initial'
        whileInView='view'
        exit='exit'
      >
        <h1 className='cta-title'>A curated memory box.</h1>
        <Link to={{ pathname: '/gallery' }} aria-label='Explore gallery'>
          <motion.div
            className='cta-btn'
            whileHover='hover'
            variants={behavior}
            whileTap='tap'
          >
            Explore now.
          </motion.div>
        </Link>
      </motion.div>
    </IntroAnimation>
  );
};

export default CTA;
