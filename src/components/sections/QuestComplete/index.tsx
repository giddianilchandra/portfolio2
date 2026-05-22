'use client'

import { motion } from 'framer-motion'
import { ParticleField } from '@/components/ui/ParticleField'
import { GoldText } from '@/components/ui/GoldText'
import { personalInfo } from '@/data/portfolio'

export function QuestComplete() {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 bg-background overflow-hidden scan-lines">
      <ParticleField count={50} />

      <div className="absolute inset-0 bg-radial-gold opacity-40 pointer-events-none" />

      {/* Top diagonal cut */}
      <div className="absolute top-0 inset-x-0 h-16 bg-surface-1"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

      {/* Corner ornaments */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-gold opacity-30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-gold opacity-30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-gold opacity-30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-gold opacity-30" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-6"
        >
          // QUEST COMPLETE
        </motion.p>

        <GoldText
          text="READY FOR THE NEXT QUEST"
          as="h2"
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
        />

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="gold-divider max-w-xs mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-sans text-text-muted mb-10 leading-relaxed"
        >
          All systems operational. 6.8 years of quality engineering expertise, ready to deploy.
        </motion.p>

        {/* Contact buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(201,162,39,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="font-display text-sm tracking-widest px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-background transition-all duration-300 w-full sm:w-auto"
          >
            CONNECT ON LINKEDIN
          </motion.a>
          <motion.a
            href={personalInfo.resumeUrl}
            download
            whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(79,195,247,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="font-display text-sm tracking-widest px-10 py-4 border border-teal text-teal hover:bg-teal hover:text-background transition-all duration-300 w-full sm:w-auto"
          >
            DOWNLOAD RESUME
          </motion.a>
        </motion.div>

        {/* Email */}
        <motion.a
          href={`mailto:${personalInfo.email}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="font-mono text-sm text-text-muted hover:text-gold transition-colors duration-200"
        >
          {personalInfo.email}
        </motion.a>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 font-mono text-xs text-text-muted/40"
        >
          Built with Claude Code · Deployed on GitHub Pages
        </motion.div>
      </div>
    </section>
  )
}
