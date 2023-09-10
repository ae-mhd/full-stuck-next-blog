import { Footer, Navbar } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' m-w-full overflow-x-hidden'>
        <div className='bg-bg text-softTextColor  '>
          <div className='  h-full max-w-[475px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1366px] 2xl:max-w-[1536px] md:px-10  mx-auto px-20 '>
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
