'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const solved = [
  'Real-time game state synchronization',
  'Authoritative server-side validation',
  'Client prediction & reconciliation',
  'Match state management',
  'Reconnection & session recovery',
  'Network latency optimization',
  'Backend + Firebase + AWS integration',
]

const techs = [
  'Unity Networking',
  'Nakama',
  'SmartFoxServer',
  'AWS',
  'Firebase',
  'LibGDX',
  'WebSockets',
]

const nodeStyle: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.1)',
  padding: '0.5rem 1rem',
  fontFamily: 'var(--font-space-grotesk)',
  fontSize: '0.76rem',
  letterSpacing: '0.2em',
  color: 'var(--muted)',
  background: 'var(--surface)',
  whiteSpace: 'nowrap',
}

export default function MultiplayerSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      }
    )
  }, [])

  return (
    <>
      <section
        id="multiplayer"
        ref={sectionRef}
        style={{ padding: '8rem 0', background: 'var(--surface)', opacity: 0 }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Header */}
          <p className="section-label" style={{ display: 'block', marginBottom: '1rem' }}>MULTIPLAYER SYSTEMS</p>
          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              margin: '0 0 3rem 0',
            }}
          >
            REAL-TIME AT SCALE
          </h2>

          {/* Stats bar */}
          <div
            style={{
              display: 'flex',
              gap: '3rem',
              flexWrap: 'wrap',
              padding: '1.5rem 0',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              marginBottom: '4rem',
            }}
          >
            {['10K+ PEAK CCU', 'AUTHORITATIVE NETWORKING', 'ZERO CHEAT ARCHITECTURE'].map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.3em',
                  color: 'var(--accent)',
                }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Two-column: diagram + solutions */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'start',
            }}
          >
            {/* Network architecture diagram */}
            <div>
              <p className="section-label" style={{ display: 'block', marginBottom: '2rem' }}>ARCHITECTURE</p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                {/* CLIENT */}
                <div style={nodeStyle}>CLIENT</div>
                <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)' }} />
                {/* Horizontal bus */}
                <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                  <div style={{ position: 'absolute', top: 0, left: '50%', right: '50%', height: '1px', background: 'rgba(255,255,255,0.1)', transform: 'scaleX(8)', transformOrigin: 'center' }} />
                  {/* Col: GAMEPLAY → UNITY */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)' }} />
                    <div style={nodeStyle}>GAMEPLAY</div>
                    <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)' }} />
                    <div style={{ ...nodeStyle, color: 'var(--accent)', borderColor: 'rgba(212,255,88,0.2)' }}>UNITY</div>
                  </div>
                  {/* Col: NETWORK → SERVER → BACKEND */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)' }} />
                    <div style={nodeStyle}>NETWORK</div>
                    <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)' }} />
                    <div style={{ ...nodeStyle, color: 'var(--accent)', borderColor: 'rgba(212,255,88,0.2)' }}>SERVER</div>
                    <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)' }} />
                    <div style={{ ...nodeStyle, color: 'var(--accent)', borderColor: 'rgba(212,255,88,0.2)' }}>BACKEND</div>
                  </div>
                  {/* Col: UI */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)' }} />
                    <div style={nodeStyle}>UI</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions + techs */}
            <div>
              <p className="section-label" style={{ display: 'block', marginBottom: '2rem' }}>WHAT I SOLVED</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {solved.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.96rem',
                      color: 'var(--muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="section-label" style={{ display: 'block', marginBottom: '1.5rem' }}>TECHNOLOGIES</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {techs.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.2em',
                      color: 'var(--muted)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      padding: '0.4rem 0.8rem',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hr" />
    </>
  )
}
