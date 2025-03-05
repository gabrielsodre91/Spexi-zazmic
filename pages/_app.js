import 'bulma/css/bulma.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '../components/Navbar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Spexi</title>
        <meta name="description" content="Spexi - Property Intel AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 