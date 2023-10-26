import Image from 'next/image'
import React from 'react'
import Review from '../Review/Review'

const ReviewCarousel = () => {
  return (
    <div className='grid grid-cols-6 mx-4 items-center gap-4 min-w-[100vw]'>
      <Review desc={`"Loving Wrap! I'm a screenshot monster and this is lovely."`} name='Rakib'></Review>
      <Review desc={`"I'm honestly floored by how thoughtful and intuitive the setup experience is. Bravo!"`} name='Rafi'></Review>      
      <Review desc={`"I'm honestly floored by how thoughtful and intuitive the setup experience is. Bravo!"`} name='Rafi'></Review>      
      <Review desc={`"I'm honestly floored by how thoughtful and intuitive the setup experience is. Bravo!"`} name='Rafi'></Review>      
      <Review desc={`"I'm honestly floored by how thoughtful and intuitive the setup experience is. Bravo!"`} name='Rafi'></Review>      
      <Review desc={`"I'm honestly floored by how thoughtful and intuitive the setup experience is. Bravo!"`} name='Rafi'></Review>      
    </div>
  )
}

export default ReviewCarousel