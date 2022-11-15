import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TabTitle } from '../../utils/GeneralFunctions';

const container = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const NotFound = (): React.ReactElement => {
  TabTitle('analogue | Not Found');

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      exit='exit'
      className='not-found'
    >
      <div className='content'>
        <p>Nothing going on here.</p>
        <img src={require('@assets/images/notfound.jpg')} />
        <Link to='/' aria-label='Go back home'>
          <div className='btn'>Go back.</div>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
