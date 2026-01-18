"use client"

import { motion } from "framer-motion"

const timelineData = [
  {
    title: "B.Tech CSE",
    subtitle: "GLA University",
    date: "2025 - Present",
    logo: "/gla.png",
  },
  {
    title: "Full Stack Learning",
    subtitle: "Next.js • MERN • DSA",
    date: "2025 - Present",
    logo: "/code.png",
  },
  {
    title: "Project Building",
    subtitle: "AgroSense & Portfolio Projects",
    date: "2025",
    logo: "/project.png",
  },
]

export default function Timeline() {
  return (
    <section className="min-h-screen bg-zinc-900 text-white px-6 py-24">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-20"
      >
        Journey
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600/30"></div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`relative mb-16 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >

            {/* Card */}
            <div className="relative bg-black/70 backdrop-blur-lg border border-white/10 rounded-xl p-6 w-[85%] md:w-[45%] hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition">

              {/* Logo Badge */}
              <div className="absolute -top-6 -left-6 bg-zinc-900 p-2 rounded-full border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.7)]">
                <img
                  src={item.logo}
                  alt="logo"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-purple-400">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-1">
                {item.subtitle}
              </p>

              <span className="text-sm text-gray-500">
                {item.date}
              </span>

            </div>

            {/* Timeline Dot */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.9)]"></div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}
