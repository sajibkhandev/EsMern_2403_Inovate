import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Card from '../components/Card'
import CommonHeading from '../components/CommonHeading'
import CommonSubHeading from '../components/CommonSubHeading'
import Button from '../components/Button'
import CardOne from '../assets/card1.png'

const CardLayout = () => {
  return (
    <section className='py-100 bg-five'>
        <Container>
           <Flex className='gap-[30px] flex-wrap'>
             <div className=' w-[370px] h-[395px]'>
                <CommonHeading text="What We Do"/>
                <CommonSubHeading className='pt-5 pb-14 leading-8' text="We are now a team of strategists, engineers, designers, and marketers who both use and develop technology "/>
                <Button text="Contact Us"/>
             </div>
             <Card image={CardOne} title="web Design & Dev " classNamep='pt-6' text="Social Media has changed the way we interact & do business while creating"/>
             <Card image={CardOne} title="Software Dev " classNamep='w-[250px]' text="Content Marketing is the other fold of online advertisement. If you are looking to build"/>
             <Card image={CardOne} title="web Design & Dev " classNamep='pt-6' text="Social Media has changed the way we interact & do business while creating"/>
             <Card image={CardOne} title="Digital Marketing" classNamep='w-[250px]' text="Content Marketing is the other fold of online advertisement. If you are looking to build"/>
             <Card image={CardOne} title="Software Dev " classNamep='pt-6' text="Social Media has changed the way we interact & do business while creating"/>
            
          
            
           </Flex>
        </Container>
    </section>
  )
}

export default CardLayout