'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { staggerContainerVariants, cardRevealVariants, slideInFromLeftVariants, slideInFromRightVariants } from '@/lib/animations'

function AnimatedBar({ pct, started }: { pct: number; started: boolean }) {
  return (
    <div style={{ width: '100%', height: '6px', background: 'var(--border-soft)', borderRadius: '4px', overflow: 'hidden' }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: started ? `${pct}%` : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
        style={{ height: '100%', background: 'linear-gradient(90deg, #4f8cff, #a363ff)', borderRadius: '4px' }}
      />
    </div>
  )
}

function Counter({ target, suffix = '', started }: { target: number; suffix?: string; started: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    const duration = 1600
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(ease * target))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, target])
  return <>{count.toLocaleString()}{suffix}</>
}

const PROJECT_BREAKDOWN = [
  { name: 'VialtoDirect', company: 'M3BI · Zensar', tool: 'Playwright + TypeScript', count: 1312, pct: 100, color: '#4f8cff' },
  { name: 'Remote Work App', company: 'M3BI · Zensar', tool: 'Selenium + Java', count: 895, pct: 68, color: '#a363ff' },
  { name: 'Smart Supplies', company: 'Signant Health', tool: 'Selenium + Java', count: 657, pct: 50, color: '#4f8cff' },
  { name: 'Insurance Platform', company: 'Lincesoft Solutions', tool: 'Selenium + Cucumber', count: 535, pct: 41, color: '#a363ff' },
]

const TOOL_SPLIT = [
  { tool: 'Playwright + TypeScript', count: 1312, pct: 40 },
  { tool: 'Selenium WebDriver + Java', count: 1688, pct: 51 },
  { tool: 'Rest-Assured (API)', count: 210, pct: 6 },
  { tool: 'DB Validation (MySQL)', count: 105, pct: 3 },
]

const IMPACT_STATS = [
  { label: 'Total Tests Automated', value: 3315, suffix: '', note: 'across all projects' },
  { label: 'Automation Coverage', value: 90, suffix: '%+', note: 'average achieved' },
  { label: 'Defects Caught', value: 500, suffix: '+', note: 'pre-production' },
  { label: 'CI Pipelines Built', value: 4, suffix: '', note: 'Azure DevOps & Jenkins' },
]

export function AutomationSection() {
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="automation" data-section className="section" ref={ref} style={{ borderTop: '1px solid var(--border-soft)' }}>
      <div style={{ marginBottom: '40px' }}>
        <ScrollReveal>
          <span className="eyebrow">Test Automation Impact</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: 'var(--text)', margin: '6px 0 0' }}>
            Automated <span className="gradient-text">3315 Tests</span> Across 6.8 Years
          </h2>
        </ScrollReveal>
      </div>

      {/* Top stat cards */}
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }}
      >
        {IMPACT_STATS.map(s => (
          <motion.div key={s.label} variants={cardRevealVariants} className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'monospace', fontSize: '2rem', fontWeight: 700, color: 'var(--accent)', margin: '0 0 6px' }}>
              <Counter target={s.value} suffix={s.suffix} started={started} />
            </p>
            <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', margin: '0 0 4px' }}>{s.label}</p>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>{s.note}</p>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: '24px', alignItems: 'start' }} className="auto-grid">

        {/* Per-project breakdown */}
        <ScrollReveal variants={slideInFromLeftVariants}>
          <div className="card" style={{ padding: '24px' }}>
            <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '20px' }}>
              Test Count by Project
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {PROJECT_BREAKDOWN.map(p => (
                <div key={p.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                    <div>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{p.name}</span>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginLeft: '8px' }}>{p.company}</span>
                    </div>
                    <span style={{ fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, color: 'var(--accent)' }}>
                      <Counter target={p.count} started={started} />
                    </span>
                  </div>
                  <div style={{ marginBottom: '4px' }}>
                    <AnimatedBar pct={p.pct} started={started} />
                  </div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{p.tool}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Tool distribution */}
        <ScrollReveal variants={slideInFromRightVariants}>
          <div className="card" style={{ padding: '24px' }}>
            <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '20px' }}>
              Distribution by Tool
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {TOOL_SPLIT.map(t => (
                <div key={t.tool}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--text)' }}>{t.tool}</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--accent)' }}>{t.pct}%</span>
                  </div>
                  <AnimatedBar pct={t.pct} started={started} />
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '3px', display: 'block' }}>
                    ~{t.count.toLocaleString()} tests
                  </span>
                </div>
              ))}
            </div>

            {/* Summary badge */}
            <div style={{ marginTop: '24px', padding: '14px', borderRadius: '10px', background: 'rgba(79,140,255,0.08)', border: '1px solid rgba(79,140,255,0.2)', textAlign: 'center' }}>
              <p style={{ fontFamily: 'monospace', fontSize: '20px', fontWeight: 700, color: 'var(--accent)', margin: '0 0 4px' }}>
                <Counter target={3315} started={started} /> tests
              </p>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>automated across 3 companies · 4 domains</p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`@media(max-width:768px){.auto-grid{grid-template-columns:minmax(0,1fr)!important}}`}</style>
    </section>
  )
}
