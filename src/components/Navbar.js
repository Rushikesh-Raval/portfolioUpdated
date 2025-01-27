import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="scroll-navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Rushikesh Raval</h1>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#work">Work Journey</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
