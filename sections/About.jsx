"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

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
      className="relative min-h-screen bg-black text-white px-6 py-24 flex items-center justify-center overflow-hidden"
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
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl bg-purple-600 opacity-40"></div>
            <img
              src="/profile.png"
              alt="Sweety"
              className="relative w-64 h-64 object-cover rounded-full border-4 border-purple-500"
            />
          </div>
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            I’m Sweety, a Computer Science Engineering student focused on building
            modern, real-world web applications. I enjoy transforming ideas into
            clean, scalable, and user-friendly products.
          </p>

          <p className="text-gray-400 leading-relaxed mb-10">
            Currently sharpening my skills in Full Stack Development and Data
            Structures & Algorithms, with a strong interest in solving real
            problems through technology.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-black-900 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition">
              <h3 className="text-3xl font-bold text-purple-400">
                <Counter to={1} />+
              </h3>
              <p className="text-gray-400 mt-2">Years Learning</p>
            </div>

            <div className="bg-black-900 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition">
              <h3 className="text-3xl font-bold text-purple-400">
                <Counter to={5} />+
              </h3>
              <p className="text-gray-400 mt-2">Projects Built</p>
            </div>

            <div className="bg-black-900 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition">
              <h3 className="text-3xl font-bold text-purple-400">DSA</h3>
              <p className="text-gray-400 mt-2">Daily Practice</p>
            </div>

            <div className="bg-black-900 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition">
              <h3 className="text-3xl font-bold text-purple-400">MERN</h3>
              <p className="text-gray-400 mt-2">Core Stack</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}
