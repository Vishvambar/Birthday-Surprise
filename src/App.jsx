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

  // Handle page visibility change to pause music when app goes to background
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && isPlaying) {
        audioRef.current?.pause()
      } else if (document.visibilityState === 'visible' && experienceStarted) {
        // Only resume if music was playing before
        if (audioRef.current && !isPlaying) {
          audioRef.current.play()
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [isPlaying, experienceStarted])

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
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full mx-4 text-center relative">
            {/* Simple heart decoration */}
            <div className="text-5xl mb-4">💕</div>
            
            <h2 className="text-2xl font-dancing text-pink-500 mb-3">Happy Birthday, Malkya!</h2>
            <p className="text-lg font-dancing text-purple-400 mb-6 leading-relaxed">
              I made something special for you...<br/>
              <span className="text-pink-400">Let's celebrate together! 🎵</span>
            </p>
            
            <button
              onClick={startExperience}
              className="bg-pink-400 hover:bg-pink-500 text-white font-dancing px-6 py-3 rounded-full shadow-lg text-lg transition-all duration-300 transform hover:scale-105 mb-4"
            >
              Start the Magic! ✨
            </button>
            
            <p className="text-sm font-dancing text-gray-500">
              With all my love, Shembdi 💖
            </p>
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
