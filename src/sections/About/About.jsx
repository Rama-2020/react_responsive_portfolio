import classes from './About.module.css'
import aboutImg from '../../assets/images/RS.png'
import colorModeOn from '../../assets/icons/toggle_on.svg'
import colorModeOff from '../../assets/icons/toggle_off.svg'
import linkedinIcon from '../../assets/icons/LinkedIn.svg'
import githubIcon from '../../assets/icons/github-mark.svg'
import cvFile from '../../assets/data/cv.txt'

function About() {
  return <section id='about' className={classes['container']}>
    <div className={classes["colorMode"]}>
        <img 
            className={classes["aboutImage"]} 
            src={aboutImg} 
            alt="RS" 
        />
        <img 
            src={colorModeOn} 
            alt="Color Mode Icon" 
        />
        <h1>
            Ramiro
            <br />
            Scerra
        </h1>
        <h2>
            Full Stack Developer
        </h2>
        <span>
            <a href="https://linkedin.com" target='_blank'>
                <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
            <a href="https://github.com" target='_blank'>
                <img src={githubIcon} alt="Github Icon" width='18px' height='18px'/>
            </a>
        </span>
        <p>
        I am passionate about combining electronics with programming to push the boundaries of what's possible. Whether it's developing embedded systems, IoT devices, or full-stack web applications, I thrive on solving complex problems with creative solutions.
        </p>
        <a href={cvFile} download='Resume'>
            <button className={classes['resumeButton']}>
                Resume
            </button>
        </a>
    </div>
  </section>
}

export default About