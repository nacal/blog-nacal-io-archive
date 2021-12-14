import Link from 'next/link'

const Header = () => {
  return (
    <header className='grid place-items-center w-full h-16 bg-gray-300'>
      <Link href='/' passHref>
        <h1 className='font-en cursor-pointer'>blog.nacal.io</h1>
      </Link>
    </header>
  )
}

export default Header
