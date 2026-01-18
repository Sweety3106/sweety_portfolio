"use client"

import { useState } from "react"
import Timeline from "../sections/Timeline"
import ScrollProgress from "../sections/ScrollProgress"
import Navbar from "../sections/Navbar"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"
import Footer from "../sections/Footer"
import IntroLoader from "../sections/IntroLoader"
import CustomCursor from "../sections/CustomCursor"


export default function Home() {

  const [loading, setLoading] = useState(true)

  return (
    <main>

      {loading && <IntroLoader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <Hero />
          <About />
          <Timeline />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}

    </main>
  )
}
