import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import NavbarLinks from './NavbarLinks';

const mobile = {
  open: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
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
            TBA
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
        <AnimatePresence mode='wait'>
          {isOpen && (
            <motion.div
              key={'box'}
              variants={mobile}
              initial={'closed'}
              animate={'open'}
              exit={'closed'}
              className={'mobile-' + (isOpen ? 'show' : 'hide')}
            >
              <motion.div
                className='mobile-items'
                onClick={() => setOpen(false)}
              >
                <NavbarLinks />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;
