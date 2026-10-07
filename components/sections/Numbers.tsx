'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const numbers = [
  { target: 6, suffix: '+', label: 'YEARS GAME DEVELOPMENT' },
  { target: 15, suffix: 'M+', label: 'TOTAL DOWNLOADS' },
  { target: 10, suffix: 'M+', label: 'PLAYERS' },
  { target: 10, suffix: 'K', label: 'PEAK CONCURRENT USERS' },
]

function NumberItem({ item, delay }: { item: typeof numbers[0]; delay: number }) {
  const numRef = useRef<HTMLSpanElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    if (!itemRef.current) return
    const el = itemRef.current

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        if (triggered.current) return
        triggered.current = true

        gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay, ease: 'power3.out' })

        const target = item.target
        const duration = 2000
        const start = performance.now()
        const ease = (t: number) => 1 - Math.pow(1 - t, 3)
        const raf = (now: number) => {
          if (!numRef.current) return
          const elapsed = Math.min((now - start) / duration, 1)
          numRef.current.textContent = String(Math.round(ease(elapsed) * target))
          if (elapsed < 1) requestAnimationFrame(raf)
          else numRef.current.textContent = String(target)
        }
        requestAnimationFrame(raf)
      },
    })

    return () => st.kill()
  }, [delay, item.target])

  return (
    <div ref={itemRef} style={{ opacity: 0, textAlign: 'center' }}>
      <div
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontWeight: 700,
          fontSize: 'clamp(4rem, 8vw, 7rem)',
          lineHeight: 1,
          color: 'var(--accent)',
          letterSpacing: '-0.03em',
        }}
        className="count-number"
      >
        <span ref={numRef}>0</span>
        <span>{item.suffix}</span>
      </div>
      <div
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontSize: '0.72rem',
          letterSpacing: '0.32em',
          color: 'var(--muted)',
          marginTop: '1rem',
        }}
      >
        {item.label}
      </div>
    </div>
  )
}

export default function Numbers() {
  return (
    <>
      <section style={{ padding: '8rem 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <p className="section-label" style={{ marginBottom: '4rem', display: 'block' }}>IMPACT</p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '4rem 2rem',
            }}
          >
            {numbers.map((item, i) => (
              <NumberItem key={item.label} item={item} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>
      <div className="hr" />
    </>
  )
}
