import { TabTitle } from '../../utils/GeneralFunctions';
import { motion } from 'framer-motion';
import React from 'react';

const About = (): React.ReactElement => {
  TabTitle('HB Analogue - About');
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className='about-title'>About Me</h1>
    </motion.div>
  );
};

export default About;
