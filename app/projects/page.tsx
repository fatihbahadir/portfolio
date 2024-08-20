import ProjectsMain from '@/components/projects/index';
import { PROJECT_ITEMS } from '@/data/data'
import React from 'react'

const Projects = () => {
  return (
    <>
      {
        PROJECT_ITEMS.map((item, index)=>(
          <ProjectsMain last={index === PROJECT_ITEMS.length - 1} first={index === 0} key={item.id} {...item} />
        ))
      }
    </>
  )
}

export default Projects