import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { highlight } from '../anim/AnimValues';

const NavbarLinks = (): React.ReactElement => {
  const navArray = [
    { path: '/', title: 'Home' },
    { path: '/gallery', title: 'Gallery' },
    { path: '/about', title: 'About' },
  ];

  return (
    <>
      {navArray.map((link) => (
        <motion.li whileTap={highlight} key={link.title}>
          <NavLink to={link.path} aria-label={link.title}>
            {link.title}
          </NavLink>
        </motion.li>
      ))}
    </>
  );
};

export default NavbarLinks;
