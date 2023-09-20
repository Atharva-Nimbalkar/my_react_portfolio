import React from 'react'
import pic from '../img/gitImg.png';
import ReactTypingEffect from 'react-typing-effect';
function Home() {
  return (
    <>
    <div className='rightSideCon home'>
        <img src={pic} className='pic' alt='profileImage'/>
        <ReactTypingEffect className='typingeffect' text={['I am atharva nimbalkar,I am web developer']}  speed={400} eraseDelay={300}/>
    </div>
    </>
  )
}

export default Home;