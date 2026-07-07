import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../styles/common/header/header.css';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Clubs', id: 'clubs' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Team', id: 'leadership' },
  { label: 'Contact', id: 'contact' },
];

const Header = () => {
  const [active, setActive] = useState('home');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;

    const observers = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e, id) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollTo(id);
    }
  };

  return (
    <nav className="header-navbar">
      <div className="header-logo">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>CSE Association</Link>
      </div>
      <ul className="header-nav-links">
        {navLinks.map(({ label, id }) => (
          <li key={id} className={active === id && location.pathname === '/' ? 'active' : ''}>
            <a
              href={`/#${id}`}
              onClick={(e) => handleLinkClick(e, id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="header-actions">
        <button
          className="join-btn"
          onClick={(e) => {
            if (location.pathname === '/') {
              scrollTo('contact');
            } else {
              window.location.href = '/#contact';
            }
          }}
        >
          Join Us
        </button>
      </div>
    </nav>
  );
};

export default Header;
