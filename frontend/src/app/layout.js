import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '../components/Navigation.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex w-full'>
        <div className='w-1/6'>
          <Navigation />
        </div>
        <div className='w-5/6 pt-20'>
          {children}
        </div>
        </div>
        
      </body>
    </html>
  )
}
