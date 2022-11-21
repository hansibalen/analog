/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { motion } from 'framer-motion';
import { TabTitle } from '../../utils/GeneralFunctions';

const SecondaryLoader = ({
  setLoading,
}: {
  setLoading: any;
}): React.ReactElement => {
  TabTitle('Patience is a virtue.');

  return (
    <motion.div
      onAnimationComplete={() => setLoading(false)}
      animate='show'
    ></motion.div>
  );
};

export default SecondaryLoader;
