import React from 'react'

const Experience = ({firm, title, date, description} : {firm?: string, title: string, date: string, description: string}) => {
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex flex-col xl:flex-row gap-2 lg:gap-0 justify-between xl:items-center'>
            <h3 className='font-[500] text-lg lg:text-xl xl:text-2xl text-white leading-[130%] tracking-[-1%]'>{title}</h3>
            <p className='text-off-white text-[16px] lg:text-[17px] xl:text-lg font-[300] leading-[150%]'>{date}</p>
        </div>
        {
            firm &&
            <div className='-mt-2 text-primary text-[16px] lg:text-[17px] xl:text-lg font-semibold leading-[160%]'>
                {firm}
            </div>
        }
        <div className='text-[16px] lg:text-[17px] xl:text-lg leading-[150%] text-off-white font-[300]'>
        {description}
        </div>
    </div>
  )
}

export default Experience
