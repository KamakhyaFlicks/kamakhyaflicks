"use client"
import { motion } from "framer-motion"

const AnimatedText = ({ text, className, delay = 0, duration = 0.05, type = "words" }) => {
  // Split text into words or characters
  const items = type === "words" ? text.split(" ").map((word) => `${word} `) : text.split("")

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: delay * i,
      },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((item, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {item}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedText
