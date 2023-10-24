import Image from 'next/image'
import React from 'react'

const Carousel = () => {
  return (
    <div className='py-6'>
        <div className='grid grid-cols-[1.33fr_1.1fr_0.8fr_1.4fr_0.9fr] items-center gap-4'>
            <div className='flex flex-col gap-4'>
                <Image className='rounded-3xl ring-2 ring-gray-300 p-2' src='/asset/img1.jpg' alt='img' width={1000} height={1000} />
                <Image className='rounded-3xl ring-2 ring-gray-300 p-2' src='/asset/img2.jpg' alt='img' width={1000} height={1000} />
            </div>
            <div className='flex flex-col gap-4'>
                <Image className='rounded-3xl ring-2 ring-gray-300 p-2' src='/asset/img3.jpg' alt='img' width={1000} height={1000} />
                <Image className='rounded-3xl ring-2 ring-gray-300 p-2' src='/asset/img4.jpg' alt='img' width={1000} height={1000} />
            </div>
            <div className='flex flex-col gap-4'>
                <Image className='rounded-3xl ring-2 ring-gray-300 p-2' src='/asset/img5.jpg' alt='img' width={1000} height={1000} />
                <Image className='rounded-3xl ring-2 ring-gray-300 p-2' src='/asset/img6.png' alt='img' width={1000} height={1000} />
                <Image className='rounded-3xl ring-2 ring-gray-300 p-2' src='/asset/img7.png' alt='img' width={1000} height={1000} />
            </div>
            <div className='flex flex-col gap-4'>
                <Image className='rounded-3xl ring-2 ring-gray-300 p-2' src='/asset/img8.jpg' alt='img' width={1000} height={1000} />
                <Image className='rounded-3xl ring-2 ring-gray-300 p-2' src='/asset/img9.jpg' alt='img' width={1000} height={1000} />
            </div>
            <div className='flex flex-col gap-4'>
                <Image className='rounded-3xl ring-2 ring-gray-300 p-2' src='/asset/img10.jpg' alt='img' width={1000} height={1000} />
                <Image className='rounded-3xl ring-2 ring-gray-300 p-2' src='/asset/img11.jpg' alt='img' width={1000} height={1000} />
            </div>
        </div>
    </div>
  )
}

export default Carousel