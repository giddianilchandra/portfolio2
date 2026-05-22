'use client'

import { useEffect, useRef, useState } from 'react'
import { getAnimeModule } from '@/lib/anime-utils'

interface XPBarProps {
  value: number
  color?: 'gold' | 'teal'
  delay?: number
}

export function XPBar({ value, color = 'gold', delay = 0 }: XPBarProps) {
  const barRef = useRef<HTMLDivElement>(null)
  const triggered = useRef(false)
  const [levelUp, setLevelUp] = useState(false)

  useEffect(() => {
    const el = barRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting || triggered.current) return
        triggered.current = true

        const mod = await getAnimeModule()
        if (!mod) return

        mod.animate(el, {
          width: [`0%`, `${value}%`],
          duration: 900,
          delay,
          ease: 'easeOutQuart',
          onComplete: () => {
            setLevelUp(true)
            setTimeout(() => setLevelUp(false), 1200)
          },
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, delay])

  const gradientStyle =
    color === 'gold'
      ? 'linear-gradient(90deg, #7a6218, #c9a227, #e8c96a)'
      : 'linear-gradient(90deg, #0e5a7a, #4fc3f7, #a8e6fa)'

  const glowColor = color === 'gold' ? 'rgba(201,162,39,0.8)' : 'rgba(79,195,247,0.8)'

  return (
    <div className="relative">
      <div className="h-1.5 bg-surface-2 rounded-full overflow-visible relative">
        <div
          ref={barRef}
          style={{
            width: '0%',
            height: '100%',
            background: gradientStyle,
            borderRadius: '9999px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: -2,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: glowColor,
              boxShadow: `0 0 8px 2px ${glowColor}`,
            }}
          />
        </div>
      </div>

      {levelUp && (
        <span
          className="absolute -top-5 right-0 font-mono text-xs font-bold text-gold-light animate-pulse"
          style={{ textShadow: '0 0 8px #e8c96a' }}
        >
          LVL UP ▲
        </span>
      )}
    </div>
  )
}
