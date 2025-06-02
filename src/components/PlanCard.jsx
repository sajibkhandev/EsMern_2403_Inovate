import React from 'react'
import Image from '../components/Image'
import PlanImage from '../assets/planIcon.png'

const PlanCard = () => {
  return (
   <div className='group relative bg-[#FFFFFF] w-[370px] py-[60px] px-[59px] rounded-[20px] flex flex-col justify-center items-center text-center hover:bg-[#6B62C5] duration-300'>
    <h3 className='group-hover:text-[#FAFAFE] duration-300 text-third text-[30px] font-open font-bold'>Basic</h3>
    <div className='bg-[#ECEDF0] group-hover:bg-transparent duration-300 w-[370px] h-[170px] absolute top-[120px] left-0'>
        <Image src={PlanImage}/>
       
    </div>
    <h4 className='text-primary text-5xl font-open font-extrabold pt-[216px] pb-3'>160</h4>
    <p className='group-hover:text-[#FAFAFE] duration-300 text-four text-lg font-papri font-normal'> Responsive Design Dynamic Elements Service Pages Custom Design & Features</p>

   </div>
  )
}

export default PlanCard