import React, { useState } from 'react';
import '../../styles/club/clubs.css';

const clubs = [
  {
    id: 1,
    name: 'CodeCraft Club',
    category: 'Development',
    emoji: '💻',
    color: '#3b82f6',
    bg: '#dbeafe',
    members: 120,
    desc: 'Build real-world apps, contribute to open source, and level up your coding skills with peers.',
  },
  {
    id: 2,
    name: 'AI & ML Society',
    category: 'Artificial Intelligence',
    emoji: '🤖',
    color: '#7c3aed',
    bg: '#ede9fe',
    members: 95,
    desc: 'Explore machine learning, deep learning, and data science through projects and competitions.',
  },
  {
    id: 3,
    name: 'CyberSec Guild',
    category: 'Security',
    emoji: '🔐',
    color: '#dc2626',
    bg: '#fee2e2',
    members: 70,
    desc: 'Ethical hacking, CTF challenges, and cybersecurity awareness — safeguard the digital world.',
  },
  {
    id: 4,
    name: 'Design Collective',
    category: 'UI/UX Design',
    emoji: '🎨',
    color: '#d97706',
    bg: '#fef3c7',
    members: 85,
    desc: 'Craft beautiful user experiences with design thinking, prototyping, and usability testing.',
  },
  {
    id: 5,
    name: 'Cloud & DevOps',
    category: 'Infrastructure',
    emoji: '☁️',
    color: '#059669',
    bg: '#d1fae5',
    members: 60,
    desc: 'Learn cloud platforms, CI/CD pipelines, containerization, and modern deployment practices.',
  },
  {
    id: 6,
    name: 'Competitive Coding',
    category: 'Algorithms',
    emoji: '🏅',
    color: '#ea580c',
    bg: '#ffedd5',
    members: 110,
    desc: 'Sharpen your problem-solving with DSA, competitive programming contests, and mock interviews.',
  },
];

const categories = ['All', 'Development', 'Artificial Intelligence', 'Security', 'UI/UX Design', 'Infrastructure', 'Algorithms'];

const Clubs = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? clubs : clubs.filter((c) => c.category === active);

  return (
    <section className="clubs-section" id="clubs">
      <div className="clubs-container">

        {/* Header */}
        <div className="clubs-header">
          <span className="section-eyebrow">Get Involved</span>
          <h2 className="clubs-title">Our Clubs</h2>
          <p className="clubs-subtitle">
            Find your passion. Join a club, build projects, compete, and connect with like-minded peers.
          </p>
        </div>

        {/* Filters */}
        <div className="clubs-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={'filter-btn' + (active === cat ? ' filter-active' : '')}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="clubs-grid">
          {filtered.map((club) => (
            <div className="club-card" key={club.id}>

              {/* Coloured top banner with emoji + member count */}
              <div className="club-icon-wrap" style={{ background: club.bg }}>
                <span className="club-emoji">{club.emoji}</span>
                <span className="club-members-badge" style={{ color: club.color, background: 'rgba(0,0,0,0.08)' }}>
                  {club.members} members
                </span>
              </div>

              {/* Body */}
              <div className="club-body">
                <span className="club-category" style={{ color: club.color }}>{club.category}</span>
                <h3 className="club-name">{club.name}</h3>
                <p className="club-desc">{club.desc}</p>
                <div className="club-footer">
                  <button className="club-join-btn" style={{ background: club.color }}>
                    Join Club
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clubs;
