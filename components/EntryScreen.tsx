'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Particles from './Particles'

interface EntryScreenProps {
  onEnter: () => void
}

export default function EntryScreen({ onEnter }: EntryScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const enteredRef = useRef(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 })

    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo(
      titleRef.current,
      { opacity: 0, y: 40, filter: 'blur(12px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(
      tagsRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo(
      buttonRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
  }, [])

  const handleEnter = () => {
    if (enteredRef.current) return
    enteredRef.current = true

    const tl = gsap.timeline({
      onComplete: () => {
        onEnter()
        setHidden(true)
      },
    })

    tl.to(
      [eyebrowRef.current, titleRef.current, tagsRef.current, buttonRef.current],
      { opacity: 0, y: -30, stagger: 0.04, duration: 0.4, ease: 'power2.in' }
    )
    .to(
      containerRef.current,
      { scale: 1.06, duration: 0.5, ease: 'power2.in' },
      '-=0.3'
    )
    .to(
      containerRef.current,
      { opacity: 0, duration: 0.45, ease: 'power2.out' },
      '-=0.2'
    )
  }

  if (hidden) return null

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: '#080808',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Particles */}
      <Particles />

      {/* Ambient light */}
      <div
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,255,88,0.04) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          animation: 'lightDrift 10s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.88) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 2rem',
        }}
      >
        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.82rem',
            letterSpacing: '0.35em',
            color: 'var(--muted)',
            marginBottom: '2.5rem',
            opacity: 0,
          }}
        >
          GAMEPLAY ENGINEER
        </p>

        {/* Title */}
        <h1
          ref={titleRef}
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontWeight: 700,
            fontSize: 'clamp(4rem, 12vw, 10rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            opacity: 0,
          }}
        >
          SHIVAM
          <br />
          BHATI
        </h1>

        {/* Tags */}
        <div
          ref={tagsRef}
          style={{
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            opacity: 0,
          }}
        >
          {['GAMEPLAY', 'COMBAT', 'MULTIPLAYER'].map((tag, i) => (
            <span
              key={tag}
              style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.35em',
                  color: 'var(--muted)',
                }}
              >
                {tag}
              </span>
              {i < 2 && (
                <span style={{ color: 'rgba(107,107,107,0.3)', fontSize: '0.78rem' }}>•</span>
              )}
            </span>
          ))}
        </div>

        {/* Button */}
        <button
          ref={buttonRef}
          onClick={handleEnter}
          data-cursor="ENTER"
          style={{
            marginTop: '3.5rem',
            opacity: 0,
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.8rem',
            letterSpacing: '0.3em',
            color: 'var(--muted)',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '1.1rem 2.8rem',
            cursor: 'none',
            transition: 'border-color 0.3s ease, color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            const btn = e.currentTarget
            btn.style.borderColor = 'rgba(212,255,88,0.5)'
            btn.style.color = 'var(--accent)'
          }}
          onMouseLeave={(e) => {
            const btn = e.currentTarget
            btn.style.borderColor = 'rgba(255,255,255,0.1)'
            btn.style.color = 'var(--muted)'
          }}
        >
          ENTER PORTFOLIO →
        </button>
      </div>
    </div>
  )
}
