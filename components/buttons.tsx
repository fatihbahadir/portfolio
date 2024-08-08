import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

const Buttons = ({text, onClick, Icon} : {text:string, onClick: ()=>void, Icon: IconType}) => {
  return (
    <div className="flex items-center justify-start mt-3 lg:mt-8 gap-5">
    <button onClick={onClick} className="bg-primary h-[40px] lg:h-[54px] px-6 pr-16 rounded-[100px] group uppercase text-main-bg relative font-bold text-[13px] lg:text-[16px]">
      {text}
      <div className="w-3 h-3 rounded-full absolute top-[50%] -translate-y-1/2 group-hover:scale-[300%] transition-all bg-main-bg right-5 items-center justify-center flex">
        <Icon className="hidden group-hover:block transition-all text-white group-hover:scale-50" />
      </div>
    </button>
    <span className="w-[40px] h-[40px] lg:w-[54px] lg:h-[54px] rounded-full flex items-center justify-center bg-[#222222] cursor-pointer hover:scale-105 transition-all">
      <FaLinkedinIn className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] text-primary" />
    </span>
    <span className="w-[40px] h-[40px] lg:w-[54px] lg:h-[54px] rounded-full flex items-center justify-center bg-[#222222] cursor-pointer hover:scale-105 transition-all">
      <FaGithub className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] text-primary" />
    </span>
  </div>
  )
}

export default Buttons
