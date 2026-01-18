"use client"

import { motion } from "framer-motion"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "DSA",
  "Git & GitHub",
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-zinc-900 text-white px-6 py-20"
    >

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Skills
      </motion.h2>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="bg-black/60 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex items-center justify-center text-center cursor-pointer hover:border-purple-500 transition"
          >

            <p className="text-lg font-semibold text-purple-300">
              {skill}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  )
}
