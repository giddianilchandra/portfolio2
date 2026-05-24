'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { fadeUpVariants } from '@/lib/animations'

interface ScrollRevealProps {
  children?: React.ReactNode
  variants?: Variants
  delay?: number
  className?: string
  once?: boolean
  amount?: number
}

export function ScrollReveal({
  children,
  variants = fadeUpVariants,
  delay,
  className,
  once = true,
  amount = 0.15,
}: ScrollRevealProps) {
  const resolvedVariants: Variants = delay
    ? {
        hidden: variants.hidden,
        visible: {
          ...(variants.visible as object),
          transition: {
            ...((variants.visible as { transition?: object })?.transition ?? {}),
            delay,
          },
        },
      }
    : variants

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={resolvedVariants}
    >
      {children}
    </motion.div>
  )
}
