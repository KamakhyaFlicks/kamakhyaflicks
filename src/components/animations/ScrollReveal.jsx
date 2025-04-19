"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

const ScrollReveal = ({
  children,
  threshold = 0.1,
  delay = 0,
  duration = 0.5,
  className = "",
  variant = "fade", // fade, slide, scale, rotate
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  const controls = useAnimation()

  // Define animation variants
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slide: {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -5 },
      visible: { opacity: 1, rotate: 0 },
    },
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[variant]}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
