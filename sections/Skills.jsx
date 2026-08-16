"use client"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "SQL"],
    gradient: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/50",
    pill: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    title: "AI & Automation",
    skills: ["Generative AI", "AI Agents", "Multi-Agent Systems", "Workflow Automation"],
    gradient: "from-purple-500/10 to-pink-500/10",
    border: "border-purple-500/20",
    hoverBorder: "hover:border-purple-500/50",
    pill: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    gradient: "from-emerald-500/10 to-teal-500/10",
    border: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/50",
    pill: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB"],
    gradient: "from-orange-500/10 to-red-500/10",
    border: "border-orange-500/20",
    hoverBorder: "hover:border-orange-500/50",
    pill: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  },
  {
    title: "Tools & Core Concepts",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Data Structures", "OOP", "DBMS"],
    gradient: "from-zinc-500/10 to-zinc-400/10",
    border: "border-zinc-500/20",
    hoverBorder: "hover:border-zinc-500/50",
    pill: "bg-zinc-bg text-slate-700 dark:text-zinc-300 border-glass-border"
  },
]

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
        {skillCategories.map((category, index) => (
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
                  {category.skills.map((skill, sIndex) => (
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
