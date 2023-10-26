import Image from 'next/image'
import React from 'react'

const Review = ({desc, name}) => {
    return (
        <div className='ring-2 ring-gray-200 rounded-2xl p-4 hover:bg-gray-100 hover:cursor-pointer'>
            <div className='w-20 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mb-3'>
                <Image className='rounded-full bg-white p-1' src="/asset/john-doe.jpeg" alt='person' width={1000} height={1000} />
            </div>
            <p className='text-gray-600'>{desc}</p>
            <h5 className='text-sky-500 mt-2'>{name}</h5>
        </div>
    )
}

export default Review