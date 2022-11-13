import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const highlight = {
  scale: 0.8,
  transition: { ease: 'easeIn' },
};

const NavbarLinks = (): React.ReactElement => {
  return (
    <>
      <motion.li whileTap={highlight}>
        <NavLink to='/' aria-label='Home'>
          Home
        </NavLink>
      </motion.li>
      <motion.li whileTap={highlight}>
        <NavLink to='/gallery' aria-label='Gallery'>
          Gallery
        </NavLink>
      </motion.li>
      <motion.li whileTap={highlight}>
        <NavLink to='/about' aria-label='About'>
          About
        </NavLink>
      </motion.li>
    </>
  );
};

export default NavbarLinks;
