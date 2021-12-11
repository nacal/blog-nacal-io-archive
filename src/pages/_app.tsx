import 'styles/reset.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { Header, Footer, Main } from 'components/common'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  )
}

export default MyApp
