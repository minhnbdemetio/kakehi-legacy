import './globals.css'
import './app.scss'
import type { Metadata } from 'next'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import MobileSidebar from './components/MobileSidebar'
import { notoSans, notoSansJP } from './constants/fonts'
import clsx from 'clsx'

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
      <body style={{ width: '100%' }} className={clsx(notoSansJP.variable, notoSans.variable)}>
        <Header />

        <div >
          {children}
        </div>
        <Footer />

        <FloatingButtons />
        <MobileSidebar />
      </body>
    </html>
  )
}
