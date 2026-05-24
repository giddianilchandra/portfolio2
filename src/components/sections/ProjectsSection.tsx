'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/portfolio'
import type { Project } from '@/types'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { staggerContainerVariants, cardRevealVariants } from '@/lib/animations'

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        className="glass-card"
        style={{ position: 'relative', maxWidth: '640px', width: '100%', maxHeight: '85vh', overflowY: 'auto' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', lineHeight: 1 }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          <CloseIcon />
        </button>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', margin: 0 }}>{project.name}</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>{project.tagline}</p>
          </div>
          <span style={{ flexShrink: 0, padding: '4px 10px', background: 'rgba(34,197,94,0.15)', color: '#22c55e', fontSize: '11px', fontFamily: 'monospace', borderRadius: '999px', border: '1px solid rgba(34,197,94,0.3)' }}>
            {project.status}
          </span>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.7, marginBottom: '20px' }}>
          {project.description}
        </p>

        {/* CI Pipeline */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '11px', fontFamily: 'monospace', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '12px' }}>CI Pipeline</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.ciStages.map(stage => (
              <div
                key={stage.name}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '8px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', fontSize: '12px', color: '#4ade80', fontFamily: 'monospace' }}
              >
                ✓ {stage.name}
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '11px', fontFamily: 'monospace', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '12px' }}>Highlights</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {project.highlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>›</span> {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.techStack.map(t => (
            <span key={t} style={{ padding: '3px 10px', borderRadius: '999px', border: '1px solid var(--border-soft)', fontSize: '12px', color: 'var(--text-muted)' }}>
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectsSection({ onBack }: { onBack?: () => void }) {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" data-section className="section" style={{ borderTop: '1px solid var(--border-soft)' }}>
      <div style={{ marginBottom: '40px' }}>
        <ScrollReveal>
          <span className="eyebrow">Portfolio</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: 'var(--text)', margin: '6px 0 0' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </ScrollReveal>
      </div>

      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}
      >
        {projects.map(project => {
          const total = project.testResults.passed + project.testResults.failed + project.testResults.skipped
          const passRate = Math.round((project.testResults.passed / total) * 100)

          return (
            <motion.button
              key={project.id}
              variants={cardRevealVariants}
              onClick={() => setSelected(project)}
              className="card"
              style={{ padding: '24px', textAlign: 'left', cursor: 'pointer', width: '100%', background: 'none' }}
              onMouseEnter={e => { const h3 = e.currentTarget.querySelector('h3'); if (h3) (h3 as HTMLElement).style.color = 'var(--accent)' }}
              onMouseLeave={e => { const h3 = e.currentTarget.querySelector('h3'); if (h3) (h3 as HTMLElement).style.color = 'var(--text)' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', margin: 0, transition: 'color 0.2s' }}>{project.name}</h3>
                <span style={{ flexShrink: 0, padding: '3px 8px', background: 'rgba(34,197,94,0.15)', color: '#22c55e', fontSize: '11px', fontFamily: 'monospace', borderRadius: '999px', border: '1px solid rgba(34,197,94,0.3)', marginLeft: '8px' }}>
                  {project.status}
                </span>
              </div>

              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>{project.tagline}</p>

              {/* Pass rate bar */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                  <span style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>Pass Rate</span>
                  <span style={{ fontFamily: 'monospace', color: '#22c55e' }}>{passRate}%</span>
                </div>
                <div style={{ width: '100%', height: '4px', background: 'var(--border-soft)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', background: 'linear-gradient(90deg, #22c55e, #4ade80)', borderRadius: '4px', width: `${passRate}%` }} />
                </div>
              </div>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {project.techStack.slice(0, 3).map(t => (
                  <span key={t} style={{ padding: '3px 8px', borderRadius: '999px', border: '1px solid var(--border-soft)', fontSize: '12px', color: 'var(--text-muted)' }}>{t}</span>
                ))}
                {project.techStack.length > 3 && (
                  <span style={{ padding: '3px 8px', borderRadius: '999px', border: '1px solid var(--border-soft)', fontSize: '12px', color: 'var(--text-muted)' }}>+{project.techStack.length - 3}</span>
                )}
              </div>

              <span style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 500 }}>View Details →</span>
            </motion.button>
          )
        })}
      </motion.div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
