import React from 'react'

function Project({ title, description, imageUrl, link }) {
  return (
    <div key={project.id} className={classes['project']}>
        <a href={link} target='_blank'>
        
        <img className={classes['hover']} src={getImageURL(imageUrl)} alt={title} />
        
        <h3>{title}</h3>
        <p>{description}</p>
        </a>
    </div>
  )
}

export default Project