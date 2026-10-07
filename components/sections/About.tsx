'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const paragraphs = [
  <>My journey into game development started long before I knew it could become a career.</>,
  <>As a kid, I used to watch people play games at PlayStation parlors. I was fascinated by the fact that someone could sit in front of a screen and be transported into an entirely different world. Later, when people around me started getting computers, I discovered games like <strong>GTA: Vice City, Robocop, and Age of Empires</strong>. I couldn&apos;t get enough of them.</>,
  <>Eventually, I got my own first computer — a <strong>Pentium 4 Dual Core with 1 GB of RAM and a 320 GB hard drive</strong>. It wasn&apos;t a powerful machine, but to me, it opened up an entire universe.</>,
  <>I didn&apos;t just play games. I started taking them apart.</>,
  <>I spent hours experimenting with GTA San Andreas mods — turning characters into Superman or Hulk, adding the Batmobile, and changing the game in ways I thought would be fun. At the time, I didn&apos;t realize it, but I was already developing the mindset of a game developer: <strong>&lsquo;What if I change this?&rsquo;</strong></>,
  <>I eventually made my way to <strong>IIT Roorkee</strong>, one of India&apos;s top engineering institutes. My degree was in Mechanical Engineering, but my interest had shifted completely toward games. I started teaching myself Unity through YouTube, building games for college projects, and learning by making things.</>,
  <>During campus placements, I ended up taking an internship in Data Science. It was valuable, but it gave me clarity: <strong>I didn&apos;t want to build a career around something just because it was a conventional path. I wanted to make games.</strong></>,
  <>So I pursued game development seriously. I landed my first opportunity at <strong>GetMega</strong>, and that became the beginning of my career.</>,
  <>Since then, I&apos;ve worked across gameplay, multiplayer systems, live games, game architecture, and large-scale player-facing features — constantly trying to understand not just how to make a game work, but how to make it <strong>feel good to play</strong>.</>,
]

const closing = <>I never really stopped playing with games. I just learned how to build them.</>

const facts = [
  'IIT Roorkee (B.Tech Mechanical Engg.)',
  '6+ years professional game dev',
  'Currently: GameDuell, Germany',
  'Open to Senior Gameplay Engineering roles',
]

export default function About() {
  const paraRefs = useRef<(HTMLParagraphElement | null)[]>([])
  const closingRef = useRef<HTMLParagraphElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const paras = paraRefs.current.filter(Boolean)
    paras.forEach((el, i) => {
      if (!el) return
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
          delay: i * 0.03,
        }
      )
    })

    if (closingRef.current) {
      gsap.fromTo(
        closingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: closingRef.current, start: 'top 88%' },
        }
      )
    }
  }, [])

  return (
    <>
      <section id="about" ref={sectionRef} style={{ padding: '8rem 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <p className="section-label" style={{ display: 'block', marginBottom: '1rem' }}>ABOUT</p>
          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              margin: '0 0 4rem 0',
            }}
          >
            FROM PLAYING GAMES<br />TO BUILDING THEM
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr minmax(240px, 320px)',
              gap: '5rem',
              alignItems: 'start',
            }}
          >
            {/* Story */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  ref={(el) => { paraRefs.current[i] = el }}
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '1rem',
                    lineHeight: 1.9,
                    color: 'var(--muted)',
                    margin: 0,
                    opacity: 0,
                  }}
                >
                  {para}
                </p>
              ))}
              <p
                ref={closingRef}
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: 'var(--text)',
                  fontWeight: 500,
                  margin: '1rem 0 0 0',
                  opacity: 0,
                }}
              >
                {closing}
              </p>
            </div>

            {/* Photo + facts */}
            <div style={{ position: 'sticky', top: '6rem' }}>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  position: 'relative',
                  overflow: 'hidden',
                  marginBottom: '2rem',
                  background: '#0f0f0f',
                }}
              >
                <Image
                  src="/images/profile_picture.jpg"
                  alt="Shivam Bhati"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {facts.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.86rem',
                      color: 'var(--muted)',
                      letterSpacing: '0.05em',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: '0.45rem' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="hr" />
    </>
  )
}
