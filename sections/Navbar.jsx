"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Navbar() {

  const [open, setOpen] = useState(false)

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
      className="fixed top-0 w-full bg-black/40 backdrop-blur-lg text-white z-50"
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold">Sweety</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">

          <li onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-purple-400">Home</li>
          <li onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-purple-400">About</li>
          <li onClick={() => scrollToSection("skills")} className="cursor-pointer hover:text-purple-400">Skills</li>
          <li onClick={() => scrollToSection("projects")} className="cursor-pointer hover:text-purple-400">Projects</li>
          <li onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-purple-400">Contact</li>

        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black text-center py-6 space-y-4">

          <p onClick={() => scrollToSection("home")}>Home</p>
          <p onClick={() => scrollToSection("about")}>About</p>
          <p onClick={() => scrollToSection("projects")}>Projects</p>
          <p onClick={() => scrollToSection("skills")}>Skills</p>
          <p onClick={() => scrollToSection("contact")}>Contact</p>

        </div>
      )}

    </motion.nav>
  )
}
