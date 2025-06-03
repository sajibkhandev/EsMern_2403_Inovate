import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import FooterLogo from '../assets/logo.png'
import List from '../components/List'

const Footer = () => {
  return (
    <footer className='pt-[126px] pb-20 bg-[#48409C]'>
        <Container>
           <Flex>
                    <div className='w-3/6'>
                    <Image src={FooterLogo}/>
                    <p className='text-white text-lg font-open font-normal w-[449px] pt-11'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                    
                    </div>
                    <div className='w-1/6'>
                     <strong className='text-[#FEFEFE] text-2xl font-open font-semibold '>Features</strong>
                        <ul className='flex flex-col gap-y-[30px] mt-12'>
                            <List text="Home"/>
                            <List text="About"/>
                            <List text="Benifit"/>
                            <List text="Pricing"/>
                            <List text="Blog"/>
                        </ul>
                    
                    
                    </div>
                    <div className='w-1/6'>
                     <strong className='text-[#FEFEFE] text-2xl font-open font-semibold '>Products</strong>
                        <ul className='flex flex-col gap-y-[30px] mt-12'>
                            <List text="Task Management"/>
                            <List text="Company growth"/>
                            <List text="Time tracking"/>
                       
                        </ul>
                        


                    
                    
                    </div>
                    <div className='w-1/6'>
                     <strong className='text-[#FEFEFE] text-2xl font-open font-semibold '>Support</strong>
                        <ul className='flex flex-col gap-y-[30px] mt-12'>
                            <List text="Customer service"/>
                            <List text="Accessibility"/>
                            <List text="Contact us"/>
                        </ul>
                    
                    </div>
                    
           </Flex>


           <Flex className='justify-between  text-white pt-20'>
               <p className='text-lg text-[#FEFEFE] font-normal font-open'>@20201 Innovate.All rights reserved.</p>
            <Flex className='gap-x-[60px]'>
                <p className='text-lg text-[#FEFEFE] font-normal font-open'>Terms & condition</p>
                <p className='text-lg text-[#FEFEFE] font-normal font-open'>Terms & condition</p>
            </Flex>
           </Flex>

        </Container>
    </footer>
  )
}

export default Footer