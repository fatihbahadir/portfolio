import React from 'react'
import Experience from './experience'
import { EDUCATION } from '@/data/data'

const ExperienceContainer = ({data} : { data: {id: number, title: string, date: string, description: string, firm?: string} [] }) => {
  return (
    <>
        {
            data.map((ed)=>(
                <Experience key={ed.id} title={ed.title} date={ed.date} description={ed.description} firm={ed.firm} />
            ))
        }
    </>
  )
}

export default ExperienceContainer