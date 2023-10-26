'use client'
import React, { useRef } from 'react'
import Card from '../Card/Card'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeIn } from '../animate'

const Testimonial = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const leftX = useTransform(scrollYProgress, [0, 1], ["-90%", "-50%"])
  const rightX = useTransform(scrollYProgress, [0, 1], ["-10%", "-50%"])
  const leftRotate = useTransform(scrollYProgress, [0, 1], ["-13deg", "0deg"])
  const rightRotate = useTransform(scrollYProgress, [0, 1], ["13deg", "0deg"])

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      className='relative h-[600px] w-full'>
      <div className='absolute left-1/2 -translate-x-1/2 w-[550px] z-10'>
        <Card img='/asset/airbnb-2.jpg'></Card>
      </div>
      <motion.div
        style={{ x: leftX, y: '10%', rotate: leftRotate }}
        className='absolute left-1/2 w-[500px]'
      >
        <Card img='/asset/twitter.jpg'></Card>
      </motion.div>
      <motion.div
        style={{ x: rightX, y: '10%', rotate: rightRotate }}
        className='absolute left-1/2 w-[500px]'
      >
        <Card img='/asset/mailchimp-2.jpg'></Card>
      </motion.div>
    </motion.div>
  )
}

export default Testimonial