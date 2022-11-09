import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const exploreAnim = {
  initial: { opacity: 0, y: 300 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: 300, transition: { duration: 0.5 } },
};

const CTA = (): React.ReactElement => {
  return (
    <motion.div
      className='transition-image final'
      variants={exploreAnim}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <motion.img
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
        src={require('@assets/images/image-2.jpg')}
        layoutId='main-image-1'
      />
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
        <Link to={{ pathname: '/gallery' }}>
          <motion.div
            className='cta-btn'
            whileHover={{
              color: '#bf8041',
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
