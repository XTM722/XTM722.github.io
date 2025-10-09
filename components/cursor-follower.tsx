"use client"

import { useEffect, useRef } from "react"

interface Trail {
  x: number
  y: number
  id: number
}

export function CursorFollower() {
  const trailsRef = useRef<Trail[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const idCounterRef = useRef(0)

  useEffect(() => {
    let animationFrameId: number

    const updateTrails = (e: MouseEvent) => {
      const newTrail: Trail = {
        x: e.clientX,
        y: e.clientY,
        id: idCounterRef.current++,
      }

      trailsRef.current.push(newTrail)

      const trailElement = document.createElement("div")
      trailElement.className = "pointer-events-none fixed z-50 h-12 w-12 rounded-full"
      trailElement.style.cssText = `
        left: ${newTrail.x}px;
        top: ${newTrail.y}px;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(168, 85, 247, 0.3) 40%, transparent 70%);
        filter: blur(8px);
        animation: fade-out 0.6s ease-out forwards;
      `

      containerRef.current?.appendChild(trailElement)

      // Remove element after animation completes
      setTimeout(() => {
        trailElement.remove()
        trailsRef.current = trailsRef.current.filter((t) => t.id !== newTrail.id)
      }, 600)
    }

    const throttledUpdate = (e: MouseEvent) => {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          updateTrails(e)
          animationFrameId = 0
        })
      }
    }

    window.addEventListener("mousemove", throttledUpdate)

    return () => {
      window.removeEventListener("mousemove", throttledUpdate)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return <div ref={containerRef} className="pointer-events-none fixed inset-0 z-50" />
}
