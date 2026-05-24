'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { personalInfo, metrics } from '@/data/portfolio'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { staggerContainerVariants, cardRevealVariants, slideInFromLeftVariants, slideInFromRightVariants } from '@/lib/animations'

function AnimatedCounter({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    const duration = 1800
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, target])
  return <span style={{ fontFamily: 'monospace', fontSize: '2rem', fontWeight: 700, color: 'var(--accent)' }}>{count}{suffix}</span>
}

function MetricCard({ label, value, suffix, description }: { label: string; value: number; suffix: string; description?: string }) {
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setStarted(true) }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="card" style={{ padding: '20px' }}>
      <AnimatedCounter target={value} suffix={suffix} started={started} />
      <p style={{ fontWeight: 600, color: 'var(--text)', margin: '4px 0 2px', fontSize: '14px' }}>{label}</p>
      {description && <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{description}</p>}
    </div>
  )
}

export function AboutSection({ onBack }: { onBack?: () => void }) {
  return (
    <section id="about" data-section className="section" style={{ borderTop: '1px solid var(--border-soft)' }}>
      <div style={{ marginBottom: '32px' }}>
        <ScrollReveal>
          <span className="eyebrow">About Me</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: 'var(--text)', margin: '6px 0 0' }}>
            Turning Tests Into <span className="gradient-text">Quality Signals</span>
          </h2>
        </ScrollReveal>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: '32px', alignItems: 'start' }} className="about-grid">
        <ScrollReveal variants={slideInFromLeftVariants}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
              I&apos;m a Software Development Engineer in Testing with <strong style={{ color: 'var(--text)' }}>6.8 years</strong> of hands-on experience building robust automation frameworks from the ground up. My expertise spans UI automation with Playwright and Selenium, API testing with Rest-Assured and Postman, and CI/CD pipeline integration on Azure DevOps.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Currently at <strong style={{ color: 'var(--accent)' }}>M3BI — A Zensar Company</strong>, I architect end-to-end test automation solutions for enterprise-scale tax applications. I believe quality isn&apos;t a phase — it&apos;s embedded into every commit.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Beyond traditional testing, I leverage <strong style={{ color: 'var(--text)' }}>AI-augmented tools</strong> including Claude Code, GitHub Copilot, and LLM agents to accelerate test creation and improve defect detection.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
              {[
                { label: `✉ ${personalInfo.email}`, href: `mailto:${personalInfo.email}` },
                { label: 'in LinkedIn', href: personalInfo.linkedin },
              ].map(item => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '999px', border: '1px solid var(--border-soft)', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px', transition: 'all 0.25s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,140,255,0.4)'; e.currentTarget.style.color = 'var(--text)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-soft)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variants={slideInFromRightVariants}>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: '16px' }}>
            {metrics.map(m => (
              <motion.div key={m.label} variants={cardRevealVariants}>
                <MetricCard label={m.label} value={m.value} suffix={m.suffix} description={m.description} />
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>

      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:minmax(0,1fr)!important}}`}</style>
    </section>
  )
}
