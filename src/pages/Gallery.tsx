import { TabTitle } from '../../utils/GeneralFunctions';
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
      <h1 className='gallery-title'>Gallery</h1>
    </motion.div>
  );
};

export default Gallery;
