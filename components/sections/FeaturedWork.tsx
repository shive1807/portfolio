'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  num: string
  title: string
  subtitle: string
  role: string
  image: string | null
  stats: string[]
  tags: string[]
  link: string | null
}

const projects: Project[] = [
  {
    num: '01',
    title: 'FOOTBALL WORLD',
    subtitle: 'REAL PEOPLE',
    role: 'Lead Gameplay Engineer',
    image: '/images/projects/football_world.webp',
    stats: ['10M+ PLAYERS', '10K PEAK CCU', 'GOOGLE NOMINATED'],
    tags: ['PHYSICS', 'MULTIPLAYER', 'OPTIMIZATION', 'UNITY'],
    link: 'https://play.google.com/store/apps/details?id=com.audify.football',
  },
  {
    num: '02',
    title: 'BULL RUN',
    subtitle: '',
    role: 'Gameplay Engineer',
    image: '/images/projects/bull_run.webp',
    stats: ['UNREAL ENGINE', 'BLOCKCHAIN', 'NFT SYSTEMS'],
    tags: ['C++', 'BLUEPRINTS', 'WEB3'],
    link: 'https://play.google.com/store/apps/details?id=com.bullieverse.BullRun',
  },
  {
    num: '03',
    title: 'GETMEGA CARROM',
    subtitle: '',
    role: 'Game Developer',
    image: null,
    stats: ['10K CCU', 'CUSTOM PHYSICS', 'LIVE MULTIPLAYER'],
    tags: ['UNITY', 'PHYSICS', 'NAKAMA'],
    link: null,
  },
  {
    num: '04',
    title: 'GMNG MINI LUDO',
    subtitle: '',
    role: 'Lead Developer',
    image: '/images/projects/gmng.webp',
    stats: ['SERVER-AUTH', 'AWS', '2-3 MIN ROUNDS'],
    tags: ['SMARTFOX', 'UNITY', 'AWS'],
    link: null,
  },
]

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (!rowRef.current) return
    gsap.fromTo(
      rowRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rowRef.current,
          start: 'top 85%',
        },
      }
    )
  }, [])

  return (
    <div ref={rowRef} style={{ opacity: 0 }}>
      <div className="hr" />
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ padding: '2.5rem 0' }}
      >
        {/* Top row: number + title + role */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.82rem',
                letterSpacing: '0.3em',
                color: hovered ? 'var(--accent)' : 'var(--muted)',
                transition: 'color 0.3s ease',
              }}
            >
              {project.num}
            </span>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
                  letterSpacing: '-0.02em',
                  color: 'var(--text)',
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {project.title}
              </h3>
              {project.subtitle && (
                <span
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.76rem',
                    letterSpacing: '0.3em',
                    color: 'var(--muted)',
                  }}
                >
                  {project.subtitle}
                </span>
              )}
            </div>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.82rem',
              letterSpacing: '0.25em',
              color: 'var(--muted)',
            }}
          >
            {project.role}
          </span>
        </div>

        {/* Image */}
        {project.image ? (
          <div
            style={{
              width: '100%',
              aspectRatio: '16/7',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              background: '#0f0f0f',
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: 'cover', transition: 'transform 0.6s ease', transform: hovered ? 'scale(1.03)' : 'scale(1)' }}
            />
          </div>
        ) : (
          <div
            style={{
              width: '100%',
              aspectRatio: '16/7',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #101010 0%, #181818 50%, #101010 100%)',
              border: '1px solid rgba(255,255,255,0.06)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Corner brackets — cinematic viewfinder aesthetic */}
            {[['0,0','topleft'],['100%,0','topright'],['0,100%','bottomleft'],['100%,100%','bottomright']].map(([pos, name]) => {
              const [x, y] = pos.split(',')
              const isRight = x === '100%'
              const isBottom = y === '100%'
              return (
                <div key={name} style={{ position: 'absolute', top: isBottom ? 'auto' : '1.5rem', bottom: isBottom ? '1.5rem' : 'auto', left: isRight ? 'auto' : '1.5rem', right: isRight ? '1.5rem' : 'auto', width: '20px', height: '20px', borderTop: !isBottom ? '1px solid rgba(255,255,255,0.15)' : 'none', borderBottom: isBottom ? '1px solid rgba(255,255,255,0.15)' : 'none', borderLeft: !isRight ? '1px solid rgba(255,255,255,0.15)' : 'none', borderRight: isRight ? '1px solid rgba(255,255,255,0.15)' : 'none' }} />
              )
            })}
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.5rem', letterSpacing: '0.45em', color: 'rgba(107,107,107,0.5)', marginBottom: '0.5rem' }}>GAMEPLAY FOOTAGE</p>
              <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.45rem', letterSpacing: '0.3em', color: 'rgba(107,107,107,0.25)' }}>COMING SOON</p>
            </div>
          </div>
        )}

        {/* Bottom row: stats + tags + link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {project.stats.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.3em',
                  color: 'var(--muted)',
                }}
              >
                {s}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.2em',
                    color: 'var(--muted)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '0.3rem 0.7rem',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="VIEW"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.3em',
                  color: hovered ? 'var(--accent)' : 'var(--muted)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                VIEW →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeaturedWork() {
  return (
    <section id="work" style={{ padding: '8rem 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '4rem' }}>
          <p className="section-label" style={{ display: 'block', marginBottom: '1rem' }}>FEATURED WORK</p>
          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              margin: 0,
            }}
          >
            SELECTED PROJECTS
          </h2>
        </div>
        {projects.map((project, i) => (
          <ProjectRow key={project.num} project={project} index={i} />
        ))}
        <div className="hr" />
      </div>
    </section>
  )
}
