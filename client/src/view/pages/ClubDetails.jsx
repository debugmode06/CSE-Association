import React from 'react';
import { Search, Calendar, MapPin, Clock, ArrowRight, Play, Download, BookOpen, Image as ImageIcon, Share2 } from 'lucide-react';
import bannerImg from '../../assets/banner/Technical_activity.jpg';

const ClubDetails = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Hero Section */}
      <section 
        className="relative rounded-[2rem] overflow-hidden mb-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] bg-slate-900 border border-slate-100"
        style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center 25%' }}
      >
        {/* Subtle dark overlay to ensure white text is always readable regardless of the image content */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative p-8 md:p-12 lg:p-14 z-10 w-full lg:w-3/4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-white drop-shadow-md">
            Departmental Pulse
          </h1>
          <p className="text-base md:text-lg text-slate-100 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
            Sync with the latest hackathons, seminars, and networking mixers happening across the Computer Science Department.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative w-full sm:w-72 shadow-lg">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-4 py-2.5 text-sm bg-white/95 text-slate-900 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none backdrop-blur-sm" 
                placeholder="Search events..." 
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button className="px-5 py-2.5 bg-[#0066FF] hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors shadow-lg">
                All Events
              </button>
              <button className="px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white backdrop-blur-md rounded-full text-sm font-medium transition-colors border border-white/20 shadow-lg">
                Hackathons
              </button>
              <button className="px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white backdrop-blur-md rounded-full text-sm font-medium transition-colors border border-white/20 shadow-lg">
                Workshops
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        
        {/* Left Column: Calendar UI (Takes up 2/3 space on large screens) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">October 2024</h2>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mt-1">Academic Term: Fall 2024</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <ArrowRight className="h-5 w-5 text-slate-600 rotate-180" />
                </button>
                <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <ArrowRight className="h-5 w-5 text-slate-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden">
              {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                <div key={day} className="bg-slate-50 py-3 text-center text-xs font-semibold text-slate-500 tracking-wider">
                  {day}
                </div>
              ))}
              
              {/* Calendar Grid (Mockup Data) */}
              {[...Array(35)].map((_, i) => {
                const day = i - 1; // Start from Tuesday
                const isCurrentMonth = day > 0 && day <= 31;
                
                return (
                  <div key={i} className={`bg-white min-h-[100px] p-2 transition-colors hover:bg-slate-50 ${!isCurrentMonth ? 'text-slate-300' : 'text-slate-700'}`}>
                    <span className={`text-sm font-medium ${day === 15 ? 'bg-slate-900 text-white w-7 h-7 flex items-center justify-center rounded-full' : ''}`}>
                      {isCurrentMonth ? day : ''}
                    </span>
                    
                    {/* Event indicators */}
                    {day === 2 && (
                      <div className="mt-2 text-[10px] font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded truncate">
                        ML Workshop
                      </div>
                    )}
                    {day === 10 && (
                      <div className="mt-2 text-[10px] font-semibold bg-cyan-100 text-cyan-700 px-2 py-1 rounded truncate">
                        Career Talk
                      </div>
                    )}
                    {day === 15 && (
                      <div className="mt-1 flex flex-col gap-1">
                        <div className="text-[10px] font-semibold bg-slate-900 text-white px-2 py-1 rounded truncate">
                          Hack-A-Thon 2024
                        </div>
                        <div className="text-[10px] font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded truncate">
                          Social Mixer
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Featured Events & Newsletter */}
        <div className="flex flex-col gap-6">
          
          {/* Featured Events Card */}
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900">Featured Events</h2>
            </div>
            
            <div className="flex flex-col gap-6">
              {/* Event 1 */}
              <div className="group border-b border-slate-100 pb-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center justify-center bg-blue-50 text-blue-700 rounded-xl w-14 h-14 shrink-0 font-bold">
                    <span className="text-xs uppercase">Oct</span>
                    <span className="text-xl leading-none">15</span>
                  </div>
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded mb-1">
                      Hackathon
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Autumn Hack-A-Thon</h3>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2">Building solutions for local sustainability challenges.</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Main Engineering Atrium</span>
                  </div>
                  <button className="w-full mt-2 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors text-sm">
                    Register Now
                  </button>
                </div>
              </div>

              {/* Event 2 */}
              <div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center justify-center bg-blue-50 text-blue-700 rounded-xl w-14 h-14 shrink-0 font-bold">
                    <span className="text-xs uppercase">Oct</span>
                    <span className="text-xl leading-none">22</span>
                  </div>
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded mb-1">
                      Seminar
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Quantum Ethics Seminar</h3>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2">Dr. Sarah Chen discusses the future of computing.</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <Clock className="h-3.5 w-3.5" />
                    <span>04:00 PM - 06:00 PM</span>
                  </div>
                  <button className="w-full mt-2 py-2.5 bg-white hover:bg-slate-50 text-blue-600 border border-blue-200 rounded-lg font-medium transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                View All Upcoming Events
              </a>
            </div>
          </div>

          {/* Newsletter Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            <h3 className="text-xl font-bold mb-2 relative z-10">Never Miss a Pulse</h3>
            <p className="text-sm text-slate-300 mb-5 relative z-10">Get event notifications and research opportunities straight to your inbox.</p>
            <div className="flex relative z-10">
              <input type="email" placeholder="Email address" className="w-full bg-slate-800 text-white border-0 rounded-l-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg font-medium text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Event Archive Section */}
      <section className="mb-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Event Archive</h2>
            <p className="text-slate-500 text-lg">Relive the highlights and access workshop materials.</p>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            Full Archive <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Archive Card 1 */}
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden bg-slate-100">
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800" alt="Summer Code Camp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                Recording Available
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold text-slate-400 mb-2">September 12, 2024</p>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Summer Code Camp Highlights</h3>
              <p className="text-sm text-slate-600 mb-6 line-clamp-2">A recap of the intensive 2-week development camp for freshmen.</p>
              
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 py-2.5 rounded-xl font-semibold text-sm transition-colors">
                  <Play className="h-4 w-4" /> Watch
                </button>
                <button className="p-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl transition-colors">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Archive Card 2 */}
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden bg-slate-100">
              <img src="https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?auto=format&fit=crop&q=80&w=800" alt="AI Ethics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-3 left-3 bg-cyan-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                Slides
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold text-slate-400 mb-2">August 05, 2024</p>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">AI Ethics in Modern Software</h3>
              <p className="text-sm text-slate-600 mb-6 line-clamp-2">Guest lecture by Silicon Valley industry leaders on ethical AI integration.</p>
              
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 py-2.5 rounded-xl font-semibold text-sm transition-colors">
                  <BookOpen className="h-4 w-4" /> Read Slides
                </button>
                <button className="p-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Archive Card 3 */}
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden bg-slate-100">
              <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800" alt="Networking Mixer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                Gallery
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold text-slate-400 mb-2">July 28, 2024</p>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Annual CSE Networking Mixer</h3>
              <p className="text-sm text-slate-600 mb-6 line-clamp-2">Over 200 members connected with alumni and industry partners.</p>
              
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 py-2.5 rounded-xl font-semibold text-sm transition-colors">
                  <ImageIcon className="h-4 w-4" /> Photos
                </button>
                <button className="p-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
        
        <div className="mt-8 text-center sm:hidden">
           <a href="#" className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            Full Archive <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default ClubDetails;
