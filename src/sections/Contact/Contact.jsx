import React from 'react'
import classes from './Contact.module.css'



function Contact() {
  return (
    <section id='contact' className={classes['container']}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action="">
            <div className={classes['formGroup']}>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input 
                    type="text"
                    name='name'
                    id='name'
                    placeholder='Name'
                    required
                />
            </div>
            <div className={classes['formGroup']}>
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input 
                    type="text"
                    name='email'
                    id='email'
                    placeholder='you-email@email.com'
                    required
                />
            </div>
            <div className={classes['formGroup']}>
                <label htmlFor="email" hidden>
                    Message
                </label>
                <textarea
                    name='message'
                    id='message'
                    placeholder='Message'
                    required
                >
                </textarea> 
            </div>
            <input className='hover btn' type="submit" value="Send Message"/>
        </form>
    </section>
  )
}

export default Contact