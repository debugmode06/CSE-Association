import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Calendar, Trophy, ChevronDown } from 'lucide-react';
import '../../styles/home/home.css';

const stats = [
  { label: 'Active Members', value: 500, suffix: '+', icon: Users },
  { label: 'Events Held', value: 120, suffix: '+', icon: Calendar },
  { label: 'Awards Won', value: 35, suffix: '+', icon: Trophy },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let c = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      c += step;
      if (c >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(c);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count}{suffix}</>;
}

const Home = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="home-root">

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="hero-section" id="home">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        <div className={visible ? 'hero-content hero-visible' : 'hero-content'}>
          <span className="hero-badge">CSE Association</span>
          <h1 className="hero-title">
            Empowering <br />
            <span className="hero-gradient">CSE Innovators</span>
          </h1>
          <p className="hero-subtitle">
            A community of passionate Computer Science students dedicated to
            learning, leadership, and launching the future of tech.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('leadership')}>
              Meet the Team <ArrowRight size={18} />
            </button>
            <a
              href="#clubs"
              className="btn-ghost"
              onClick={(e) => { e.preventDefault(); scrollTo('clubs'); }}
            >
              Explore Clubs
            </a>
          </div>
        </div>

        <button
          className="scroll-cue"
          onClick={() => scrollTo('about')}
          aria-label="Scroll to About"
        >
          <ChevronDown size={22} />
        </button>
      </section>

      {/* ── STATS STRIP ────────────────────────────────── */}
      <section className="stats-strip">
        {stats.map(({ label, value, suffix, icon: Icon }) => (
          <div className="stat-item" key={label}>
            <div className="stat-icon"><Icon size={22} /></div>
            <div className="stat-number">
              <AnimatedCounter target={value} suffix={suffix} />
            </div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </section>

    </main>
  );
};

export default Home;
