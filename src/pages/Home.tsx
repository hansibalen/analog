import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TabTitle } from '../../utils/GeneralFunctions';
import { hero, HeroTopRow, HeroBottomRow } from '../components/TextAnimation';
import CTA from '../components/CTA';

const Home = (): React.ReactElement => {
  TabTitle('analogue | Home');

  useEffect(() => {
    setTimeout(() => 2000);
  }, []);
  return (
    <motion.div className='hero' variants={hero} exit='exit'>
      <HeroTopRow title={'hansi'} />
      <HeroBottomRow title={'brahimasi'} />
      <CTA />
    </motion.div>
  );
};

export default Home;
