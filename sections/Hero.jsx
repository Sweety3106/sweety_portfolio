"use client"
import { Typewriter } from "react-simple-typewriter"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section 
    id="home"
    className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-purple-900 text-white">

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold"
      >
        Sweety
      </motion.h1>

     <motion.p
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.5 }}
     className="mt-6 text-xl text-gray-300"
     >
  <Typewriter
    words={[
      "Full Stack Developer",
      "Frontend Engineer",
      "Backend Learner",
      "Problem Solver"
    ]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1200}
  />
</motion.p>


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-8 flex gap-4"
      >
<button
  onClick={() => {
    const section = document.getElementById("projects")
    section?.scrollIntoView({ behavior: "smooth" })
  }}
  className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
>
  View Projects
</button>

        <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
          Download Resume
        </button>

      </motion.div>

    </section>
  )
}
