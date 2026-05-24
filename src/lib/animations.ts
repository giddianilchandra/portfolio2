import type { Variants } from 'framer-motion'

// ─── Legacy variants (kept for compatibility) ──────────────────────────────

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export const scalePopVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
}

export const slideInFromRightVariants: Variants = {
  hidden: { x: 120, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const slideInFromLeftVariants: Variants = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const glowPulseVariants: Variants = {
  idle: { boxShadow: '0 0 10px rgba(249,115,22,0.3)' },
  pulse: {
    boxShadow: [
      '0 0 10px rgba(249,115,22,0.3)',
      '0 0 30px rgba(249,115,22,0.7)',
      '0 0 10px rgba(249,115,22,0.3)',
    ],
    transition: { duration: 2, repeat: Infinity },
  },
}

// ─── New scroll-reveal variants ────────────────────────────────────────────

export const sectionHeadingVariants: Variants = {
  hidden: { opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const lineDrawVariants: Variants = {
  hidden: { scaleX: 0, transformOrigin: 'left' },
  visible: {
    scaleX: 1,
    transformOrigin: 'left',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const cardRevealVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export const photoRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, x: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

export const timelineItemLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const timelineItemRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const progressBarVariants: Variants = {
  hidden: { scaleX: 0, transformOrigin: 'left' },
  visible: {
    scaleX: 1,
    transformOrigin: 'left',
    transition: { duration: 1.0, ease: 'easeOut', delay: 0.2 },
  },
}
