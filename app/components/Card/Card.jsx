import Image from 'next/image'
import React from 'react'
import { HiOutlineChat, HiOutlineHeart, HiOutlineDownload } from "react-icons/hi";

const Card = ({img}) => {
    return (
        <div className={`bg-white my-6 p-4 ring-2 rounded-3xl ring-gray-200 shadow-xl`}>
            <div className='flex gap-4 items-center'>
                <Image className='w-12 rounded-full' src='/asset/john-doe.jpeg' alt='Auth' width={1000} height={1000} />
                <div>
                    <div className='flex gap-2 items-center'>
                        <span className='font-semibold text-lg'>John Doe</span>
                        <span className='text-blue-400/70'>@JohnDoesDesign</span>
                        <span className='text-sky-400/90'>Oct 25</span>
                    </div>
                </div>
            </div>
            <div className='rounded-2xl pl-10 mt-4'>
                <Image className=' rounded-2xl' src={img} alt='card' width={1000} height={1000} />
                <div className='flex gap-8 mt-3'>
                    <p className='flex items-center gap-1 text-lg text-gray-500'><HiOutlineChat /><span>12K</span></p>
                    <p className='flex items-center gap-1 text-lg text-gray-500'><HiOutlineDownload /><span>32K</span></p>
                    <p className='flex items-center gap-1 text-lg text-gray-500'><HiOutlineHeart /><span>80K</span></p>
                </div>
            </div>
        </div>
    )
}

export default Card