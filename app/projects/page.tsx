import ProjectsMain from '@/components/projectsMain'
import { PROJECT_ITEMS } from '@/data/data'
import React from 'react'

const Projects = () => {
  return (
    <>
      {
        PROJECT_ITEMS.map((item, index)=>(
          <ProjectsMain first={index === 0} key={item.id} {...item} />
        ))
      }
    </>
  )
}

export default Projects