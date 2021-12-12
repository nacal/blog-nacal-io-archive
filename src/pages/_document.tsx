import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
  // const url = '<https://example.com>'
  // const title = 'Demo Next.js'
  // const description = 'Demo of Next.js'

  return (
    <Html lang='ja'>
      <Head>
        {/* Change the contents of `<Head>` as needed. */}
        {/* <meta name='description' content={description} />
        <meta name='theme-color' content='#333' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content={url} />
        <meta property='og:description' content={description} />
        <meta property='og:site_name' content={title} />
        <meta property='og:image' content={`${url}/ogp.png`} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='format-detection' content='telephone=no' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' /> */}
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700|Quicksand:400,700&display=swap&subset=japanese'
        />
      </Head>
      <body className='font-ja bg-dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
