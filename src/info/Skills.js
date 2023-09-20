import React from 'react'
import {FaBootstrap, FaCss3, FaDatabase, FaGit, FaGithub, FaHtml5, FaJava, FaPython, FaReact} from 'react-icons/fa';
import {BiLogoJavascript} from 'react-icons/bi';
import {RiTeamFill, RiTeamLine} from 'react-icons/ri';
function Skills() {
    // const myskills=['HTML','CSS','PYTHON','JS','JAVA];
    // const myskills=["Java"];

  return (
    <>
    <div className='rightSideCon skills grid-container'>
      {/* <div>
      <h5>My skills</h5>
      </div> */}
      <div className='grid-child'>
        <ul>
          <h4>Langauges:</h4>
            <li><BiLogoJavascript/><br/><span>JavaScript</span></li>
            <li><FaJava/><br/><span>Java</span></li>
            <li><FaPython/><br/><span>Python</span></li>
            <li><FaHtml5/><br/><span>HTML</span></li>
            <li><FaCss3/><br/><span>CSS</span></li>
        </ul>
    </div>
    <div className='grid-child'>
        <ul>
          <h4>Framwork/Tehcnologies:</h4>
            <li><FaReact/><br/><span>React</span></li>
            <li><FaBootstrap/><br/><span>Bootstrap</span></li>
          </ul>
    </div>
    <div className='grid-child'>
        <ul>
          <h4>Databases</h4>
            <li><FaDatabase/><br/><span>SQL</span></li>
          </ul>
    </div>
    <div className='grid-child'>
        <ul>
          <h4>Tools:</h4>
            <li><FaGit/><br/><span>Git</span></li>
            <li><FaGithub/><br/><span>Github</span></li>
            {/* <li><span>OS contibution</span></li> */}
          </ul>
    </div>
    <div className='grid-child'>
        <ul>
          <h4>Other:</h4>
            <li><RiTeamFill/><br/><span>Team Management</span></li>
            <li><RiTeamLine/><br/><span>OS contribution</span></li>
          </ul>
    </div>
    </div>
    </>
  )
}

export default Skills;