import { TabTitle } from '../../utils/GeneralFunctions'
import { motion } from 'framer-motion'

const Gallery = (): React.ReactElement => {
  TabTitle('HB Analogue - Gallery')
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="gallery-title">Gallery</h1>
    </motion.div>
  )
}

export default Gallery
