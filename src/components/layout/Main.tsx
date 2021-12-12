import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Main: React.FC<Props> = ({ children }) => {
  return <main className='container mx-auto min-h-screen'>{children}</main>
}

export default Main
