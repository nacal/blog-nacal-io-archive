import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Main: React.FC<Props> = ({ children }) => {
  return <main className='min-h-screen'>{children}</main>
}

export default Main
