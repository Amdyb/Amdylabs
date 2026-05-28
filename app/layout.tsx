import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AMDY LABS — Construire l\'Avenir Numérique de l\'Afrique',
  description: 'AMDY LABS conçoit des applications mobiles, sites web, logiciels et plateformes numériques pour les entreprises africaines.',
  keywords: 'African technology company, software development Africa, app development Senegal, POS system Africa',
  openGraph: {
    title: 'AMDY LABS — Construire l\'Avenir Numérique de l\'Afrique',
    description: 'We create modern apps, websites, and software solutions that help African businesses grow, compete, and scale.',
    url: 'https://amdylabs.com',
    siteName: 'AMDY LABS',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
