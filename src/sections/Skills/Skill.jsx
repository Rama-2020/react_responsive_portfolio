import React from 'react'
import classes from './Skills.module.css'
import SkillList from '../../widgets/SkillList'
import { dummySkills } from '../../dummyData/dummyData'


function Skills({ data }) {
  return (
    <section id='skills' className={classes['container']}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={classes['skillList']}>
          <SkillList dataSkills={dummySkills}/>

        </div>
    </section>
  )
}

export default Skills