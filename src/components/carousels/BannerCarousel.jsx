"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

import banner1 from "../../assets/images/bannerImg2.jpg"
import banner2 from "../../assets/images/bannerImg1.jpg"
import banner3 from "../../assets/images/bannerImg3.jpg"
import banner4 from "../../assets/images/bannerImg4.jpg"

// Banner data with image paths
const bannersList = [
  {
    id: 1,
    title: "Cinematic Excellence",
    description: "Crafting visual stories that captivate and inspire audiences worldwide",
    imageUrl: banner1,
    ctaText: "Our Projects",
  },
  {
    id: 2,
    title: "Award-Winning Production",
    description: "Bringing creative visions to life with cutting-edge technology and expertise",
    imageUrl: banner2,
    ctaText: "Learn More",
  },
  {
    id: 3,
    title: "Storytelling Mastery",
    description: "Where imagination meets technical brilliance to create unforgettable experiences",
    imageUrl: banner3,
    ctaText: "Explore",
  },
  {
    id: 4,
    title: "Visual Innovation",
    description: "Pushing the boundaries of filmmaking with innovative techniques and perspectives",
    imageUrl: banner4,
    ctaText: "Discover",
  },
]

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [banners, setBanners] = useState(bannersList)
  const autoPlayRef = useRef(null)

  useEffect(()=>{
    // Fetch banners from an API or database if needed
    // For now, we are using the static bannersList defined above
    setBanners(bannersList)
  },[])
  // Handle auto slide
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [currentSlide, isAutoPlaying])

  // Pause auto slide on hover
  const pauseAutoPlay = () => setIsAutoPlaying(false)
  const resumeAutoPlay = () => setIsAutoPlaying(true)

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
  }

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
  }

  // Navigate to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  }

  // Track slide direction
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection) => {
    if (newDirection > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
    setPage([page + newDirection, newDirection])
  }

  return (
    <div className="w-full flex justify-center py-4 bg-[#121212] lg:h-[80vh] md:h-[70vh] sm:h-[100vh] h-[60vh] relative">
      <div
        className="w-full relative overflow-hidden shadow-lg"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        {/* Banner Container */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute w-full h-full"
          >
            <div className="relative w-full h-full lg:h-[80vh] md:h-[70vh] sm:h-[100vh] h-[60vh]">
              {/* Image */}
              <img
                src={banners[currentSlide].imageUrl || "/placeholder.svg"}
                alt={banners[currentSlide].title}
                className="absolute w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <motion.div
                  className="text-white p-4 sm:p-6 md:p-8 lg:p-12 max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-1 sm:mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {banners[currentSlide].title}
                  </motion.h2>
                  <motion.p
                    className="text-sm sm:text-base md:text-lg mb-2 sm:mb-4 md:mb-6 opacity-90 line-clamp-2 md:line-clamp-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {banners[currentSlide].description}
                  </motion.p>
                  <motion.button
                    className="bg-yellow-400 text-black px-5 py-2 sm:px-6 sm:py-3 rounded-md font-medium hover:bg-yellow-300 transition-all text-sm sm:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {banners[currentSlide].ctaText}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all z-10"
          aria-label="Previous slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all z-10"
          aria-label="Next slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {banners.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-yellow-400 w-10" : "bg-white/60 w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="absolute top-4 right-4 flex items-center space-x-1 z-10">
          <motion.div
            className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-400" : "bg-red-400"}`}
            animate={{
              scale: isAutoPlaying ? [1, 1.5, 1] : 1,
            }}
            transition={{
              repeat: isAutoPlaying ? Number.POSITIVE_INFINITY : 0,
              duration: 1,
            }}
          />
          <motion.span
            className="text-white text-xs bg-black/50 px-2 py-1 rounded-full"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            {isAutoPlaying ? "Auto" : "Paused"}
          </motion.span>
        </div>
      </div>
    </div>
  )
}
