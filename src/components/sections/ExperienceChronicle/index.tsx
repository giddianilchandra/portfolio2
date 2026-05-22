'use client'

import { motion } from 'framer-motion'
import { OrnateCard } from '@/components/ui/OrnateCard'
import { RPGText } from '@/components/ui/RPGText'
import { experiences, metrics } from '@/data/portfolio'

export function ExperienceChronicle() {
  return (
    <section id="experience" className="relative bg-surface-1 py-24 px-4 md:px-8">
      {/* Radial accent */}
      <div className="absolute inset-0 bg-radial-gold opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">// PROFESSIONAL HISTORY</p>
          <RPGText text="CHRONICLE" as="h2" className="text-5xl md:text-6xl font-bold mb-4 gold-shimmer" staggerDelay={55} />
          <div className="gold-divider max-w-xs mx-auto mt-4" />
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="ornate-card rounded-lg p-4 text-center"
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-gold">
                {m.value}{m.suffix}
              </div>
              <div className="font-mono text-xs text-text-muted mt-1 uppercase tracking-wider">{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent opacity-30" />

          <div className="space-y-10 pl-8 md:pl-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 md:-left-20 top-6 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gold animate-pulse-gold shadow-gold-sm" />
                </div>

                <OrnateCard delay={i * 0.1} glowOnHover>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="section-label text-gold text-xs">{exp.period}</span>
                      <h3 className="font-display text-lg md:text-xl font-semibold text-text-primary mt-1">
                        {exp.role}
                      </h3>
                      <p className="font-sans text-sm text-text-muted">{exp.company}</p>
                    </div>
                    <span className="font-mono text-xs text-gold border border-border-gold rounded px-3 py-1 whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2 font-sans text-sm text-text-muted">
                        <span className="text-gold flex-shrink-0 mt-0.5">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="font-mono text-xs bg-surface-2 text-gold border border-border-gold rounded px-2 py-0.5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </OrnateCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
