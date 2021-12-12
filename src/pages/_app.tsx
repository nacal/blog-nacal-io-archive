import 'styles/reset.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { SkeletonTheme } from 'react-loading-skeleton'
import { Header, Footer, Main } from 'components/layout'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Main>
        <SkeletonTheme baseColor='#bbb' highlightColor='#ddd'>
          <Component {...pageProps} />
        </SkeletonTheme>
      </Main>
      <Footer />
    </>
  )
}

export default MyApp
