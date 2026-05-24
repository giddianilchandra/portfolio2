'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { personalInfo, metrics } from '@/data/portfolio'

const TAGLINES = personalInfo.taglines

function TypewriterCycler({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pause' | 'erasing'>('typing')

  useEffect(() => {
    const current = texts[index]
    let timeout: ReturnType<typeof setTimeout>

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 40)
      } else {
        timeout = setTimeout(() => setPhase('pause'), 2200)
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('erasing'), 200)
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 20)
      } else {
        setIndex(i => (i + 1) % texts.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, phase, index, texts])

  return (
    <span style={{ color: 'var(--accent)', fontFamily: 'inherit', fontSize: '14px' }}>
      {displayed}
      <span className="terminal-cursor" />
    </span>
  )
}

export function HeroSection() {
  const { scrollY } = useScroll()
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 200], [1, 0])

  const handleScrollDown = useCallback(() => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const basePath = process.env.NODE_ENV === 'production' ? '/PortFolio2' : ''
  const resumeUrl = `${basePath}${personalInfo.resumeUrl}`
  const photoUrl  = `${basePath}/photo.jpeg`

  return (
    <section
      id="hero"
      data-section
      className="section hero-section"
    >
      {/* hero-grid: 2fr 1.3fr — text left, glass card right */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1.3fr)',
        gap: '32px',
        alignItems: 'center',
      }} className="hero-grid-responsive">

        {/* ── Left: main text ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">SDET · QA AUTOMATION ENGINEER</span>

          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            margin: '10px 0 16px',
            lineHeight: 1.2,
            color: 'var(--text)',
          }}>
            Building Quality Into{' '}
            <span className="gradient-text">Every Commit.</span>
          </h1>

          <p style={{ color: 'var(--text-muted)', maxWidth: '520px', lineHeight: 1.6, marginBottom: '8px' }}>
            I design and execute end-to-end automation strategies — Playwright, Selenium, Azure DevOps —
            so products ship with confidence, every time.
          </p>

          {/* Typewriter */}
          <div style={{ minHeight: '24px', marginBottom: '24px' }}>
            <TypewriterCycler texts={TAGLINES} />
          </div>

          {/* Buttons — exactly Tejasvini's pill gradient style */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
            <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn btn-primary">
              View Projects
            </a>
            <a href={resumeUrl} download className="btn btn-ghost">
              Download Resume
            </a>
            <button onClick={handleScrollDown} className="btn btn-ghost" style={{ fontSize: '13px' }}>
              Explore experience →
            </button>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >LinkedIn ↗</a>
            <a href={`mailto:${personalInfo.email}`}
              style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >Email ↗</a>
          </div>
        </motion.div>

        {/* ── Right: glass card with circle photo (Tejasvini style) ── */}
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card"
          style={{ textAlign: 'center' }}
        >
          {/* 96px circle photo */}
          <img
            src={photoUrl}
            alt="Anil Chandra Giddi"
            className="profile-photo"
            onError={e => {
              const t = e.target as HTMLImageElement
              t.style.display = 'none'
              const p = t.parentElement
              if (p) {
                const fallback = document.createElement('div')
                fallback.style.cssText = `
                  width:96px;height:96px;border-radius:999px;
                  background:linear-gradient(135deg,#4f8cff,#a363ff);
                  display:flex;align-items:center;justify-content:center;
                  font-size:28px;font-weight:700;color:#fff;
                  margin:0 auto 12px;box-shadow:0 0 24px rgba(79,140,255,0.4);
                `
                fallback.textContent = 'ACG'
                p.insertBefore(fallback, p.firstChild)
              }
            }}
          />

          <h2 style={{ margin: '0 0 4px', fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>
            Anil Chandra Giddi
          </h2>
          <p style={{ margin: '0 0 16px', color: 'var(--text-muted)', fontSize: '13px' }}>
            SDET · Automation Engineer · AI-Augmented QA
          </p>

          {/* Info grid — 2 columns like Tejasvini */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '12px',
            fontSize: '13px',
            textAlign: 'left',
          }}>
            <div>
              <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Experience</span>
              <span style={{ display: 'block', color: 'var(--text)' }}>6.8+ years</span>
            </div>
            <div>
              <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Automation</span>
              <span style={{ display: 'block', color: 'var(--text)' }}>Playwright · Selenium</span>
            </div>
            <div>
              <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Location</span>
              <span style={{ display: 'block', color: 'var(--text)' }}>Hyderabad, India</span>
            </div>
            <div>
              <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Tests Written</span>
              <span style={{ display: 'block', color: 'var(--text)' }}>1200+ automated</span>
            </div>
            <div>
              <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>CI/CD</span>
              <span style={{ display: 'block', color: 'var(--text)' }}>Azure DevOps</span>
            </div>
            <div>
              <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Coverage</span>
              <span style={{ display: 'block', color: 'var(--text)' }}>90%+ achieved</span>
            </div>
          </div>
        </motion.aside>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity, textAlign: 'center', marginTop: '48px', fontSize: '12px', color: 'var(--text-muted)' }}
      >
        <motion.button
          onClick={handleScrollDown}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '20px' }}
          aria-label="Scroll down"
        >
          ↓
        </motion.button>
      </motion.div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid-responsive {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
