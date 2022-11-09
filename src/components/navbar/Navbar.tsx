import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import NavbarLinks from './NavbarLinks';

const mobile = {
  initial: { opacity: 0, y: -300 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  exit: { opacity: 0, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const Navbar = (): React.ReactElement => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 1, delay: 0.6 }}
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
          <a href='/cheeky' target='_blank' rel='noopener noreferrer'>
            [wsg] - tba
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
        <motion.div
          variants={mobile}
          animate={isOpen ? 'animate' : 'exit'}
          className={'mobile-' + (isOpen ? 'show' : 'hide')}
        >
          <motion.div
            variants={mobile}
            initial='initial'
            animate='animate'
            className='mobile-items'
            onClick={() => setOpen(false)}
          >
            <NavbarLinks />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
