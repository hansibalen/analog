import { motion } from 'framer-motion'

const Explore = (): React.ReactElement => {
  return (
    <div className="transition-image final">
      <motion.img
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
        src={`/images/image-2.jpg`}
        layoutId="main-image-1"
      />
      <motion.div className="main">
        <h1 className="main-title">A curated memory box.</h1>
        <a href="/" className="explore-button">
          Explore now.
        </a>
      </motion.div>
    </div>
  )
}

export default Explore
