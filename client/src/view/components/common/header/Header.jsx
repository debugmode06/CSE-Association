import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/common/header/header.css';

const Header = () => {
  return (
    <nav className="header-navbar">
      <div className="header-logo">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>CSE Association</Link>
      </div>
      <ul className="header-nav-links">
        <li className="active"><Link to="/">Home</Link></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#clubs">Clubs</a></li>
        <li><a href="/#gallery">Gallery</a></li>
        <li><a href="/#team">Team</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
      <div className="header-actions">
        <button className="join-btn">Join Us</button>
      </div>
    </nav>
  );
};

export default Header;
