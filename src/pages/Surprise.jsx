import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Surprise() {
  const [revealed, setRevealed] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 via-blue-100 to-purple-100 py-8 px-2 relative w-full max-w-xs mx-auto select-none"
    >
      {/* Confetti explosion animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {revealed && (
          <>
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 0, opacity: 1, scale: 1 }}
                animate={{
                  y: [0, 200 + Math.random() * 200],
                  x: [0, (Math.random() - 0.5) * 300],
                  opacity: [1, 0.7, 0],
                  scale: [1, 1.2, 0.8],
                }}
                transition={{ duration: 1.5 + Math.random(), delay: 0.1 * i }}
                className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full"
                style={{ background: `hsl(${Math.random() * 360},80%,85%)` }}
              />
            ))}
            {/* Sakura petals and sparkles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: [0, 400], opacity: [0.7, 0] }}
                transition={{ duration: 3 + Math.random(), delay: 1 + i * 0.3, repeat: Infinity }}
                className="absolute left-1/2 text-2xl"
                style={{ left: `${10 + i * 10}%` }}
              >
                {i % 2 === 0 ? '🌸' : '✨'}
              </motion.div>
            ))}
          </>
        )}
      </div>
      {!revealed ? (
        <button onClick={() => setRevealed(true)} className="bg-purple-400 text-white font-dancing px-8 py-4 rounded-full shadow-lg text-xl sm:text-2xl transition-transform active:scale-95 hover:bg-purple-500 w-full">
          Tap to Reveal 🎉
        </button>
      ) : (
        <div className="text-center animate-fade-in-up w-full max-w-xs mx-auto mt-6">
          <h2 className="text-2xl font-dancing text-pink-500 mb-4">Turn around, your real gift is waiting 🎁</h2>
          <p className="text-lg text-purple-400 font-dancing">Happy Birthday, Kedar! With all my love, Sakshi ❤️</p>
        </div>
      )}
    </motion.div>
  )
} 