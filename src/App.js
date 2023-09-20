import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './info/Home';
import About from './info/About';
import Mainheader from './components/Mainheader';
import Education from './info/Education';
import Skills from './info/Skills';
import Contact from './info/Contact';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Mainheader/> */}
        <Routes>
        <Route path="/" element={<Mainheader/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="education" element={<Education/>}/>
          <Route path="skills" element={<Skills/>}/> 
          <Route path="contact" element={<Contact/>}/>
        </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
