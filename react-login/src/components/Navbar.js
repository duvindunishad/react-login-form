// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
