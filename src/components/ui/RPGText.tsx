'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { getAnimeModule, wrapChars } from '@/lib/anime-utils'

interface RPGTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
  className?: string
  staggerDelay?: number
  charClass?: string
}

export function RPGText({ text, as: Tag = 'h2', className, staggerDelay = 40, charClass }: RPGTextProps) {
  const ref = useRef<HTMLElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.innerHTML = wrapChars(text, charClass ?? 'rpg-char')

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting || triggered.current) return
        triggered.current = true

        const mod = await getAnimeModule()
        if (!mod) return

        mod.animate(el.querySelectorAll('.rpg-char'), {
          opacity: [0, 1],
          translateY: [12, 0],
          duration: 120,
          delay: mod.stagger(staggerDelay),
          ease: 'easeOutExpo',
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [text, staggerDelay, charClass])

  const El = Tag as React.ElementType
  return (
    <El
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={cn('font-display', className)}
    />
  )
}
