import React from 'react'
import check_icon from '../assets/icons/check_circle.svg'

function SkillList({dataSkills}) {
  return (
    <div>
        {dataSkills.map((skill, index)=>(
            <div key={index}>
                <span>
                    <p>
                        {skill}
                    </p>
                    <img src={check_icon} alt="Check" />
                </span>
            </div>
        )
    )
    }
    </div>
)
}

export default SkillList