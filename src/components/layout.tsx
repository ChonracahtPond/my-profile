// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Tabs from './navbar'
import Footer from './footer'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Tabs />
      <main className={inter.className}>
        {children}
        {/* <BackToTopButton /> */}
      </main>
      {/* <Footer/> */}
      {/* <div lang="en">
        <body className={inter.className}>{children}</body>
      </div> */}
    </>
  )
}
