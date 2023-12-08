import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './NavBar'
import AuthProvider from './auth/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '神奈川大学会計学研究部',
  description: 'コイララビスワスが作った、神奈川大学の会計学研究部のウェブサイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" className='text-center '>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={inter.className}>
      <AuthProvider>
      <h1>神奈川大学会計学研究部</h1>
      <NavBar/>
      {children}
      </AuthProvider>
      </body>
    </html>
  )
}
