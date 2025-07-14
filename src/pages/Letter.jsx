
import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import React from 'react'

export default function Letter() {
  const letterRef = useRef(null)
  const [showNext, setShowNext] = useState(false)
  const [checked, setChecked] = useState(false)

  // Show button when user scrolls to bottom, or immediately if not scrollable
  const checkShowButton = () => {
    const el = letterRef.current
    if (!el) return
    if (el.scrollHeight <= el.clientHeight) {
      setShowNext(true)
    } else if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
      setShowNext(true)
    } else {
      setShowNext(false)
    }
  }

  // Check on mount and when content/layout changes
  React.useEffect(() => {
    checkShowButton()
    setChecked(true)
    window.addEventListener('resize', checkShowButton)
    return () => window.removeEventListener('resize', checkShowButton)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 via-blue-100 to-purple-100 py-8 px-2 w-full max-w-xs mx-auto select-none"
    >
      <div
        ref={letterRef}
        onScroll={checkShowButton}
        className="bg-white/80 rounded-3xl shadow-xl p-4 sm:p-6 w-full max-w-xs font-dancing relative overflow-y-auto"
        style={{ minHeight: '60vh', backgroundImage: 'url(https://www.transparenttextures.com/patterns/paper-fibers.png)' }}
      >
        <h2 className="text-xl sm:text-2xl text-pink-500 mb-4">My Dearest Malkya,</h2>
        <p className="text-base sm:text-lg text-purple-600 mb-6" style={{ whiteSpace: 'pre-line' }}>
          {`Happy birthday to the most wonderful person in my life! 💖

          From our first date to every silly moment, you make my world brighter and my heart fuller. I am so grateful for your love, your laughter, and your endless support. I hope this year brings you as much happiness as you have given me.

          Here's to more adventures, more memories, and a lifetime together. I love you more than words can say!`}
        </p>
        <div className="text-right text-pink-400 text-base sm:text-lg mt-8">With love, Shembdi ❤️</div>
      </div>
      <AnimatePresence>
        {checked && showNext && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="flex flex-col items-center mt-8 w-full"
          >
            <div className="font-dancing text-pink-400 text-lg mb-2">With all my love, Shembdi 💕</div>
            <div className="text-center mt-4 font-dancing text-pink-500 text-xl">
              🎉 Happy Birthday, Malkya! 🎉
              <br />
              <span className="text-lg text-purple-500">Hope you enjoy the music! 🎵</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 