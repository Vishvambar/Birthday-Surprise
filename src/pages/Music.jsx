import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
// TODO: Replace with your own music file in '../assets/music/'
const musicSrc = '/music/WhatsApp Video 2025-07-08 at 10.38.47 PM.mp3'

export default function Music() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  const onTimeUpdate = () => {
    if (!audioRef.current) return
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 via-blue-100 to-purple-100 py-8 px-2 relative w-full max-w-xs mx-auto select-none"
    >
      {/* Floating musical notes animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: ['100%', '-10%'], opacity: [0.7, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.7 }}
            className="absolute left-1/2 text-2xl text-pink-300"
            style={{ left: `${10 + i * 10}%` }}
          >
            {i % 2 === 0 ? '🎵' : '🎶'}
          </motion.div>
        ))}
      </div>
      <h2 className="text-2xl font-dancing text-purple-500 mb-4 z-10">A Song for You</h2>
      <div className="bg-white/80 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center z-10 w-full max-w-xs">
        <audio ref={audioRef} src={musicSrc} onTimeUpdate={onTimeUpdate} onEnded={() => setPlaying(false)} />
        <button onClick={togglePlay} className="mb-4 bg-pink-400 text-white rounded-full px-8 py-4 font-dancing text-xl sm:text-2xl shadow transition-transform active:scale-95 hover:bg-pink-500 w-full">
          {playing ? 'Pause ⏸️' : 'Play ▶️'}
        </button>
        <div className="w-full h-2 bg-pink-100 rounded-full overflow-hidden mb-2">
          <div className="h-full bg-pink-400 transition-all" style={{ width: `${progress}%` }} />
        </div>
        <span className="text-pink-400 font-dancing text-base">Happy Birthday, Malkya! 🎶</span>
      </div>
      <div className="text-center mt-8 font-dancing text-pink-500 text-xl">
        🎉 Happy Birthday, Malkya! 🎉
        <br />
        <span className="text-lg text-purple-500">With love from Shembdi 💕</span>
      </div>
    </motion.div>
  )
} 