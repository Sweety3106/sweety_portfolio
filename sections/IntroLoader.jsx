"use client"

import { motion } from "framer-motion"

export default function IntroLoader({ onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 bg-black flex items-center justify-center z-[999]"
    >
      <motion.h1
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-purple-500"
      >
        Sweety
      </motion.h1>
    </motion.div>
  )
}
