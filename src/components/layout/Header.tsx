'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/providers/ThemeProvider'
import { personalInfo } from '@/data/portfolio'

const NAV_LINKS = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'education',  label: 'Education' },
  { id: 'automation', label: 'Automation' },
]

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export function Header() {
  const { theme, toggle } = useTheme()
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const ids = ['hero', ...NAV_LINKS.map(l => l.id)]
    const observers: IntersectionObserver[] = []

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.25, rootMargin: '0px 0px -50% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }, [])

  const basePath = process.env.NODE_ENV === 'production' ? '/PortFolio2' : ''
  const resumeUrl = `${basePath}${personalInfo.resumeUrl}`

  return (
    <>
      {/* Sticky header — exactly Tejasvini's glass blur pattern */}
      <header className="site-header">
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', height: 'var(--nav-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', gap: '16px' }}>

          {/* Brand — name on left */}
          <button
            onClick={() => scrollTo('hero')}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'none' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{ fontWeight: 600, letterSpacing: '0.03em', color: 'var(--text)', fontSize: '15px' }}>
                Anil Chandra Giddi
              </span>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                SDET · QA Automation
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="hidden md:flex">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`nav-link${activeSection === link.id ? ' active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <a
              href={resumeUrl}
              download
              className="btn btn-primary hidden sm:inline-flex"
              style={{ padding: '8px 18px', fontSize: '13px' }}
            >
              Resume
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="nav-link"
              style={{ padding: '8px 10px' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="nav-link md:hidden"
              style={{ padding: '8px 10px' }}
              aria-label="Toggle menu"
            >
              <span style={{ display: 'block', width: '18px', height: '2px', background: 'currentColor', margin: '3px 0', transition: '0.25s ease' }} />
              <span style={{ display: 'block', width: '18px', height: '2px', background: 'currentColor', margin: '3px 0', transition: '0.25s ease' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 'var(--nav-height)',
              left: 0,
              right: 0,
              zIndex: 40,
              background: 'rgba(5,6,10,0.98)',
              borderBottom: '1px solid var(--border-soft)',
              padding: '10px 20px 16px',
            }}
            className="md:hidden"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`nav-link${activeSection === link.id ? ' active' : ''}`}
                  style={{ textAlign: 'left', width: '100%' }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={resumeUrl}
                download
                className="btn btn-primary"
                style={{ marginTop: '8px', justifyContent: 'center' }}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
