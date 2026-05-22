'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GoldTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  className?: string
  shimmer?: boolean
}

export function GoldText({ text, as: Tag = 'h2', className, shimmer = true }: GoldTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tag className={cn(shimmer ? 'gold-shimmer' : 'text-gold', 'font-display', className)}>
        {text}
      </Tag>
    </motion.div>
  )
}
