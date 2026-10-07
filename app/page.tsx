'use client'

import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import EntryScreen from '@/components/EntryScreen'
import Hero from '@/components/Hero'
import Numbers from '@/components/sections/Numbers'
import FeaturedWork from '@/components/sections/FeaturedWork'
import CombatSystem from '@/components/sections/CombatSystem'
import Systems from '@/components/sections/Systems'
import MultiplayerSection from '@/components/sections/MultiplayerSection'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

export default function Home() {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    if (!entered) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenis: any
    const init = async () => {
      const Lenis = (await import('lenis')).default
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add((time: number) => lenis.raf(time * 1000))
      gsap.ticker.lagSmoothing(0)
    }
    init()
    return () => {
      lenis?.destroy()
    }
  }, [entered])

  return (
    <>
      <EntryScreen onEnter={() => setEntered(true)} />
      {entered && (
        <>
          <Nav />
          <main>
            <Hero started={entered} />
            <Numbers />
            <FeaturedWork />
            <CombatSystem />
            <Systems />
            <MultiplayerSection />
            <About />
            <Experience />
            <Contact />
          </main>
        </>
      )}
    </>
  )
}
