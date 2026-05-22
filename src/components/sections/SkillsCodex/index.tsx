'use client'

import { motion, useAnimation } from 'framer-motion'
import { RPGText } from '@/components/ui/RPGText'
import { XPBar } from '@/components/ui/XPBar'
import { skillCategories } from '@/data/portfolio'

export function SkillsCodex() {
  return (
    <section id="skills" className="relative bg-background py-24 px-4 md:px-8 scan-lines">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(79,195,247,0.06) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">// TECHNOLOGY MASTERY</p>
          <RPGText text="SKILLS CODEX" as="h2" className="text-5xl md:text-6xl font-bold mb-4 gold-shimmer" staggerDelay={50} />
          <div className="gold-divider max-w-xs mx-auto mt-4" />
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <BattleCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BattleCard({ cat, index }: { cat: typeof skillCategories[0]; index: number }) {
  const controls = useAnimation()
  const isGold = cat.color === 'cyan'

  const handleMouseEnter = () => {
    controls.start({
      x: [-4, 4, -3, 3, -1, 0],
      transition: { duration: 0.35, ease: 'easeInOut' },
    })
  }

  return (
    <motion.div
      animate={controls}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={handleMouseEnter}
      whileHover={{
        y: -4,
        boxShadow: isGold ? '0 0 28px rgba(201,162,39,0.4)' : '0 0 28px rgba(79,195,247,0.25)',
      }}
      className="ornate-card rounded-lg p-5 transition-all duration-300 cursor-default"
    >
      {/* Gold/teal top accent */}
      <div
        className="h-0.5 w-full mb-4"
        style={{
          background: isGold
            ? 'linear-gradient(90deg, #7a6218, #c9a227, #e8c96a, transparent)'
            : 'linear-gradient(90deg, #4fc3f7, transparent)',
        }}
      />

      {/* Category name */}
      <h3 className="font-display text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">
        {cat.name}
      </h3>

      {/* XP bar */}
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="font-mono text-xs text-text-muted">Proficiency</span>
          <span className={`font-mono text-xs ${isGold ? 'text-gold' : 'text-teal'}`}>
            {cat.proficiency}%
          </span>
        </div>
        <XPBar value={cat.proficiency} color={isGold ? 'gold' : 'teal'} delay={index * 80} />
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-1.5 mt-3">
        {cat.skills.map((skill) => (
          <span
            key={skill}
            className={`font-mono text-xs px-2 py-0.5 rounded border ${
              isGold
                ? 'text-gold border-border-gold bg-surface-2'
                : 'text-teal border-border-teal bg-surface-2'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
