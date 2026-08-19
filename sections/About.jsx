"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Tilt from "react-parallax-tilt"
import { portfolioData } from "../data/portfolio"

function Counter({ to }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1200
    const increment = to / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [to])

  return <span>{count}</span>
}

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen bg-background text-foreground px-6 py-24 flex items-center justify-center overflow-hidden transition-colors duration-300"
    >

      {/* Floating Icons */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-10 text-purple-500 opacity-20 text-6xl"
      >
        {"</>"}
      </motion.div>

      <motion.div
        style={{ y }}
        className="absolute bottom-20 right-10 text-pink-500 opacity-20 text-6xl"
      >
        {"{}"}
      </motion.div>

      <div className="relative z-10 max-w-6xl grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-[60px] bg-gradient-to-r from-indigo-500 to-purple-600 opacity-60"></div>
              <img
                src={portfolioData.about.image}
                alt={portfolioData.name}
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-glass-border shadow-[0_0_40px_rgba(168,85,247,0.4)]"
                onError={(e) => { e.target.style.display='none' }}
              />
            </div>
          </Tilt>
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Me</span>
          </h2>

          <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
            {portfolioData.about.description1}
          </p>

          <p className="text-slate-500 dark:text-gray-400 leading-relaxed mb-10">
            {portfolioData.about.description2}
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-6 text-center hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition duration-300">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-500">
                <Counter to={portfolioData.about.stats[0].value} />{portfolioData.about.stats[0].plus ? '+' : ''}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 mt-2 font-medium">{portfolioData.about.stats[0].label}</p>
            </div>

            <div className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-6 text-center hover:border-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition duration-300">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-600 dark:from-indigo-400 dark:to-cyan-500">
                <Counter to={portfolioData.about.stats[1].value} />{portfolioData.about.stats[1].plus ? '+' : ''}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 mt-2 font-medium">{portfolioData.about.stats[1].label}</p>
            </div>

            <div className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-6 text-center hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition duration-300">
              <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-heading">{portfolioData.about.stats[2].value}</h3>
              <p className="text-slate-600 dark:text-gray-400 mt-2 font-medium">{portfolioData.about.stats[2].label}</p>
            </div>

            <div className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-6 text-center hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition duration-300">
              <h3 className="text-2xl font-bold text-orange-500 dark:text-orange-400 font-heading">{portfolioData.about.stats[3].value}</h3>
              <p className="text-slate-600 dark:text-gray-400 mt-2 font-medium">{portfolioData.about.stats[3].label}</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}
