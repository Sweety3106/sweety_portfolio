"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

import { portfolioData } from "../data/portfolio"

export default function Navbar() {

  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => setMounted(true), [])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-background/60 backdrop-blur-lg text-foreground z-50 border-b border-glass-border transition-colors duration-300"
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold">{portfolioData.name}</h1>

        {/* Desktop Menu & Actions */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            <li onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-purple-500 font-medium transition-colors">Home</li>
            <li onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-purple-500 font-medium transition-colors">About</li>
            <li onClick={() => scrollToSection("skills")} className="cursor-pointer hover:text-purple-500 font-medium transition-colors">Skills</li>
            <li onClick={() => scrollToSection("projects")} className="cursor-pointer hover:text-purple-500 font-medium transition-colors">Projects</li>
            <li onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-purple-500 font-medium transition-colors">Contact</li>
          </ul>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-zinc-bg transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
            </button>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-zinc-bg transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
            </button>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="text-xl"
          >
            ☰
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-glass-border text-center py-6 space-y-4">

          <p onClick={() => scrollToSection("home")} className="hover:text-purple-500 font-medium cursor-pointer">Home</p>
          <p onClick={() => scrollToSection("about")} className="hover:text-purple-500 font-medium cursor-pointer">About</p>
          <p onClick={() => scrollToSection("projects")} className="hover:text-purple-500 font-medium cursor-pointer">Projects</p>
          <p onClick={() => scrollToSection("skills")} className="hover:text-purple-500 font-medium cursor-pointer">Skills</p>
          <p onClick={() => scrollToSection("contact")} className="hover:text-purple-500 font-medium cursor-pointer">Contact</p>

        </div>
      )}

    </motion.nav>
  )
}
