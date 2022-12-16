import React from 'react';
import { motion } from 'framer-motion';
import { TabTitle } from '../../../utils/GeneralFunctions';
import ImageBlock from '../image/ImageBlock';
import { container, item, itemMain } from '../anim/AnimValues';

const Loader = ({
  setLoading,
}: {
  setLoading: (value: boolean) => void;
}): React.ReactElement => {
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
              layoutId='main-image-1'
              src={require('@assets/images/loader/image-2.jpg')}
              alt='hero-img-berlin'
            />
          </picture>
        </motion.div>
        <ImageBlock variants={item} id='image-3' />
        <ImageBlock variants={item} id='image-4' />
        <ImageBlock variants={item} id='image-5' />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
