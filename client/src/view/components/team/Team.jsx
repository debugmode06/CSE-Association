import React from 'react';
import { Mail } from 'lucide-react';
import '../../styles/team/team.css';

const facultyAdvisors = [
  { id: 1, name: 'Dr. Alan Turing', role: 'Chief Coordinator', image: 'https://randomuser.me/api/portraits/men/52.jpg', email: 'alan.turing@college.edu' },
  { id: 2, name: 'Dr. Grace Hopper', role: 'Faculty Mentor', image: 'https://randomuser.me/api/portraits/women/44.jpg', email: 'grace.hopper@college.edu' },
];

const executiveBoardTop = [
  { id: 1, name: 'John Doe', role: 'President', image: 'https://randomuser.me/api/portraits/men/32.jpg', linkedin: '#', github: '#' },
  { id: 2, name: 'Jane Smith', role: 'Vice President', image: 'https://randomuser.me/api/portraits/women/68.jpg', linkedin: '#', github: '#' },
  { id: 3, name: 'Alex Chen', role: 'Treasurer', image: 'https://randomuser.me/api/portraits/men/76.jpg', linkedin: '#', github: '#' },
  { id: 4, name: 'Sarah Miller', role: 'Publicity Lead', image: 'https://randomuser.me/api/portraits/women/12.jpg', linkedin: '#', github: '#' },
];

const executiveBoardBottom = [
  { id: 5, name: 'Ravi Kumar', role: 'Technical Lead', image: 'https://randomuser.me/api/portraits/men/88.jpg', linkedin: '#', github: '#' },
  { id: 6, name: 'Priya Sharma', role: 'Event Coordinator', image: 'https://randomuser.me/api/portraits/women/90.jpg', linkedin: '#', github: '#' },
  { id: 7, name: 'Emily Watson', role: 'Design Lead', image: 'https://randomuser.me/api/portraits/women/26.jpg', linkedin: '#', github: '#' },
];

const Team = () => {
  return (
    <section className="leadership-section" id="leadership">
      <div className="section-header">
        <span className="section-eyebrow">Our People</span>
        <h2 className="section-title">Meet Our Leadership</h2>
        <p className="section-desc">
          Guided by experienced faculty and driven by passionate students,
          our leadership shapes the heart of CSE Association.
        </p>
      </div>

      {/* Faculty Advisors */}
      <div className="subsection">
        <h3 className="subsection-label">
          <span className="label-line" />
          Association Coordinators
          <span className="label-line" />
        </h3>
        <div className="faculty-grid">
          {facultyAdvisors.map((f) => (
            <div className="faculty-card" key={f.id}>
              <div className="faculty-img-ring">
                <img src={f.image} alt={f.name} className="faculty-img" />
              </div>
              <h4 className="member-name">{f.name}</h4>
              <p className="member-role faculty-role">{f.role}</p>
              <a href={'mailto:' + f.email} className="member-email">
                <Mail size={13} />
                <span>{f.email}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Student Executive Board */}
      <div className="subsection" id="executive-board">
        <h3 className="subsection-label">
          <span className="label-line" />
          Association Directors
          <span className="label-line" />
        </h3>
        
        <div className="exec-rows-container">
          {/* Top Row: 4 cards */}
          <div className="exec-grid-top">
            {executiveBoardTop.map((m) => (
              <div className="exec-card" key={m.id}>
                <div className="exec-img-wrap">
                  <img src={m.image} alt={m.name} className="exec-img" />
                  <div className="exec-overlay">
                    <a href={m.linkedin} className="exec-social-link" aria-label="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <circle cx="4" cy="4" r="2"/>
                        <rect x="2" y="9" width="4" height="12"/>
                      </svg>
                    </a>
                    <a href={m.github} className="exec-social-link" aria-label="GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="exec-info">
                  <h4 className="member-name">{m.name}</h4>
                  <p className="member-role exec-role">{m.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 cards */}
          <div className="exec-grid-bottom">
            {executiveBoardBottom.map((m) => (
              <div className="exec-card" key={m.id}>
                <div className="exec-img-wrap">
                  <img src={m.image} alt={m.name} className="exec-img" />
                  <div className="exec-overlay">
                    <a href={m.linkedin} className="exec-social-link" aria-label="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <circle cx="4" cy="4" r="2"/>
                        <rect x="2" y="9" width="4" height="12"/>
                      </svg>
                    </a>
                    <a href={m.github} className="exec-social-link" aria-label="GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="exec-info">
                  <h4 className="member-name">{m.name}</h4>
                  <p className="member-role exec-role">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
