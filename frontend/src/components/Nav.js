import React from 'react';
import {NavLink } from 'react-router-dom';

const Nav=()=>{
  return(
      <div className='navContainer'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/news'>News</NavLink>
      </div>
  ) 
}

export default Nav;
