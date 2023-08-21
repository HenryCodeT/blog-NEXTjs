import Link from 'next/link';
import React, { ReactNode } from 'react'

interface ChildComponentProps {
  children: ReactNode;
}

const NavBar: React.FC<ChildComponentProps> = ({ children }) => {
  return (
    <div className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between text-white'>
          <div>{children}</div>
          <Link href={'/'}><p className='mx-10'>Home</p></Link>
        </div>
      </div>
    </div>
  )
}
export default NavBar;