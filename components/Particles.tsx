'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  opacityDir: number
  opacitySpeed: number
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    const particles: Particle[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 0.9 + 0.3,
      speedX: (Math.random() - 0.5) * 0.1,
      speedY: (Math.random() - 0.5) * 0.1,
      opacity: Math.random() * 0.3 + 0.03,
      opacityDir: Math.random() > 0.5 ? 1 : -1,
      opacitySpeed: Math.random() * 0.002 + 0.0005,
    }))

    let rafId: number

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.speedX
        p.y += p.speedY
        p.opacity += p.opacityDir * p.opacitySpeed

        if (p.opacity > 0.35) { p.opacity = 0.35; p.opacityDir = -1 }
        if (p.opacity < 0.03) { p.opacity = 0.03; p.opacityDir = 1 }
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`
        ctx.fill()
      }

      rafId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
