import React from 'react'
import classes from './Footer.module.css'

function Footer() {
  return (
    <section id='footer' className={classes['container']}>
        <p>&copy; 2024 Ramiro Scerra
        </p>
        <br />
        <p>
            All rights reserved
        </p>
    </section>
  )
}

export default Footer