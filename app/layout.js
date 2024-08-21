import Navigation from './_components/Navigation'
import Logo from './_components/Logo'

import '@/app/_styles/globals.css'

export const metadata = {
  // title: 'Silly Paradise',
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
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>
        <footer>Copyright by Silly Paradise</footer>
      </body>
    </html>
  )
}
