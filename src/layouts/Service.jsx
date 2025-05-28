import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ServiveImageOne from '../assets/serviceImage1.png'
import ServiveImageTwo from '../assets/serviceImage2.png'
import ServiveImageThree from '../assets/serviceImage3.png'
import ServiveImagefour from '../assets/serviceImage4.png'
import ServiceCard from '../components/ServiceCard'

const Service = () => {
  return (
    <section className='bg-[#F9F9FB] relative -z-20 pb-[100px]'>
      <Container>
       <Flex className='justify-between relative '>
            <div className='w-[270px] absolute -top-[100px] -z-10 left-0'>
              <Image className='w-full' src={ServiveImageOne}/>
            </div>
            <div className='w-[200px] absolute -top-[100px] -z-10 left-[300px]'>
              <Image className='w-full' src={ServiveImageTwo}/>
            </div>
            <div className='w-[340px] absolute -top-[100px] -z-10 left-[530px]'>
              <Image className='w-full' src={ServiveImageThree}/>
            </div>
            <div className='w-[270px] absolute -top-[100px] -z-10 right-0'>
              <Image className='w-full' src={ServiveImagefour}/>
            </div>
       </Flex>

      <Flex className='justify-between mt-[500px]'>
         <ServiceCard title="53k" text="Happy client"/>
         <ServiceCard title="10k" text="Projects Done"/>
         <ServiceCard title="120" text="Gets Award"/>
         <ServiceCard title="16" className='after:bg-transparent' text="operated yEARS"/>
      </Flex>
       
          
      </Container>
    </section>
  )
}

export default Service