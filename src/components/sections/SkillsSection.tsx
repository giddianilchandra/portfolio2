'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories } from '@/data/portfolio'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { staggerContainerVariants, cardRevealVariants, progressBarVariants } from '@/lib/animations'

export function SkillsSection({ onBack }: { onBack?: () => void }) {
  const [activeId, setActiveId] = useState(skillCategories[0].id)
  const active = skillCategories.find(s => s.id === activeId) ?? skillCategories[0]

  return (
    <section id="skills" data-section className="section" style={{ borderTop: '1px solid var(--border-soft)' }}>
      <div style={{ marginBottom: '36px' }}>
        <ScrollReveal>
          <span className="eyebrow">Technical Expertise</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: 'var(--text)', margin: '6px 0 0' }}>
            Skills & <span className="gradient-text">Arsenal</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Category tabs */}
      <ScrollReveal>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              style={{
                padding: '8px 16px',
                borderRadius: '999px',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeId === cat.id ? 'linear-gradient(135deg, #4f8cff, #a363ff)' : 'transparent',
                color: activeId === cat.id ? '#fff' : 'var(--text-muted)',
                border: activeId === cat.id ? '1px solid transparent' : '1px solid var(--border-soft)',
                boxShadow: activeId === cat.id ? '0 0 18px rgba(79,140,255,0.45)' : 'none',
              }}
              onMouseEnter={e => { if (activeId !== cat.id) { e.currentTarget.style.borderColor = 'rgba(79,140,255,0.4)'; e.currentTarget.style.color = 'var(--accent)' } }}
              onMouseLeave={e => { if (activeId !== cat.id) { e.currentTarget.style.borderColor = 'var(--border-soft)'; e.currentTarget.style.color = 'var(--text-muted)' } }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Active category detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="card"
          style={{ padding: '24px', marginBottom: '40px' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', margin: 0 }}>{active.name}</h3>
            <span style={{ fontFamily: 'monospace', color: 'var(--accent)', fontSize: '13px' }}>{active.proficiency}% proficiency</span>
          </div>

          {/* Progress bar */}
          <div style={{ width: '100%', height: '6px', background: 'var(--border-soft)', borderRadius: '4px', overflow: 'hidden', marginBottom: '20px' }}>
            <motion.div
              className="skill-bar-fill"
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              animate={{ scaleX: active.proficiency / 100, transformOrigin: 'left' }}
              transition={{ duration: 1.0, ease: 'easeOut', delay: 0.1 }}
              style={{ height: '100%' }}
            />
          </div>

          {/* Skill tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {active.skills.map(skill => (
              <span
                key={skill}
                style={{ padding: '6px 14px', borderRadius: '8px', background: 'rgba(79,140,255,0.12)', color: 'var(--accent)', fontSize: '13px', fontWeight: 500, border: '1px solid rgba(79,140,255,0.2)' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* All skills overview grid */}
      <ScrollReveal>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '20px' }}>
          All Categories Overview
        </p>
      </ScrollReveal>
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}
      >
        {skillCategories.map(cat => (
          <motion.button
            key={cat.id}
            variants={cardRevealVariants}
            onClick={() => setActiveId(cat.id)}
            className="card"
            style={{
              padding: '16px',
              textAlign: 'left',
              cursor: 'pointer',
              borderColor: activeId === cat.id ? 'rgba(79,140,255,0.4)' : undefined,
              width: '100%',
              background: 'none',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>{cat.name}</span>
              <span style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--accent)' }}>{cat.proficiency}%</span>
            </div>
            <div style={{ width: '100%', height: '4px', background: 'var(--border-soft)', borderRadius: '4px', overflow: 'hidden' }}>
              <motion.div
                variants={progressBarVariants}
                style={{ width: `${cat.proficiency}%` }}
                className="skill-bar-fill"
              />
            </div>
          </motion.button>
        ))}
      </motion.div>
    </section>
  )
}
