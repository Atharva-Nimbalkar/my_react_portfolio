import React from 'react';
import { NavLink } from 'react-router-dom';

const Navitem = ({ item, to }) => {
  return (
    <>
    <li>
      <NavLink to={to} activeClassName="active">{item}</NavLink>
    </li>
  </>
  );
};

export default Navitem;
