import React from 'react'
import Image from '../components/Image'


const Card = ({image,title,text,classNamep}) => {
  return (
    <div className='group bg-[#FFFFFF] w-[370px] h-[395px] rounded-[20px] flex flex-col justify-center items-center px-7 text-center hover:bg-[#6B62C5] duration-300'>
        <Image  src={image}/>
        <h3 className='group-hover:text-[#FAFAFE] duration-300 text-third text-[30px] font-opne font-bold pt-8'>{title}</h3>
        <p className={`group-hover:text-[#FAFAFE] duration-300 text-lg text-four font-papri font-normal ${classNamep}`}>{text}</p>
        <a className='group-hover:after:bg-[#fafafe80] group-hover:text-[#FAFAFE] text-lg text-third font-open font-bold mt-5 relative z-10 after:-z-10 after:absolute after:-top-[5px] after:-right-[14px] after:bg-[#1BBF00] after:w-[34px] after:h-[40px] after:content-[""] after:rounded-r-[100px] hover:after:w-[130px] after:duration-500 hover:after:rounded-l-[100px]' href="">Read more</a>

    </div>
  )
}

export default Card