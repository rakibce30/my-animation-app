import { Inter, Montserrat, Ubuntu } from 'next/font/google'
import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

const montserrat = Ubuntu({
  weight: ['400', '500', '700',],
  subsets: ['latin']
})

export const metadata = {
  title: 'Animate',
  description: 'Design by Rakibce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header></Header>
        <main className='my-20'>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  )
}
