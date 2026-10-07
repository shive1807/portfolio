'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const navItems = [
  { num: '01', label: 'HOME', href: '#' },
  { num: '02', label: 'WORK', href: '#work' },
  { num: '03', label: 'SYSTEMS', href: '#systems' },
  { num: '04', label: 'ABOUT', href: '#about' },
  { num: '05', label: 'EXPERIENCE', href: '#experience' },
  { num: '06', label: 'CONTACT', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLAnchorElement[]>([])

  useEffect(() => {
    if (!overlayRef.current) return

    if (open) {
      gsap.set(overlayRef.current, { visibility: 'visible' })
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.35, ease: 'power2.out' })
      gsap.fromTo(
        itemsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, duration: 0.55, ease: 'power3.out', delay: 0.1 }
      )
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => {
          if (overlayRef.current) {
            gsap.set(overlayRef.current, { visibility: 'hidden' })
          }
        },
      })
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* Top bar */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '1.5rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.4em',
            color: 'var(--text)',
            textDecoration: 'none',
          }}
        >
          SB
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            background: 'transparent',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'none',
            padding: '0.25rem 0',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.76rem',
              letterSpacing: '0.35em',
              color: 'var(--muted)',
            }}
          >
            {open ? 'CLOSE' : 'MENU'}
          </span>

          {/* Hamburger lines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '20px' }}>
            <span
              style={{
                display: 'block',
                height: '1px',
                backgroundColor: 'var(--muted)',
                width: '100%',
                transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
                transition: 'transform 0.3s ease',
              }}
            />
            <span
              style={{
                display: 'block',
                height: '1px',
                backgroundColor: 'var(--muted)',
                width: '70%',
                marginLeft: 'auto',
                opacity: open ? 0 : 1,
                transition: 'opacity 0.3s ease',
              }}
            />
            <span
              style={{
                display: 'block',
                height: '1px',
                backgroundColor: 'var(--muted)',
                width: '100%',
                transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
        </button>
      </header>

      {/* Fullscreen overlay */}
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 90,
          background: 'rgba(8,8,8,0.96)',
          backdropFilter: 'blur(4px)',
          opacity: 0,
          visibility: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '4rem 2.5rem',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navItems.map((item, i) => (
            <a
              key={item.num}
              ref={(el) => { if (el) itemsRef.current[i] = el }}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '1.5rem',
                textDecoration: 'none',
                padding: '0.5rem 0',
              }}
              onMouseEnter={(e) => {
                const label = e.currentTarget.querySelector('.nav-label') as HTMLElement
                if (label) label.style.color = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                const label = e.currentTarget.querySelector('.nav-label') as HTMLElement
                if (label) label.style.color = 'var(--text)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.2em',
                  color: 'var(--muted)',
                  minWidth: '2rem',
                }}
              >
                {item.num}
              </span>
              <span
                className="nav-label"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 700,
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  lineHeight: 1,
                  color: 'var(--text)',
                  transition: 'color 0.2s ease',
                }}
              >
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
