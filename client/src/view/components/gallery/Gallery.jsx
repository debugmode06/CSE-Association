import React, { useState } from 'react';
import '../../styles/gallery/gallery.css';

const galleryItems = [
  {
    id: 1,
    label: 'CSE Hackathon 2024',
    category: 'Hackathons',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80',
    size: 'large',
  },
  {
    id: 2,
    label: 'IoT Workshop',
    category: 'Workshops',
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80',
    size: 'small',
  },
  {
    id: 3,
    label: 'Tech Fest Winners',
    category: 'Cultural',
    img: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=500&q=80',
    size: 'small',
  },
  {
    id: 4,
    label: 'AI Seminar',
    category: 'Workshops',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80',
    size: 'small',
  },
  {
    id: 5,
    label: 'Annual Day 2024',
    category: 'Cultural',
    img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
    size: 'small',
  },
  {
    id: 6,
    label: 'Web Dev Bootcamp',
    category: 'Workshops',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    size: 'small',
  },
];

const categories = ['All', 'Workshops', 'Hackathons', 'Cultural'];

const Gallery = () => {
  const [active, setActive] = useState('All');
  const filtered =
    active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">

        {/* Header */}
        <div className="gallery-header">
          <h2 className="gallery-title">Moments We Cherish</h2>
          <p className="gallery-subtitle">
            A glimpse into the events, workshops, and celebrations that define our community.
          </p>
        </div>

        {/* Filters */}
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={'gal-filter-btn' + (active === cat ? ' gal-filter-active' : '')}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className={'gallery-item' + (item.size === 'large' ? ' gallery-large' : '')}
            >
              <img src={item.img} alt={item.label} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-cat-tag">{item.category}</span>
                <span className="gallery-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
