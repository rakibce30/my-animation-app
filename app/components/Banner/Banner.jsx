'use client'
import React from 'react'
import Text from '../Text/Text'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { bannerBgVariants, bannerImgVariants, upToDown } from '../animate'
import HeroButton from '../HeroButton/HeroButton'



const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-8 items-center justify-between mt-16'>
            <motion.div
                variants={upToDown}
                initial='hidden'
                animate='visible'
                className='w-full lg:w-2/5'>
                <h2 className='text-5xl font-bold mb-3 lg:leading-[58px]'>Create <Text>beautiful</Text>, shareable screenshots with ease.</h2>
                <p className='text-gray-600 mb-4 text-lg'>Wrap is a powerful tool for brands to design and edit images for social media, product development, presentations, and much more.</p>
                <HeroButton text='Stay with us'/>
                <p className='text-gray-600 mt-4 text-lg'>Join and thousands more that love Wrap.</p>
            </motion.div>
            <div className='w-full lg:w-3/5 relative'>
                <motion.div
                    variants={bannerBgVariants}
                    initial='hidden'
                    animate='visible'
                >
                    <Image
                        src='/asset/banner_bg.png'
                        alt='banner bg'
                        width={1000}
                        height={1000}
                        className='opacity-80 rounded-2xl shadow-xl w-[1024px]'
                    />
                </motion.div>
                <motion.div
                    variants={bannerImgVariants}
                    initial='hidden'
                    animate='visible'
                    className='absolute max-w-[500px] shadow-xl rounded-3xl top-0 left-[30%] -translate-x-[30%]'
                >
                    <Image
                        src='/asset/banner_img.jpg'
                        alt='banner img'
                        width={1000}
                        height={1000}
                        className='rounded-3xl'
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Banner