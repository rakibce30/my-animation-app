import React from 'react'
import Text from '../Text/Text'
import Container from '../Container/Container'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='border-t-2 border-gray-300'>
      <Container>
        <div className='flex justify-between items-center px-6 py-3'>
        <h2 className='text-4xl font-bold'><Text>Animate</Text></h2>
          <nav>
            <ul className='flex gap-4'>
              <Link href='/' className='text-lg text-gray-500'>Blog</Link>
              <Link href='/' className='text-lg text-gray-500'>Pricing</Link>
              <Link href='/' className='text-lg text-gray-500'>Contact</Link>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  )
}

export default Footer