import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark (Tejasvini-matching)
        'bg-dark':         '#05060a',
        'bg-dark-surface': '#0f121e',
        'bg-dark-card':    'rgba(15,18,30,0.9)',

        // Light
        'bg-light':         '#f8faff',
        'bg-light-surface': '#f0f4ff',
        'bg-light-card':    '#ffffff',

        // Accent — blue like Tejasvini
        accent:          '#4f8cff',
        'accent-hover':  '#3a7be8',
        'accent-soft':   'rgba(79,140,255,0.4)',
        'accent-muted':  'rgba(79,140,255,0.15)',
        'accent-purple': '#a363ff',

        // Text dark
        'text-dark':           '#f5f7ff',
        'text-dark-secondary': '#9aa0c2',
        'text-dark-muted':     '#6b7394',

        // Text light
        'text-light':           '#1e293b',
        'text-light-secondary': '#64748b',
        'text-light-muted':     '#94a3b8',

        // Borders
        'border-dark':   'rgba(255,255,255,0.08)',
        'border-light':  'rgba(0,0,0,0.10)',
        'border-accent': 'rgba(79,140,255,0.30)',
      },
      fontFamily: {
        // System font like Tejasvini
        body:    ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        display: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono:    ['"SF Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'card':       '0 18px 45px rgba(0,0,0,0.7)',
        'card-light': '0 4px 24px rgba(0,0,0,0.08)',
        'accent-sm':  '0 0 18px rgba(79,140,255,0.55)',
        'accent-md':  '0 0 32px rgba(79,140,255,1)',
        'photo':      '0 0 24px rgba(79,140,255,0.4)',
        'header':     '0 1px 20px rgba(0,0,0,0.3)',
      },
      borderRadius: {
        'xl2': '18px',
        'xl3': '24px',
      },
      animation: {
        'float':   'float 3s ease-in-out infinite',
        'pulse-accent': 'pulseAccent 2s ease-in-out infinite',
        'blink':   'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        pulseAccent: {
          '0%, 100%': { boxShadow: '0 0 18px rgba(79,140,255,0.4)' },
          '50%':      { boxShadow: '0 0 32px rgba(79,140,255,0.8)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
