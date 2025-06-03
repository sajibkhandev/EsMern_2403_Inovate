import React from 'react'
import Flex from '../components/Flex'

const FeatureToggle = ({className}) => {
  return (
    <Flex className={`gap-x-[80px] px-7 my-5 rounded-lg ${className} `}>
        <div className='relative '>
            <div className='absolute top-1 left-0 w-[25px] rounded-full h-[25px] bg-[#1BBF00]'></div>
            <div className='absolute top-1 left-[15px] w-[25px] rounded-full h-[25px] bg-[#CBC8F0]'></div>
        </div>
        <p className='md:w-[366px] text-sm md:text-lg text-four font-normal font-papri'>We make processes and technology work efficiently together.</p>
    </Flex>
  )
}

export default FeatureToggle