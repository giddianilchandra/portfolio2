'use client'

import { motion } from 'framer-motion'
import { ParticleField } from '@/components/ui/ParticleField'
import { personalInfo } from '@/data/portfolio'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background scan-lines">
      <ParticleField count={70} />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-gold opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-teal opacity-30 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(79,195,247,0.08) 0%, transparent 60%)' }} />

      {/* Top decorative line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

      {/* Corner ornaments */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-gold opacity-40" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-gold opacity-40" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-gold opacity-40" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-gold opacity-40" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Role tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold opacity-60" />
          <span className="section-label text-gold">SDET · 6.8 YEARS · HYDERABAD</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold opacity-60" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-8xl font-bold gold-shimmer mb-4 leading-tight tracking-wide"
        >
          ANIL CHANDRA
          <br />
          <span className="text-4xl sm:text-5xl md:text-7xl">GIDDI</span>
        </motion.h1>

        {/* Role subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-mono text-teal text-sm md:text-base uppercase tracking-widest mb-10"
        >
          AI-Augmented QA Engineer
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="gold-divider max-w-xs mx-auto mb-10"
        />

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(201,162,39,0.5)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-display text-sm tracking-widest px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-background transition-all duration-300"
          >
            VIEW EXPERIENCE
          </motion.button>
          <motion.a
            href={personalInfo.resumeUrl}
            download
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(79,195,247,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="font-display text-sm tracking-widest px-8 py-3 border border-teal text-teal hover:bg-teal hover:text-background transition-all duration-300"
          >
            DOWNLOAD RESUME
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="section-label text-xs opacity-50">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-surface-1"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
    </section>
  )
}
