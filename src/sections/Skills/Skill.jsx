import React from 'react'
import classes from './Skills.module.css'
import SkillList from '../../widgets/SkillList'
import { dummySkills } from '../../dummyData/dummyData'


function Skills({ data }) {
  return (
    <section id='skills' className={classes['container']}>
        <h1>Skills</h1>
        <SkillList dataSkills={dummySkills}/>
    </section>
  )
}

export default Skills