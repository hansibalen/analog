import { motion } from 'framer-motion'

export const TabTitle = (newTitle: string) => {
  return (document.title = newTitle)
}

// Text animation
export const hero = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0, y: 300, transition: { duration: 0.5 } },
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

export const AnimatedLetters = ({
  title,
  disabled,
}: {
  title: string
  disabled?: boolean
}) => (
  <motion.span
    className="row-title"
    variants={disabled ? undefined : hero}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter: string, id: number) => (
      <motion.span
        className="row-letter"
        variants={disabled ? undefined : letterAnimation}
        key={id}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
)

export const HeroTopRow = ({ title }: { title: string }) => {
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
          What is a man, but the sum of his memories?
        </span>
      </motion.div>
    </div>
  )
}

export const HeroBottomRow = ({ title }: { title: string }) => {
  return (
    <div className={'hero-row center'}>
      <AnimatedLetters title={title} disabled={false} />
    </div>
  )
}
