import React from 'react';
import '../styles/view.css';

const View = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to CSE Association</h1>
        <p>Empowering the next generation of software engineers and tech innovators.</p>
      </header>
      
      <main className="landing-main">
        <section className="features-section">
          <h2>What We Do</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Workshops</h3>
              <p>Learn new technologies and industry-standard tools.</p>
            </div>
            <div className="feature-card">
              <h3>Hackathons</h3>
              <p>Compete, build, and showcase your skills.</p>
            </div>
            <div className="feature-card">
              <h3>Networking</h3>
              <p>Connect with alumni and industry professionals.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} CSE Association. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default View;
