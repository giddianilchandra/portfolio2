'use client'

import { personalInfo } from '@/data/portfolio'

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-soft)', padding: '32px 20px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
        <span>© {new Date().getFullYear()} Anil Chandra Giddi</span>
        <span style={{ fontFamily: 'monospace', fontSize: '11px' }}>Built with Next.js · Framer Motion · Tailwind</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
