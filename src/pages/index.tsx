import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Card } from 'components/common'
import { createClient } from 'libs/contentful'

const Home: NextPage = () => {
  const [posts, setPosts] = useState<any>(null)

  useEffect(() => {
    ;(async () => {
      const client = createClient()
      try {
        const res = await client
          .getEntries({
            content_type: 'blogPost',
            order: '-sys.createdAt',
          })
          .catch((error: unknown) => {
            return error
          })
        console.log('res', res.items)
        setPosts(res.items)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <>
      <Head>
        <title>nacal.blog.io</title>
        <meta name='description' content='nacal.blog.io' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>nacal.blog.io</h1>

      {!posts ? (
        <p>loading</p>
      ) : (
        <Card
          title={posts[0].fields.title}
          category={posts[0].fields.category.fields.name}
          publishedAt={posts[0].fields.publishedAt}
        />
      )}
    </>
  )
}

export default Home
