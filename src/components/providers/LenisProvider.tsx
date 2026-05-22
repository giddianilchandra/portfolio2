'use client'

import { createContext, useContext, useEffect, useRef, ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface LenisContextValue {
  lenis: Lenis | null
}

const LenisContext = createContext<LenisContextValue>({ lenis: null })

export function useLenisContext() {
  return useContext(LenisContext)
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      orientation: 'vertical',
      smoothWheel: true,
      autoRaf: false,
    })
    lenisRef.current = lenis

    // Bridge: tell ScrollTrigger to read Lenis' virtual scroll position
    // Lenis v1.3 uses animatedScroll (not scroll)
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value?: number) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.animatedScroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })

    // Keep ScrollTrigger synced on every Lenis scroll event
    // lenis.on returns an unsubscriber in v1.3
    const unsubscribe = lenis.on('scroll', ScrollTrigger.update)

    // Drive Lenis from GSAP's ticker (single RAF loop)
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    // Refresh after full layout settles
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => {
      clearTimeout(refreshTimeout)
      gsap.ticker.remove(tickerCallback)
      unsubscribe()
      ScrollTrigger.getAll().forEach((t) => t.kill())
      lenis.destroy()
    }
  }, [])

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  )
}
