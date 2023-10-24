import React from 'react'
import Text from '../Text/Text'
import Image from 'next/image'

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-8 items-center justify-between'>
            <div className='w-full lg:w-1/3'>
                <h2 className='text-4xl font-bold mb-2'>Create <Text>beautiful</Text>, shareable screenshots with ease.</h2>
                <p className='text-gray-600 mb-4 text-lg'>Wrap is a powerful tool for brands to design and edit images for social media, product development, presentations, and much more.</p>
                <button className='ring ring-gray-200 px-3 py-2.5 rounded-xl'><Text className='text-xl font-semibold'>Get Started Fee</Text></button>
                <p className='text-gray-600 mt-4 text-lg'>Join and thousands more that love Wrap.</p>
            </div>
            <div className='w-full lg:w-2/3 relative '>
                <Image 
                src='/asset/banner_bg.png' 
                alt='banner bg' 
                width={1000} 
                height={1000}
                className='opacity-80 shadow-xl w-[1024px] '
                />
                <Image 
                src='/asset/banner_img.jpg' 
                alt='banner img' 
                width={1000} 
                height={1000}
                className='absolute max-w-[400px] top-10 rounded-3xl left-1/2 transform -translate-x-1/2 rotate-2 -skew-y-2'
                />
            </div>
        </div>
    )
}

export default Banner