import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { createClient } from 'libs/contentful'

const Post: NextPage = () => {
  const [post, setPost] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      const client = createClient()
      try {
        const res = await client
          .getEntries({
            content_type: 'blogPost',
            order: '-sys.createdAt',
            'sys.id': router.query.slug,
          })
          .catch((error: unknown) => {
            return error
          })
        console.log('res', res.items)
        setPost(res.items[0])
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <>
      {!post ? (
        <></>
      ) : (
        <>
          <h2>{post.fields.title}</h2>
          <p>{post.fields.category.fields.name}</p>
          <p>{post.fields.publishedAt.substr(0, 10)}</p>
          <p>{post.fields.body}</p>
        </>
      )}
    </>
  )
}

export default Post
