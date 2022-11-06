import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Explore = (): React.ReactElement => {
  return (
    <div className="transition-image final">
      <motion.img
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
        src={`/images/image-2.jpg`}
        layoutId="main-image-1"
      />
      <div className="explore">
        <h1 className="subtitle">A curated memory box.</h1>
        <Link to={{ pathname: '/gallery' }}>
          <motion.a
            href="/gallery"
            className="explore-btn"
            whileHover={{
              color: '#bf8041',
              backgroundColor: '#24242a',
              transition: { ease: 'easeInOut', duration: 0.3 },
            }}
            whileTap={{
              scale: 0.8,
              transition: { ease: 'easeIn' },
            }}
          >
            Explore now.
          </motion.a>
        </Link>
      </div>
    </div>
  )
}

export default Explore
