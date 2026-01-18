"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6"
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
        className="text-gray-400 text-center mb-10 max-w-xl"
      >
        Feel free to reach out for internships, collaborations or project discussions.
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
          href="mailto:sweetyadav3369@gmail.com"
          className="bg-purple-600 py-3 rounded-lg hover:bg-purple-700 transition text-center font-medium"
        >
          Email Me
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/Sweety3106"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white py-3 rounded-lg hover:bg-white hover:text-black transition text-center font-medium"
        >
          GitHub
        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com/in/sweety-527189382/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white py-3 rounded-lg hover:bg-white hover:text-black transition text-center font-medium"
        >
          LinkedIn
        </a>

      </motion.div>

    </section>
  )
}
