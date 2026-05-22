'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  onVisible?: (id: string) => void
}

export function SectionWrapper({ id, children, className, onVisible }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!onVisible || !ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible(id) },
      { threshold: 0.3 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [id, onVisible])

  return (
    <section ref={ref} id={id} className={cn('relative', className)}>
      {children}
    </section>
  )
}
