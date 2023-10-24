import Link from 'next/link'
import React from 'react'
import Text from '../Text/Text'

const Header = () => {
  return (
    <div>
      <div className='max-w-screen-lg mx-auto py-6'>
        <div className='flex flex-row items-center justify-between'>
          <h2><Text className='text-2xl font-extrabold'>Animate</Text></h2>
          <div className='flex gap-6 items-center'>
            <Link href='/' className='font-bold text-gray-500'>Log in</Link>
            <button className='ring ring-gray-200 px-3 py-2.5 rounded-xl'><Text className='text-xl font-semibold'>Get Started Fee</Text></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header