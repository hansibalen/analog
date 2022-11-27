/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LayoutGroup, AnimatePresence } from 'framer-motion';
import './sass/main.scss';
import Loader from './components/loader/Loader';
import SecondaryLoader from './components/loader/SecondaryLoader';
import ScrollToTop from '../utils/ScrollToTop';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

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
        {loading && location.pathname == '/' ? (
          <Loader key={'loader'} setLoading={setLoading} />
        ) : (
          <>
            {loading && location.pathname !== '/' ? (
              <SecondaryLoader setLoading={setLoading} />
            ) : (
              <>
                <Navbar />
                <AnimatePresence mode='wait'>
                  <ScrollToTop />
                  <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='*' element={<NotFound />} />
                  </Routes>
                </AnimatePresence>
              </>
            )}
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default App;
