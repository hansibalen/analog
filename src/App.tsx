import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AnimatedRoutes from '../utils/AnimatedRoutes'

import './sass/main.scss'

const App = (): React.ReactElement => {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  )
}

export default App
