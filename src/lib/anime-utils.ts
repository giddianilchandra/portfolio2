'use client'

// Anime.js v4 uses named exports: animate(), stagger() — no default export
// This loader guards against SSR and lazily imports on first use

import type { JSAnimation } from 'animejs'

type AnimeModule = typeof import('animejs')

let _mod: AnimeModule | null = null

export async function getAnimeModule(): Promise<AnimeModule | null> {
  if (typeof window === 'undefined') return null
  if (_mod) return _mod
  _mod = await import('animejs')
  return _mod
}

// Split text into character spans for RPG reveal
export function wrapChars(text: string, className = 'char'): string {
  return text
    .split('')
    .map(
      (ch) =>
        `<span class="${className}" style="display:inline-block;opacity:0">${ch === ' ' ? '&nbsp;' : ch}</span>`
    )
    .join('')
}
