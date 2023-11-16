import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { StoreProvider } from '@/redux/StoreProvider'
import App from '@/components/App'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Boats and Fun',
  description: 'Boats and Fun fresh fish',
  icons: {
    icon: ['/favicon/favicon.ico?v=4'],
    apple: ['/favicon/apple-touch-icon.png?v=4'],
    shortcut: ['/favicon/apple-touch-icon.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pt-1.5">
          <Header />
        </div>
        <StoreProvider>
          {children}
          <App />
        </StoreProvider>
      </body>
    </html>
  )
}
