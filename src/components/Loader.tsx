/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { motion } from 'framer-motion';
import { TabTitle } from '../../utils/GeneralFunctions';
import ImageBlock from './ImageBlock';

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }: { setLoading: any }): React.ReactElement => {
  TabTitle('Patience is a virtue.');

  return (
    <motion.div className='loader'>
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial='hidden'
        animate='show'
        exit='exit'
        className='loader-content'
      >
        <ImageBlock variants={item} id='image-1' />
        <motion.div variants={itemMain} className='transition-image'>
          <motion.img
            layoutId='main-image-1'
            src={require('@assets/images/image-2.jpg')}
          />
        </motion.div>
        <ImageBlock variants={item} id='image-3' />
        <ImageBlock variants={item} id='image-4' />
        <ImageBlock variants={item} id='image-5' />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
