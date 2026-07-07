import React from 'react';
import '../../styles/about/about.css';

const About = () => {
  const values = [
    { icon: '🚀', title: 'Innovation', desc: 'We foster a culture of creativity and technological innovation among CSE students.' },
    { icon: '🤝', title: 'Collaboration', desc: 'We believe in the power of teamwork and peer learning to achieve greater heights.' },
    { icon: '📚', title: 'Learning', desc: 'Continuous learning through workshops, seminars, and hands-on project experience.' },
    { icon: '🏆', title: 'Excellence', desc: 'We push each other to excel in academics, competitions, and professional growth.' },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <span className="section-eyebrow">Who We Are</span>
          <h2 className="about-title">About CSE Association</h2>
          <p className="about-subtitle">
            The CSE Association is the official student body of the Computer Science &amp; Engineering
            Department — a hub for innovation, leadership, and community building since its founding.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-story">
            <h3>Our Story</h3>
            <p>
              Founded by a group of passionate students who wanted to bridge the gap between
              classroom theory and real-world application, the CSE Association has grown into a
              thriving community of over 500 members.
            </p>
            <p>
              From organizing national-level hackathons to hosting industry experts, we create
              opportunities that prepare our members for the challenges of tomorrow's tech landscape.
            </p>
            <div className="about-milestones">
              <div className="milestone">
                <span className="milestone-year">2018</span>
                <span className="milestone-text">Association Founded</span>
              </div>
              <div className="milestone">
                <span className="milestone-year">2020</span>
                <span className="milestone-text">First National Hackathon</span>
              </div>
              <div className="milestone">
                <span className="milestone-year">2023</span>
                <span className="milestone-text">500+ Active Members</span>
              </div>
            </div>
          </div>

          <div className="about-values">
            <h3>Our Core Values</h3>
            <div className="values-grid">
              {values.map((v) => (
                <div className="value-card" key={v.title}>
                  <span className="value-icon">{v.icon}</span>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
