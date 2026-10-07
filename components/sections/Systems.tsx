'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const systems = [
  {
    name: 'COMBAT',
    items: [
      'Combat Component',
      'Attack State Machine',
      'Hit Detection (Sphere Trace)',
      'Damage System',
      'Health Component',
      'Death State',
      'Animation Montage Integration',
    ],
  },
  {
    name: 'MULTIPLAYER',
    items: [
      'Client-Server Architecture',
      'Authoritative Game Logic',
      'Match State Sync',
      'Player State Replication',
      'Reconnection Handling',
      'Network Optimization',
      'Backend Integration',
    ],
  },
  {
    name: 'AI',
    items: [
      'AI Controller',
      'Behavior Trees',
      'Blackboard System',
      'Target Detection',
      'Attack Range Sensing',
      'Combat State Machine',
      'Patrol & Chase Logic',
    ],
  },
  {
    name: 'GAMEPLAY',
    items: [
      'Core Game Loop',
      'Game State Management',
      'Spawn System',
      'Score & Progression',
      'Win Condition Logic',
      'Camera System',
      'Input Handling',
    ],
  },
  {
    name: 'LIVE FEATURES',
    items: [
      'Tournament Systems',
      'Daily Challenges',
      'Real-time Leaderboards',
      'Live Events',
      'Push Notifications',
      'Analytics Integration',
    ],
  },
  {
    name: 'UI SYSTEMS',
    items: [
      'HUD Design & Implementation',
      'Menu Navigation',
      'Popup & Notification System',
      'Animation-driven UI',
      'Performance-first Rendering',
    ],
  },
  {
    name: 'OPTIMIZATION',
    items: [
      'CPU/GPU Profiling',
      'Frame Budget Management',
      'Memory Optimization',
      'Draw Call Reduction',
      'Physics LOD',
      'Object Pooling',
    ],
  },
]

export default function Systems() {
  const [active, setActive] = useState(0)
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
        id="systems-list"
        ref={sectionRef}
        style={{ padding: '8rem 0', background: 'var(--bg)', opacity: 0 }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <p className="section-label" style={{ display: 'block', marginBottom: '4rem' }}>CAPABILITIES</p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* Left: system list */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                  letterSpacing: '-0.03em',
                  color: 'var(--text)',
                  margin: '0 0 3rem 0',
                }}
              >
                SYSTEMS I BUILD
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {systems.map((sys, i) => (
                  <button
                    key={sys.name}
                    onClick={() => setActive(i)}
                    className={`system-item${active === i ? ' active' : ''}`}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      padding: '0.75rem 0',
                      textAlign: 'left',
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 700,
                      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                      color: active === i ? 'var(--accent)' : 'var(--muted)',
                      letterSpacing: '-0.02em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                    }}
                  >
                    {sys.name}
                    <span style={{ fontSize: '1rem', opacity: active === i ? 1 : 0.3 }}>→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: subsystems */}
            <div style={{ position: 'sticky', top: '6rem' }}>
              <div
                style={{
                  border: '1px solid rgba(255,255,255,0.06)',
                  padding: '2.5rem',
                  background: 'var(--surface)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.66rem',
                    letterSpacing: '0.4em',
                    color: 'var(--accent)',
                    display: 'block',
                    marginBottom: '2rem',
                  }}
                >
                  {systems[active].name}
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {systems[active].items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.96rem',
                        color: 'var(--muted)',
                        letterSpacing: '0.05em',
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
            </div>
          </div>
        </div>
      </section>
      <div className="hr" />
    </>
  )
}
