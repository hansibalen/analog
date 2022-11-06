import {
  TabTitle,
  hero,
  HeroTopRow,
  HeroBottomRow,
} from '../../utils/GeneralFunctions'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Explore from './Explore'

const Home = (): React.ReactElement => {
  TabTitle('HB Analogue - Home')

  useEffect(() => {
    setTimeout(() => 2000)
  }, [])
  return (
    <motion.div className="hero" variants={hero} exit="exit">
      <HeroTopRow title={'hansi'} />
      <HeroBottomRow title={'brahimasi'} />
      <Explore />
    </motion.div>
  )
}

export default Home
