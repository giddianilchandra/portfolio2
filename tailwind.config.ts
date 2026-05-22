import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#06080f',
        'surface-1': '#0d1220',
        'surface-2': '#111827',
        gold: '#c9a227',
        'gold-light': '#e8c96a',
        'gold-dim': '#7a6218',
        teal: '#4fc3f7',
        'text-primary': '#f0e6d3',
        'text-muted': '#8a7f6e',
        'border-gold': 'rgba(201,162,39,0.25)',
        'border-teal': 'rgba(79,195,247,0.2)',
      },
      fontFamily: {
        display: ['Cinzel', 'Georgia', 'serif'],
        sans: ['Nunito Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        gold: '0 0 24px rgba(201,162,39,0.5), 0 0 48px rgba(201,162,39,0.2)',
        'gold-sm': '0 0 10px rgba(201,162,39,0.4)',
        teal: '0 0 20px rgba(79,195,247,0.4)',
        glass: '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(201,162,39,0.08)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #c9a227 0%, #e8c96a 50%, #c9a227 100%)',
        'gradient-dark': 'linear-gradient(180deg, #06080f 0%, #0d1220 100%)',
        'radial-gold': 'radial-gradient(ellipse at center, rgba(201,162,39,0.15) 0%, transparent 70%)',
        'radial-teal': 'radial-gradient(ellipse at center, rgba(79,195,247,0.1) 0%, transparent 70%)',
      },
      animation: {
        'gold-shimmer': 'goldShimmer 3s linear infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        goldShimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(201,162,39,0.3)' },
          '50%': { borderColor: 'rgba(201,162,39,0.7)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(201,162,39,0.4)' },
          '50%': { boxShadow: '0 0 20px rgba(201,162,39,0.8)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
