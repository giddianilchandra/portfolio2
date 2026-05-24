import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'

export const metadata: Metadata = {
  title: 'Anil Chandra Giddi | SDET Portfolio',
  description:
    'QA Automation Engineer with 6.8 years experience. Expert in Playwright, Selenium, Azure DevOps, and AI-augmented testing. Based in Hyderabad, India.',
  keywords: [
    'QA Engineer',
    'Test Automation Engineer',
    'SDET',
    'Playwright',
    'Selenium',
    'Azure DevOps',
    'Software Testing',
    'Anil Chandra Giddi',
  ].join(', '),
  authors: [{ name: 'Anil Chandra Giddi' }],
  openGraph: {
    title: 'Anil Chandra Giddi — SDET | QA Automation Engineer',
    description:
      '6.8 years of automation expertise — Playwright, Selenium, Azure DevOps, AI-augmented testing.',
    type: 'website',
    url: 'https://giddianilchandra.github.io/PortFolio2',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anil Chandra Giddi — SDET Portfolio',
    description: '6.8 years of QA automation expertise.',
  },
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');var e=document.documentElement;if(t==='light'){e.classList.remove('dark');e.classList.add('light')}else{e.classList.remove('light');e.classList.add('dark')}}catch(e){}`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
