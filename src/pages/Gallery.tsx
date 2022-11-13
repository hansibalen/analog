import { TabTitle, galleryArray } from '../../utils/GeneralFunctions';
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

const Gallery = (): React.ReactElement => {
  TabTitle('analogue | Gallery');
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <div className='portfolio'>
        {galleryArray.map((img) => (
          <motion.img
            key={img.id}
            src={require(`@assets/images/gallery/image-${img.id}.jpg`)}
            loading='lazy'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { ease: 'easeIn', duration: 0.3, delay: 0.2 },
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
