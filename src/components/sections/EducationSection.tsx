'use client'

import { motion } from 'framer-motion'
import { certifications } from '@/data/portfolio'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import {
  staggerContainerVariants,
  cardRevealVariants,
  slideInFromLeftVariants,
  slideInFromRightVariants,
} from '@/lib/animations'

const ACHIEVEMENTS = [
  { icon: '🤖', title: 'Automation Pioneer', year: '2019', desc: 'Built first automation framework from scratch' },
  { icon: '🧠', title: 'AI-Augmented Engineer', year: '2026', desc: 'LLM-assisted test generation' },
  { icon: '🎯', title: '1200+ Tests Automated', year: '2024', desc: 'Across all projects combined' },
  { icon: '📊', title: '90%+ Coverage', year: '2023', desc: 'Average automation coverage achieved' },
  { icon: '🛡️', title: 'Zero Critical Escapes', year: '2024', desc: '500+ defects caught pre-production' },
]

const CAREER_TIMELINE = [
  { year: '2019', label: 'SDET — Lincesoft' },
  { year: '2021', label: 'TAE — Signant' },
  { year: '2023', label: 'SE — M3BI/Zensar' },
  { year: '2026', label: 'AI-Augmented QA' },
]

export function EducationSection({ onBack }: { onBack?: () => void }) {
  return (
    <section id="education" data-section className="section" style={{ borderTop: '1px solid var(--border-soft)' }}>
      <div style={{ marginBottom: '40px' }}>
        <ScrollReveal>
          <span className="eyebrow">Background</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: 'var(--text)', margin: '6px 0 0' }}>
            Education & <span className="gradient-text">Achievements</span>
          </h2>
        </ScrollReveal>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '40px', alignItems: 'start', marginBottom: '40px' }} className="edu-grid">
        {/* Education cards */}
        <ScrollReveal variants={slideInFromLeftVariants}>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '20px' }}>
            Academic Credentials
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {certifications.map(cert => (
              <div key={cert.id} className="card" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '10px' }}>
                  <h4 style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text)', margin: 0, lineHeight: 1.4 }}>{cert.name}</h4>
                  <span style={{ flexShrink: 0, fontFamily: 'monospace', fontSize: '11px', color: 'var(--accent)', background: 'rgba(79,140,255,0.12)', padding: '3px 8px', borderRadius: '6px' }}>
                    {cert.year}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>{cert.issuer}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cert.skills.map(s => (
                    <span key={s} style={{ padding: '3px 8px', borderRadius: '999px', border: '1px solid var(--border-soft)', fontSize: '11px', color: 'var(--text-muted)' }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Achievement badges */}
        <ScrollReveal variants={slideInFromRightVariants}>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '20px' }}>
            Career Achievements
          </p>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: '12px' }}
          >
            {ACHIEVEMENTS.map(a => (
              <motion.div key={a.title} variants={cardRevealVariants} className="card" style={{ padding: '16px' }}>
                <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>{a.icon}</span>
                <p style={{ fontWeight: 500, fontSize: '13px', color: 'var(--text)', lineHeight: 1.3, margin: '0 0 4px' }}>{a.title}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 6px', lineHeight: 1.4 }}>{a.desc}</p>
                <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--accent)' }}>{a.year}</span>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>

      {/* Career progression timeline */}
      <ScrollReveal>
        <div className="card" style={{ padding: '28px' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '32px' }}>
            Career Progression
          </p>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '11px', left: 0, right: 0, height: '2px', background: 'var(--border-soft)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {CAREER_TIMELINE.map((item, i) => (
                <div key={item.year} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: `${100 / CAREER_TIMELINE.length}%` }}>
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '999px', border: '2px solid var(--accent)', position: 'relative', zIndex: 1,
                    background: i === CAREER_TIMELINE.length - 1 ? 'var(--accent)' : 'var(--bg)',
                  }} />
                  <span style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--accent)', marginTop: '10px' }}>{item.year}</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px', lineHeight: 1.3 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      <style>{`@media(max-width:768px){.edu-grid{grid-template-columns:minmax(0,1fr)!important}}`}</style>
    </section>
  )
}
