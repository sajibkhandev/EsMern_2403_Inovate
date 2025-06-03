import React from 'react'

const CommonSubHeading = ({text,className}) => {
  return (
    <p className={`text-four text-sm md:text-lg font-normal font-papri ${className}`}>{text}</p>
  )
}

export default CommonSubHeading