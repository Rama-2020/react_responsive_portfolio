import React from 'react'
import classes from './Projects.module.css'
import {getImageURL} from '../../utils/image_util'

function Projects({ data }) {
  return (
    <section id='projects' className={classes['container']}>
        <h1 className={classes['sectionsTitle']}>Projects</h1>
        <div className={classes['projectsContainer']}>
        
        {data.map((project) => (
          <div key={project.id}>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
            {console.log(project.imageUrl)}
              <img className={classes['hover']} src={getImageURL(project.imageUrl)} alt={project.title} width={'200px'} />
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
        </div>

    </section>
  )
}

export default Projects