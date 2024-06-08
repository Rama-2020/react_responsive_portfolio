import React from 'react'
import check_icon from '../assets/icons/check_circle.svg'

function SkillList({dataSkills}) {
  return (
    <>
        {dataSkills.map((skill, index)=>(
            <div key={index}>
                <span>
                    <img src={check_icon} alt="Check" />
                    <p>
                        {skill}
                    </p>
                </span>
            </div>
        )
    )
    }
    </>
)
}

export default SkillList