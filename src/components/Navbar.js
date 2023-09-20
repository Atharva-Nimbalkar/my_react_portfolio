import React from 'react';
import Navitem from './Navitem';

const Navbar = () => {
  return (
    <>
    <nav>
    <ul>
      <Navitem item="Home" to="/" />
      <Navitem item="About" to="/About"></Navitem>
      <Navitem item="Skills" to="/Skills"></Navitem>
      <Navitem item="Education" to="Education"></Navitem>
      <Navitem item="Contact" to="Contact"></Navitem>
    </ul>
    </nav>
    </>
  );
};

export default Navbar;
