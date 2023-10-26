'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Text from '../Text/Text'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import HeroButton from '../HeroButton/HeroButton'

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    console.log('scroll', previous, latest)
    if (latest > previous && latest > 5) {
      setHidden(true);
    }else if( previous > latest){
      setHidden(false)
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
      className="fixed top-0 left-0 w-full z-50 bg-white"
    >
      <div className='max-w-screen-2xl mx-auto py-6'>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='text-4xl font-bold'><Text>Animate</Text></h2>
          <div className='flex gap-6 items-center'>
            <Link href='/' className='text-lg text-gray-500'>Log in</Link>
            <HeroButton text='Get Started Free'/>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Header