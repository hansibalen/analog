import { TabTitle } from '../../utils/GeneralFunctions'
import React, { useEffect } from 'react'
const { motion } = require('framer-motion')

const hero = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
}

const letterAnimation = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

const Home = (): React.ReactElement => {
  TabTitle('HB Analogue - Home')

  useEffect(() => {
    setTimeout(() => 2000)
  }, [])
  return (
    <motion.div className="hero" variants={hero}>
      <HeroTopRow title={'hansi'} />
      <HeroBottomRow title={'brahimasi'} />
    </motion.div>
  )
}

const AnimatedLetters = ({
  title,
  disabled,
}: {
  title: string
  disabled: boolean
}) => (
  <motion.span
    className="row-title"
    variants={disabled ? null : hero}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter: string) => (
      <motion.span
        className="row-letter"
        variants={disabled ? null : letterAnimation}
        key={title}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
)

const HeroTopRow = ({ title }: { title: string }) => {
  return (
    <div className={'hero-row'}>
      <div className="row-col">
        <AnimatedLetters title={title} disabled={false} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4,
        }}
        className="row-col"
      >
        <span className="row-message">
          An analogue journey, spanning over the course of 7 years.
        </span>
      </motion.div>
    </div>
  )
}

const HeroBottomRow = ({ title }: { title: string }) => {
  return (
    <div className={'hero-row center'}>
      <AnimatedLetters title={title} disabled={false} />
    </div>
  )
}

export default Home
