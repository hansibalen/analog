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

const imageAnim = {
  initial: { opacity: 0, y: 50 },
  view: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeIn', duration: 0.3, delay: 0.2 },
  },
};

const Gallery = (): React.ReactElement => {
  TabTitle('analog | Gallery');
  const array = [...Array(90).keys()];

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <div className='portfolio'>
        {array.map((id) => (
          <motion.img
            key={id}
            src={require(`@assets/images/gallery/image-${id}.jpg`)}
            alt={`image ${id}`}
            variants={imageAnim}
            initial='initial'
            whileInView='view'
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
