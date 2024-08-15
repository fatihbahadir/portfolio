import React from 'react'

const Skill = ({ data, description} : { data: string[], description: string}) => {
  return (
    <>
    <div className='text-off-white text-[16px] lg:text-[17px] xl:text-lg font-[300] leading-[150%]'>
      {description}
    </div>
    <div className='flex flex-wrap gap-3'>
      {data.map((item, index)=>(
        <span key={index} className='px-4 lg:px-5 xl:px-6 break-words flex-center text-white rounded-[100px] border-2 border-[#484848] text-[12px] lg:text-[14px] xl:text-[16px] font-bold leading-[100%] py-3 lg:py-4 xl:py-5'>
          {item}
          </span>
      ))}
    </div>
    
    </>
  )
}

export default Skill