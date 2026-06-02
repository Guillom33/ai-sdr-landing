import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI SDR — Générez 3x plus de meetings',
  description:
    'Notre IA SDR analyse vos prospects et génère des emails ultra-personnalisés qui déclenchent de vraies conversations commerciales. Rejoignez la waitlist.',
  openGraph: {
    title: 'AI SDR — Générez 3x plus de meetings',
    description: 'Emails IA ultra-personnalisés qui convertissent 3x mieux.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  )
}
