import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Flex from '../components/Flex'

const Banner = () => {
  return (
    <section className='relative bg-banner bg-center bg-no-repeat bg-cover pt-[500px] pb-[394px] w-full'>
        <div className='absolute top-0 left-0 bg-[#6b62c5e6]  w-full '>
            <Container>
                <div className='text-center mt-[150px] mb-[250px]'>
                    <h1 className='text-[84px] text-[#FAFAFE] font-bold font-open'>yOU’RE UNIQUE.YOUR WEBSITE SHOULD BE TOO</h1>
                    <p className='w-[715px] leading-10 mx-auto text-2xl text-[#E6E5F3] font-normal font-papri mb-6'>A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. </p>
                   <Flex className='justify-center gap-x-5'>
                     <Button text="get free quoto"/>
                     <Button text="Learn More"/>
                   </Flex>
                </div>
            </Container>
        </div>

    </section>
  )
}

export default Banner