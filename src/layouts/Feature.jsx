import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import CommonHeading from '../components/CommonHeading'
import CommonSubHeading from '../components/CommonSubHeading'
import Button from '../components/Button'
import FeatureToggle from '../components/FeatureToggle'

const Feature = () => {
  return (
    <section className='bg-[#FDFDFD] py-24'>
        <Container>
            <Flex>
                <div className='w-1/2'>
                <FeatureToggle />
                <FeatureToggle className='bg-white py-[42px]'/>
                <FeatureToggle/>
                <FeatureToggle/>
                <FeatureToggle/>
                </div>

                <div className='w-1/2 pl-[140px]'>
                    <CommonHeading text="Why Choose Us"/>
                    <CommonSubHeading className='w-[393px] pt-3 pb-10' text="We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs."/>
                    <Button text="Contact Us"/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Feature