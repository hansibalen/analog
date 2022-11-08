import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import NavbarLinks from './NavbarLinks';

const Navbar = (): React.ReactElement => {
  const [isOpen, setOpen] = useState(false);

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
          <NavbarLinks />
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
          <Hamburger
            size={25}
            easing='ease-in'
            duration={0.4}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        <div className={'mobile-' + (isOpen ? 'show' : 'hide')}>
          <div className='mobile-items'>
            <NavbarLinks />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
