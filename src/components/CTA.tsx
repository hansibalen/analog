import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ctaAnimation = {
  initial: { opacity: 0, y: 300 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: 300, transition: { duration: 0.5 } },
};

const CTA = (): React.ReactElement => {
  return (
    <motion.div
      className='transition-image final'
      variants={ctaAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { ease: 'easeInOut', duration: 0.5 },
        }}
        exit={{ opacity: 0 }}
      >
        <h1 className='cta-title'>A curated memory box.</h1>
        <Link to={{ pathname: '/gallery' }} aria-label='Explore gallery'>
          <motion.div
            className='cta-btn'
            whileHover={{
              color: '#d4964b',
              backgroundColor: '#24242a',
              transition: { ease: 'easeInOut', duration: 0.3 },
            }}
            whileTap={{
              scale: 0.8,
              transition: { ease: 'easeIn' },
            }}
          >
            Explore now.
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CTA;
