'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface OrnateCardProps {
  children: React.ReactNode
  className?: string
  glowOnHover?: boolean
  delay?: number
}

export function OrnateCard({ children, className, glowOnHover = true, delay = 0 }: OrnateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={glowOnHover ? { boxShadow: '0 0 30px rgba(201,162,39,0.25)' } : undefined}
      className={cn('ornate-card rounded-lg p-6 transition-all duration-300', className)}
    >
      {children}
    </motion.div>
  )
}
