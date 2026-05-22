import type { Metadata } from 'next'
import './globals.css'
import { LenisProvider } from '@/components/providers/LenisProvider'

export const metadata: Metadata = {
  title: 'Anil Chandra Giddi',
  description: 'Portfolio of an SDET with 6.8 years of experience in Playwright, Selenium, Azure DevOps and AI-augmented quality engineering.',
  authors: [{ name: 'Anil Chandra Giddi' }],
  openGraph: {
    title: 'Anil Chandra Giddi — SDET',
    description: '6.8 years of test automation expertise — Playwright, Selenium, Azure DevOps & more.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
