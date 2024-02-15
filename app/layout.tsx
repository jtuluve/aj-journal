import type { Metadata } from 'next'

import '../styles/globals.css'
import { Footer, Navbar } from '@/components'

export const metadata: Metadata = {
  title: 'AJIMS Journal',
  description: 'Official Journal Website AJIMS',
  icons: {
    icon:
      [
        'favicon.ico?v=4',
      ],
    apple: [
      'apple-touch-icon.png?v=4',
    ],
    shortcut: [
      'apple-touch-icon.png?v'
    ]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
