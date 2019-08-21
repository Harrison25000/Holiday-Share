import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'
  };


  return (
    <div className="Nav">
      <nav>
        <h3 className="nav-logo">Logo</h3>
        <ul className="nav-links">
          <Link style={navStyle} to='/about_page'>
          <li className='nav-about'> About </li>
          </Link>
          <Link style={navStyle} to='profile_page'>
          <li className='nav-profile'> Profile </li>
          </Link>
          <Link style={navStyle} to='/'>
          <li className='nav-home'> Home </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
