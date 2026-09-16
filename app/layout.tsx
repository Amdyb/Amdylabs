import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AMDY LABS — Construire l\'Avenir Numérique de l\'Afrique',
  description: 'AMDY LABS conçoit des applications mobiles, sites web, logiciels et plateformes numériques pour les entreprises africaines.',
  keywords: 'African technology company, software development Africa, app development Senegal, POS system Africa',
  openGraph: {
    title: 'AMDY LABS — Construire l\'Avenir Numérique de l\'Afrique',
    description: 'AMDY LABS conçoit des applications mobiles, sites web, logiciels et plateformes numériques pour les entreprises africaines.',
    url: 'https://amdylabs.com',
    siteName: 'AMDY LABS',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
