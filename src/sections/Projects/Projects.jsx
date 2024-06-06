import React from 'react'
import classes from './Projects.module.css'
import {getImageURL} from '../../utils/image_util'

function Projects({ data }) {
  return (
    <section id='projects' className={classes['container']}>
        <h1 className={classes['sectionsTitle']}>Projects</h1>
        <div className={classes['projectsContainer']}>
        
          {data.map((project) => (
            <div key={project.id} className={classes['project']}>
              <a href={project.link} target='_blank'>
              {console.log(project.imageUrl)}
                <img className={classes['hover']} src={getImageURL(project.imageUrl)} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              </a>
            </div>
          ),
          )
          }
        </div>

    </section>
  )
}

export default Projects