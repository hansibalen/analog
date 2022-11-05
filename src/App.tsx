/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import './sass/main.scss'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Gallery from '../src/pages/Gallery'

const App = (): React.ReactElement => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading
      ? document.querySelector('body')!.classList.add('loading')
      : document.querySelector('body')!.classList.remove('loading')
  }, [loading])
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Router>
              <Navbar />
              <Routes>
                {!loading}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </Router>
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default App
