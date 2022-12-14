import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TabTitle } from '../../utils/GeneralFunctions';
import CTA from '../components/CTA';
import {
  hero,
  HeroTopRow,
  HeroBottomRow,
} from '../components/anim/TextAnimation';

const Home = (): React.ReactElement => {
  TabTitle('analog | Home');

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
