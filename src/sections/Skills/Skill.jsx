import React from 'react'
import classes from './Skills.module.css'
import SkillList from '../../widgets/SkillList'
import { dummySkills } from '../../dummyData/dummyData'
import { useTheme } from '../../common/ThemeContext'


function Skills({ data }) {
  const { theme, toggleTheme} = useTheme();

    const colorIcon = theme === 'light' ? '#000000' : '#FFFFFF';


  return (
    <section id='skills' className={classes['container']}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={classes['skillList']}>
          <SkillList dataSkills={dummySkills} color={colorIcon}/>

        </div>
    </section>
  )
}

export default Skills