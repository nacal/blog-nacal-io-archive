import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard: React.FC = () => {
  return (
    <article className='flex flex-col justify-between py-4 px-2 w-64 h-64 text-white bg-gray-700 rounded-3xl'>
      <h2 className='text-4xl'>
        <Skeleton count={4} />
      </h2>
      <div className='flex justify-between'>
        <p className='w-8'>
          <Skeleton />
        </p>
        <p className='w-20'>
          <Skeleton />
        </p>
      </div>
    </article>
  )
}

export default SkeletonCard
