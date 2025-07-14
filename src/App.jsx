import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import Gallery from './pages/Gallery'
import Letter from './pages/Letter'
import Music from './pages/Music'
import './App.css'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-100 via-blue-100 to-purple-100 relative overflow-x-hidden font-sans">
      {/* Magical floating hearts animation (Framer Motion, original) */}
      {/**
      <div className="fixed inset-0 pointer-events-none z-50">
        {[...Array(16)].map((_, i) => {
          // Randomize properties for each heart
          const size = 20 + Math.random() * 24 // px
          const duration = 5 + Math.random() * 4 // seconds
          const delay = Math.random() * 6
          const left = 5 + Math.random() * 90 // %
          const color = [
            'text-pink-300',
            'text-pink-400',
            'text-purple-300',
            'text-purple-400',
            'text-blue-200',
            'text-red-200',
          ][Math.floor(Math.random() * 6)]
          const opacity = 0.5 + Math.random() * 0.5
          // Wavy path using x oscillation
          return (
            <motion.div
              key={i + '-' + duration + '-' + left}
              initial={{ y: '100%', opacity: 0, x: 0 }}
              animate={{
                y: ['100%', '-10%'],
                opacity: [opacity, 0.7, 0],
                x: [0, 20 * (Math.random() - 0.5), -20 * (Math.random() - 0.5), 0],
              }}
              transition={{ duration, repeat: Infinity, delay, ease: 'easeInOut' }}
              className={`absolute ${color}`}
              style={{ left: `${left}%`, fontSize: `${size}px` }}
            >
              ❤️
            </motion.div>
          )
        })}
      </div>
      */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
