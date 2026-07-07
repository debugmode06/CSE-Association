import React, { useState } from 'react';
import '../../styles/contact/contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const info = [
    { icon: '📍', label: 'Location', value: 'CSE Block, Main Campus' },
    { icon: '📧', label: 'Email', value: 'cseassociation@college.edu' },
    { icon: '📱', label: 'Phone', value: '+91 98765 43210' },
    { icon: '🕐', label: 'Office Hours', value: 'Mon – Fri, 10AM – 4PM' },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Have a question, collaboration idea, or just want to say hello? We would love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Reach Us</h3>
            <div className="info-list">
              {info.map((i) => (
                <div className="info-item" key={i.label}>
                  <span className="info-icon">{i.icon}</span>
                  <div>
                    <p className="info-label">{i.label}</p>
                    <p className="info-value">{i.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-socials">
              <a href="#" className="social-pill">Instagram</a>
              <a href="#" className="social-pill">LinkedIn</a>
              <a href="#" className="social-pill">GitHub</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            {sent && <div className="success-msg">Message sent successfully!</div>}
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={form.name} onChange={handle} placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handle} placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" value={form.subject} onChange={handle} placeholder="What is this about?" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handle} placeholder="Write your message..." rows={5} required />
            </div>
            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
