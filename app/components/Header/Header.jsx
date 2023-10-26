'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Text from '../Text/Text'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    console.log('scroll', previous, latest)
    if (latest > previous && latest > 5) {
      setHidden(true);
    }else if( previous > latest){
      setHidden(true)
    }
    else{
      setHidden(false);
    }
  })

  return (
    <motion.div
      variants={{
        visible: {y: 0},
        hidden: {y: '-100%'}
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.70, ease: 'easeInOut' }}
    >
      <div className='max-w-screen-2xl mx-auto py-6'>
        <div className='flex flex-row items-center justify-between'>
          <h2><Text className='text-2xl font-extrabold'>Animate</Text></h2>
          <div className='flex gap-6 items-center'>
            <Link href='/' className='font-bold text-gray-500'>Log in</Link>
            <button className='ring ring-gray-200 px-3 py-2.5 rounded-xl'><Text className='text-xl font-semibold'>Get Started Fee</Text></button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Header