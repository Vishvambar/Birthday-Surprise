import { useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
// TODO: Import your images from '../assets/photos/'
const photos = [
  { src: '/photos/WhatsApp Image 2025-07-08 at 8.29.05 PM.jpeg', caption: 'A magical moment together 💖' },
  { src: '/photos/WhatsApp Image 2025-07-07 at 11.22.55 PM.jpeg', caption: 'Your smile lights up my world ✨' },
  { src: '/photos/WhatsApp Image 2025-07-07 at 11.09.56 PM.jpeg', caption: 'Silly faces, endless memories 😜' },
  { src: '/photos/WhatsApp Image 2025-07-07 at 11.09.03 PM.jpeg', caption: 'Adventures with you are the best 🌄' },
  { src: '/photos/WhatsApp Image 2025-07-07 at 11.09.02 PM.jpeg', caption: 'Cuddles and cozy times 🥰' },
  { src: '/photos/WhatsApp Image 2025-07-07 at 11.08.53 PM.jpeg', caption: 'Every day is special with you 💫' },
  { src: '/photos/WhatsApp Image 2025-07-07 at 11.08.49 PM.jpeg', caption: 'Laughing together forever 😂' },
  { src: '/photos/WhatsApp Image 2025-07-07 at 11.08.46 PM.jpeg', caption: 'Our journey, our story 📖' },
  { src: '/photos/WhatsApp Image 2025-07-07 at 11.08.30 PM.jpeg', caption: 'Cherished moments, always 💞' },
  { src: '/photos/WhatsApp Image 2025-07-07 at 11.07.52 PM.jpeg', caption: 'You & me, perfect together 💑' },
  { src: '/photos/WhatsApp Image 2025-07-07 at 11.07.49 PM.jpeg', caption: 'Sweetest memories with you 🍬' },
  { src: '/photos/WhatsApp Image 2025-07-07 at 11.07.42 PM.jpeg', caption: 'To many more adventures! 🚀' },
]

export default function Gallery() {
  // Generate a random rotation for each photo, only once
  const rotations = useMemo(() => photos.map(() => (Math.random() - 0.5) * 8), [])
  const navigate = useNavigate()
  const scrollRef = useRef(null)
  const [showNext, setShowNext] = useState(false)

  // Show button when last photo is fully in view
  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const lastCard = el.querySelector('.gallery-photo:last-child')
    if (!lastCard) return
    const rect = lastCard.getBoundingClientRect()
    const parentRect = el.getBoundingClientRect()
    // If last card is at least 80% visible in the scroll area
    if (rect.right - parentRect.left < parentRect.width * 1.05) {
      setShowNext(true)
    } else {
      setShowNext(false)
    }
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.offsetWidth * 0.8; // Scroll by 80% of container width
    const interval = setInterval(() => {
      if (el.scrollLeft + el.offsetWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen w-full select-none bg-gradient-to-b from-pink-100 via-blue-100 to-purple-100 pb-8"
    >
      {/* Dreamy header with confetti/heart animation */}
      <div className="flex flex-col items-center pt-6 pb-2 px-4 relative">
        <div className="mb-2 flex gap-1 animate-pulse">
          <span className="text-2xl text-pink-300">💖</span>
          <span className="text-2xl text-purple-300">🎉</span>
          <span className="text-2xl text-blue-200">✨</span>
        </div>
        <h2 className="text-3xl font-dancing text-pink-500 mb-1 drop-shadow">Our Memories</h2>
        <div className="text-base font-dancing text-purple-400 mb-2">A special journey for Kedar’s birthday</div>
        {/* Birthday badge */}
        <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-full px-5 py-2 shadow text-pink-600 font-dancing text-lg mb-4 -mt-2 border-2 border-white">Happy Birthday, Kedar! 🎂</div>
      </div>
      {/* Polaroid gallery row with extra background and spacing */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto space-x-8 px-2 w-full snap-x snap-mandatory touch-pan-x pb-4 pt-2 relative gallery-scroll"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="absolute inset-y-0 left-0 right-0 bg-white/40 rounded-3xl blur-lg -z-10" style={{ top: '10%', bottom: '10%' }}></div>
        {photos.map((photo, idx) => (
          <motion.div
            key={idx}
            className="gallery-photo flex-shrink-0 w-64 max-w-xs bg-white rounded-xl shadow-xl p-0 flex flex-col items-center snap-center relative transition-transform duration-300 hover:scale-105 active:scale-100"
            style={{ transform: `rotate(${rotations[idx]}deg)` }}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
          >
            <div style={{height:'30vh'}} className="bg-white border-4 border-white rounded-xl shadow-md overflow-hidden w-full  flex items-center justify-center">
              <img src={photo.src} alt={photo.caption} className="object-cover w-full h-full" />
            </div>
            <span className="font-dancing text-pink-400 text-base text-center mt-3 mb-2 px-2">{photo.caption}</span>
            {/* Animated heart sticker */}
            <motion.span
              className="absolute -top-3 -right-3 text-pink-300 text-2xl rotate-12 select-none"
              style={{marginTop:'10px'}}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
            >
              💖
            </motion.span>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {showNext && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="flex flex-col items-center mt-8"
          >
            <div className="font-dancing text-purple-400 text-base mb-2">That was us… from the beginning to forever.</div>
            <button
              onClick={() => navigate('/letter')}
              className="bg-pink-200 hover:bg-pink-300 text-pink-600 font-dancing px-8 py-4 rounded-full shadow-lg text-xl transition-all flex items-center gap-2"
              style={{ boxShadow: '0 4px 24px 0 #f9a8d4aa' }}
            >
              <span>Next Chapter 💌</span> <span className="text-2xl">❤️</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 