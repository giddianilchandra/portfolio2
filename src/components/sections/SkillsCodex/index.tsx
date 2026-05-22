'use client'

import { motion } from 'framer-motion'
import { GoldText } from '@/components/ui/GoldText'
import { skillCategories } from '@/data/portfolio'

export function SkillsCodex() {
  return (
    <section id="skills" className="relative bg-background py-24 px-4 md:px-8 scan-lines">
      <div className="absolute inset-0 bg-radial-teal opacity-30 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(79,195,247,0.06) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">// TECHNOLOGY MASTERY</p>
          <GoldText text="SKILLS CODEX" as="h2" className="text-5xl md:text-6xl font-bold mb-4" />
          <div className="gold-divider max-w-xs mx-auto mt-4" />
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: cat.color === 'cyan' ? '0 0 24px rgba(201,162,39,0.3)' : '0 0 24px rgba(79,195,247,0.2)' }}
              className="ornate-card rounded-lg p-5 transition-all duration-300 cursor-default"
            >
              {/* Gold top accent */}
              <div className={`h-0.5 w-full mb-4 ${cat.color === 'cyan' ? 'bg-gradient-gold' : 'bg-gradient-to-r from-teal to-transparent'}`} />

              {/* Category name */}
              <h3 className="font-display text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">
                {cat.name}
              </h3>

              {/* Proficiency bar */}
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-mono text-xs text-text-muted">Proficiency</span>
                  <span className={`font-mono text-xs ${cat.color === 'cyan' ? 'text-gold' : 'text-teal'}`}>{cat.proficiency}%</span>
                </div>
                <div className="h-1 bg-surface-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cat.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.08, ease: 'easeOut' }}
                    className={`h-full rounded-full ${cat.color === 'cyan' ? 'bg-gradient-gold' : 'bg-teal'}`}
                  />
                </div>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`font-mono text-xs px-2 py-0.5 rounded border ${cat.color === 'cyan' ? 'text-gold border-border-gold bg-surface-2' : 'text-teal border-border-teal bg-surface-2'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
