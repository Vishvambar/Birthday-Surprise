import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import Gallery from './pages/Gallery'
import Letter from './pages/Letter'
import './App.css'
import { AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function App() {
  const location = useLocation()
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [showMusicPopup, setShowMusicPopup] = useState(true)
  const [experienceStarted, setExperienceStarted] = useState(false)
  
  // Background music file
  const musicSrc = '/music/videoplayback.mp3'
  
  const toggleMusic = () => {
    if (!audioRef.current) return
    
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const startExperience = () => {
    setShowMusicPopup(false)
    setExperienceStarted(true)
    if (audioRef.current) {
      audioRef.current.play()
    }
  }
  
  // Show controls after experience starts
  useEffect(() => {
    if (experienceStarted) {
      const timer = setTimeout(() => {
        setShowControls(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [experienceStarted])

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-100 via-blue-100 to-purple-100 relative overflow-x-hidden font-sans">
      {/* Background Music */}
      <audio 
        ref={audioRef} 
        src={musicSrc} 
        loop 
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Music Popup Modal */}
      {showMusicPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-sm w-full mx-4 text-center relative overflow-hidden">
            {/* Animated background hearts */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-pink-200 text-2xl animate-pulse"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + (i % 2) * 20}%`,
                    animationDelay: `${i * 0.3}s`
                  }}
                >
                  💖
                </div>
              ))}
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="text-6xl mb-4 animate-bounce">🎉</div>
              <h2 className="text-2xl font-dancing text-pink-500 mb-2">Happy Birthday, Malkya!</h2>
              <p className="text-lg font-dancing text-purple-500 mb-4">
                A special surprise awaits you...
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Click below to begin your magical birthday journey with music! 🎵
              </p>
              
              <button
                onClick={startExperience}
                className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-dancing px-8 py-4 rounded-full shadow-lg text-xl transition-all duration-300 transform hover:scale-105 w-full"
              >
                🎵 Start the Magic! 🎵
              </button>
              
              <p className="text-xs text-gray-500 mt-3">
                With love from Shembdi 💕
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Music Controls */}
      {showControls && experienceStarted && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleMusic}
            className="bg-pink-400 hover:bg-pink-500 text-white rounded-full p-3 shadow-lg transition-all duration-300 flex items-center justify-center"
            title={isPlaying ? 'Pause Music' : 'Play Music'}
          >
            {isPlaying ? (
              <span className="text-lg">⏸️</span>
            ) : (
              <span className="text-lg">🎵</span>
            )}
          </button>
        </div>
      )}
      
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
      {experienceStarted && (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/letter" element={<Letter />} />
          </Routes>
        </AnimatePresence>
      )}
    </div>
  )
}

export default App
