"use client"

import { motion } from "framer-motion"

const timelineData = [
  {
    title: "B.Tech CSE (Hons) | Specialization in AI & Analytics",
    subtitle: "GLA University, Mathura",
    date: "Aug 2025 - Present",
    logo: "/gla.png",
    color: "text-indigo-400",
    shadow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]",
    border: "hover:border-indigo-500/50",
    dot: "bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.9)]"
  },
  {
    title: "Class XII (82.8%)",
    subtitle: "Hardayal Public School",
    date: "2023 - 2024",
    logo: "/hps.jpg", 
    icon: "🏫",
    color: "text-pink-400",
    shadow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    border: "hover:border-pink-500/50",
    dot: "bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.9)]"
  },
  {
    title: "Class X (97.8%)",
    subtitle: "Hardayal Public School",
    date: "2021 - 2022",
    logo: "/hps.jpg",
    icon: "🎓",
    color: "text-emerald-400",
    shadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    border: "hover:border-emerald-500/50",
    dot: "bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.9)]"
  },
]

export default function Timeline() {
  return (
    <section className="min-h-screen bg-background text-foreground px-6 py-24 relative overflow-hidden transition-colors duration-300">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-24 font-heading"
      >
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">Journey</span>
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto z-10">

        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-indigo-500/50 via-pink-500/50 to-transparent"></div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative mb-16 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >

            {/* Timeline Dot */}
            <div className={`absolute left-[15px] md:left-1/2 transform -translate-x-1/2 mt-8 md:mt-0 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border-2 border-background ${item.dot} z-20`}></div>

            {/* Card */}
            <div className={`relative bg-glass backdrop-blur-md border border-glass-border rounded-2xl p-8 w-[85%] ml-auto md:ml-0 md:w-[45%] transition-all duration-300 ${item.border} ${item.shadow}`}>
              
              {/* Logo Badge (if exists) */}
              {item.logo ? (
                <div className="absolute -top-6 -left-6 bg-background p-2 rounded-full border border-glass-border shadow-xl hidden md:block">
                  <img
                    src={item.logo}
                    alt="logo"
                    className="w-12 h-12 object-contain rounded-full"
                  />
                </div>
              ) : (
                <div className="absolute -top-6 -left-6 bg-background w-16 h-16 rounded-full border border-glass-border shadow-xl hidden md:flex items-center justify-center text-2xl">
                  {item.icon || "🌟"}
                </div>
              )}

              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-slate-600 dark:text-white/70 bg-glass rounded-full border border-glass-border font-mono">
                {item.date}
              </span>

              <h3 className={`text-xl font-bold mb-2 leading-tight font-heading ${item.color}`}>
                {item.title}
              </h3>

              <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">
                {item.subtitle}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}
