import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Calendar, Trophy, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { SonicWaveformHero } from '@/components/ui/sonic-waveform';
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

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.5,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <main className="home-root">

      {/* ── HERO ───────────────────────────────────────── */}
      <section id="home" className="w-full h-[600px] sm:h-[800px] relative bg-black overflow-hidden font-sans border-b border-white/10">
        <SonicWaveformHero>
          <div className="flex flex-col items-center justify-start w-full h-full text-center px-4 pt-16 md:pt-24 relative z-10 pointer-events-none">
            
            {/* Badge */}
            <motion.span
              custom={0} variants={fadeUpVariants} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm"
            >
              CSE Association
            </motion.span>

            {/* Title */}
            <motion.h1
              custom={1} variants={fadeUpVariants} initial="hidden" animate="visible"
              className="text-5xl md:text-7xl lg:text-[100px] leading-none mb-6 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl"
            >
              Empowering<br />CSE Innovators.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2} variants={fadeUpVariants} initial="hidden" animate="visible"
              className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 font-medium"
            >
              A community of passionate Computer Science students dedicated to learning, leadership, and launching the future of tech.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3} variants={fadeUpVariants} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
            >
              <button 
                onClick={() => scrollTo('leadership')}
                className="px-8 py-4 font-bold transition-transform hover:scale-105 active:scale-95 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
              >
                Meet the Team <ArrowRight size={18} />
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); scrollTo('clubs'); }}
                className="px-8 py-4 font-bold transition-transform hover:scale-105 active:scale-95 bg-transparent text-white border border-white/20 rounded-full hover:bg-white/10 flex items-center justify-center"
              >
                Explore Clubs
              </button>
            </motion.div>
          </div>
        </SonicWaveformHero>

        <button
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-white transition-colors scroll-cue"
          onClick={() => scrollTo('about')}
          aria-label="Scroll to About"
          style={{ background: 'transparent' }}
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
