import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import { ThemeProvider, createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'

//Initial theme settings
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1B1C1E',
    },
  },
  typography: {
    fontFamily: 'HelveticaNeue',
    allVariants: {
      color: '#FFFFFF',
    },
  },
})

const Theme = (props: { children: React.ReactNode }): React.ReactElement => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

const App = (): React.ReactElement => {
  return (
    <>
      <Router>
        <Theme>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </Theme>
      </Router>
    </>
  )
}

export default App
