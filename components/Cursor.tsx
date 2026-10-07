'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    if (!dot || !ring || !label) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(animate)
    }
    animate()

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const dataCursor = target.closest('[data-cursor]')?.getAttribute('data-cursor')

      if (dataCursor) {
        label.textContent = dataCursor
        ring.style.width = '56px'
        ring.style.height = '56px'
        ring.style.borderColor = 'var(--accent)'
        dot.style.opacity = '0'
      } else if (target.closest('a, button, [role="button"]')) {
        label.textContent = ''
        ring.style.width = '36px'
        ring.style.height = '36px'
        ring.style.borderColor = 'var(--accent)'
        dot.style.opacity = '1'
      }
    }

    const handleOut = () => {
      label.textContent = ''
      ring.style.width = '28px'
      ring.style.height = '28px'
      ring.style.borderColor = 'rgba(255,255,255,0.25)'
      dot.style.opacity = '1'
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          backgroundColor: 'var(--text)',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
          transition: 'opacity 0.2s',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.25)',
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform',
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          ref={labelRef}
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '7px',
            letterSpacing: '0.2em',
            color: 'var(--accent)',
            fontWeight: 700,
            textTransform: 'uppercase',
          }}
        />
      </div>
    </>
  )
}
