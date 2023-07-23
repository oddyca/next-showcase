import './globals.scss'
import type { Metadata } from 'next'
import { Header, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'Event Tickets | Next App',
  description: 'Discover tickets for any event.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
