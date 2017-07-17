import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <NavLink exact to="/"> Home </NavLink>
    <NavLink exact to="/login"> Login </NavLink>
    <NavLink exact to="/register"> Register </NavLink>
  </div>
);

export default NavBar;
