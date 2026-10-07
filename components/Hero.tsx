'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface HeroProps {
  started: boolean
}

const stats = [
  { value: '6+', label: 'YEARS GAME DEV' },
  { value: '15M+', label: 'DOWNLOADS' },
  { value: '10M+', label: 'PLAYERS' },
  { value: '10K', label: 'PEAK CCU' },
]

export default function Hero({ started }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const line1WrapRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLHeadingElement>(null)
  const line2WrapRef = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLHeadingElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    if (!started || animatedRef.current) return
    animatedRef.current = true

    const tl = gsap.timeline({ delay: 0.1 })

    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
    )
    .fromTo(
      line1Ref.current,
      { y: '110%' },
      { y: '0%', duration: 0.9, ease: 'power4.out' },
      '-=0.3'
    )
    .fromTo(
      line2Ref.current,
      { y: '110%' },
      { y: '0%', duration: 0.9, ease: 'power4.out' },
      '-=0.75'
    )
    .fromTo(
      tagsRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(
      statsRef.current ? Array.from(statsRef.current.children) : [],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo(
      scrollIndicatorRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.2'
    )
  }, [started])

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 6vw, 5rem)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.78rem',
            letterSpacing: '0.35em',
            color: 'var(--muted)',
            marginBottom: '2rem',
            opacity: 0,
          }}
        >
          SENIOR GAMEPLAY ENGINEER
        </p>

        {/* Heading line 1 — filled */}
        <div ref={line1WrapRef} style={{ overflow: 'hidden', lineHeight: 0.9 }}>
          <h1
            ref={line1Ref}
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(4rem, 10vw, 9rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              margin: 0,
              transform: 'translateY(110%)',
            }}
          >
            GAMEPLAY
          </h1>
        </div>

        {/* Heading line 2 — outlined */}
        <div ref={line2WrapRef} style={{ overflow: 'hidden', lineHeight: 0.9 }}>
          <h1
            ref={line2Ref}
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(4rem, 10vw, 9rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.25)',
              margin: 0,
              transform: 'translateY(110%)',
            }}
          >
            ENGINEER
          </h1>
        </div>

        {/* Tags */}
        <div
          ref={tagsRef}
          style={{
            marginTop: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            opacity: 0,
          }}
        >
          {['COMBAT SYSTEMS', 'MULTIPLAYER', 'REAL-TIME PHYSICS'].map((tag, i) => (
            <span key={tag} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.22em',
                  color: 'var(--muted)',
                }}
              >
                {tag}
              </span>
              {i < 2 && (
                <span style={{ color: 'rgba(107,107,107,0.3)', fontSize: '0.5rem' }}>·</span>
              )}
            </span>
          ))}
        </div>

        {/* Bottom row: stats + CTA */}
        <div
          style={{
            marginTop: '5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '3rem',
          }}
        >
          {/* Stats */}
          <div
            ref={statsRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, auto)',
              gap: '3rem',
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label} style={{ opacity: 0 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                    color: 'var(--text)',
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.28em',
                    color: 'var(--muted)',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            ref={ctaRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '1rem',
              opacity: 0,
            }}
          >
            <a
              href="#work"
              data-cursor="VIEW"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.8rem',
                letterSpacing: '0.3em',
                color: 'var(--muted)',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '1rem 2.2rem',
                transition: 'border-color 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(212,255,88,0.4)'
                el.style.color = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(255,255,255,0.1)'
                el.style.color = 'var(--muted)'
              }}
            >
              VIEW WORK →
            </a>
            <a
              href="#about"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.75rem',
                letterSpacing: '0.28em',
                color: 'rgba(107,107,107,0.6)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(107,107,107,0.6)'
              }}
            >
              ABOUT ME ↓
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollIndicatorRef}
          style={{
            marginTop: '5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            opacity: 0,
          }}
        >
          <div
            style={{
              width: '1px',
              height: '60px',
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2))',
            }}
          />
          <p
            className="writing-vertical"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.5rem',
              letterSpacing: '0.4em',
              color: 'rgba(107,107,107,0.4)',
            }}
          >
            SCROLL
          </p>
        </div>
      </div>
    </section>
  )
}
