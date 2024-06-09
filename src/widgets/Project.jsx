import React from 'react'


import {getImageURL} from '../utils/image_util'

function Project({  title, description, imageUrl, link }) {
  return (
        <a href={link} target='_blank'>
            <img className="hover" src={getImageURL(imageUrl)} alt={title}/>
            
            <h3>{title}</h3>
            <p>{description}</p>
        </a>
  )
}

export default Project