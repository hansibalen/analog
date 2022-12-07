import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TabTitle } from '../../utils/GeneralFunctions';
import GalleryLoader from '@src/components/loader/GalleryLoader';
import Zoom from 'react-medium-image-zoom';
import { IntroAnimation } from '@src/components/anim/IntroAnimation';

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
      <IntroAnimation>
        <div className='portfolio desktop'>
          {imgArray.map((id) => (
            <Zoom key={id} zoomMargin={40}>
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
            </Zoom>
          ))}
        </div>
        <div className='portfolio mobile'>
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
      </IntroAnimation>
    </>
  );
};

export default Gallery;
