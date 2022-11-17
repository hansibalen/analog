import React, { useState, useEffect } from 'react';
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
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -180 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      className={`${sticky ? 'sticky' : ''}`}
    >
      <div className='header-content'>
        <div className='logo'>
          <a href='/' className='nav-logo' aria-label='homepage logo'>
            hb
          </a>
        </div>
        <ul className='navigation'>
          <NavbarLinks />
        </ul>
        {/* Mobile menu */}
        <div className='hamburger-icon'>
          <Hamburger
            size={25}
            easing='ease-in'
            duration={0.4}
            toggled={isOpen}
            toggle={setOpen}
            aria-label='hamburger menu btn'
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
              <ul onClick={() => setOpen(false)}>
                <NavbarLinks />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
