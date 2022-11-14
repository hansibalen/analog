/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import './sass/main.scss';
import Loader from './components/Loader';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import ScrollToTop from '../utils/ScrollToTop';

const App = (): React.ReactElement => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    loading
      ? document.querySelector('body')!.classList.add('loading')
      : document.querySelector('body')!.classList.remove('loading');
  }, [loading]);
  return (
    <LayoutGroup>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Navbar />
            <AnimatePresence mode='wait'>
              <ScrollToTop />
              <Routes location={location} key={location.pathname}>
                {!loading}
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default App;
