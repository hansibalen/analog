import { TabTitle, galleryArray } from '../../utils/GeneralFunctions';
import { motion } from 'framer-motion';
import React from 'react';

const Gallery = (): React.ReactElement => {
  TabTitle('analogue | Gallery');
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='portfolio'>
        {galleryArray.map((img) => (
          <motion.img
            key={img.id}
            src={require(`@assets/gallery/image-${img.id}.jpg`)}
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
