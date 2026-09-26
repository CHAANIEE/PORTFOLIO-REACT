import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const greetings = ['Hello', 'Kumusta', 'Bonjour', 'こんにちは', 'Hallo', 'Ciao']

export default function Preloader({ onDone }) {
  const [index, setIndex] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (index >= greetings.length - 1) {
      const exitTimer = setTimeout(() => setExiting(true), 320)
      const doneTimer = setTimeout(() => onDone?.(), 320 + 600)
      return () => {
        clearTimeout(exitTimer)
        clearTimeout(doneTimer)
      }
    }
    const timer = setTimeout(() => setIndex((i) => i + 1), 220)
    return () => clearTimeout(timer)
  }, [index, onDone])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            className="preloader__curtain"
            initial={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          />
          <AnimatePresence mode="wait">
            <motion.span
              key={greetings[index]}
              className="preloader__word"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              {greetings[index]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}