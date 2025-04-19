"use client"
import { motion } from "framer-motion"

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = null,
  className = "",
  distance = 50,
  threshold = 0.1,
}) => {
  const initial = { opacity: 0 }

  // Add direction-based initial position
  if (direction === "up") initial.y = distance
  if (direction === "down") initial.y = -distance
  if (direction === "left") initial.x = distance
  if (direction === "right") initial.x = -distance

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: threshold }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
