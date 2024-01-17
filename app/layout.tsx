import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNavigation from './component/navigation/sideNav'
import TopNavigation from './component/navigation/TopNavigation'
import MainCard from './component/game-card/MainCard'
import Footer from './component/footer'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <SideNavigation />
        <TopNavigation />
        
        {children}
        <MainCard />
        <Footer />
      </body>
    </html>
  )
}
