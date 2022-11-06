import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const exploreAnim = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: 300, transition: { duration: 0.5 } },
}

const Explore = (): React.ReactElement => {
  return (
    <motion.div
      className="transition-image final"
      variants={exploreAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
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
    </motion.div>
  )
}

export default Explore
