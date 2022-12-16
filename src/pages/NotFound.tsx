import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TabTitle } from '../../utils/GeneralFunctions';
import { notfoundvariants } from '@src/components/anim/AnimValues';

const NotFound = (): React.ReactElement => {
  TabTitle('analog | Not Found');

  return (
    <motion.div
      variants={notfoundvariants}
      initial='hidden'
      animate='show'
      exit='exit'
      className='not-found'
    >
      <div className='content'>
        <p>404</p>
        <img src={require('@assets/images/notfound.jpg')} />
        <Link to='/' aria-label='Go back home'>
          <div className='btn'>Go back.</div>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
