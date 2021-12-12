type Props = {
  title: string
  category: string
  publishedAt: Date
}

const Card: React.FC<Props> = (props) => {
  return (
    <article className='flex flex-col justify-between p-4 w-64 h-64 text-dark bg-light rounded-3xl'>
      <h2 className='text-4xl font-bold break-words'>{props.title}</h2>
      <div className='flex justify-between'>
        <p>{props.category}</p>
        <p>{props.publishedAt}</p>
      </div>
    </article>
  )
}

export default Card
