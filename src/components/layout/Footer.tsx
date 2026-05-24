'use client'

import { personalInfo } from '@/data/portfolio'

export function Footer() {
  const basePath = process.env.NODE_ENV === 'production' ? '/PortFolio2' : ''
  const resumeUrl = `${basePath}${personalInfo.resumeUrl}`

  return (
    <footer style={{ borderTop: '1px solid var(--border-soft)', marginTop: '40px' }}>
      {/* Connect section */}
      <div style={{ padding: '64px 20px 48px', textAlign: 'center', borderBottom: '1px solid var(--border-soft)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          {/* Eyebrow */}
          <span className="eyebrow" style={{ fontSize: '12px', letterSpacing: '0.22em' }}>
            Connect Professionally
          </span>

          {/* Arrow */}
          <div style={{ fontSize: '22px', color: 'var(--accent)', margin: '12px 0 32px', opacity: 0.7 }}>↓</div>

          {/* Resume + Email row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
            {/* Resume download */}
            <a
              href={resumeUrl}
              download
              className="btn btn-primary"
              style={{ flexDirection: 'column', gap: '2px', padding: '14px 32px', lineHeight: 1.2 }}
            >
              <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em' }}>Resume</span>
              <span style={{ fontSize: '10px', letterSpacing: '0.16em', opacity: 0.85, textTransform: 'uppercase' }}>Download PDF</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', borderRadius: '999px',
                border: '1px solid var(--border-soft)',
                color: 'var(--text)', textDecoration: 'none', fontSize: '14px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,140,255,0.4)'; e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-soft)'; e.currentTarget.style.color = 'var(--text)' }}
            >
              {personalInfo.email}
              <span style={{ fontSize: '16px' }}>→</span>
            </a>
          </div>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: '24px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>
            Engineered with precision by{' '}
            <span className="gradient-text">Anil Chandra Giddi</span>
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
            Built with Claude Code · Deployed on GitHub Pages · Quality first.
          </p>
        </div>
      </div>
    </footer>
  )
}
