import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './view/components/common/header/Header';
import Footer from './view/components/common/footer/Footer';
import Home from './view/components/home/home';
import About from './view/components/about/About';
import Clubs from './view/components/club/Clubs';
import Gallery from './view/components/gallery/Gallery';
import Team from './view/components/team/Team';
import Contact from './view/components/contact/Contact';
import ClubDetails from './view/pages/ClubDetails';
import './App.css';

const LandingPage = () => (
  <>
    <Home />
    <About />
    <Clubs />
    <Gallery />
    <Team />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/club-details/:id" element={<ClubDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
