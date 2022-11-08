import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';

const highlight = {
  scale: 0.8,
  transition: { ease: 'easeIn' },
};

const Navbar = (): React.ReactElement => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
      className='header'
    >
      <div className='header-content'>
        <div className='logo'>
          <a href='/' className='nav-logo'>
            hb
          </a>
        </div>
        <nav>
          <motion.li whileTap={highlight}>
            <NavLink to='/'>Home</NavLink>
          </motion.li>
          <motion.li whileTap={highlight}>
            <NavLink to='/gallery'>Gallery</NavLink>
          </motion.li>
          <motion.li whileTap={highlight}>
            <NavLink to='/about'>About</NavLink>
          </motion.li>
        </nav>
        <div className='contact'>
          <a
            href='https://twitter.com/hnsblnbrg'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={require('@assets/svg/twitter.svg')} />
          </a>
          <a
            href='https://twitter.com/hnsblnbrg'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={require('@assets/svg/instagram.svg')} />
          </a>
        </div>
        <div className='hamburger-icon'>
          <Hamburger size={25} easing='ease-in' duration={0.4} />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
