import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TabTitle } from '../../utils/GeneralFunctions';
import GalleryLoader from '@src/components/GalleryLoader';

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

const loader = {
  loading: {
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
  hide: {
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

const Gallery = (): React.ReactElement => {
  TabTitle('analog | Gallery');
  const imgArray = [...Array(90).keys()];

  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= imgArray.length) {
      setLoading(false);
    }
  };
  return (
    <>
      {/* Loader */}
      <motion.div
        className='gallery-loader'
        style={{ display: loading ? 'block' : 'none' }}
        variants={loader}
        initial='hide'
        animate='loading'
        exit='hide'
      >
        <GalleryLoader />
      </motion.div>
      {/* Container */}
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        <div className='portfolio'>
          {imgArray.map((id) => (
            <motion.img
              key={id}
              src={require(`@assets/images/gallery/image-${id}.jpg`)}
              alt={`image ${id}`}
              variants={imageAnim}
              initial='initial'
              whileInView='view'
              onLoad={imageLoaded}
              style={{ display: loading ? 'none' : 'block' }}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Gallery;
