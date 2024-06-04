import React from 'react'
import classes from './Projects.module.css'
import projectImg1 from '../../assets/images/projects/img0.png'

function Projects() {
  return (
    <section id='projects' className={classes['container']}>
        <h1 className={classes['sectionsTitle']}>Projects</h1>
        <div className={classes['projectsContainer']}>
            <a href="https://google.com" target='_blank'>
                <img className={classes["hover"]} src={projectImg1} alt="Project 1" width={'200px'}/>
            </a>
            <h3>Project 1</h3>
            <p>Description 1</p>
        </div>

    </section>
  )
}

export default Projects