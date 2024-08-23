import Navigation from './_components/Navigation'
import Logo from './_components/Logo'

import '@/app/_styles/globals.css'

// getting fonts directly from google instead of downloading to the client side.
import { Josefin_Sans } from 'next/font/google'
import Header from './_components/Header'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
})

//console.log(josefin)

export const metadata = {
  title: {
    template: '%s / Silly Paradise',
    default: 'Welcome / Silly Paradise',
  },

  description:
    'Escape to our cozy cabin rentals, nestled in breathtaking natural settings perfect for a serene getaway. Enjoy modern amenities like fully equipped kitchens, Wi-Fi, and fireplaces, while being surrounded by stunning views of mountains, forests, or lakes. Ideal for families, couples, and solo travelers, our pet-friendly cabins offer easy access to outdoor activities such as hiking, fishing, and wildlife watching. Book your stay today and experience the tranquility and beauty of nature at its finest.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}
