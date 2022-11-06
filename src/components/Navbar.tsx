import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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
      className="header"
    >
      <div className="header-inner">
        <div className="logo">
          <a href="/" className="nav-logo">
            hb
          </a>
        </div>
        <nav className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </nav>
        <div className="contact">
          <a href="/contact">(Icon Placeholders)</a>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
