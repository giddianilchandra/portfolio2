'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { GoldText } from '@/components/ui/GoldText'
import { certifications } from '@/data/portfolio'

export function AchievementsVault() {
  return (
    <section id="education" className="relative bg-background py-24 px-4 md:px-8 scan-lines">
      <div className="absolute inset-0 bg-radial-gold opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-3">// ACADEMIC & PROFESSIONAL</p>
          <GoldText text="ACHIEVEMENTS & CREDENTIALS" as="h2" className="text-4xl md:text-5xl font-bold mb-4" />
          <div className="gold-divider max-w-xs mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <AchievementCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setRotateX(-y * 10)
    setRotateY(x * 10)
  }

  const icon = cert.badgeColor === 'cyan' ? '◈' : cert.badgeColor === 'purple' ? '◆' : '★'
  const isGold = cert.badgeColor === 'cyan'

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setRotateX(0); setRotateY(0); setHovered(false) }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(201,162,39,0.25)' }}
      className="ornate-card rounded-lg p-6 relative overflow-hidden transition-shadow duration-300"
    >
      {/* Shimmer overlay */}
      {hovered && (
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: `radial-gradient(circle at ${50 + rotateY * 3}% ${50 - rotateX * 3}%, #e8c96a, transparent 60%)` }}
        />
      )}

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs border border-border-gold text-gold px-2 py-0.5 rounded">
            {cert.type === 'education' ? 'EDUCATION' : 'ACHIEVEMENT'}
          </span>
          <span className="text-gold text-2xl">{icon}</span>
        </div>

        <h3 className="font-display text-base font-semibold text-text-primary mb-1 leading-snug">
          {cert.name}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <span className="font-sans text-sm text-text-muted">{cert.issuer}</span>
          <span className="font-mono text-sm font-bold text-gold">{cert.year}</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {cert.skills.map((skill) => (
            <span key={skill} className="font-mono text-xs bg-surface-2 text-text-muted border border-border-gold/40 rounded px-2 py-0.5">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
