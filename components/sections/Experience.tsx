'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const entries = [
  {
    date: 'AUG 2024 — PRESENT',
    logo: '/images/companies/gameduell.jpeg',
    company: 'GAMEDUELL',
    role: 'Gameplay Programmer',
    desc: 'Creating meta features and multiplayer systems for card games at one of Germany\'s leading gaming companies.',
    location: 'Berlin, Germany',
  },
  {
    date: 'SEPT 2022 — MAR 2024',
    logo: '/images/companies/audify.jpeg',
    company: 'AUDIFY',
    role: 'Lead Game Developer',
    desc: 'Led full development lifecycle of Football World — from prototype to production. Shipped to 10M+ players with 10K peak CCU.',
    location: 'India (Remote)',
  },
  {
    date: 'FEB 2022 — SEPT 2022',
    logo: '/images/companies/splashlearn.jpeg',
    company: 'SPLASH LEARN',
    role: 'Game Developer',
    desc: 'Built interactive math learning games for kids using Cocos2dx and JavaScript.',
    location: 'India (Remote)',
  },
  {
    date: 'FEB 2021 — FEB 2022',
    logo: '/images/companies/gmng.jpeg',
    company: 'GMNG',
    role: 'Lead Developer',
    desc: 'Founded and built the gaming department from scratch. Led Unity projects and scaled multiplayer systems to production.',
    location: 'India',
  },
  {
    date: 'JUNE 2020 — FEB 2021',
    logo: '/images/companies/getmega.png',
    company: 'GETMEGA',
    role: 'Game Developer',
    desc: 'Shipped real-time multiplayer carrom with custom physics engine. LibGDX client, Nakama backend. Starting point of my game dev career.',
    location: 'Bangalore, India',
  },
]

function TimelineEntry({ entry, index }: { entry: typeof entries[0]; index: number }) {
  const entryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!entryRef.current) return
    gsap.fromTo(
      entryRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: entryRef.current, start: 'top 85%' },
        delay: index * 0.05,
      }
    )
  }, [index])

  return (
    <div
      ref={entryRef}
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(180px, 220px) 1fr',
        gap: '3rem',
        paddingLeft: '1.5rem',
        position: 'relative',
        opacity: 0,
        paddingBottom: '3rem',
      }}
    >
      <div className="timeline-dot" />

      {/* Date */}
      <div>
        <span
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.76rem',
            letterSpacing: '0.25em',
            color: 'var(--accent)',
            display: 'block',
            paddingTop: '0.15rem',
          }}
        >
          {entry.date}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            color: 'var(--muted)',
            display: 'block',
            marginTop: '0.4rem',
          }}
        >
          {entry.location}
        </span>
      </div>

      {/* Content */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              position: 'relative',
              flexShrink: 0,
              overflow: 'hidden',
              background: '#161616',
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'transform 0.3s ease',
            }}
          >
            <Image
              src={entry.logo}
              alt={entry.company}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: '1.05rem',
                letterSpacing: '0.1em',
                color: 'var(--text)',
                display: 'block',
              }}
            >
              {entry.company}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.82rem',
                letterSpacing: '0.15em',
                color: 'var(--muted)',
              }}
            >
              {entry.role}
            </span>
          </div>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '1rem',
            color: 'var(--muted)',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {entry.desc}
        </p>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <>
      <section id="experience" style={{ padding: '8rem 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <p className="section-label" style={{ display: 'block', marginBottom: '1rem' }}>EXPERIENCE</p>
          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              margin: '0 0 5rem 0',
            }}
          >
            CAREER TIMELINE
          </h2>
          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
            <div className="timeline-line" />
            {entries.map((entry, i) => (
              <TimelineEntry key={entry.company} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </section>
      <div className="hr" />
    </>
  )
}
