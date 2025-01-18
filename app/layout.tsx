import type { Metadata } from 'next'
import React from 'react'
import '../styles/globals.css'
import Footer  from '../components/Footer' 
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: 'AJIMS Journal',
  description: 'Official Journal Website AJIMS dev by Gauresh, Jnanesh, Vikram, Jyothi, Nidhi, Himanshu, Milan',
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
