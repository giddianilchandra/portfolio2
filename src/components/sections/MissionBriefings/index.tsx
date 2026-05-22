'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { RPGText } from '@/components/ui/RPGText'
import { projects } from '@/data/portfolio'

export function MissionBriefings() {
  return (
    <section id="projects" className="relative bg-surface-1 py-24 px-4 md:px-8">
      <div className="absolute inset-0 bg-radial-gold opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-3">// OPERATION RECORDS</p>
          <RPGText text="MISSION BRIEFINGS" as="h2" className="text-5xl md:text-6xl font-bold mb-4 gold-shimmer" staggerDelay={45} />
          <div className="gold-divider max-w-xs mx-auto mt-4" />
        </div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <MissionCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MissionCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="ornate-card rounded-lg overflow-hidden cursor-pointer"
      onClick={() => setExpanded((v) => !v)}
    >
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Mission code + status */}
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="font-mono text-xs text-text-muted">M-{String(index + 1).padStart(3, '0')}</span>
              <span className="font-mono text-xs border border-gold/50 text-gold px-2 py-0.5 rounded">
                [ {project.status === 'PASS' ? 'COMPLETED' : project.status} ]
              </span>
            </div>
            {/* Project name */}
            <h3 className="font-display text-lg md:text-xl font-semibold text-text-primary mb-1">
              {project.name}
            </h3>
            <p className="font-sans text-sm text-text-muted">{project.tagline}</p>
          </div>
          <motion.span
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-gold font-mono text-2xl flex-shrink-0"
          >
            +
          </motion.span>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="font-mono text-xs bg-surface-2 text-teal border border-border-teal rounded px-2 py-0.5">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Expanded */}
      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-5 md:px-6 pb-6 border-t border-border-gold pt-4">
          <p className="font-sans text-sm text-text-muted mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="font-mono text-xs text-gold uppercase tracking-wider mb-2">Key Outcomes</div>
          <ul className="space-y-1.5">
            {project.highlights.map((h, j) => (
              <li key={j} className="flex items-start gap-2 font-sans text-sm text-text-muted">
                <span className="text-gold flex-shrink-0 mt-0.5">›</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}
