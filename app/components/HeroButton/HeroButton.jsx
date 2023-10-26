import React from 'react'
import Text from '../Text/Text'

const HeroButton = ({text}) => {
  return (
    <div>
        <button className='ring-1 ring-gray-200 px-3 py-2.5 rounded-xl'><Text className='text-xl font-semibold'>{text}</Text></button>
    </div>
  )
}

export default HeroButton