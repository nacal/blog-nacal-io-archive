type Props = {
  title: string
  category: string
  publishedAt: Date
}

const Card: React.FC<Props> = (props) => {
  return (
    <article className='flex flex-col justify-between py-4 px-2 w-80 h-80 text-white bg-gray-700 rounded-3xl'>
      <h2 className='text-5xl'>{props.title}</h2>
      <div className='flex justify-between'>
        <p>{props.category}</p>
        <p>{props.publishedAt}</p>
      </div>
    </article>
  )
}

export default Card
