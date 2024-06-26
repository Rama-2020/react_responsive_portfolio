import classes from './About.module.css'
import aboutImg from '../../assets/images/RS.png'
import colorModeOn from '../../assets/icons/light_mode.svg'
import colorModeOff from '../../assets/icons/dark_mode.svg'
import linkedinIconLight from '../../assets/icons/LinkedIn-light.svg'
import linkedinIconDark from '../../assets/icons/LinkedIn-dark.svg'
import githubIconLight from '../../assets/icons/github-mark-light.svg'
import githubIconDark from '../../assets/icons/github-mark-dark.svg'
import cvFile from '../../assets/data/cv.txt'
import { useTheme } from '../../common/ThemeContext'

function About() {
    const { theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? colorModeOn : colorModeOff;
    const linkedinIcon = theme === 'light' ? linkedinIconLight : linkedinIconDark;
    const githubIcon = theme === 'light' ? githubIconLight : githubIconDark;

  return (
  <section id='about' className={classes['container']}>
    <div className={classes["colorModeContainer"]}>
        <img 
            className={classes["aboutImage"]} 
            src={aboutImg} 
            alt="RS" 
        />
        <img 
            className={classes["colorMode"]}
            src={themeIcon} 
            alt="Color Mode Icon"
            onClick={toggleTheme}
        />
    </div>
    <div className={classes["info"]}>
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
                <img src={githubIcon} alt="Github Icon"/>
            </a>
        </span>
        <p className={classes["description"]}>
        I am passionate about combining electronics with programming to push the boundaries of what's possible. Whether it's developing embedded systems, IoT devices, or full-stack web applications, I thrive on solving complex problems with creative solutions.
        </p>
        <a href={cvFile} download='Resume'>
            <button className='resumeButton'>
                Resume
            </button>
        </a>
    </div>
  </section>
  );
}

export default About