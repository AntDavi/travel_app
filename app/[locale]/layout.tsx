import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {notFound} from 'next/navigation';

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for camping',
}

const locales = ['en', 'pt']

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {

  if (!locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <Navbar/>
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
