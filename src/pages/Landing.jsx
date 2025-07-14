import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Landing() {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center w-full max-w-xs mx-auto select-none bg-gradient-to-b from-pink-100 via-blue-100 to-purple-100"
    >
      {/* Heartbeat or confetti animation */}
      <div className="mb-8 flex flex-col items-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
          className="text-6xl sm:text-7xl"
        >
          ❤️
        </motion.div>
        {/* Confetti animation (CSS) */}
        <div className="relative w-32 h-8 mt-2">
          {[...Array(12)].map((_, i) => (
            <span key={i} className={`absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-pink-300 opacity-70 animate-confetti${i % 3}`}></span>
          ))}
        </div>
      </div>
      <h1 className="text-3xl sm:text-4xl font-dancing text-pink-500 mb-2 leading-tight">Happy Birthday, Malkya! <span className="inline-block animate-bounce">❤️</span></h1>
      <p className="text-base sm:text-lg text-purple-500 font-dancing mb-6">From your one and only, Shembdi 💌</p>
      <button
        onClick={() => navigate('/gallery')}
        className="bg-pink-400 text-white font-dancing px-8 py-4 rounded-full shadow-lg text-xl sm:text-2xl transition-transform active:scale-95 hover:bg-pink-500 w-full max-w-xs mt-8"
      >
        Start the Journey 💖
      </button>
    </motion.div>
  )
} 