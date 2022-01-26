import React from 'react';
import {NavLink } from 'react-router-dom';

const Nav=()=>{
  return(
      <div className='navContainer'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Shoes</NavLink>
        <NavLink to='/news'>News</NavLink>
        <NavLink to='/contact'>Sign In</NavLink>
      </div>
  ) 
}

export default Nav;
