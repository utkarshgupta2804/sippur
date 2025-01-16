import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'  // Import the Image component
import sippur from "./images/sippur.png"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PureFlow Technologies',
  description: 'Revolutionary water purification technology for premium hydration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-3 shadow-md">
          <div className="container mx-auto flex flex-wrap items-center justify-center sm:justify-between px-4">
            {/* Logo container */}
            <div className="flex items-center">
              <Image
                src={sippur}
                alt="Sippur Logo"
                width={160}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Navigation (hidden on smaller screens) */}
            <nav className="hidden sm:flex space-x-4">
              <ul className="flex flex-wrap justify-center sm:justify-end space-x-4">
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
                <li><a href="#product" className="hover:text-accent transition-colors">Product</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* The main content of the page */}
        {children}
      </body>
    </html>
  )
}

