import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/club/clubs.css';

const clubs = [
  {
    id: 'events-outreach',
    name: 'Events & Outreach',
    badge: 'COMMUNITY',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    desc: 'Organizing flagship events, outreach programs, and mixers that build a strong student community.',
    linkText: 'View Events',
    category: 'Community',
  },
  {
    id: 'technical-activities',
    name: 'Technical Activities',
    badge: 'TECHNICAL',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    desc: 'Hackathons, coding competitions, seminars, and hands-on workshops to sharpen your tech skills.',
    linkText: 'Explore Activities',
    category: 'Technical',
  },
  {
    id: 'administration-finance',
    name: 'Administration & Finance',
    badge: 'OPERATIONS',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    desc: 'Managing association resources, budgeting, scheduling, and logistical operations.',
    linkText: 'Learn More',
    category: 'Operations',
  },
  {
    id: 'media-communications',
    name: 'Media & Communication',
    badge: 'MEDIA',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    desc: 'Social media presence, content creation, photography, and public relations for the association.',
    linkText: 'View Gallery',
    category: 'Media',
  },
  {
    id: 'professional-development',
    name: 'Professional Development',
    badge: 'CAREER',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    desc: 'Resume building, interview prep, and industry networking sessions to launch your tech career.',
    linkText: 'See Opportunities',
    category: 'Career',
  },
  {
    id: 'entrepreneurship-clubs',
    name: 'Entrepreneurship & Clubs',
    badge: 'INNOVATION',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    desc: 'Incubating startup ideas, pitch competitions, and learning to build successful products.',
    linkText: 'Join the Hub',
    category: 'Innovation',
  },
];

const categories = ['All', 'Community', 'Technical', 'Operations', 'Media', 'Career', 'Innovation'];

const Clubs = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? clubs : clubs.filter((c) => c.category === active);

  return (
    <section className="clubs-section" id="clubs">
      <div className="clubs-container">

        {/* Header */}
        <div className="clubs-header">
          <div className="clubs-header-left">
            <h2 className="clubs-title">Specialized Communities</h2>
            <p className="clubs-subtitle">Join a niche that matches your technical passion.</p>
          </div>
          <Link to="#" className="clubs-view-all">
            View All Clubs <span className="clubs-arrow">→</span>
          </Link>
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
              <Link to={`/club-details/${club.id}`} className="club-card" key={club.id}>

                {/* Banner image */}
                <div className="club-img-wrap">
                  <img src={club.image} alt={club.name} className="club-img" />
                </div>

                {/* Card body */}
                <div className="club-body">
                  <span className="club-badge">{club.badge}</span>
                  <h3 className="club-name">{club.name}</h3>
                  <p className="club-desc">{club.desc}</p>
                  <span className="club-link">{club.linkText}</span>
                </div>

              </Link>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Clubs;
