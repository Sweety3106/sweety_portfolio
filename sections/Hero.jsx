"use client"
import { Typewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"
import { portfolioData } from "../data/portfolio"

export default function Hero() {
  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background text-foreground pt-20 transition-colors duration-300"
    >
      {/* Premium Gradient Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      {/* Grid Pattern overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start text-left">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:via-gray-200 dark:to-gray-400"
          >
            {portfolioData.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-xl md:text-2xl text-slate-600 dark:text-gray-400 font-mono h-[30px]"
          >
            <Typewriter
              words={portfolioData.hero.roles}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 text-slate-600 dark:text-gray-400 max-w-md leading-relaxed"
          >
            {portfolioData.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            <button
              onClick={() => {
                const section = document.getElementById("projects")
                section?.scrollIntoView({ behavior: "smooth" })
              }}
              className="relative px-8 py-3 bg-foreground text-background font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              View Projects
            </button>

            <a 
              href={portfolioData.hero.resumeUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-glass border border-glass-border backdrop-blur-md rounded-full hover:bg-glass/80 transition-colors duration-300 inline-block"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Column: Visual Graphic / Image */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
            transition={{ 
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" } 
            }}
            className="relative w-72 h-72 md:w-[400px] md:h-[400px] flex justify-center items-center mx-auto"
          >
            {/* Glowing orb behind the image */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-[80px]"
            ></motion.div>
            
            {/* Floating rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-glass-border"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-glass-border"
            ></motion.div>
          
          {/* Profile Image / Graphic Container */}
          <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full bg-zinc-bg border border-glass-border p-2 overflow-hidden shadow-2xl relative z-10">
             {/* Please upload your photo to public/profile.png */}
             <div className="w-full h-full rounded-full bg-zinc-bg flex items-center justify-center text-slate-500 overflow-hidden relative group">
                <img src={portfolioData.hero.image} alt={portfolioData.name} className="w-full h-full object-cover z-10" onError={(e) => { e.target.style.display='none' }} />
                <span className="absolute text-sm font-mono z-0 group-hover:opacity-0 transition-opacity">Upload {portfolioData.hero.image}</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
