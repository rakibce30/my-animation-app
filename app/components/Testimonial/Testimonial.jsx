import React from 'react'
import Card from '../Card/Card'

const Testimonial = () => {
  return (
    <div className='relative'>
        <Card className='w-[500px] top-0 z-10' img='/asset/airbnb-2.jpg'></Card>
        <Card className='w-[400px] translate-y-20' img='/asset/twitter.jpg'></Card>
        <Card className='w-[400px] translate-y-20' img='/asset/mailchimp-2.jpg'></Card>
    </div>
  )
}

export default Testimonial