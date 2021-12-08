import 'styles/reset.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { Header, Footer } from 'components/common'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
