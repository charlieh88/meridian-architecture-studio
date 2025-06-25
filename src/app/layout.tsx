import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meridian Architecture Studio - Award-Winning Design',
  description: 'Award-winning architecture studio creating transformative spaces that inspire, function beautifully, and stand the test of time. Commercial, residential, and cultural projects.',
  keywords: 'architecture, design, commercial buildings, residential design, sustainable architecture, award-winning architects',
  authors: [{ name: 'Meridian Architecture Studio' }],
  openGraph: {
    title: 'Meridian Architecture Studio - Where Vision Meets Precision',
    description: 'Award-winning architecture studio creating transformative spaces that inspire, function beautifully, and stand the test of time.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
