import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { createClient } from './api/contentful'

const Home: NextPage = () => {
  const [posts, setPosts] = useState<any>(['aaa'])

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
    <div>
      <Head>
        <title>nacal.blog.io</title>
        <meta name='description' content='nacal.blog.io' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>nacal.blog.io</h1>
        <p>{posts[0].fields.title}</p>
        <p>{posts[0].fields.category.fields.name}</p>
        <p>{posts[0].fields.publishedAt}</p>
        <p>{posts[0].fields.body}</p>
      </main>
    </div>
  )
}

export default Home
