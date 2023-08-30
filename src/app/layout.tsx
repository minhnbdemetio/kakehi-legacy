import './globals.css'
import type { Metadata } from 'next'
import './app.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import MobileSidebar from './components/MobileSidebar'
import { notoSansJP } from './constants/fonts'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSansJP.variable}>
        <Header />

        {children}
        <Footer />

        <FloatingButtons />
        <MobileSidebar />
      </body>
    </html>
  )
}
