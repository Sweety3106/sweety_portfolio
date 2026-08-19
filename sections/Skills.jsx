"use client"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { portfolioData } from "../data/portfolio"

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-background text-foreground px-6 py-24 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 font-heading"
      >
        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Skills</span>
      </motion.h2>

      {/* Categories Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative">
        {portfolioData.skills.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.03} transitionSpeed={2000} className="h-full">
              <div className={`h-full bg-glass backdrop-blur-md rounded-2xl p-8 border ${category.border} ${category.hoverBorder} transition-colors duration-300 relative overflow-hidden shadow-xl`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50 pointer-events-none`}></div>
                
                <h3 className="text-2xl font-bold mb-6 font-heading relative z-10">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.items.map((skill, sIndex) => (
                    <span 
                      key={sIndex} 
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg border ${category.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
