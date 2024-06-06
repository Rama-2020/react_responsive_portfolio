import React from 'react'
import classes from './Projects.module.css'
import Project from '../../widgets/Project'


function Projects({ data }) {
  return (
    <section id='projects' className={classes['container']}>
        <h1 className={classes['sectionsTitle']}>Projects</h1>
        <div className={classes['projectsContainer']}>
          {data.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl} // Correctly pass imageUrl
              link={project.link}    
            />
            ),
            )
            }
        </div>

    </section>
  )
}

export default Projects