'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const available = [
  'Senior Gameplay Engineer',
  'Gameplay Programmer',
  'Unity / Unreal',
  'Remote / Relocation',
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      }
    )
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: '8rem 0 0 0',
        background: 'linear-gradient(180deg, var(--bg) 0%, #0c0c0c 100%)',
        opacity: 0,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
          <div className="status-dot" />
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.76rem',
              letterSpacing: '0.3em',
              color: 'var(--accent)',
            }}
          >
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontWeight: 700,
            fontSize: 'clamp(3rem, 7vw, 7rem)',
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            margin: '0 0 5rem 0',
            lineHeight: 0.95,
          }}
        >
          LET&apos;S BUILD<br />SOMETHING.
        </h2>

        {/* Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            marginBottom: '6rem',
            alignItems: 'start',
          }}
        >
          {/* Left: available for */}
          <div>
            <p className="section-label" style={{ display: 'block', marginBottom: '1.5rem' }}>AVAILABLE FOR</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {available.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '1rem',
                    color: 'var(--muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: contact links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a
              href="mailto:shivambhati21@gmail.com"
              style={{
                display: 'block',
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.82rem',
                letterSpacing: '0.25em',
                color: 'var(--muted)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '1.2rem 1.5rem',
                textDecoration: 'none',
                transition: 'border-color 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(212,255,88,0.4)'
                el.style.color = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.1)'
                el.style.color = 'var(--muted)'
              }}
            >
              shivambhati21@gmail.com →
            </a>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://www.linkedin.com/in/shivambhati1807/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: 'block',
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.3em',
                  color: 'var(--muted)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '1rem',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'border-color 0.3s ease, color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(212,255,88,0.3)'
                  el.style.color = 'var(--accent)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(255,255,255,0.08)'
                  el.style.color = 'var(--muted)'
                }}
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com/shive1807"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: 'block',
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.3em',
                  color: 'var(--muted)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '1rem',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'border-color 0.3s ease, color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(212,255,88,0.3)'
                  el.style.color = 'var(--accent)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(255,255,255,0.08)'
                  el.style.color = 'var(--muted)'
                }}
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          maxWidth: '100%',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.72rem',
            letterSpacing: '0.4em',
            color: 'var(--muted)',
          }}
        >
          SHIVAM BHATI
        </span>
        <span
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.72rem',
            letterSpacing: '0.4em',
            color: 'var(--muted)',
          }}
        >
          GAMEPLAY ENGINEER
        </span>
        <span
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.72rem',
            letterSpacing: '0.3em',
            color: 'rgba(107,107,107,0.5)',
          }}
        >
          © 2026
        </span>
      </div>
    </section>
  )
}
