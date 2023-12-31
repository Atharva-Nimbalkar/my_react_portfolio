import React from 'react'
// import Social from '../components/Social'
export default function Contact() {
  const emailAddress="atharva2753@gmail.com";

const handleEmailButtonClick=()=>{
  window.location.href = `mailto:${emailAddress}`
}
// "react-typing-effect": "^2.0.5",
  return (
    <>
        <div className='rightSideCon contact'>
          <h2>Contact Me</h2>
          <div>
          <p>My inbox is always open. Whether you have a question, a project proposal, or you're interested in collaborating, I'm here to listen and assist.<br/>So, whether it's a query, a project, a collaboration, or you simply want to say hello, I will try my best to get back to you promptly. I'm looking forward to connecting with you!"</p>
          <button className='Ebtn' onClick={handleEmailButtonClick}>Say Hello</button>
          </div>
          
        </div>
    </>
  )
}
