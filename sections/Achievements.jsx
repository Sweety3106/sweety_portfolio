"use client"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { portfolioData } from "../data/portfolio"

export default function Achievements() {
  return (
    <div id="achievements">
      <section className="min-h-screen bg-background text-foreground px-6 py-20 relative overflow-hidden transition-colors duration-300">
        
        {/* Background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-heading"
        >
          Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Hackathons</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Section */}
              <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.02} transitionSpeed={2500} className="w-full md:w-1/2">
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-glass-border bg-zinc-bg">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${achievement.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300 z-10`}></div>
                  <img 
                    src={achievement.image} 
                    alt={achievement.title} 
                    className="w-full aspect-[4/3] object-cover relative z-0 transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.target.style.display='none' }}
                  />
                  {/* Fallback pattern */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-zinc-600 font-mono text-sm z-[-1]">
                    [Image Placeholder]
                  </div>
                </div>
              </Tilt>

              {/* Text Content */}
              <div className="w-full md:w-1/2 p-6 md:p-10">
                <span className="text-4xl mb-4 block filter drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">{achievement.icon}</span>
                <h3 className="text-3xl font-bold mb-4 leading-tight font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
                  {achievement.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
