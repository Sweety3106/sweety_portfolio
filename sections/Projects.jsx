"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { portfolioData } from "../data/portfolio"

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <div id="projects">
      <section className="min-h-screen bg-background text-foreground px-6 py-20 relative overflow-hidden transition-colors duration-300">
        
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-heading"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">Projects</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="h-full">
                <div
                  onClick={() => setActive(project)}
                  className={`relative group bg-glass backdrop-blur-md rounded-2xl overflow-hidden border border-glass-border ${project.hoverBorder} transition-all duration-300 cursor-pointer h-full flex flex-col shadow-xl`}
                >
                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

                  {/* Project Image */}
                  <div className="w-full h-56 bg-zinc-bg relative overflow-hidden group-hover:opacity-90 transition-opacity">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover z-10 relative" onError={(e) => { e.target.style.display='none' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
                    
                    {/* Fallback pattern/placeholder */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 dark:text-zinc-500 font-mono text-sm z-0">
                      <span className="text-3xl mb-2">💻</span>
                      <span>Upload {project.image}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col relative z-20 -mt-6">
                    <h3 className="text-xl font-bold mb-3 leading-tight font-heading">{project.title}</h3>
                    <p className="text-slate-500 dark:text-gray-400 text-sm mb-5 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack Pills */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tech.map((techItem, i) => (
                        <span key={i} className={`px-2 py-1 text-xs rounded-md border ${project.pillColor}`}>
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Modal for Active Project */}
        <AnimatePresence>
          {active && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setActive(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-background border border-glass-border p-8 rounded-2xl max-w-2xl w-full relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-glass hover:bg-zinc-bg text-xl transition-colors z-20"
                >
                  ✕
                </button>

                {/* Modal Image Header */}
                <div className="w-full h-48 -mt-8 -mx-8 mb-6 rounded-t-2xl relative overflow-hidden bg-zinc-bg">
                   <img src={active.image} alt={active.title} className="w-full h-full object-cover z-10 relative opacity-50" onError={(e) => { e.target.style.display='none' }} />
                   <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
                </div>

                <h2 className="text-3xl font-bold mb-4 font-heading relative z-20 -mt-12">
                  {active.title}
                </h2>

                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    {active.description}
                  </p>
                </div>

                <div className="mb-8 flex flex-wrap gap-2">
                   {active.tech.map((techItem, i) => (
                      <span key={i} className={`px-3 py-1.5 text-sm rounded-md border ${active.pillColor}`}>
                        {techItem}
                      </span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 shadow-md"
                  >
                    View Source
                  </a>
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-glass border border-glass-border font-semibold rounded-full hover:bg-zinc-bg transition-colors flex items-center gap-2"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </div>                
  )
}
