import React from 'react';
import '../../../styles/common/header/header.css';

const Header = () => {
  return (
    <nav className="header-navbar">
      <div className="header-logo">
        CSE Association
      </div>
      <ul className="header-nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#clubs">Clubs</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li className="active"><a href="#events">Events</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="header-actions">
        <button className="join-btn">Join Us</button>
      </div>
    </nav>
  );
};

export default Header;
