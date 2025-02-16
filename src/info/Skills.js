import React from 'react'
import {FaBootstrap, FaCss3, FaDatabase, FaFlask, FaGit, FaGithub, FaJava, FaNodeJs, FaPython, FaReact} from 'react-icons/fa';
import {BiLogoJavascript,BiLogoMongodb} from 'react-icons/bi';
import {RiTeamFill, RiTeamLine} from 'react-icons/ri';
import { SiExpress, SiTailwindcss } from "react-icons/si";
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
            {/* <li><FaHtml5/><br/><span>C++</span></li> */}
            <li><FaCss3/><br/><span>HTML/CSS</span></li>
        </ul>
    </div>
    <div className='grid-child'>
        <ul>
          <h4>Framwork/Tehcnologies:</h4>
            <li><FaReact/><br/><span>React</span></li>
            <li><FaNodeJs/><br/><span>Node.js</span></li>
            <li><FaFlask/><br/><span>Flask</span></li>
            <li><SiExpress/><br/><span>Express.js</span></li>
            <li><FaBootstrap/><br/><span>Bootstrap</span></li>
            <li><SiTailwindcss/><br/><span>Tailwindcss</span></li>
          </ul>
    </div>
    <div className='grid-child'>
        <ul>
          <h4>Databases:</h4>
            <li><FaDatabase/><br/><span>SQL</span></li>
            <li><BiLogoMongodb/><br/><span>Mongodb</span></li>
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