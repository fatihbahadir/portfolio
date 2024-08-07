import React from 'react'
import AboutExperience from './aboutExpeience'
import { EDUCATION } from '@/data/data'

const AboutExRight = ({data} : { data: {id: number, title: string, date: string, description: string, firm?: string} [] }) => {
  return (
    <>
        {
            data.map((ed)=>(
                <AboutExperience key={ed.id} title={ed.title} date={ed.date} description={ed.description} firm={ed.firm} />
            ))
        }
    </>
  )
}

export default AboutExRight