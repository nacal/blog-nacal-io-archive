type Props = {
  title: string
  category: string
  publishedAt: Date
}

const Card: React.FC<Props> = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.category}</p>
      <p>{props.publishedAt}</p>
    </article>
  )
}

export default Card
