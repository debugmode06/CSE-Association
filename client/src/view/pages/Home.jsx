import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { clubsData } from '../../data/clubs';
import '../styles/pages/home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="home-hero" id="home">
        <h1 className="home-title">Welcome to the CSE Association</h1>
        <p className="home-subtitle">
          Empowering the next generation of technologists through collaboration, innovation, and community.
        </p>
      </section>

      {/* Clubs Section */}
      <section className="home-section" id="clubs">
        <div className="section-header-wrapper">
          <div className="section-header-left">
            <h2 className="section-title">Specialized Communities</h2>
            <p className="section-subtitle">
              Join a niche that matches your technical passion.
            </p>
          </div>
          <Link to="#" className="view-all-link">
            View All Clubs <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="clubs-grid">
          {clubsData.map((club) => {
            const Icon = club.icon;
            return (
              <Link to={`/club-details/${club.id}`} key={club.id} className="club-card block group">
                <div className="club-card-image-wrap">
                  <div className="club-card-img-container">
                    <img 
                      src={club.image} 
                      alt={club.title} 
                      className="club-card-image"
                    />
                  </div>
                  <div className="club-card-icon-box">
                    <Icon className="club-card-icon" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="club-card-content">
                  <span className="club-card-badge">{club.badge}</span>
                  <h3 className="club-card-title">{club.title}</h3>
                  <p className="club-card-desc">
                    {club.description}
                  </p>
                  <span className="club-card-link">
                    {club.linkText}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
