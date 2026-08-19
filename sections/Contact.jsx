"use client"

import { motion } from "framer-motion"
import { portfolioData } from "../data/portfolio"

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-background text-foreground flex flex-col justify-center items-center px-6 transition-colors duration-300"
    >

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-slate-500 dark:text-gray-400 text-center mb-10 max-w-xl"
      >
        {portfolioData.contact.message}
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col gap-5 w-full max-w-md"
      >

        {/* EMAIL */}
        <a
          href={`mailto:${portfolioData.contact.email}`}
          className="bg-purple-600 py-3 rounded-lg hover:bg-purple-700 transition text-center font-medium"
        >
          Email Me
        </a>

        {/* GITHUB */}
        <a
          href={portfolioData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-foreground py-3 rounded-lg hover:bg-foreground hover:text-background transition text-center font-medium"
        >
          GitHub
        </a>

        {/* LINKEDIN */}
        <a
          href={portfolioData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-foreground py-3 rounded-lg hover:bg-foreground hover:text-background transition text-center font-medium"
        >
          LinkedIn
        </a>

      </motion.div>

    </section>
  )
}
