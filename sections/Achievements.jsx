"use client"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"

const achievements = [
  {
    title: "Intel Certification",
    description: "Successfully completed the certification program by Intel, demonstrating proficiency in modern computing and AI technologies.",
    icon: "🚀",
    image: "/intel.png",
    gradient: "from-blue-600/20 to-indigo-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "NEC Certification",
    description: "Achieved certification from NEC, highlighting skills in advanced IT solutions and networking infrastructure.",
    icon: "🌐",
    image: "/nec.png",
    gradient: "from-indigo-500/20 to-violet-500/20",
    border: "group-hover:border-indigo-500/50"
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    description: "Successfully earned the AZ-900 certification, demonstrating foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
    icon: "☁️",
    image: "/az900.jpg",
    gradient: "from-blue-600/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "Runner-Up — Phantasia Hackathon",
    description: "Secured 2nd position among multiple competing teams by building an innovative tech solution under time constraints.",
    icon: "🥈",
    image: "/phantasia.jpg",
    gradient: "from-blue-500/20 to-purple-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "Top 20 — Solo Hackathon (Google Developers Group)",
    description: "Ranked among top 20 participants in an individual hackathon organized by GDG, demonstrating strong problem-solving and development skills.",
    icon: "⭐",
    image: "/gen ai.jpg",
    gradient: "from-yellow-500/20 to-orange-500/20",
    border: "group-hover:border-yellow-500/50"
  },
  {
    title: "Top 9 — Build With TRAE Hackathon, New Delhi | Solo",
    description: "Selected among the Top 9 projects while competing against around 90 developers and AI builders; independently built FounderOS AI, a multi-agent business orchestration system.",
    icon: "🏆",
    image: "/build with trae.jpg",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50"
  },
]

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
          {achievements.map((achievement, index) => (
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
