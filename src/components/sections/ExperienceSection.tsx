'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/portfolio'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import {
  staggerContainerVariants,
  timelineItemLeftVariants,
  timelineItemRightVariants,
  scalePopVariants,
} from '@/lib/animations'

export function ExperienceSection({ onBack }: { onBack?: () => void }) {
  return (
    <section id="experience" data-section className="section" style={{ borderTop: '1px solid var(--border-soft)' }}>
      <div style={{ marginBottom: '48px' }}>
        <ScrollReveal>
          <span className="eyebrow">Career Journey</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: 'var(--text)', margin: '6px 0 0' }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        {/* Vertical center line */}
        <div className="timeline-line" style={{ display: 'none', position: 'absolute', left: '50%', top: 0, bottom: 0, transform: 'translateX(-50%)' }} />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={exp.id}
                variants={isLeft ? timelineItemLeftVariants : timelineItemRightVariants}
                className="card"
                style={{ padding: '24px' }}
              >
                {/* Header */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text)', margin: 0 }}>{exp.company}</h3>
                    <p style={{ color: 'var(--accent)', fontWeight: 500, margin: '4px 0 0', fontSize: '14px' }}>{exp.role}</p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <span style={{ display: 'block', fontFamily: 'monospace', fontSize: '12px', color: 'var(--text-muted)' }}>{exp.period}</span>
                    <span style={{ display: 'block', fontFamily: 'monospace', fontSize: '12px', color: 'var(--accent)' }}>{exp.duration}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.highlights.map((h, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                  {exp.metrics.map(m => (
                    <span
                      key={m.label}
                      style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(79,140,255,0.12)', color: 'var(--accent)', fontSize: '12px', fontFamily: 'monospace' }}
                    >
                      {m.label}: {m.value}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {exp.techStack.map(t => (
                    <span
                      key={t}
                      style={{ padding: '3px 10px', borderRadius: '999px', border: '1px solid var(--border-soft)', fontSize: '12px', color: 'var(--text-muted)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
