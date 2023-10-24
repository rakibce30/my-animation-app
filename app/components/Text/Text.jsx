import React from 'react'

const Text = ({children, className}) => {
    const textBG = {
        backgroundImage: `url('/asset/text_bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
    }
  return (
    <span style={textBG} className={`${className}`}>{children}</span>
  )
}

export default Text