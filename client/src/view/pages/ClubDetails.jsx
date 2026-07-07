import React from 'react';
import { useParams } from 'react-router-dom';
import { Search, Calendar, MapPin, Clock, ArrowRight, Play, Download, BookOpen, Image as ImageIcon, Share2 } from 'lucide-react';
import { clubsData } from '../../data/clubs';
import '../styles/pages/clubDetails.css';

const ClubDetails = () => {
  const { id } = useParams();
  
  // Find the club data based on URL parameter
  const club = clubsData.find(c => c.id === id) || clubsData[0]; // fallback to first club if not found

  if (!club) {
    return <div>Club not found</div>;
  }

  return (
    <div className="cd-page-container">
      
      {/* Hero Section */}
      <section 
        className="cd-hero-section" 
        style={{ 
          backgroundImage: `url(${club.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%'
        }}
      >
        <div className="cd-hero-overlay"></div>
        
        <div className="cd-hero-content">
          <h1 className="cd-hero-title">
            {club.title}
          </h1>
          <p className="cd-hero-subtitle">
            {club.fullDescription || club.description}
          </p>
          
          <div className="cd-search-container">
            <div className="cd-search-wrapper">
              <div className="cd-search-icon-wrapper">
                <Search className="cd-search-icon" />
              </div>
              <input 
                type="text" 
                className="cd-search-input" 
                placeholder="Search events..." 
              />
            </div>
            
            <div className="cd-filter-buttons">
              <button className="cd-btn-primary">
                All Events
              </button>
              <button className="cd-btn-secondary">
                Hackathons
              </button>
              <button className="cd-btn-secondary">
                Workshops
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="cd-main-grid">
        
        {/* Left Column: Calendar UI */}
        <div className="cd-calendar-card">
          <div className="cd-calendar-inner">
            <div className="cd-calendar-header">
              <div>
                <h2 className="cd-calendar-title">{club.calendarSummary}</h2>
                <p className="cd-calendar-subtitle">{club.calendarSubtitle}</p>
              </div>
              <div className="cd-calendar-nav">
                <button className="cd-calendar-nav-btn">
                  <ArrowRight className="cd-calendar-nav-icon prev" />
                </button>
                <button className="cd-calendar-nav-btn">
                  <ArrowRight className="cd-calendar-nav-icon" />
                </button>
              </div>
            </div>

            <div className="cd-calendar-grid">
              {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                <div key={day} className="cd-calendar-day-header">
                  {day}
                </div>
              ))}
              
              {/* Calendar Grid (Mockup Data) */}
              {[...Array(35)].map((_, i) => {
                const day = i - 1; // Start from Tuesday
                const isCurrentMonth = day > 0 && day <= 31;
                
                // See if we have an event on this day
                const dayEvents = (club.featuredEvents || []).filter(e => parseInt(e.day) === day);
                
                return (
                  <div key={i} className={`cd-calendar-cell ${isCurrentMonth ? 'current-month' : 'other-month'}`}>
                    <span className={`cd-calendar-date ${dayEvents.length > 0 ? 'active' : ''}`}>
                      {isCurrentMonth ? day : ''}
                    </span>
                    
                    {/* Event indicators */}
                    {dayEvents.length > 0 && dayEvents.length < 2 && (
                       <div className={`cd-event-pill ${dayEvents[0].tagColor}`}>
                         {dayEvents[0].title}
                       </div>
                    )}
                    {dayEvents.length >= 2 && (
                       <div className="cd-event-stack">
                         {dayEvents.map((e, idx) => (
                            <div key={idx} className={`cd-event-pill ${e.tagColor}`}>
                              {e.title}
                            </div>
                         ))}
                       </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Featured Events & Newsletter */}
        <div className="cd-sidebar">
          
          {/* Featured Events Card */}
          <div className="cd-featured-card">
            <div className="cd-featured-header">
              <Calendar className="cd-featured-icon" />
              <h2 className="cd-featured-title">Featured Events</h2>
            </div>
            
            <div className="cd-featured-list">
              {club.featuredEvents && club.featuredEvents.length > 0 ? (
                club.featuredEvents.map((event, idx) => (
                  <div key={event.id} className={`cd-featured-item ${idx !== club.featuredEvents.length - 1 ? 'bordered' : ''}`}>
                    <div className="cd-featured-item-flex">
                      <div className="cd-featured-date-box">
                        <span className="cd-featured-date-month">{event.month}</span>
                        <span className="cd-featured-date-day">{event.day}</span>
                      </div>
                      <div>
                        <span className={`cd-featured-tag ${event.tagColor}`}>
                          {event.tag}
                        </span>
                        <h3 className="cd-featured-item-title">{event.title}</h3>
                        <p className="cd-featured-item-desc">{event.desc}</p>
                      </div>
                    </div>
                    <div className="cd-featured-details">
                      <div className="cd-featured-location">
                        {event.location.includes('PM') || event.location.includes('AM') || event.time ? (
                          <Clock className="cd-featured-location-icon" />
                        ) : (
                          <MapPin className="cd-featured-location-icon" />
                        )}
                        <span>{event.location} - {event.time}</span>
                      </div>
                      <button className="cd-btn-register">
                        Register Now
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-slate-500">
                  No upcoming events scheduled.
                </div>
              )}
            </div>
            
            {club.featuredEvents && club.featuredEvents.length > 0 && (
              <div className="cd-featured-footer">
                <a href="#" className="cd-featured-link">
                  View All Upcoming Events
                </a>
              </div>
            )}
          </div>

          {/* Newsletter Card */}
          <div className="cd-newsletter-card">
            <div className="cd-newsletter-blob"></div>
            <h3 className="cd-newsletter-title">Never Miss a Pulse</h3>
            <p className="cd-newsletter-desc">Get event notifications and research opportunities straight to your inbox.</p>
            <div className="cd-newsletter-form">
              <input type="email" placeholder="Email address" className="cd-newsletter-input" />
              <button className="cd-newsletter-submit">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Event Archive Section */}
      <section className="cd-archive-section">
        <div className="cd-archive-header">
          <div>
            <h2 className="cd-archive-title">Event Archive</h2>
            <p className="cd-archive-desc">Relive the highlights and access workshop materials.</p>
          </div>
          <a href="#" className="cd-archive-link">
            Full Archive <ArrowRight className="cd-archive-link-icon" />
          </a>
        </div>

        <div className="cd-archive-grid">
          {club.archives && club.archives.length > 0 ? (
            club.archives.map(archive => (
              <div key={archive.id} className="cd-archive-card">
                <div className="cd-archive-img-wrapper">
                  <img src={archive.img} alt={archive.title} className="cd-archive-img" />
                  <div className={`cd-archive-badge ${archive.badgeColor}`}>
                    {archive.badge}
                  </div>
                </div>
                <div className="cd-archive-content">
                  <p className="cd-archive-date">{archive.date}</p>
                  <h3 className="cd-archive-item-title">{archive.title}</h3>
                  <p className="cd-archive-item-desc">{archive.desc}</p>
                  
                  <div className="cd-archive-actions">
                    <button className="cd-archive-btn-primary">
                      {archive.badge.includes('Recording') ? <Play className="cd-archive-btn-icon" /> : <ImageIcon className="cd-archive-btn-icon" />} 
                      {archive.badge.includes('Recording') ? 'Watch' : (archive.badge.includes('Slides') ? 'Read Slides' : 'Photos')}
                    </button>
                    <button className="cd-archive-btn-secondary">
                       {archive.badge.includes('Recording') ? <Download className="cd-archive-btn-icon" /> : <Share2 className="cd-archive-btn-icon" />}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-slate-500">
               No archived events available for this club yet.
            </div>
          )}
        </div>
        
        <div className="cd-archive-mobile-link">
           <a href="#">
            Full Archive <ArrowRight className="cd-archive-link-icon" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default ClubDetails;
