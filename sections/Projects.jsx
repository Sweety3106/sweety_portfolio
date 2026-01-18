"use client"
import { useState } from "react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "AgroSense – Smart Agriculture Platform",
    description:
      "A smart agriculture platform that provides crop recommendations, weather insights and data-driven decision support for farmers.",
    tech: "Next.js, React, Node.js, MongoDB, API Integration",
    image: "/agrosense.png",
    github: "https://github.com/Sweety3106/AGROSENSE-.git",
    live: "PASTE_YOUR_LIVE_LINK_HERE",
  },
]

export default function Projects() {
    const [active, setActive] = useState(null)

  return (
    // IMPORTANT: Wrapper div for scroll anchor
    <div id="projects">

      <section className="min-h-screen bg-black text-white px-6 py-20">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Project
        </motion.h2>

        <div className="max-w-4xl mx-auto">

          {projects.map((project, index) => (
            <motion.div>
<div
  onClick={() => setActive(project)}
  className="relative group bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer"
>


  {/* Project Image */}
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-48 object-cover group-hover:opacity-70 transition"
  />

  {/* Content */}
  <div className="p-6">

    <h3 className="text-xl font-bold mb-2">
      {project.title}
    </h3>

    <p className="text-gray-400 text-sm mb-3">
      {project.description}
    </p>

    <p className="text-purple-400 text-xs mb-4">
      {project.tech}
    </p>

    <div className="flex gap-3">

      <a
        href={project.github}
        target="_blank"
        className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
      >
        GitHub
      </a>

      <a
        href={project.live}
        target="_blank"
        className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
      >
        Live
      </a>

    </div>

  </div>

</div>

            </motion.div>
          ))}
          {active && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

    <div className="bg-zinc-900 p-8 rounded-xl max-w-lg relative">

      <button
        onClick={() => setActive(null)}
        className="absolute top-2 right-4 text-xl"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-4">
        {active.title}
      </h2>

      <p className="text-gray-400 mb-4">
        {active.description}
      </p>

      <p className="text-purple-400 mb-4">
        {active.tech}
      </p>

    </div>

  </div>
)}


        </div>

      </section>

    </div>                
  )
}
