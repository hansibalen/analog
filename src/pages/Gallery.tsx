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
      <div className='portfolio'>
        <img src={require('@assets/gallery/image-1.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-2.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-3.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-4.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-5.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-6.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-7.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-8.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-9.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-11.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-12.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-13.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-14.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-15.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-16.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-17.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-18.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-19.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-20.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-21.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-22.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-23.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-24.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-25.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-26.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-27.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-28.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-29.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-30.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-31.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-32.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-33.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-34.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-35.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-36.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-37.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-38.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-39.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-40.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-41.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-42.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-43.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-44.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-45.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-46.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-47.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-48.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-49.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-50.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-51.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-52.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-53.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-54.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-55.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-56.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-57.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-58.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-59.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-60.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-61.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-62.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-63.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-64.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-65.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-66.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-67.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-68.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-69.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-70.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-71.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-72.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-73.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-74.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-75.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-76.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-77.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-78.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-79.jpg')} loading='lazy' />
        <img src={require('@assets/gallery/image-80.jpg')} loading='lazy' />
      </div>
    </motion.div>
  );
};

export default Gallery;
