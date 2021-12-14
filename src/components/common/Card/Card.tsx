import Link from 'next/link'

type Props = {
  title: string
  category: string
  publishedAt: Date
  slug: string
}

const Card: React.FC<Props> = (props) => {
  return (
    <article className='font-bold text-dark bg-light rounded-3xl'>
      <Link href={props.slug} passHref>
        <div className='flex flex-col justify-between p-4 w-64 h-64 cursor-pointer'>
          <h2 className='text-4xl break-words'>{props.title}</h2>
          <div className='flex justify-between'>
            <p>{props.category}</p>
            <p>{props.publishedAt}</p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Card
