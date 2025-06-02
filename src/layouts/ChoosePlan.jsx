
import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import PlanCard from '../components/PlanCard'

const ChoosePlan = () => {
  return (
    <section className='py-100 bg-[#F9F9FB]'>
        <Container>
            <Flex className='gap-x-[30px] flex-wrap'>
                <PlanCard/>
                <PlanCard/>
                <PlanCard/>
               

            </Flex>
        </Container>
    </section>
  )
}

export default ChoosePlan