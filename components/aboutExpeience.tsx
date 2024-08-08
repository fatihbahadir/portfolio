import React from 'react'

const AboutExperience = ({firm, title, date, description} : {firm?: string, title: string, date: string, description: string}) => {
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
            <h3 className='font-[500] text-2xl text-white leading-[130%] tracking-[-1%]'>{title}</h3>
            <p className='text-off-white text-lg font-[300] leading-[150%]'>{date}</p>
        </div>
        {
            firm &&
            <div className='-mt-2 text-primary text-lg font-semibold leading-[160%]'>
                {firm}
            </div>
        }
        <div className='text-lg leading-[150%] text-off-white font-[300]'>
        {description}
        </div>
    </div>
  )
}

export default AboutExperience
